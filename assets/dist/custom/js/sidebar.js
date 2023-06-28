$(document).ready(function () {
    const list_unstyled = $('#list-unstyled')

    $("#menu-toggle").on('click', function (e) {
        e.preventDefault()
        $("#sidebar").toggleClass("toggled")

        if ($("#sidebar").hasClass("toggled")) {
            $("#page-content-wrapper").css({ 'width': 'calc(100% - 10px)' })
        } else {
            $("#page-content-wrapper").css({ 'width': 'calc(100% - 260px)' })
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
                <a ${ music.block ? 'onclick="headShake(this)"' : `onclick="selectMusic('${ album.id }', '${ music.id }')"`}>
                    ${music.name}
                    ${ music.block ? '<i class="fa-solid fa-ban color-danger"></i>' : '' }
                </a>
            `)
        })

        music_list.append(`
            <a onclick="selectAlbum('${ album }')">About <i class="fa-regular fa-circle-question"></i></a>
        `)
    })
})
