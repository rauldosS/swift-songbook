$(document).ready(function () {
    console.log('lover')
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active')
    })

    $("#the-man").load("templates/lover/the-man.html")
})
