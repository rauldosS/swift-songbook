$(document).ready(function () {
    $('#toolbar .dropdown-menu').on({
        "click":function(e) {
            e.stopPropagation()
        }
    })

    $('.closer').on('click', function () {
        $('.btn-group').removeClass('open')
    })

    // CHORDS

    $('.btn-action-chords').click(() => {
        $('#chords').toggleClass('d-flex')
        $('.btn-action-chords').toggleClass('active')
    })

    // FULL SCREEN

    $('.btn-action-full-screen').click(() => {
        if ($('.btn-action-full-screen').hasClass('active')) {
            $('#sidebar').show()
            $('#shortcuts').show()
            $('#wrapper').css({
                'position': 'fixed',
                'top': '10%',
                'bottom': '1%',
                'left': '0',
                'right': '0',
                'padding-right': 'var(--bs-gutter-x,.75rem)',
                'padding-left': 'var(--bs-gutter-x,.75rem)'
            })
            $('.content').css({
                'border-radius': '10px'
            })
            $('#page-content-wrapper').css({ 'width': 'calc(100% - 260px)' })
            $('#toolbar').css({ 'bottom': '-8px' })
        } else {
            $('#sidebar').hide()
            $('#shortcuts').hide()
            $('#wrapper').css({
                'position': 'fixed',
                'top': '0%',
                'bottom': '0',
                'left': '0',
                'right': '0',
                'padding-right': '0',
                'padding-left': '0',
            })
            $('.content').css({
                'padding': '1% 1% 2% 1%',
                'border-radius': '0'
            })
            $('#page-content-wrapper').css({ 'width': '100%' })
            $('#toolbar').css({ 'bottom': '0' })
        }

        $('#hide-albuns-toggle').toggleClass('d-none')
        $('.btn-action-full-screen').toggleClass('active')
    })

    // FONT

    $('.font-action-button.increase').click(() => {
        const currentFontSize = $('pre[type="lyrics"]').css('font-size').split('px')[0]
        if (currentFontSize >= 7) {
            $('.tabs, .progressions, pre[type="lyrics"]').css({ 'font-size': parseInt(currentFontSize) - 2 + 'px' })
        }
    })

    $('.font-action-button.decrease').click(() => {
        const currentFontSize = $('pre[type="lyrics"]').css('font-size').split('px')[0]
        if (currentFontSize <= 25) {
            $('.tabs, .progressions, pre[type="lyrics"]').css({ 'font-size': parseInt(currentFontSize) + 2 + 'px' })
        }
    })

    // COLUMNS

    $('.columns-action-button.increase').click(() => {
        str_columns = $('#cipher-columns pre').css('columns')
        columns = str_columns.includes('auto') ? parseInt(str_columns.split('auto ')[1]) : parseInt(str_columns)

        if (columns > 2) {
            $('#cipher').hide()
            $('.badge-info-cipher').hide()
            $('#cipher-columns pre').css('columns', (columns - 1).toString())
            $('#cipher-columns pre').css('column-count', (columns - 1).toString())
            $('#cipher-columns').show()
            scrollTop('#cipher-columns')
        } else {
            $('#cipher').show()
            $('.badge-info-cipher').show()
            $('#cipher-columns').hide()
        }
    })

    $('.columns-action-button.decrease').click(() => {
        str_columns = $('#cipher-columns pre').css('columns')
        columns = str_columns.includes('auto') ? parseInt(str_columns.split('auto ')[1]) : parseInt(str_columns)

        if (columns <= 5) {
            $('#cipher').hide()
            $('.badge-info-cipher').hide()
            $('#cipher-columns pre').css('columns', (columns + 1).toString())
            $('#cipher-columns pre').css('column-count', (columns + 1).toString())
            $('#cipher-columns').show()
            scrollTop('#cipher-columns')
        }
    })

    // Hide menu

    hide = (actionElement, targetElement, runScrollTop = false) => {
        if ($(actionElement).hasClass('active')) {
            $(targetElement).show()
        } else {
            $(targetElement).hide()
        }

        $(actionElement).toggleClass('active')

        if (runScrollTop === true) {
            scrollTop()
        }
    }

    show = (actionElement, targetElement) => {
        if ($(actionElement).hasClass('active')) {
            $(targetElement).show()
        } else {
            $(targetElement).hide()
        }
    }

    $('#unpin-toolbar').click(() => {
        $('#toolbar').toggleClass('initial')
        $('#unpin-toolbar').toggleClass('active')
    })

    $('#hide-lyrics').click(() => {hide('#hide-lyrics', 'pre[type="lyrics"]', true) })
    $('#hide-progressions').click(() => { hide('#hide-progressions', '.progressions', true) })
    $('#hide-tabs').click(() => { hide('#hide-tabs', '.tabs', true) })
    $('#hide-chords').click(() => { hide('#hide-chords', 'pre[type="lyrics"] b', true) })
    $('#hide-miniplayer, #close-miniplayer').click(() => { hide('#hide-miniplayer', '#mini-player') })
    $('#only-lyrics').click(() => {
        hide('#only-lyrics', '#cipher', true)
        show('#only-lyrics', '#lyrics')
    })
})
