$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active')
    })

    $("#menu-toggle").click(function(e) {
        e.preventDefault()
        $("#sidebar").toggleClass("toggled")
    })

    $("#toolbar").load("templates/base/toolbar.html")
})

let lastAlbum = null

selectAlbum = (album) => {
    $('#toolbar').hide()
    $('#album').hide()
    $('#home').hide()
    $('#cipher').hide()
    $('#mini-player').hide()

    $('#album').load(`templates/${album}/album.html`)

    $('#album').show()
}

selectMusic = (album, music) => {
    $('#cipher').hide()
    $('#album').hide()
    $('#home').hide()

    $('#cipher').load(`templates/${album}/${music}.html`)

    $('#cipher').show()
    $('#toolbar').show()
    $('#mini-player').show()
}
