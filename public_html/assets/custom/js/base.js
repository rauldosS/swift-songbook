$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active')
    })

    $("#sidebar").load("templates/base/sidebar.html")
    $("#toolbar").load("templates/base/toolbar.html")
    $("#mini-player").load("templates/base/mini-player.html")
    $("#contribution").load("templates/base/contribution.html")

    $('[data-toggle=tooltip]').tooltip({
        trigger : 'hover'
    })

    getLanguage()
    checkQueryParams()

    window.onload = function() {
        updateLanguage()

        $('#unpin-shortcuts').click(() => {
            $('#shortcuts').toggleClass('initial')
            $('#unpin-shortcuts').toggleClass('active')
        })

        loadCopy()
    }
})

const content =  $('#content')
const cipherWrapper = $('#cipher-wrapper')
const cipherContent = $('#cipher-content')
const toolbar = $('#toolbar')
const miniPlayer = $('#mini-player')

const homePath = 'base/home'

loadContent = (path, switchLanguage = false) => {
    content.load(`templates/${ switchLanguage ? language.code : '' }/${ path }.html`)

    setTimeout(() => {
        content.show()
    }, 500)
}

loadCopy = () => {
    $('[data-clipboard-text]').on('click', function() {
        textToCopy = $(this).attr('data-clipboard-text')

        const clipboard = new ClipboardJS('[data-clipboard-text]', {
            text: function() { return textToCopy }
        })
    
        clipboard.onClick(event)
        changeText($(this))
    })
}

checkQueryParams = () => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    })

    if (params.music === null && params.album === null) {
        loadContent(homePath, false)
    } else if (params.music != null) {
        try {
            musics[params.music]
            selectMusic(params.music)
            $('#toolbar').show()
        } catch (e) {
            loadContent(homePath, false)
        }
    } else if (params.album != null) {
        if (getAlbum(params.album) != undefined) {
            loadContent(`albuns/${ params.album }`, true)
            updateCurrentAlbum(params.album)
        } else {
            loadContent(homePath, false)
        }
    }
}

updateLanguage = () => {
    if (currentlySelectedAlbum !== undefined) loadContent(`albuns/${ currentlySelectedAlbum }`, true)

    $('#main-alert').text(language.mainAlert)

    $('#albuns .title').text(language.albuns.title)
    $('#albuns .hide').text(language.albuns.hide)

    $('#collapseSummary').html(language.summary)
    $('#whatsapp').text(language.whatsapp)

    $('#mostAccessed h4').text(language.mostAccessTitle)

    $('#contribution-info h4').text(language.contribution.title)
    $('#contribution-info .info-data').html(language.contribution.info)
    $('#qr-data h3').text(language.contribution.paymant.title)
    $('#qr-data p').text(language.contribution.paymant.info)
    $('#qr-data #copy-code').html(language.contribution.paymant.qrCode)
    $('#key-data p').html(language.contribution.paymant.pixKeyTitle)
    $('#copy-key').html(language.contribution.paymant.pixKey)

    $('#menu-actions .font-action-title').text(language.toolbar.fontActionTitle)
    $('#menu-actions .chords-action-title').text(language.toolbar.chordsActionTitle)
    $('#menu-actions .columns-action-title').text(language.toolbar.columnsActionTitle)

    $('#unpin-toolbar span').text(language.toolbar.unpinToolbar)
    $('#only-lyrics span').text(language.toolbar.onlyLyrics)
    $('#hide-lyrics span').text(language.toolbar.hideLyrics)
    $('#hide-progressions span').text(language.toolbar.hideProgressions)
    $('#hide-tabs span').text(language.toolbar.hideTabs)
    $('#hide-chords span').text(language.toolbar.hideChords)
    $('#hide-miniplayer span').text(language.toolbar.hideMiniplayer)
    $('#share-cipher span').text(language.toolbar.shareCipher)

    $('#shortcuts #btn-home span').text(language.shortcuts.btnHome)
    $('#shortcuts #dropdown-menu-languages').attr('data-bs-original-title', language.shortcuts.dropdownMenuLanguages)
    $('#shortcuts #instructions').attr('data-bs-original-title', language.shortcuts.instructions)
    $('#shortcuts #unpin-shortcuts').attr('data-bs-original-title', language.shortcuts.unpinShortcuts)
    $('#shortcuts #pt-BR').text(language.shortcuts.languages.ptBr)
    $('#shortcuts #en-US').text(language.shortcuts.languages.enUs)

    $('.list-unstyled .about').text(language.albuns.about)

    changeSidebarTitle()
}

resertToolbar = () => {
    $('#toolbar a').removeClass('active')
    $('.action-autoscroll').removeClass('autoscroll')
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
    
    element.html(`${ language.contribution.copy } <i class="fa-regular fa-circle-check ms-1"></i>`)

    setTimeout(function() {
        element.html(`${ text } <i class="fa-solid fa-key ms-2"></i>`)
    }, 1000);
}

updateCurrentAlbum = (album) => { currentlySelectedAlbum = album }
