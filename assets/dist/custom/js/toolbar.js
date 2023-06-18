$(document).ready(function () {
    ScrollDown.current = $('#page-content-wrapper').scrollTop();
    ScrollDown.lastRate = 30;
    ScrollDown.lastValue;
    ScrollDown.lastType;
    ScrollDown.enabled = true;
    ScrollDown.custom = function(value, rate) {  //let's say value==='bottom' and rate=10
        ScrollDown.lastRate += rate
        if(value==='bottom') {
            value=$('#cipher-content').height()-$('#page-content-wrapper').height()
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
            ScrollDown.custom(value, -5)
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

        console.log($('#chords-columns pre').css('columns'))

        if (columns > 1) {
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

        console.log($('#chords-columns pre').css('columns'))

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

    chords-columns
})
