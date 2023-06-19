$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active')
    })

    $("#menu-toggle").click(function(e) {
        e.preventDefault()
        $("#sidebar").toggleClass("toggled")
    })

    $("#home").load("templates/base/home.html")
    $("#sidebar").load("templates/base/sidebar.html")
    $("#toolbar").load("templates/base/toolbar.html")
    $("#mini-player").load("templates/base/mini-player.html")
    $("#author").load("templates/base/author.html")
})

hideContent = () => {
    $('#home').hide()
    $('#toolbar').hide()
    $('#album').hide()
    $('#cipher-content').hide()
    $('#mini-player').hide()
    $('#author').hide()
}

selectAlbum = (album) => {
    hideContent()
    $('#album').load(`templates/${album}/album.html`)

    $('#album').show()
}

selectMusic = (album, music) => {
    hideContent()
    resertToolbar()
    $('#cipher-content').hide()

    $('#cipher-content').load(`templates/${album}/${music}/music.html`)

    $('#cipher-content').show()
    $('#toolbar').show()
    $('#mini-player').show()
}

resertToolbar = () => {
    $('#toolbar a').removeClass('active')
    $('.action-autoscroll').removeClass('autoscroll')
}

displayAuthor = () => {
    hideContent()
    $('#author').load('templates/base/author.html')
    $('#author').show()
}
