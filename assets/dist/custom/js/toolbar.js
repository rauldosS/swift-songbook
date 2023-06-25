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
            $('#wrapper').css({
                'position': 'fixed',
                'top': '10%',
                'bottom': '0',
                'left': '0',
                'right': '0'
            })
            $('#page-content-wrapper').css({ 'padding': '20px' })
            $('#toolbar').css({ 'bottom': '90px'})
        } else {
            $('#sidebar').hide()
            $('#wrapper').css({
                'position': 'fixed',
                'top': '0%',
                'bottom': '0',
                'left': '0',
                'right': '0',
                'padding': '0',
            })
            $('#page-content-wrapper').css({ 'padding': '0' })
            $('#toolbar').css({ 'bottom': '12px'})
        }
        
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
            $('#cipher-columns pre').css('columns', (columns - 1).toString())
            $('#cipher-columns pre').css('column-count', (columns - 1).toString())
            $('#cipher-columns').show()
        } else {
            $('#cipher').show()
            $('#cipher-columns').hide()
        }
    })

    $('.columns-action-button.decrease').click(() => {
        str_columns = $('#cipher-columns pre').css('columns')
        columns = str_columns.includes('auto') ? parseInt(str_columns.split('auto ')[1]) : parseInt(str_columns)

        if (columns <= 5) {
            $('#cipher').hide()
            $('#cipher-columns pre').css('columns', (columns + 1).toString())
            $('#cipher-columns pre').css('column-count', (columns + 1).toString())
            $('#cipher-columns').show()
        }
    })

    // Hide menu

    hide = (actionElement, targetElement) => {
        if ($(actionElement).hasClass('active')) {
            $(targetElement).show()
        } else {
            $(targetElement).hide()
        }

        $(actionElement).toggleClass('active')
    }

    $('#unpin-toolbar').click(() => {
        $('#toolbar').toggleClass('initial')
        $('#unpin-toolbar').toggleClass('active')
    })

    $('#hide-lyrics').click(() => { hide('#hide-lyrics', 'pre[type="lyrics"]') })
    $('#hide-progressions').click(() => { hide('#hide-progressions', '.progressions') })
    $('#hide-tabs').click(() => { hide('#hide-tabs', '.tabs') })
    $('#hide-chords').click(() => { hide('#hide-chords', 'pre[type="lyrics"] b') })
    $('#hide-miniplayer, #close-miniplayer').click(() => { hide('#hide-miniplayer', '#mini-player') })
})
