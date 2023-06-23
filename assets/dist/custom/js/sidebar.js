$(document).ready(function () {
    const list_unstyled = $('#list-unstyled')

    $("#menu-toggle").on('click', function (e) {
        e.preventDefault()
        $("#sidebar").toggleClass("toggled")
    })

    albuns = [
        {
            'id': 'taylor-swift',
            'name': 'Taylor Swift',
            'musics': [
                {'id': 'our-song', 'name': 'Our Song', 'block': true},
            ]
        },
        {
            'id': 'fearless',
            'name': 'Fearless',
            'musics': [
                {'id': 'fearless', 'name': 'Fearless', 'block': false},
                {'id': '', 'name': 'Fifteen', 'block': true},
                {'id': '', 'name': 'Love Story', 'block': true},
                {'id': '', 'name': 'Hey Stephen', 'block': true},
                {'id': '', 'name': 'White Horse', 'block': true},
                {'id': '', 'name': 'You Belong With Me', 'block': true},
                {'id': '', 'name': 'Breathe (feat. Colbie Caillat)', 'block': true},
                {'id': '', 'name': 'Tell Me Why', 'block': true},
                {'id': '', 'name': "You're Not Sorry", 'block': true},
                {'id': '', 'name': 'The Way I Loved You', 'block': true},
                {'id': '', 'name': 'Forever & Always', 'block': true},
                {'id': '', 'name': 'The Best Day', 'block': true},
                {'id': '', 'name': 'Change', 'block': true},
                {'id': '', 'name': 'Jump Then Fall', 'block': true},
                {'id': '', 'name': 'Untouchable', 'block': true},
                {'id': '', 'name': 'Forever & Always (Piano Version)', 'block': true},
                {'id': '', 'name': 'Come In With the Rain', 'block': true},
                {'id': '', 'name': 'Superstar', 'block': true},
                {'id': '', 'name': 'The Other Side of the Door', 'block': true},
                {'id': '', 'name': 'Today Was a Fairytale', 'block': true},
                {'id': '', 'name': 'You All Over Me', 'block': true},
                {'id': '', 'name': 'Mr. Perfectly Fine', 'block': true},
                {'id': '', 'name': 'We Were Happy', 'block': true},
                {'id': '', 'name': "That's When (feat. Keith Urban)", 'block': true},
                {'id': '', 'name': "Don't You", 'block': true},
                {'id': '', 'name': 'Bye Bye Baby', 'block': true},
            ]
        },
        {
            'id': 'speak-now',
            'name': 'Speak Now',
            'musics': []
        },
        {
            'id': 'red',
            'name': 'RED',
            'musics': []
        },
        {
            'id': '1989',
            'name': '1989',
            'musics': []
        },
        {
            'id': 'reputation',
            'name': 'Reputation',
            'musics': []
        },
        {
            'id': 'lover',
            'name': 'Lover',
            'musics': []
        },
        {
            'id': 'folklore',
            'name': 'Folklore',
            'musics': []
        },
        {
            'id': 'evermore',
            'name': 'Evermore',
            'musics': []
        },
        {
            'id': 'midnights',
            'name': 'Midnights',
            'musics': []
        },
    ]

    $.each(albuns, function(i, album) {
        list_unstyled.append(
            `<li>
                <a href="#album-${ album.id }-list-unstyled" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle album-${ album.id } font-${ album.id }">${ album.name }</a>
                <ul class="collapse list-unstyled" id="album-${ album.id }-list-unstyled"></ul>
            </li>`
        )

        const music_list = $(`#album-${ album.id }-list-unstyled`)

        album.musics.forEach(music => {
            console.log('album')
            music_list.append(`
                <a ${ music.block ? '' : `onclick="selectMusic('${ album.id }', '${ music.id }')"`}>
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
