$(document).ready(function () {
    ScrollDown.current = $('#page-content-wrapper').scrollTop();
    ScrollDown.lastRate = 60;
    ScrollDown.lastValue;
    ScrollDown.lastType;
    ScrollDown.enabled = true;
    ScrollDown.custom = function(value, rate) {  //let's say value==='bottom' and rate=10
        ScrollDown.lastRate += rate
        if(value==='bottom') {
            value=$('#cipher').height()-$('#page-content-wrapper').height()
        }
        ScrollDown.current=$('#page-content-wrapper').scrollTop();
        ScrollDown.lastValue=value;

        (function poll() {
            setTimeout(function() {
                var prev=$('#page-content-wrapper').scrollTop();  //This is the critical part
                /*I'm saving again the scroll position of the '#page-content-wrapper', remember
                10 ms have passed since the polling has started
                At this rate, if the user will scroll up for down pre!==ScrollDown.current
                And that means I have to stop scrolling.*/
                ScrollDown.current++; //increasing the scroll variable so that it keeps scrolling

                if(!(prev!==ScrollDown.current-1)) {
                    $('#page-content-wrapper').scrollTop(ScrollDown.current);
                }

                if(ScrollDown.current<ScrollDown.lastValue && ScrollDown.enabled) {
                    // $('#page-content-wrapper').scrollTop(ScrollDown.current);
                    //ScrollDown.current<ScrollDown.lastValue basically checks if it's reached the bottom
                    if(prev!==ScrollDown.current-1) {
                        /*I'm checking if the user 
                        scrolled up or down while the polling has been going on, 
                        if the user scrolls up then prev<ScrollDown.current-1, 
                        if the user scrolls down then prev>ScrollDown.current-1 
                        and at the next poll() the scrolling will stop 
                        because ScrollDown.enabled will bet set to false by ScrollDown.stop()*/
                        ScrollDown.stop()
                    }
                    poll()
                } else if (prev!==ScrollDown.current-1) {
                    ScrollDown.slow('bottom')
                } else {
                    ScrollDown.stop()
                }

                ScrollDown.userInteraction = false
            }, ScrollDown.lastRate)
        })()
    }

    ScrollDown.stop = function() {
        ScrollDown.enabled = false
    }

    ScrollDown.continue = function() {
        ScrollDown.enabled=true
        switch (ScrollDown.lastType) {
            case "fast":
                ScrollDown.fast(ScrollDown.lastValue)
                break
            case "normal":
                ScrollDown.normal(ScrollDown.lastValue)
                break
            case "slow":
                ScrollDown.slow(ScrollDown.lastValue)
                break
        }
    };

    ScrollDown.slow = function(value) {
        if(!ScrollDown.enabled) {
            ScrollDown.continue()
        } else {
            ScrollDown.lastType = 'slow'
            ScrollDown.custom(value, 60)
        }
    }
    ScrollDown.plus = function(value) {
        if(!ScrollDown.enabled) {
            ScrollDown.continue()
        } else {
            ScrollDown.lastType = 'slow'
            ScrollDown.custom(value, -20)
        }
    }
    ScrollDown.down = function(value) {
        if(!ScrollDown.enabled) {
            ScrollDown.continue()
        } else {
            ScrollDown.lastType = 'slow'
            ScrollDown.custom(value, 120)
        }
    }

    function ScrollDown() {}

    // autoscroll = () => {
    //     if ($("#end-auto-scroll").offset().top <= 0) {
    //         $("#page-content-wrapper").animate({ scrollTop: 0 }, "slow")
    //     }
    //     $('#page-content-wrapper').stop()
    //     $('#page-content-wrapper').animate({
    //         scrollTop: $("#end-auto-scroll").offset().top
    //     }, SPEED_AUTOSCROLL)
    // }

    $('.btn-action-autoscroll').click(() => {
        if ($('.action-autoscroll').hasClass('autoscroll') == true) {
            ScrollDown.stop()
        } else {
            ScrollDown.slow('bottom')
        }
        $('.action-autoscroll').toggleClass('autoscroll')
    })

    $('.increase-auto-scroll-speed').click(() => {
        ScrollDown.down('bottom')
    })

    $('.slow-down-auto-scroll').click(() => {
        ScrollDown.plus('bottom')
    })

    // Chords

    $('.btn-action-chords').click(() => {
        $('#chords').toggleClass('d-flex')
        $('.btn-action-chords').toggleClass('active')
    })

    // Font

    // $('.font-action-button.increase').click(() => {
    //     $('#chords').toggleClass('d-block')
    //     $('.btn-action-chords').toggleClass('active')
    // })
})
