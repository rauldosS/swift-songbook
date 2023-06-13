$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active')
    })

    $("#fearless").load("templates/fearless/fearless.html")
})
