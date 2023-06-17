$(document).ready(function () {
    let SPEED_AUTOSCROLL = 80000

    autoscroll = () => {
        console.log(SPEED_AUTOSCROLL)
        $('#page-content-wrapper').stop()
        $('#page-content-wrapper').animate({
            scrollTop: $("#cipher").height()
        }, SPEED_AUTOSCROLL)
    }

    $('.btn-action-autoscroll').click(() => {
        if ($('.action-autoscroll').hasClass('autoscroll')) {
            $('#page-content-wrapper').stop()
        } else {
            autoscroll()
        }
        $('.action-autoscroll').toggleClass('autoscroll')
    })

    $('.increase-auto-scroll-speed').click(() => {
        SPEED_AUTOSCROLL += 5000
        autoscroll()
    })

    $('.slow-down-auto-scroll').click(() => {
        SPEED_AUTOSCROLL -= 5000
        autoscroll()
    })

    // Chords

    $('.btn-action-chords').click(() => {
        $('#chords').toggleClass('d-block')
        $('.btn-action-chords').toggleClass('active')
    })

    // Font

    // $('.font-action-button.increase').click(() => {
    //     $('#chords').toggleClass('d-block')
    //     $('.btn-action-chords').toggleClass('active')
    // })
})
