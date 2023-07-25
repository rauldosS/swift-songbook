$(document).ready(function () {
    const list_unstyled = $('#list-unstyled')

    $("#hide-albuns-toggle, #albuns").on('click', function (e) {
        e.preventDefault()
        $("#sidebar").toggleClass("toggled")

        if ($("#sidebar").hasClass("toggled")) {
            $("#page-content-wrapper").css({ 'width': 'calc(100% - 10px)' })
            $('button#hide-albuns-toggle span').text(language.shortcuts.albumToggle.show)
        } else {
            $("#page-content-wrapper").css({ 'width': 'calc(100% - 260px)' })
            $('button#hide-albuns-toggle span').text(language.shortcuts.albumToggle.hide)
        }
    })

    $.each(albuns, function(i, album) {
        list_unstyled.append(
            `<li>
                <a href="#album-${ album.id }-list-unstyled" data-bs-toggle="collapse" aria-expanded="false" class="dropdown-toggle album-${ album.id } font-${ album.id }">${ album.name }</a>
                <ul class="collapse list-unstyled" id="album-${ album.id }-list-unstyled"></ul>
            </li>`
        )

        const music_list = $(`#album-${ album.id }-list-unstyled`)

        album.musics.forEach(music => {
            music_list.append(`
                <a ${ music.blocked ? 'onclick="headShake(this)"' : `href="song/${ music.id }"`}>
                    ${music.name}
                    ${ music.blocked ? '<i class="bi bi-slash-circle color-danger"></i>' : '' }
                </a>
            `)
        })

        music_list.prepend(`
            <a href="/album/${ album.id }"><span class="about"></span> <i class="bi bi-question-circle"></i></a>
        `)
    })

    $(window).resize(function() {
        if ($(window).width() < 768) {
            $('#shortcuts #hide-albuns-toggle span').text(
                $('#sidebar').hasClass('toggled') ? language.shortcuts.albumToggle.hide : language.shortcuts.albumToggle.show
            )
        } else {
            $('#shortcuts #hide-albuns-toggle span').text(
                $('#sidebar').hasClass('toggled') ? language.shortcuts.albumToggle.show : language.shortcuts.albumToggle.hide
            )
       }
    })
})
