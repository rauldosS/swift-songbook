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
        columns = parseInt($('#chords-columns pre').css('columns').split('auto ')[1])

        if (columns > 2) {
            $('#cipher').hide()
            $('#chords-columns pre').css('columns', (columns - 1).toString())
            $('#chords-columns').show()
        } else {
            $('#cipher').show()
            $('#chords-columns').hide()
        }
    })

    $('.columns-action-button.decrease').click(() => {
        columns = parseInt($('#chords-columns pre').css('columns').split('auto ')[1])

        if (columns <= 5) {
            $('#cipher').hide()
            $('#chords-columns pre').css('columns', (columns + 1).toString())
            $('#chords-columns').show()
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
