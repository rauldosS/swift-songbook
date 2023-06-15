$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active')
    })

    $("#menu-toggle").click(function(e) {
        e.preventDefault()
        $("#sidebar").toggleClass("toggled")
    })

    $("#fearless-album-content").load("templates/fearless/album.html")
    $("#lover-album-content").load("templates/lover/album.html")
})

let lastAlbum = null

selectAlbum = (album) => {
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
    $('#mini-player').show()
}
