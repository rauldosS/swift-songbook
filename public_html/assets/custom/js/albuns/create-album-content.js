$(document).ready(function () {
    listGroupAlbum = $('ol.list-group')

    albumMusics = [
        'State of Grace',
        'Red',
        'Treacherous',
        'I Knew You Were Trouble',
        'All Too Well',
        '22',
        'I Almost Do',
        'We Are Never Ever Getting Back Together',
        'Stay Stay Stay',
        'The Last Time (featuring Gary Lightbody)',
        'Holy Ground',
        'Sad Beautiful Tragic',
        'The Lucky One',
        'Everything Has Changed (featuring Ed Sheeran)',
        'Starlight',
        'Begin Again',
    ]

    albumMusics.forEach((data, index) => {
        listGroupAlbum.append(`
            <li class="list-group-item d-flex align-items-center">
                <div class="p-2 number bd-highlight">${ index + 1 }</div>
                <div class="p-2 bd-highlight">${ data }</div>
            </li>
        `)
    })
})
