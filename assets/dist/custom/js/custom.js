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
