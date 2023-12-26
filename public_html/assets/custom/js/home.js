mostAccessedMusics = [
    {
        music: { id: 'enchanted', name: 'Enchanted' },
        album: { id: 'speak-now', name: 'Speak Now' },
        blocked: false
    },
    {
        music: { id: 'fearless', name: 'Fearless' },
        album: { id: 'fearless', name: 'Fearless' },
        blocked: false
    },
    {
        music: { id: 'red', name: 'Red' },
        album: { id: 'red', name: 'Red' },
        blocked: false
    },
    {
        music: { id: 'shake-it-off', name: 'Shake It Off' },
        album: { id: '1989', name: '1989' },
        blocked: false
    },
    {
        music: { id: 'lavender-haze', name: 'Lavender Haze' },
        album: { id: 'midnights', name: 'Midnights' },
        blocked: false
    },
    {
        music: { id: 'speak-now', name: 'Speak Now' },
        album: { id: 'speak-now', name: 'Speak Now' },
        blocked: false
    },
    {
        music: { id: 'cardigan', name: 'Cardigan' },
        album: { id: 'folklore', name: 'Folklore' },
        blocked: false
    },
    {
        music: { id: 'ready-for-it', name: '...Ready For It?' },
        album: { id: 'reputation', name: 'Reputation' },
        blocked: false
    },
    {
        music: { id: 'maroon', name: 'Maroon' },
        album: { id: 'midnights', name: 'Midnights' },
        blocked: false
    },
    {
        music: { id: 'champagne-problems', name: 'Champagne Problems' },
        album: { id: 'evermore', name: 'Evermore' },
        blocked: false
    },
    {
        music: { id: 'anti-hero', name: 'Anti-Hero' },
        album: { id: 'midnights', name: 'Midnights' },
        blocked: false
    },
    {
        music: { id: 'no-body-no-crime', name: 'No Body, No Crime (feat. HAIM)' },
        album: { id: 'evermore', name: 'Evermore' },
        blocked: false
    },
    {
        music: { id: 'right-where-you-left-me', name: 'Right Where You Left Me' },
        album: { id: 'evermore', name: 'Evermore' },
        blocked: false
    },
    {
        music: { id: 'the-way-i-loved-you', name: 'The Way I Loved You' },
        album: { id: 'fearless', name: 'Fearless' },
        blocked: false
    },
    {
        music: { id: 'karma', name: 'Karma' },
        album: { id: 'midnights', name: 'Midnights' },
        blocked: false
    },
    {
        music: { id: 'mean', name: 'Mean' },
        album: { id: 'speak-now', name: 'Speak Now' },
        blocked: false
    },
    {
        music: { id: 'come-back-be-here', name: 'Come Back... Be Here' },
        album: { id: 'red', name: 'Red' },
        blocked: false
    },
    {
        music: { id: 'this-is-me-trying', name: 'This Is Me Trying' },
        album: { id: 'folklore', name: 'Folklore' },
        blocked: false
    },
    {
        music: { id: 'you-belong-with-me', name: 'You Belong With Me' },
        album: { id: 'fearless', name: 'Fearless' },
        blocked: false
    },
    {
        music: { id: 'the-man', name: 'The Man' },
        album: { id: 'lover', name: 'Lover' },
        blocked: false
    },
    // {
    //     music: { id: 'exile', name: 'Exile' },
    //     album: { id: 'folklore', name: 'Folklore' },
    //     blocked: true
    // },
    {
        music: { id: 'hoax', name: 'Hoax' },
        album: { id: 'folklore', name: 'Folklore' },
        blocked: false
    },
    {
        music: { id: 'mirrorball', name: 'Mirrorball' },
        album: { id: 'folklore', name: 'Folklore' },
        blocked: false
    },
]
mostAccessed = $('#mostAccessed .list-group')

mostAccessedMusics.forEach((data, index) => {
    mostAccessed.append(`
        <a
            class="list-group-item d-flex justify-content-between align-items-center"
            href="${ data.blocked ? '#' : '/song/' + data.music.id } "
            ${ data.blocked ? 'blocked': '' }
        >
            <div class="p-2 number bd-highlight">${ index + 1 }</div>
            <div class="p-2 bd-highlight">
                ${ data.music.name }
                ${ data.blocked ? '<i class="fa-regular fa-circle-question color-fearless"></i>': '<i class="fa-regular fa-circle-check color-taylor-swift"></i>' }
            </div>
            <div class="ms-auto p-2 bd-highlight">
                <span class="badge color-${ data.album.id } border-${ data.album.id } rounded-pill">${ data.album.name }</span>
            </div>
        </a>
    `)
})

$('#mostAccessed .list-group-item[blocked]').on('click', function() {
    $(this).toggleClass('animate__animated animate__hinge z-index')
})
