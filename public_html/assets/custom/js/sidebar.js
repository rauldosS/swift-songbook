$(document).ready(function () {
    const list_unstyled = $('#list-unstyled')

    $("#hide-albuns-toggle").on('click', function (e) {
        e.preventDefault()
        $("#sidebar").toggleClass("toggled")

        if ($("#sidebar").hasClass("toggled")) {
            $("#page-content-wrapper").css({ 'width': 'calc(100% - 10px)' })
            $(this).find('span').text(language.shortcuts.albumToggle.show)
        } else {
            $("#page-content-wrapper").css({ 'width': 'calc(100% - 260px)' })
            $(this).find('span').text(language.shortcuts.albumToggle.hide)
        }
    })

    $.each(albuns, function(i, album) {
        list_unstyled.append(
            `<li>
                <a href="#album-${ album.id }-list-unstyled" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle album-${ album.id } font-${ album.id }">${ album.name }</a>
                <ul class="collapse list-unstyled" id="album-${ album.id }-list-unstyled"></ul>
            </li>`
        )

        const music_list = $(`#album-${ album.id }-list-unstyled`)

        album.musics.forEach(music => {
            music_list.append(`
                <a ${ music.blocked ? 'onclick="headShake(this)"' : `onclick="selectMusic('${ music.id }')"`}>
                    ${music.name}
                    ${ music.blocked ? '<i class="fa-solid fa-ban color-danger"></i>' : '' }
                </a>
            `)
        })

        music_list.prepend(`
            <a onclick="selectAlbum('${ album.id }')"><span class="about"></span> <i class="fa-regular fa-circle-question"></i></a>
        `)
    })
})