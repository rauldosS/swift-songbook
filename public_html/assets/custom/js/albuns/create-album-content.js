$(document).ready(function () {
    listGroupAlbum = $('ol.list-group')
    album = getAlbum(currentContent.path.replace('albuns/', ''))

    album.musics.forEach((music, index) => {
        listGroupAlbum.append(`
            <a class="list-group-item d-flex align-items-center">
                <div class="p-2 number bd-highlight">${ index + 1 }</div>
                <div class="p-2 bd-highlight">${ music.name }</div>
            </a>
        `)
    })
})
