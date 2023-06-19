$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active')
    })

    $("#menu-toggle").click(function(e) {
        e.preventDefault()
        $("#sidebar").toggleClass("toggled")
    })

    $("#sidebar").load("templates/base/sidebar.html")
    $("#toolbar").load("templates/base/toolbar.html")
})

let lastAlbum = null

selectAlbum = (album) => {
    $('#toolbar').hide()
    $('#album').hide()
    $('#home').hide()
    $('#cipher-content').hide()
    $('#mini-player').hide()

    $('#album').load(`templates/${album}/album.html`)

    $('#album').show()
}

selectMusic = (album, music) => {
    resertToolbar()
    $('#cipher-content').hide()
    $('#album').hide()
    $('#home').hide()

    $('#cipher-content').load(`templates/${album}/${music}/music.html`)

    $('#cipher-content').show()
    $('#toolbar').show()
    $('#mini-player').show()
}

resertToolbar = () => {
    $('#toolbar a').removeClass('active')
    $('.action-autoscroll').removeClass('autoscroll')
}
