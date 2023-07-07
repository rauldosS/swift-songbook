let cipher = undefined

selectMusic = (selectedMusicId) => {
    resetConfig()

    btnHome.css({ 'display': 'inline-block' })
    cipherWrapper.show()
    const music = musics[selectedMusicId]
    cipherContent.empty()

    hideContent()
    resertToolbar()
    cipherContent.hide()

    createAlbumCSS(music.album)
    createCipherJS(music.album, music.id)

    loadCipher(music.id, music.album)

    cipherContent.show()

    scrollTop()

    toolbar.show()
    miniPlayer.show()

    toolbar.show()
    miniPlayer.show()

    if ($(window).width() < 768 && $('#sidebar').width() > 250) {
        $('#sidebar').toggleClass('toggled')
    }
}

resetConfig = () => {
    progressionsHtml = {}
    tabsHtml = {}
    cipherLyricsPartsHtml = {}
    cipherLyricsColumnsPartsHtml = {}
    partsCipher = []
    completeCipher = []
    completeCipherColumns = []

    tabs = []

    basicCipher = false
}

hideContent = () => {
    $('#content').hide()
}

hideCipherWrapper = () => {
    cipherWrapper.hide()
    toolbar.hide()
    cipherContent.hide()
    miniPlayer.hide()
}

createAlbumCSS = (album) => {
    cipherContent.prepend(`<link href="assets/custom/css/albuns/${ album }.css" rel="stylesheet">`)
}

createCipherJS = (album, music) => {
    cipherContent.prepend(`<script src="assets/custom/js/albuns/${ album }/${ music }.js"></script>`)
}

createCipherCapoHTML = () => {
    if (capoFret) {
        if (language.code === 'pt-BR') {
            return capoFret ? language.cipher.capo[0] + capoFret + language.cipher.capo[1] : ''
        } else {
            return `Capo: <b>${ capoFret }` + (capoFret > 3 ? 'th' : language.cipher.capo[capoFret]) + '</b> fret'
        }
    } else {
        return ''
    }
}

createCipherHeaderHTML = (album) => {
    const capo = createCipherCapoHTML()
    cipherContent.append(
        `<div id="cipher-header" class="animate__animated animate__fadeIn">
            ${ basicCipher ? '<span class="badge bg-' + album + ' mb-3">' + language.cipher.basicCipher + '</span>' : '' } 
            <h1 class="title">${ musicTitle }</h1>
            <span class="cipher-tone">${ language.cipher.tuning }: <b>${ tuning }</b> ${ chordShape ? '(' + language.cipher.chordShape + ' ' + chordShape + ')' : '' }</span>
            <span class="song-capo">
                ${ capo }
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
    chordsMusic.forEach(chord => {
        cipherContent.find('#chords div').append(chordsHtml[chord])
    })
    ChordJS.replace()
}

createArrowsProgression = (baseProgression) => {
    return baseProgression.split(' ').map((progression) => {
        if (progression === 'D') return '<i class="fa-solid fa-arrow-down-long"></i> '
        if (progression === 'U') return '<i class="fa-solid fa-arrow-up-long"></i> '
        if (progression === 'block') return'<i class="fa-solid fa-ban strum"></i> '
        if (progression === '-') return `<span class="strum">${ progression }</span> `
        return progression
    }).join('')
}

createNotes = (notes) => {
    return notes.map((note) => {
        if (note === 'break') return `<br>| `
        if (note === '...') return `<b>...</b>`
        if (note.includes(',')) {
            return note.split(',').map((n, i, {length}) => `<b>${ n }</b> ${ i + 1 === length ? ' | ' : '' } `).join('')
        }
        return `<b>${ note }</b> | `
    }).join('')
}

getMultipleProgressionsTable = (notes, progressions, marginNotes) => {
    let notesHTML = ''
    let progressionsHTML = ''
    Array(notes.length).fill(0).map((_, i) => {
        notesHTML = notesHTML.concat(`<th class="color-album" scope="col">${ notes[i] }</th>`)
        progressionsHTML = progressionsHTML.concat(`<td>${ createArrowsProgression(progressions[i]) }</td>`)
    })

    return `<table class="table table-bordered progression-table ${ marginNotes ? '' : 'mb-0' }">
        <thead>
            <tr>
                <th class="bg-album text-white" scope="col">CHORD</th>
                ${ notesHTML }
            </tr>
        </thead>
        <tbody>
            <tr>
                <th class="bg-album text-white" scope="row">STRUM</th>
                ${ progressionsHTML }
            </tr>
        </tbody>
    </table>`   
}

createProgressionHTML = () => {
    progressions.forEach(progression => {
        // const multipleProgression = progression.notesMultipleProgression !== undefined
        const notes = progression.notes !== undefined ? createNotes(progression.notes) : ''
        const multipleProgressionTable = progression.notesMultipleProgression !== undefined ? getMultipleProgressionsTable(progression.notesMultipleProgression, progression.multipleProgression, progression.notes !== undefined) : ''
        const arrowProgression = progression.progression !== undefined ? createArrowsProgression(progression.progression) : ''

        progressionsHtml[progression.id] = `
            <div id="progression-${ progression.id }" class="bd-callout bd-callout-info text-black-50 fw-normal position-relative progressions">
                ${ multipleProgressionTable }
                <div class="d-flex justify-content-between ps-1 pe-1">
                    <div>
                        <div>${ notes ? '|' : '' } ${ notes }</div>
                        <div>
                            <div class="">${ progression.caption }</div>
                        </div>
                    </div>
                    <div class="d-flex align-items-center text-end">
                        <div class="fw-bold">${ arrowProgression }</div>
                    </div>
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

        tabsHtml[data.id] = callout
    })
}

createCipherLyricsHTML = () => {
    const cipherLyricsList = cipherLyrics.split(divider)

    cipherParts.forEach((part, index) => {
        cipherLyricsPartsHtml[part.id] = part.ignoreTitle ? `<pre type="lyrics">
            ${ cipherLyricsList[index] }
            </pre>` : `<pre type="lyrics">
<a
    onclick="scrollToElement('#progression-${ part.referenceProgression.id }')"
    data-toggle="tooltip"
    data-bs-placement="right"
    data-bs-html="true"
    title="Progression <i class='fa-solid fa-arrow-right-long ms-2 me-2'></i> ${ part.referenceProgression.title }"
    class="title-part-cipher"
>[${ part.title }]</a>
            ${ cipherLyricsList[index] }
            </pre>`

        cipherLyricsColumnsPartsHtml[part.id] = part.ignoreTitle ? `${ cipherLyricsList[index] }` : `
<a
    onclick="scrollToElement('#progression-${ part.referenceProgression.id }')"
    data-toggle="tooltip"
    data-bs-placement="right"
    data-bs-html="true"
    title="Progression <i class='fa-solid fa-arrow-right-long ms-2 me-2'></i> ${ part.referenceProgression.title }"
    class="title-part-cipher"
>[${ part.title }]</a>
            ${ cipherLyricsList[index] }`
    })
}

function replaceWholeChordsInLines() {
    const replacements_chords = chordsMusic.map(chord => {
        return { searchValue: chord, replaceValue: `<b>${ chord }</b>` }
    }).reverse()

    for (const replacement of replacements_chords) {
      const { searchValue, replaceValue } = replacement
      const regex = new RegExp(`\\b${searchValue}\\b`, 'g')
      cipherLyrics = cipherLyrics.replaceAll(regex, replaceValue)
    }

    return cipherLyrics
}

createChordColumns = () => {
    cipherContent.append(`<div id="cipher-columns" class="mt-3">
        <pre type="lyrics"></pre>
    </div>`)

    const cipherColumnsPre = $('#cipher-columns pre')

    completeCipherColumns.forEach(part => {
        cipherColumnsPre.append(`<div class="border-column pb-2 pt-2">${ part }</div>`)
    })
}

createLyrics = () => {
    cipherContent.append(`
        <div id="lyrics" class="mt-3">
            <pre type="only-lyrics">${ lyrics }</pre>
        </div>
    `)
}

updateShareLink = () => {
    $('#share-cipher').attr('data-clipboard-text', `https://taylorsongbook.com.br?music=${musicId}`)
}

loadCipher = (music, album) => {
    createCipherHeaderHTML(album)
    createChordsHTML()

    createProgressionHTML()
    createTabsHTML()

    replaceWholeChordsInLines()

    createCipherLyricsHTML()

    partsCipher.forEach(part => {
        switch (part.type) {
            case 'progression':
                completeCipher.push(progressionsHtml[part.id])
                break
            case 'tabs':
                completeCipher.push(tabsHtml[part.id])
                break
            case 'cipherLyrics':
                completeCipher.push(cipherLyricsPartsHtml[part.id])
                completeCipherColumns.push(cipherLyricsColumnsPartsHtml[part.id])
                break
            case 'alert':
                completeCipher.push(alerts_html[part.id])
                break
        }
    })

    cipherContent.append(`<div id="cipher"></div>`)
    cipher = $('#cipher')

    completeCipher.forEach(part => {
        cipher.append(part)
    })

    createChordColumns()
    createLyrics()
    updateShareLink()

    $('[data-toggle=tooltip]').tooltip({
        trigger : 'hover'
    })

    $('#mini-player iframe').attr('src', videoUrl)
}
