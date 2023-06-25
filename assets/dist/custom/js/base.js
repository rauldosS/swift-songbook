$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active')
    })

    $("#home").load("templates/base/home.html")
    $("#sidebar").load("templates/base/sidebar.html")
    $("#toolbar").load("templates/base/toolbar.html")
    $("#mini-player").load("templates/base/mini-player.html")
    $("#author").load("templates/base/author.html")
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
            <h1 class="title">${ title }</h1>
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
    const cipherLyricsList = cipher_lyrics.split(divider)
    cipher_parts.forEach((part, index) => {
        cipher_lyrics_parts_html[part] = `
            <pre type="lyrics">
[${ part }]
            ${ replaceOddLines(cipherLyricsList[index]) }
            </pre>
        `
    })
}

replaceOddLines = (cipherLyricsList) => {
    const lines = cipherLyricsList.split('\n')

    for (let i = 0; i < lines.length; i++) {
        if (i % 2 === 1) {
            chords_music.forEach(chord => {
                lines[i] = lines[i].replaceAll(`${chord}`, `<b>${ chord }</b>`)
            })
        }
    }

    const cipherLyricsListUpdated = lines.join('\n')
    return cipherLyricsListUpdated
}

createChordColumns = () => {
    cipherContent.append(`
        <div id="cipher-columns">
            <pre type="lyrics">
                ${ replaceOddLines(cipher_lyrics.replaceAll(divider, '')) }
            </pre>
        </div>
    `)
}

selectMusic = (album, music) => {
    cipherContent.empty()

    hideContent()
    resertToolbar()
    cipherContent.hide()

    // APAGAR FEARLESS.HTML (depois)

    createAlbumCSS(album)
    createCipherJS(album, music)

    loadCipher()

    cipherContent.show()
    $('#toolbar').show()
    $('#mini-player').show()
}

loadCipher = () => {
    createCipherHeaderHTML()
    createChordsHTML()

    createProgressionHTML()
    createTabsHTML()
    createCipherLyricsHTML()

    parts_cipher.forEach(part => {
        switch (part.type) {
            case 'progression':
                complete_cipher.push(progressions_html[part.id])
                break;
            case 'tabs':
                complete_cipher.push(tabs_html[part.id])
                break;
            case 'cipher_lyrics':
                complete_cipher.push(cipher_lyrics_parts_html[part.id])
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
