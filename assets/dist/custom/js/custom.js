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
    $('#cipher-content').hide()
    $('#mini-player').hide()

    $('#album').load(`templates/${album}/album.html`)

    $('#album').show()
}

selectMusic = (album, music) => {
    $('#cipher-content').hide()
    $('#album').hide()
    $('#home').hide()

    $('#cipher-content').load(`templates/${album}/${music}/music.html`)

    $('#cipher-content').show()
    $('#toolbar').show()
    $('#mini-player').show()
}
