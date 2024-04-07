const coverAlbuns = {
    'taylor-swift': 'https://upload.wikimedia.org/wikipedia/pt/thumb/3/3e/Taylor_Swift_%C3%81lbum.jpg/220px-Taylor_Swift_%C3%81lbum.jpg',
    'fearless': 'https://upload.wikimedia.org/wikipedia/pt/thumb/e/ee/Fearless_%28Taylor%27s_Version%29.png/220px-Fearless_%28Taylor%27s_Version%29.png',
    'speak-now': 'https://upload.wikimedia.org/wikipedia/pt/thumb/2/2e/Speak_Now_%28Taylor%27s_Version%29.png/220px-Speak_Now_%28Taylor%27s_Version%29.png',
    'red': 'https://upload.wikimedia.org/wikipedia/pt/thumb/8/8e/Red_%28Taylor%27s_Version%29.png/220px-Red_%28Taylor%27s_Version%29.png',
    '1989': 'https://upload.wikimedia.org/wikipedia/pt/thumb/2/2f/1989_%28Taylor%27s_Version%29.png/220px-1989_%28Taylor%27s_Version%29.png',
    'reputation': 'https://upload.wikimedia.org/wikipedia/pt/thumb/f/f2/Taylor_Swift_-_Reputation.png/220px-Taylor_Swift_-_Reputation.png',
    'lover': 'https://upload.wikimedia.org/wikipedia/pt/thumb/3/3c/Capa_de_Lover.png/220px-Capa_de_Lover.png',
    'folklore': 'https://upload.wikimedia.org/wikipedia/pt/thumb/f/f8/Taylor_Swift_-_Folklore.png/220px-Taylor_Swift_-_Folklore.png',
    'evermore': 'https://upload.wikimedia.org/wikipedia/pt/thumb/4/4f/Evermore_-_Taylor_Swift.png/220px-Evermore_-_Taylor_Swift.png',
    'midnights': 'https://upload.wikimedia.org/wikipedia/pt/thumb/2/2b/Taylor_Swift_-_Midnights.png/220px-Taylor_Swift_-_Midnights.png',
}

albuns = [
    {
        id: 'taylor-swift',
        link: '/album/taylor-swift',
        cover: coverAlbuns['taylor-swift'],
        name: 'Taylor Swift',
        keywords: 'taylor swift',
        type: 'album',
        musics: [
            { id: "Picture To Burn", name: "Picture To Burn", blocked: true },
            { id: "Teardrops On My Guitar", name: "Teardrops On My Guitar", blocked: true },
            { id: "A Place In This World", name: "A Place In This World", blocked: true },
            { id: "Cold As You", name: "Cold As You", blocked: true },
            { id: "The Outside", name: "The Outside", blocked: true },
            { id: "Tied Together With A Smile", name: "Tied Together With A Smile", blocked: true },
            { id: "Stay Beautiful", name: "Stay Beautiful", blocked: true },
            { id: "Should've Said No", name: "Should've Said No", blocked: true },
            { id: "Mary's Song (oh My My My)", name: "Mary's Song (oh My My My)", blocked: true },
            { id: "Our Song", name: "Our Song", blocked: true },
            { id: "I'm Only Me When I'm With You", name: "I'm Only Me When I'm With You", blocked: true },
            { id: "Invisible", name: "Invisible", blocked: true },
            { id: "A Perfectly Good Heart", name: "A Perfectly Good Heart", blocked: true },
        ]
    },
    {
        id: 'fearless',
        link: '/album/fearless',
        cover: coverAlbuns['fearless'],
        name: 'Fearless',
        keywords: 'fearless',
        type: 'album',
        musics: [
            { id: 'fearless', name: 'Fearless', blocked: false, by: "Nena Shelby" },
            { id: 'Fifteen', name: 'Fifteen', blocked: true },
            { id: 'Love Story', name: 'Love Story', blocked: true },
            { id: 'Hey Stephen', name: 'Hey Stephen', blocked: true },
            { id: 'White Horse', name: 'White Horse', blocked: true },
            { id: 'you-belong-with-me', name: 'You Belong With Me', blocked: false },
            { id: 'Breathe (feat. Colbie Caillat)', name: 'Breathe (feat. Colbie Caillat)', blocked: true },
            { id: 'Tell Me Why', name: 'Tell Me Why', blocked: true },
            { id: "You're Not Sorry", name: "You're Not Sorry", blocked: true },
            { id: 'the-way-i-loved-you', name: 'The Way I Loved You', blocked: false },
            { id: 'Forever & Always', name: 'Forever & Always', blocked: true },
            { id: 'The Best Day', name: 'The Best Day', blocked: true },
            { id: 'Change', name: 'Change', blocked: true },
            { id: 'Jump Then Fall', name: 'Jump Then Fall', blocked: true },
            { id: 'Untouchable', name: 'Untouchable', blocked: true },
            { id: 'Forever & Always (Piano Version)', name: 'Forever & Always (Piano Version)', blocked: true },
            { id: 'Come In With the Rain', name: 'Come In With the Rain', blocked: true },
            { id: 'Superstar', name: 'Superstar', blocked: true },
            { id: 'The Other Side of the Door', name: 'The Other Side of the Door', blocked: true },
            { id: 'Today Was a Fairytale', name: 'Today Was a Fairytale', blocked: true },
            { id: 'You All Over Me', name: 'You All Over Me', blocked: true },
            { id: 'Mr. Perfectly Fine', name: 'Mr. Perfectly Fine', blocked: true },
            { id: 'We Were Happy', name: 'We Were Happy', blocked: true },
            { id: "That's When (feat. Keith Urban)", name: "That's When (feat. Keith Urban)", blocked: true },
            { id: "Don't You", name: "Don't You", blocked: true },
            { id: 'Bye Bye Baby', name: 'Bye Bye Baby', blocked: true },
        ]
    },
    {
        id: 'speak-now',
        link: '/album/speak-now',
        cover: coverAlbuns['speak-now'],
        name: 'Speak Now',
        keywords: 'speak now',
        type: 'album',
        musics: [
            { id: "Mine", name: "Mine", blocked: true },
            { id: "Sparks Fly", name: "Sparks Fly", blocked: true },
            { id: "Back To December", name: "Back To December", blocked: true },
            { id: "speak-now", name: "Speak Now", blocked: false },
            { id: "Dear John", name: "Dear John", blocked: true },
            { id: "mean", name: "Mean", blocked: false },
            { id: "The Story Of Us", name: "The Story Of Us", blocked: true },
            { id: "Never Grow Up", name: "Never Grow Up", blocked: true },
            { id: "enchanted", name: "Enchanted", blocked: false },
            { id: "Better Than Revenge", name: "Better Than Revenge", blocked: true },
            { id: "Innocent", name: "Innocent", blocked: true },
            { id: "Haunted", name: "Haunted", blocked: true },
            { id: "Last Kiss", name: "Last Kiss", blocked: true },
            { id: "Long Live", name: "Long Live", blocked: true },
            { id: "Ours", name: "Ours", blocked: true },
            { id: "If This Was A Movie", name: "If This Was A Movie", blocked: true },
            { id: "Superman", name: "Superman", blocked: true },
        ]
    },
    {
        id: 'red',
        link: '/album/red',
        cover: coverAlbuns['red'],
        name: 'RED',
        keywords: 'red',
        type: 'album',
        musics: [
            { id: "State of Grace", name: "State of Grace", blocked: true },
            { id: "State Of Grace (Acoustic Version)", name: "State Of Grace (Acoustic Version)", blocked: true },
            { id: "red", name: "Red", blocked: false },
            { id: "Treacherous", name: "Treacherous", blocked: true },
            { id: "I Knew You Were Trouble", name: "I Knew You Were Trouble", blocked: true },
            { id: "All Too Well", name: "All Too Well", blocked: true },
            { id: "22", name: "22", blocked: true },
            { id: "I Almost Do", name: "I Almost Do", blocked: true },
            { id: "We Are Never Ever Getting Back Together", name: "We Are Never Ever Getting Back Together", blocked: true },
            { id: "Stay Stay Stay", name: "Stay Stay Stay", blocked: true },
            { id: "The Last Time", name: "The Last Time", blocked: true },
            { id: "Holy Ground", name: "Holy Ground", blocked: true },
            { id: "Sad Beautiful Tragic", name: "Sad Beautiful Tragic", blocked: true },
            { id: "The Lucky One", name: "The Lucky One", blocked: true },
            { id: "Everything Has Changed (feat. Ed Sheeran)", name: "Everything Has Changed (feat. Ed Sheeran)", blocked: true },
            { id: "Starlight", name: "Starlight", blocked: true },
            { id: "Begin Again", name: "Begin Again", blocked: true },
            { id: "The Moment I Knew", name: "The Moment I Knew", blocked: true },
            { id: "come-back-be-here", name: "Come Back... Be Here", blocked: false },
            { id: "Girl At Home", name: "Girl At Home", blocked: true },
            { id: "Better Man (From The Vault)", name: "Better Man (From The Vault)", blocked: true },
            { id: "Nothing New (feat. Phoebe Bridgers) (From The Vault)", name: "Nothing New (feat. Phoebe Bridgers) (From The Vault)", blocked: true },
            { id: "Babe (From The Vault)", name: "Babe (From The Vault)", blocked: true },
            { id: "Message In A Bottle (From The Vault)", name: "Message In A Bottle (From The Vault)", blocked: true },
            { id: "I Bet You Think About Me (feat. Chris Stapleton) (From The Vault)", name: "I Bet You Think About Me (feat. Chris Stapleton) (From The Vault)", blocked: true },
            { id: "Forever Winter (From The Vault)", name: "Forever Winter (From The Vault)", blocked: true },
            { id: "Run (feat. Ed Sheeran) (From The Vault)", name: "Run (feat. Ed Sheeran) (From The Vault)", blocked: true },
            { id: "The Very First Night (From The Vault)", name: "The Very First Night (From The Vault)", blocked: true },
            { id: "All Too Well (10 Minute Version) (From The Vault)", name: "All Too Well (10 Minute Version) (From The Vault)", blocked: true },
        ]
    },
    {
        id: '1989',
        link: '/album/1989',
        cover: coverAlbuns['1989'],
        name: '1989',
        keywords: '1989',
        type: 'album',
        musics: [
            { id: "Welcome To New York", name: "Welcome To New York", blocked: true },
            { id: "Blank Space", name: "Blank Space", blocked: true },
            { id: "Style", name: "Style", blocked: true },
            { id: "Out Of The Woods", name: "Out Of The Woods", blocked: true },
            { id: "all-you-had-to-do-was-stay", name: "All You Had To Do Was Stay", blocked: true },
            { id: "shake-it-off", name: "Shake It Off", blocked: false },
            { id: "I Wish You Would", name: "I Wish You Would", blocked: true },
            { id: "Bad Blood", name: "Bad Blood", blocked: true },
            { id: "Wildest Dreams", name: "Wildest Dreams", blocked: true },
            { id: "How You Get the Girl", name: "How You Get the Girl", blocked: true },
            { id: "This Love", name: "This Love", blocked: true },
            { id: "I Know Places", name: "I Know Places", blocked: true },
            { id: "Clean", name: "Clean", blocked: true },
            { id: "Wonderland", name: "Wonderland", blocked: true },
            { id: "You Are in Love", name: "You Are in Love", blocked: true },
            { id: "New Romantics", name: "New Romantics", blocked: true },
        ]
    },
    {
        id: 'reputation',
        link: '/album/reputation',
        cover: coverAlbuns['reputation'],
        name: 'Reputation',
        keywords: 'reputation',
        type: 'album',
        musics: [
            { id: "ready-for-it", name: "...Ready For It?", blocked: false },
            { id: "End Game (feat. Ed Sheeran & Future)", name: "End Game (feat. Ed Sheeran & Future)", blocked: true },
            { id: "I Did Something Bad", name: "I Did Something Bad", blocked: true },
            { id: "Don't Blame Me", name: "Don't Blame Me", blocked: true },
            { id: "Delicate", name: "Delicate", blocked: true },
            { id: "Look What You Made Me Do", name: "Look What You Made Me Do", blocked: true },
            { id: "So It Goes…", name: "So It Goes…", blocked: true },
            { id: "Gorgeous", name: "Gorgeous", blocked: true },
            { id: "Getaway Car", name: "Getaway Car", blocked: true },
            { id: "King Of My Heart", name: "King Of My Heart", blocked: true },
            { id: "Dancing With Our Hands Tied", name: "Dancing With Our Hands Tied", blocked: true },
            { id: "Dress", name: "Dress", blocked: true },
            { id: "This Is Why We Can't Have Nice Things", name: "This Is Why We Can't Have Nice Things", blocked: true },
            { id: "Call It What You Want", name: "Call It What You Want", blocked: true },
            { id: "New Year's Day", name: "New Year's Day", blocked: true },
        ]
    },
    {
        id: 'lover',
        link: '/album/lover',
        cover: coverAlbuns['lover'],
        name: 'Lover',
        keywords: 'lover',
        type: 'album',
        musics: [
            { id: "I Forgot That You Existed", name: "I Forgot That You Existed", blocked: true },
            { id: "Cruel Summer", name: "Cruel Summer", blocked: true },
            { id: "Lover", name: "Lover", blocked: true },
            { id: "the-man", name: "The Man", blocked: false },
            { id: "The Archer", name: "The Archer", blocked: true },
            { id: "I Think He Knows", name: "I Think He Knows", blocked: true },
            { id: "Miss Americana & The Heartbreak Prince", name: "Miss Americana & The Heartbreak Prince", blocked: true },
            { id: "Paper Rings", name: "Paper Rings", blocked: true },
            { id: "Cornelia Street", name: "Cornelia Street", blocked: true },
            { id: "Death By A Thousand Cuts", name: "Death By A Thousand Cuts", blocked: true },
            { id: "London Boy", name: "London Boy", blocked: true },
            { id: "Soon You'll Get Better (feat. Dixie Chicks)", name: "Soon You'll Get Better (feat. Dixie Chicks)", blocked: true },
            { id: "False God", name: "False God", blocked: true },
            { id: "You Need To Calm Down", name: "You Need To Calm Down", blocked: true },
            { id: "Afterglow", name: "Afterglow", blocked: true },
            { id: "ME! (feat. Brendon Urie)", name: "ME! (feat. Brendon Urie)", blocked: true },
            { id: "It's Nice To Have A Friend", name: "It's Nice To Have A Friend", blocked: true },
            { id: "Daylight", name: "Daylight", blocked: true },
        ]
    },
    {
        id: 'folklore',
        link: '/album/folklore',
        cover: coverAlbuns['folklore'],
        name: 'Folklore',
        keywords: 'folklore',
        type: 'album',
        musics: [
            { id: "the 1", name: "the 1", blocked: true },
            { id: "cardigan", name: "cardigan", blocked: false },
            { id: "the last great american dynasty", name: "the last great american dynasty", blocked: true },
            { id: "exile", name: "exile", blocked: true },
            { id: "my tears ricochet", name: "my tears ricochet", blocked: true },
            { id: "mirrorball", name: "mirrorball", blocked: false },
            { id: "seven", name: "seven", blocked: true },
            { id: "august", name: "august", blocked: true },
            { id: "this-is-me-trying", name: "this is me trying", blocked: false },
            { id: "illicit affairs", name: "illicit affairs", blocked: true },
            { id: "invisible string", name: "invisible string", blocked: true },
            { id: "mad woman", name: "mad woman", blocked: true },
            { id: "epiphany", name: "epiphany", blocked: true },
            { id: "betty", name: "betty", blocked: true },
            { id: "peace", name: "peace", blocked: true },
            { id: "hoax", name: "hoax", blocked: false },
            { id: "the lakes", name: "the lakes", blocked: true },
        ]
    },
    {
        id: 'evermore',
        link: '/album/evermore',
        cover: coverAlbuns['evermore'],
        name: 'Evermore',
        keywords: 'evermore',
        type: 'album',
        musics: [
            { id: "willow", name: "willow", blocked: true },
            { id: "champagne-problems", name: "champagne problems", blocked: false },
            { id: "gold rush", name: "gold rush", blocked: true },
            { id: "'tis the damn season", name: "'tis the damn season", blocked: true },
            { id: "tolerate it", name: "tolerate it", blocked: true },
            { id: "no-body-no-crime", name: "no body, no crime (feat. HAIM)", blocked: false },
            { id: "happiness", name: "happiness", blocked: true },
            { id: "dorothea", name: "dorothea", blocked: true },
            { id: "coney island (feat. The National)", name: "coney island (feat. The National)", blocked: true },
            { id: "ivy", name: "ivy", blocked: true },
            { id: "cowboy like me", name: "cowboy like me", blocked: true },
            { id: "long story short", name: "long story short", blocked: true },
            { id: "marjorie", name: "marjorie", blocked: true },
            { id: "closure", name: "closure", blocked: true },
            { id: "evermore (feat. Bon Iver)", name: "evermore (feat. Bon Iver)", blocked: true },
            { id: "right-where-you-left-me", name: "right where you left me", blocked: false },
            { id: "it's time to go", name: "it's time to go", blocked: true },
        ]
    },
    {
        id: 'midnights',
        link: '/album/midnights',
        cover: coverAlbuns['midnights'],
        name: 'Midnights',
        keywords: 'midnights',
        type: 'album',
        musics: [
            { id: "lavender-haze", name: "Lavender Haze", blocked: false },
            { id: "maroon", name: "Maroon", keywords: 'cris', blocked: false },
            { id: "anti-hero", name: "Anti-Hero", blocked: false },
            { id: "Snow On The Beach (feat. Lana Del Rey)", name: "Snow On The Beach (feat. Lana Del Rey)", blocked: true },
            { id: "You're On Your Own, Kid", name: "You're On Your Own, Kid", blocked: true },
            { id: "Midnight Rain", name: "Midnight Rain", blocked: true },
            { id: "Question...?", name: "Question...?", blocked: true },
            { id: "Vigilante Shit", name: "Vigilante Shit", blocked: true },
            { id: "Bejeweled", name: "Bejeweled", blocked: true },
            { id: "Labyrinth", name: "Labyrinth", blocked: true },
            { id: "karma", name: "Karma", blocked: false },
            { id: "Sweet Nothing", name: "Sweet Nothing", blocked: true },
            { id: "Mastermind", name: "Mastermind", blocked: true },
            { id: "The Great War", name: "The Great War", blocked: true },
            { id: "Bigger Than The Whole Sky", name: "Bigger Than The Whole Sky", blocked: true },
            { id: "Paris", name: "Paris", blocked: true },
            { id: "High Infidelity", name: "High Infidelity", blocked: true },
            { id: "Glitch", name: "Glitch", blocked: true },
            { id: "Would've, Could've, Should've", name: "Would've, Could've, Should've", blocked: true },
            { id: "Dear Reader", name: "Dear Reader", blocked: true },
            { id: "Hits Different", name: "Hits Different", blocked: true },
        ]
    },
]

userLang = navigator.language || navigator.userLanguage
languages = ['en-US', 'pt-BR']
userContainsLanguage = languages.includes(userLang)

// LOAD PAGE

let showGifs = localStorage.getItem('showGifs')

if (showGifs === null) {
    showGifs = 'true'
    localStorage.setItem('showGifs', 'true')
}

if (showGifs === 'true') {
    const taylors = [
        '/assets/gifs/01.gif'
        // 'https://media.tenor.com/xNcRxJCm5C8AAAAi/taylor-swift-reactions-taylor-swift.gif',
        // 'https://media.tenor.com/x8GcrEwUv0AAAAAi/taylor-swift-reactions-taylor-swift.gif',
        // 'https://media.tenor.com/wulosAyQ60gAAAAi/taylor-swift-reactions-taylor-swift.gif',
        // 'https://media.tenor.com/4WZ34muN9FMAAAAi/taylor-swift-reactions-taylor-swift.gif',
        // 'https://media.tenor.com/AUM6s6Nu4TAAAAAi/taylor-swift-reactions-taylor-swift.gif',
        // 'https://media.tenor.com/chuOhNjprmsAAAAi/taylor-swift-reactions-taylor-swift.gif',
        // 'https://media.tenor.com/GoueKp_19I8AAAAi/taylor-swift-reactions-taylor-swift.gif',
        // 'https://media.tenor.com/ehnYxLxKU10AAAAi/taylor-swift-reactions-taylor-swift.gif',
        // 'https://media.tenor.com/kh_XvCdWbSkAAAAi/taylor-swift-reactions-taylor-swift.gif',
        // 'https://media.tenor.com/BgOoQFoYqvgAAAAi/taylor-swift-stop-it.gif',
        // 'https://media.tenor.com/dyQlFbIpt-IAAAAi/taylor-swift-reactions-taylor-swift.gif',
        // 'https://media.tenor.com/mVFHo2j01V0AAAAi/taylor-swift-reactions-taylor-swift.gif',
        // 'https://media.tenor.com/ESVbz9s7rc4AAAAi/taylor-swift-reactions-taylor-swift.gif',
        // 'https://media.tenor.com/45rtnGyVtQ0AAAAi/taylor-swift-reactions-taylor-swift.gif',
        // 'https://media.tenor.com/BvBceGqz4CwAAAAi/taylor-swift-reactions-taylor-swift.gif',
        // 'https://media.tenor.com/Fik_22HrNgUAAAAi/taylor-swift-reactions-taylor-swift.gif',
        // 'https://media.tenor.com/BgOoQFoYqvgAAAAi/taylor-swift-stop-it.gif',
        // 'https://media.tenor.com/Lxu3q9ZG4fYAAAAi/taylor-swift-reactions-taylor-swift.gif',
        // 'https://media.tenor.com/Fik_22HrNgUAAAAi/taylor-swift-reactions-taylor-swift.gif',
        // 'https://media.tenor.com/Go6zC_2xFXMAAAAi/taylor-swift-yes.gif',
        // 'https://media.tenor.com/A2Jk-ImN064AAAAj/taylor-swift-reactions-taylor-swift.gif'
    ]
    
    document.addEventListener("DOMContentLoaded", function(event) {
        document.getElementById('load-img').src = taylors[0] // [Math.floor(Math.random() * (17 - 1 + 1)) + 1]
    }) 

    window.addEventListener("load", function() {
        afterPageLoad()
        setLoading(false, 2500)
    })
} else {
    window.addEventListener("load", function() {
        afterPageLoad()
        setLoading(false, 0)
    })
}

function afterPageLoad() {
    let fullPath = window.location.pathname.replace('public_html/', '')

    if (fullPath.charAt(0) === '/') {
        fullPath = fullPath.slice(1)
    }

    if (fullPath.charAt(fullPath.length - 1) === '/') {
        fullPath = fullPath.slice(0, -1);
    }

    let pathParts = fullPath.split('/')

    if (pathParts[0] !== 'song' && fullPath !== '/') {
        const resourceType = pathParts[0]

        loadContent(fullPath, resourceType, switchLanguage = true)
    }

    $('.modal-backdrop').remove()
    $('#loading').modal('show')
    $('body').children().removeClass('hide')
}

// LOAD MUSICS

let currentContent = {
    contentType: undefined,
    path: undefined
}

$(document).ready(function () {
    $("#sidebar").load("/templates/base/sidebar.html")
    $("#shortcuts").load("/templates/base/shortcuts.html")
    $("#contribution").load("/templates/base/contribution.html")

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active')
    })

    $('[data-toggle=tooltip]').tooltip({
        trigger : 'hover'
    })

    getLanguage()

    window.onload = function() {
        updateLanguage()

        $('#unpin-shortcuts').click(() => {
            $('#shortcuts').toggleClass('initial')
            $('#unpin-shortcuts').toggleClass('active')
        })

        loadCopy()
    }
})

let musics = {}

albuns.forEach(album => {
    album.musics.forEach(music => {    
        music['album'] = album.id
        musics[music.id] = music
        musics[music.id]['album'] = album
        musics[music.id]['type'] = 'music'
        musics[music.id]['keywords'] = `${ music.id } ${ music.name } ${ album.id } ${ music.keywords ? music.keywords : '' }`.toLowerCase()
        musics[music.id]['cover'] = coverAlbuns[album.id]
        musics[music.id]['link'] = `/song/${ music.id }`
    })
})

getAlbum = (album) => {
    return albuns.find(obj => {
        return obj.id === album
    })
}

getMusic = (album, music) => {
    return getAlbum(album).musics.find(obj => {
        return obj.id === music
    })
}

scrollTop = () => {
    $('.scrolling').animate({ scrollTop: 0 }, 500)
}

scrollToElement = (elementSelector, scrollContainerSelector = '.scrolling') => {
    targetElement = $(elementSelector).last()
    scrollContainer = $(scrollContainerSelector)
    
    // Check if the target element and scroll container exist
    if (targetElement.length > 0 && scrollContainer.length > 0) {
        // Get the current scroll position in the container
        currentPosition = scrollContainer.scrollTop() - 36
    
        // Get the offset of the target element relative to the document
        targetOffset = targetElement.offset().top
    
        // Adjust the target position based on the scroll container's position
        targetPosition = targetOffset - scrollContainer.offset().top + currentPosition - 36
    
        // Check if the scroll is already at the correct position
        if (currentPosition !== targetPosition) {
        // Scroll to the element inside the container
        scrollContainer.animate({
            scrollTop: targetPosition
        }, 500)
        }
    }
}

setLoading = (loading, timeout = 0) => {
    if (loading) document.getElementById('load-img').src = taylors[Math.floor(Math.random() * (17 - 1 + 1)) + 1]
    setTimeout(() => {
        $('#loading').modal(loading ? 'show' : 'hide')
    }, timeout)
}

updateCurrentContent = (path = undefined, contentType = undefined) => {
    currentContent['path'] = path
    currentContent['contentType'] = contentType
}

getLanguage = () => {
    (localStorage.getItem('language') == null) ? setLanguage(userContainsLanguage ? userLang : languages[0]) : false
    $.ajax({
        url:  '/assets/languages/' +  localStorage.getItem('language') + '.json',
        dataType: 'json', async: false, dataType: 'json', 
        success: function (lang) {
            language = lang
        }
    })
}

function setLanguage(lang) {
    localStorage.setItem('language', lang)
    getLanguage()
    updateLanguage()
}










// BASE

content =  $('#content')
btnHome = $('#btn-home')

// homePath = 'base/home'

loadContent = (path, contentType = undefined, switchLanguage = false) => {
    updateCurrentContent(path, contentType)

    content.load(`/templates/${ switchLanguage ? language.code : '' }/${ path }.html`, function() {
        // if (!['album', 'about', 'music', 'help'].includes(currentContent.contentType)) {
        updateLanguage()
        // }
    })

    if ($(window).width() < 768 && $('#sidebar').width() > 250) {
        $('#sidebar').toggleClass('toggled')
    }
}

loadCopy = () => {
    $('[data-clipboard-text]').on('click', function() {
        textToCopy = $(this).attr('data-clipboard-text')

        clipboard = new ClipboardJS('[data-clipboard-text]', {
            text: function() { return textToCopy }
        })
    
        clipboard.onClick(event)
        changeText($(this))
    })
}

// checkQueryParams = () => {
//     params = new Proxy(new URLSearchParams(window.location.search), {
//         get: (searchParams, prop) => searchParams.get(prop),
//     })

//     if (params.music === null && params.album === null) {
//         if (params.help === '') {
//             loadContent('help', true)
//         }
//     } else if (params.music != null) {
//         loadMusic(params.music)
//     } else if (params.album != null) {
//         loadAlbum(params.album)
//     }
// }

updateLanguage = () => {
    $('#main-alert').html(language.mainAlert)

    $('#albuns .title').text(language.albuns.title)
    $('#albuns .hide').text(language.albuns.hide)

    $('#collapseSummary').html(language.summary)
    $('#whatsapp').text(language.whatsapp)

    $('#mostAccessed h4').text(language.mostAccessTitle)

    $('#influencers-title').text(language.influencers.title)
    $('#influencers-data').html(language.influencers.data)

    $('#influencers-luca').text(language.influencers.luca)
    $('#influencers-nena').text(language.influencers.nena)
    $('#influencers-mike').text(language.influencers.mike)
    $('#influencers-goddess').text(language.influencers.goddess)

    $('#contribution-info h4').text(language.contribution.title)
    $('#contribution-info .info-data').html(language.contribution.info)
    $('#qr-data h3').text(language.contribution.paymant.title)
    $('#qr-data p').text(language.contribution.paymant.info)
    $('#qr-data #copy-code').html(language.contribution.paymant.qrCode)
    $('#key-data p').html(language.contribution.paymant.pixKeyTitle)
    $('#copy-key').html(language.contribution.paymant.pixKey)

    $('#menu-actions .font-action-title').text(language.toolbar.fontActionTitle)
    $('#menu-actions .chords-action-title').text(language.toolbar.chordsActionTitle)
    $('#menu-actions .columns-action-title').text(language.toolbar.columnsActionTitle)

    $('#unpin-toolbar span').text(language.toolbar.unpinToolbar)
    $('#only-lyrics span').text(language.toolbar.onlyLyrics)
    $('#hide-lyrics span').text(language.toolbar.hideLyrics)
    $('#hide-progressions span').text(language.toolbar.hideProgressions)
    $('#hide-tabs span').text(language.toolbar.hideTabs)
    $('#hide-chords span').text(language.toolbar.hideChords)
    $('#hide-miniplayer span').text(language.toolbar.hideMiniplayer)
    $('#share-cipher span').text(language.toolbar.shareCipher)

    $('#shortcuts #btn-home span').text(language.shortcuts.btnHome)
    $('#shortcuts #dropdown-menu-languages').attr('data-bs-original-title', language.shortcuts.dropdownMenuLanguages)
    $('#shortcuts #instructions').attr('data-bs-original-title', language.shortcuts.instructions)
    $('#shortcuts #unpin-shortcuts').attr('data-bs-original-title', language.shortcuts.unpinShortcuts)
    $('#shortcuts #pt-BR').text(language.shortcuts.languages.ptBr)
    $('#shortcuts #en-US').text(language.shortcuts.languages.enUs)

    $('.list-unstyled .about').text(language.albuns.about)

    $('#search-not-found').text(language.search.searchNotFound)

    changeSidebarTitle()
}

// loadMusic = music => {
//     try {
//         musics[music]
//         selectMusic(music)
//     } catch (e) {
//         console.log('deu ruim')
//     }
// }

// loadAlbum = album => {
//     if (getAlbum(album) != undefined) {
//         if (currentContent.content === undefined) return updateCurrentContent('album', album)
//         loadContent(`albuns/${ album }`, true)
//         updateCurrentContent('album', album)
//     } else {
//         console.log('deu ruim')
//     }
// }

resertToolbar = () => {
    $('#toolbar a').removeClass('active')
    $('.action-autoscroll').removeClass('autoscroll')
}

headShake = (el) => {
    el.classList.toggle('animate__animated')
    el.classList.toggle('animate__headShake')

    setTimeout(() => {
        el.classList.toggle('animate__animated')
        el.classList.toggle('animate__headShake')
    }, 1000)
}

changeText = (element) => {
    text = element.text()
    
    element.html(`${ language.contribution.copy }`)

    setTimeout(function() {
        element.html(`${ text }`)
    }, 1000);
}

changeSidebarTitle = () => {
    if ($(window).width() < 768) {
        $('#shortcuts #hide-albuns-toggle span').text(language.shortcuts.albumToggle.show)
    } else {
        $('#shortcuts #hide-albuns-toggle span').text(language.shortcuts.albumToggle.hide)
    }
}
