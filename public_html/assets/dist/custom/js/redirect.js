$(document).ready(function () {
    window.onload = function() {
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        })

        if (params.music !== null) {
            selectMusic(params.music)
            $('#toolbar').show()
        }
    }
})
