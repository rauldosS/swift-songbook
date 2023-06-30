$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active')
    })

    $("#home").load("templates/base/home.html")
    $("#sidebar").load("templates/base/sidebar.html")
    $("#toolbar").load("templates/base/toolbar.html")
    $("#mini-player").load("templates/base/mini-player.html")
    $("#contribution").load("templates/base/contribution.html")
    $("#author").load("templates/base/author.html")

    window.onload = function() {
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        })

        if (params.music !== null) {
            selectMusic(params.music)
            $('#toolbar').show()
        }

        $('[data-clipboard-text]').on('click', function() {
            textToCopy = $(this).attr('data-clipboard-text')
    
            const clipboard = new ClipboardJS('[data-clipboard-text]', {
                text: function() { return textToCopy }
            })
        
            clipboard.onClick(event)
            changeText($(this))
        })
    }
})

const cipherContent = $('#cipher-content')
let cipher = undefined

hideContent = () => {
    $('#home').hide()
    $('#toolbar').hide()
    $('#album').hide()
    $('#cipher-content').hide()
    $('#mini-player').hide()
    $('#author').hide()
    $('#shortcuts #btn-home').css({ 'display': 'inline-block' })
}

selectAlbum = (album) => {
    hideContent()
    $('#album').load(`templates/albuns/${album}/album.html`)

    $('#album').show()
}

createAlbumCSS = (album) => {
    cipherContent.prepend(`<link href="assets/dist/custom/css/albuns/${ album }.css" rel="stylesheet">`)
}

createCipherJS = (album, music) => {
    cipherContent.prepend(`<script src="assets/dist/custom/js/albuns/${ album }/${ music }.js"></script>`)
}

createCipherHeaderHTML = () => {
    cipherContent.append(
        `<div id="cipher-header" class="animate__animated animate__fadeIn">
            <h1 class="title">${ musicTitle }</h1>
            <span class="cipher-tone">Tuning: <b>${ tuning }</b> ${ chord_shape }</span>
            <span class="song-capo">
                Capo on the <b>3rd fret</b>
            </span>
            <iframe style="border-radius:12px" src="${ spotify }" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    `)
}

createChordsHTML = () => {
    cipherContent.append(
        `<div id="chords" class="bd-callout bd-callout-info text-black-50 fw-normal position-relative">
            <div>
            </div>
            <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-album">
                Chords
            </span>
        </div>`
    )
    chords_music.forEach(chord => {
        cipherContent.find('#chords div').append(chords_html[chord])
    })
    ChordJS.replace()
}

createProgressionHTML = () => {
    progressions.forEach(progression => {
        const notes = progression.notes.map((note) => ` <b>${ note }</b> |`).join('')

        progressions_html[progression.id] = `
            <div class="bd-callout bd-callout-info text-black-50 fw-normal position-relative progressions">
                <div class="d-flex justify-content-between">
                    <div>| ${ notes }</div>
                    <div class="fw-bold">${ progression.progression }</div>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="fw-bold">${ progression.caption }</div>
                    <div>1 a + e 2 a + e 3 a + e 4 a + e</div>
                </div>
                <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-album">${ progression.title }</span>
            </div>
        `
    })
}

createTabsHTML = () => {
    tabs.forEach(data => {
        let callout = '<div class="bd-callout bd-callout-info fw-normal position-relative tabs">'

        data.tabs.forEach(tab => {
            callout = callout.concat(`<div class="tab">${ tab }</div>`)
        })

        callout = callout.concat(
            `<span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-album">${ data.title }</span>`,
            '</div>'
        )

        tabs_html[data.id] = callout
    })
}

createCipherLyricsHTML = () => {
    const cipherLyricsList = cipherLyrics.split(divider)

    cipherParts.forEach((part, index) => {
        cipherLyricsPartsHtml[part.id] = part.ignoreTitle ? `
            <pre type="lyrics">
            ${ cipherLyricsList[index] }
            </pre>
        ` : `
            <pre type="lyrics">
[${ part.title }]
            ${ cipherLyricsList[index] }
            </pre>
        `
    })
}

function replaceWholeChordsInLines() {
    const replacements_chords = chords_music.map(chord => { 
        return { searchValue: chord, replaceValue: `<b>${ chord }</b>` }
    })

    for (const replacement of replacements_chords) {
      const { searchValue, replaceValue } = replacement
      const regex = new RegExp(`\\b${searchValue}\\b`, 'g')
      cipherLyrics = cipherLyrics.replaceAll(regex, replaceValue)
    }

    return cipherLyrics
}

createChordColumns = () => {
    const cipherLyricsList = cipherLyrics.split(divider)

    let cipherColumns = '<div id="cipher-columns" class="mt-3"><pre type="lyrics">'

    cipherParts.forEach((part, index) => {
        cipherColumns = cipherColumns.concat(
            part.ignoreTitle ? '' : `
[${ part.title }]
`,
            `${ cipherLyricsList[index] }`
        )
    })

    cipherColumns.concat(
        '</pre>',
        '</div>'
    )

    cipherContent.append(cipherColumns)
}

createLyrics = () => {
    cipherContent.append(`
        <div id="lyrics" class="mt-3">
            <pre type="only-lyrics">${ lyrics }</pre>
        </div>
    `)
}

selectMusic = (musicId) => {
    const music = musics[musicId]
    cipherContent.empty()

    hideContent()
    resertToolbar()
    cipherContent.hide()

    createAlbumCSS(music.album)
    createCipherJS(music.album, music.id)

    loadCipher()

    cipherContent.show()

    $('#toolbar').show()
    $('#mini-player').show()

    scrollTop()
}

updateShareLink = () => {
    $('#share-cipher').attr('data-clipboard-text', `https://taylorsongbook.com.br?music=${musicId}`)
}

loadCipher = () => {
    createCipherHeaderHTML()
    createChordsHTML()

    createProgressionHTML()
    createTabsHTML()

    replaceWholeChordsInLines()

    createCipherLyricsHTML()

    parts_cipher.forEach(part => {
        switch (part.type) {
            case 'progression':
                complete_cipher.push(progressions_html[part.id])
                break;
            case 'tabs':
                complete_cipher.push(tabs_html[part.id])
                break;
            case 'cipherLyrics':
                complete_cipher.push(cipherLyricsPartsHtml[part.id])
                break;
            case 'alert':
                complete_cipher.push(alerts_html[part.id])
                break;
            default:
                console.log('desconhecido')
        }
    })

    cipherContent.append('<div id="cipher"></div>')
    cipher = $('#cipher')

    complete_cipher.forEach(part => {
        cipher.append(part)
    })

    createChordColumns()
    createLyrics()
    updateShareLink()

    // Mini player

    $('#mini-player iframe').attr('src', videoUrl)
}

resertToolbar = () => {
    $('#toolbar a').removeClass('active')
    $('.action-autoscroll').removeClass('autoscroll')
}

displayAuthor = () => {
    hideContent()
    $('#author').load('templates/base/author.html')
    $('#author').show()
}

headShake = (el) => {
    el.classList.toggle('animate__animated')
    el.classList.toggle('animate__headShake')

    setTimeout(() => {
        el.classList.toggle('animate__animated')
        el.classList.toggle('animate__headShake')
    }, 1000)
}

changeText = (element) => {
    const text = element.text()
    
    element.html(`Copiado <i class="fa-regular fa-circle-check ms-1"></i>`)

    setTimeout(function() {
        element.html(`${ text } <i class="fa-solid fa-key ms-2"></i>`)
    }, 1000);
}