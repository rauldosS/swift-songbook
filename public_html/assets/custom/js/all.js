// ANALYRICS
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-2BZ30CLHS1');

// AUTOSCROLL

// CONFIG
let musicId = undefined
let musicTitle = undefined
let blocked = undefined
let tuning = undefined
let chordShape = undefined
let capoFret = undefined
let spotify = undefined
let chordsMusic = undefined
let videoUrl = undefined
let versions = undefined
let cipherParts = undefined
let cipherLyrics = undefined
let progressions = undefined
let lyrics = undefined
let alerts = undefined
let listGroupAlbum = undefined
let basicCipher = false
let palmMute = false
let tabs = []
let progressionsHtml = {}
let tabsHtml = {}
let cipherLyricsPartsHtml = {}
let cipherLyricsColumnsPartsHtml = {}
let currentContent = {
    content: undefined,
    name: undefined
}

let partsCipher = []
let completeCipher = []
let completeCipherColumns = []

const userLang = navigator.language || navigator.userLanguage
const languages = ['en-US', 'pt-BR']
const userContainsLanguage = languages.includes(userLang)

const chordsHtml = {
    C: `<chord name="C" positions="x32010" fingers="-32-1-" size="2" ></chord>`,
    'C/E': `<chord name="C/E" positions="032010" fingers="-32-1-" size="2" ></chord>`,
    Cadd9: `<chord name="Cadd9" positions="x32033" fingers="-21-34" size="2" ></chord>`,
    D: `<chord name="D" positions="xx0232" fingers="---132" size="2" ></chord>`,
    Dsus4: `<chord name="Dsus4" positions="xx0233" fingers="---133" size="2" ></chord>`,
    E: `<chord name="E" positions="022100" fingers="-231--" size="2" ></chord>`,
    Em: `<chord name="Em" positions="022000" fingers="-23---" size="2" ></chord>`,
    F: `<chord name="F" positions="133211" fingers="134211" size="2" ></chord>`,
    'F#m': `<chord name="F#m" positions="244322" fingers="134211" size="2" ></chord>`,
    Fsus2: `<chord name="Fsus2" positions="xx3011" fingers="--3-11" size="2" ></chord>`,
    Fmaj7: `<chord name="Fmaj7" positions="xx3210" fingers="--321-" size="2" ></chord>`,
    G: `<chord name="G" positions="320033" fingers="21--34" size="2" ></chord>`,
    Gsus4: `<chord name="Gsus4" positions="300010" fingers="3---1-" size="2" ></chord>`,
    Gadd11: `<chord name="Gadd11" positions="320010" fingers="32--1-" size="2" ></chord>`,
    'G/B': `<chord name="G/B" positions="x20003" fingers="-1---2" size="2" ></chord>`,
    A: `<chord name="A" positions="x02220" fingers="--123-" size="2" ></chord>`,
    Am: `<chord name="Am" positions="x02210" fingers="--231-" size="2" ></chord>`,
    Am7: `<chord name="Am7" positions="x02010" fingers="--2-1-" size="2" ></chord>`,
    Bm: `<chord name="Bm" positions="x24432" fingers="-13421" size="2" ></chord>`,
}

const progressionsType = {
    simple: '1 + 2 + 3 + 4 +',
    complex: '1 a + e 2 a + e 3 a + e 4 a + e'
}

const alertsHtml = {
    'pt-BR': {
        palmMute: '<span id="palm-mute-alert" class="badge animate__animated animate__flash animate__delay-1s animate__repeat-2 bg-light mb-3"><b class="palm-mute">Ritmo em laranja</b> deve ser tocado com palm mute</span>',
        repeatIntro: `
            <div class="alert d-flex align-items-center mb-3" role="alert">
                <i class="bi bi-arrow-clockwis me-2"></i>
                <div>
                    Repeat Intro
                </div>
            </div>
        `
    },
    'en-US': {
        palmMute: '<span id="palm-mute-alert" class="badge animate__animated animate__flash animate__delay-1s animate__repeat-2 bg-light mb-3"><b class="palm-mute">Orange strum</b> should be played with palm mute</span>',
        repeatIntro: `
            <div class="alert d-flex align-items-center mb-3" role="alert">
                <i class="bi bi-arrow-clockwis me-2"></i>
                <div>
                    Repeat Intro
                </div>
            </div>
        `
    }
}

const divider = '======================================================='

const albuns = [
    {
        id: 'taylor-swift',
        name: 'Taylor Swift',
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
        name: 'Fearless',
        musics: [
            { id: 'fearless', name: 'Fearless', blocked: false, by: "Nena Shelby" },
            { id: 'Fifteen', name: 'Fifteen', blocked: true },
            { id: 'Love Story', name: 'Love Story', blocked: true },
            { id: 'Hey Stephen', name: 'Hey Stephen', blocked: true },
            { id: 'White Horse', name: 'White Horse', blocked: true },
            { id: 'You Belong With Me', name: 'You Belong With Me', blocked: true },
            { id: 'Breathe (feat. Colbie Caillat)', name: 'Breathe (feat. Colbie Caillat)', blocked: true },
            { id: 'Tell Me Why', name: 'Tell Me Why', blocked: true },
            { id: "You're Not Sorry", name: "You're Not Sorry", blocked: true },
            { id: 'The Way I Loved You', name: 'The Way I Loved You', blocked: true },
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
        name: 'Speak Now',
        musics: [
            { id: "Mine", name: "Mine", blocked: true },
            { id: "Sparks Fly", name: "Sparks Fly", blocked: true },
            { id: "Back To December", name: "Back To December", blocked: true },
            { id: "Speak Now", name: "Speak Now", blocked: true },
            { id: "Dear John", name: "Dear John", blocked: true },
            { id: "Mean", name: "Mean", blocked: true },
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
        name: 'RED',
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
        name: '1989',
        musics: [
            { id: "Welcome To New York", name: "Welcome To New York", blocked: true },
            { id: "Blank Space", name: "Blank Space", blocked: true },
            { id: "Style", name: "Style", blocked: true },
            { id: "Out Of The Woods", name: "Out Of The Woods", blocked: true },
            { id: "All You Had To do Was Stay", name: "All You Had To do Was Stay", blocked: true },
            { id: "Shake It Off", name: "Shake It Off", blocked: true },
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
        name: 'Reputation',
        musics: [
            { id: "...Ready For It?", name: "...Ready For It?", blocked: true },
            { id: "End Game (feat. Ed Sheeran & Future)", name: "End Game (feat. Ed Sheeran & Future)", blocked: true },
            { id: "I Did Something Bad", name: "I Did Something Bad", blocked: true },
            { id: "Don’t Blame Me", name: "Don’t Blame Me", blocked: true },
            { id: "Delicate", name: "Delicate", blocked: true },
            { id: "Look What You Made Me Do", name: "Look What You Made Me Do", blocked: true },
            { id: "So It Goes…", name: "So It Goes…", blocked: true },
            { id: "Gorgeous", name: "Gorgeous", blocked: true },
            { id: "Getaway Car", name: "Getaway Car", blocked: true },
            { id: "King Of My Heart", name: "King Of My Heart", blocked: true },
            { id: "Dancing With Our Hands Tied", name: "Dancing With Our Hands Tied", blocked: true },
            { id: "Dress", name: "Dress", blocked: true },
            { id: "This Is Why We Can’t Have Nice Things", name: "This Is Why We Can’t Have Nice Things", blocked: true },
            { id: "Call It What You Want", name: "Call It What You Want", blocked: true },
            { id: "New Year’s Day", name: "New Year’s Day", blocked: true },
        ]
    },
    {
        id: 'lover',
        name: 'Lover',
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
        name: 'Folklore',
        musics: [
            { id: "​the 1", name: "​the 1", blocked: true },
            { id: "cardigan", name: "cardigan", blocked: false },
            { id: "the last great american dynasty", name: "the last great american dynasty", blocked: true },
            { id: "exile", name: "exile", blocked: true },
            { id: "​my tears ricochet", name: "​my tears ricochet", blocked: true },
            { id: "​mirrorball", name: "​mirrorball", blocked: true },
            { id: "seven", name: "seven", blocked: true },
            { id: "august", name: "august", blocked: true },
            { id: "​this is me trying", name: "​this is me trying", blocked: true },
            { id: "​illicit affairs", name: "​illicit affairs", blocked: true },
            { id: "invisible string", name: "invisible string", blocked: true },
            { id: "mad woman", name: "mad woman", blocked: true },
            { id: "epiphany", name: "epiphany", blocked: true },
            { id: "betty", name: "betty", blocked: true },
            { id: "​peace", name: "​peace", blocked: true },
            { id: "hoax", name: "hoax", blocked: false },
            { id: "the lakes", name: "the lakes", blocked: true },
        ]
    },
    {
        id: 'evermore',
        name: 'Evermore',
        musics: [
            { id: "willow", name: "willow", blocked: true },
            { id: "champagne problems", name: "champagne problems", blocked: true },
            { id: "gold rush", name: "gold rush", blocked: true },
            { id: "‘tis the damn season", name: "‘tis the damn season", blocked: true },
            { id: "tolerate it", name: "tolerate it", blocked: true },
            { id: "no body, no crime (feat. HAIM)", name: "no body, no crime (feat. HAIM)", blocked: true },
            { id: "happiness", name: "happiness", blocked: true },
            { id: "dorothea", name: "dorothea", blocked: true },
            { id: "coney island (feat. The National)", name: "coney island (feat. The National)", blocked: true },
            { id: "ivy", name: "ivy", blocked: true },
            { id: "cowboy like me", name: "cowboy like me", blocked: true },
            { id: "long story short", name: "long story short", blocked: true },
            { id: "marjorie", name: "marjorie", blocked: true },
            { id: "closure", name: "closure", blocked: true },
            { id: "evermore (feat. Bon Iver)", name: "evermore (feat. Bon Iver)", blocked: true },
            { id: "right where you left me", name: "right where you left me", blocked: true },
            { id: "it's time to go", name: "it's time to go", blocked: true },
        ]
    },
    {
        id: 'midnights',
        name: 'Midnights',
        musics: [
            { id: "lavender-haze", name: "Lavender Haze", blocked: false },
            { id: "Maroon", name: "Maroon", blocked: true },
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

let musics = {}

albuns.forEach(album => {
    album.musics.forEach(music => {    
        music['album'] = album.id
        musics[music.id] = music
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
    const targetElement = $(elementSelector).last()
    const scrollContainer = $(scrollContainerSelector)
    
    // Check if the target element and scroll container exist
    if (targetElement.length > 0 && scrollContainer.length > 0) {
        // Get the current scroll position in the container
        const currentPosition = scrollContainer.scrollTop() - 36
    
        // Get the offset of the target element relative to the document
        const targetOffset = targetElement.offset().top
    
        // Adjust the target position based on the scroll container's position
        const targetPosition = targetOffset - scrollContainer.offset().top + currentPosition - 36
    
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

updateCurrentContent = (content = undefined, name = undefined) => {
    currentContent['content'] = content
    currentContent['name'] = name
}

getLanguage = () => {
    (localStorage.getItem('language') == null) ? setLanguage(userContainsLanguage ? userLang : languages[0]) : false
    $.ajax({
        url:  'assets/languages/' +  localStorage.getItem('language') + '.json',
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
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active')
    })

    $("#sidebar").load("templates/base/sidebar.html")
    // $("#toolbar").load("templates/base/toolbar.html")
    // $("#mini-player").load("templates/base/mini-player.html")
    // $("#contribution").load("templates/base/contribution.html")

    $('[data-toggle=tooltip]').tooltip({
        trigger : 'hover'
    })

    getLanguage()

    window.onload = function() {
        checkQueryParams()
        updateLanguage()

        $('#unpin-shortcuts').click(() => {
            $('#shortcuts').toggleClass('initial')
            $('#unpin-shortcuts').toggleClass('active')
        })

        loadCopy()
    }

    // TOOLBAR
    $('#toolbar .dropdown-menu').on({
        "click":function(e) {
            e.stopPropagation()
        }
    })

    $('.closer').on('click', function () {
        $('.btn-group').removeClass('open')
    })

    // CHORDS

    $('.btn-action-chords').click(() => {
        $('#chords').toggleClass('d-flex')
        $('.btn-action-chords').toggleClass('active')
    })

    // FULL SCREEN

    $('.btn-action-full-screen').click(() => {
        if ($('.btn-action-full-screen').hasClass('active')) {
            $('#shortcuts').show()
            $('#wrapper').css({
                'position': 'fixed',
                'top': '10%',
                'bottom': '1%',
                'left': '0',
                'right': '0',
                'padding-right': 'var(--bs-gutter-x,.75rem)',
                'padding-left': 'var(--bs-gutter-x,.75rem)'
            })
            $('.content').css({
                'border-radius': '10px'
            })
            $('#page-content-wrapper').css({ 'width': 'calc(100% - 260px)' })
        } else {
            $('#shortcuts').hide()
            $('#wrapper').css({
                'position': 'fixed',
                'top': '0%',
                'bottom': '0',
                'left': '0',
                'right': '0',
                'padding-right': '0',
                'padding-left': '0',
            })
            $('.content').css({
                'border-radius': '0'
            })
            $('#page-content-wrapper').css({ 'width': '100%' })
        }

        $('#sidebar').toggleClass('d-none')
        $('#hide-albuns-toggle').toggleClass('d-none')
        $('.btn-action-full-screen').toggleClass('active')
    })

    // FONT

    $('.font-action-button.increase').click(() => {
        const currentFontSize = $('pre[type="lyrics"]').css('font-size').split('px')[0]
        if (currentFontSize >= 7) {
            $('.tabs, .progressions, pre[type="lyrics"]').css({ 'font-size': parseInt(currentFontSize) - 2 + 'px' })
        }
    })

    $('.font-action-button.decrease').click(() => {
        const currentFontSize = $('pre[type="lyrics"]').css('font-size').split('px')[0]
        if (currentFontSize <= 25) {
            $('.tabs, .progressions, pre[type="lyrics"]').css({ 'font-size': parseInt(currentFontSize) + 2 + 'px' })
        }
    })

    // COLUMNS

    $('.columns-action-button.increase').click(() => {
        str_columns = $('#cipher-columns pre').css('columns')
        columns = str_columns.includes('auto') ? parseInt(str_columns.split('auto ')[1]) : parseInt(str_columns)

        if (columns > 4) {
            $('#cipher').children().not('.progressions').hide()
            $('.badge-info-cipher').hide()
            $('#cipher-columns pre').css('columns', (columns - 1).toString())
            $('#cipher-columns pre').css('column-count', (columns - 1).toString())
            $('#cipher-columns').show()
            scrollToElement('#cipher-columns')
        } else {
            $('#cipher').children().not('.progressions').show()
            $('.badge-info-cipher').show()
            $('#cipher-columns').hide()
            scrollToElement('#cipher')
        }
    })

    $('.columns-action-button.decrease').click(() => {
        str_columns = $('#cipher-columns pre').css('columns')
        columns = str_columns.includes('auto') ? parseInt(str_columns.split('auto ')[1]) : parseInt(str_columns)

        if (columns <= 7) {
            $('#cipher').children().not('.progressions').hide()
            $('.badge-info-cipher').hide()
            $('#cipher-columns pre').css('columns', (columns + 1).toString())
            $('#cipher-columns pre').css('column-count', (columns + 1).toString())
            $('#cipher-columns').show()
            scrollToElement('#cipher-columns')
        }
    })

    // Hide menu

    hide = (actionElement, targetElement, targetElementToScroll = '#cipher') => {
        if ($(actionElement).hasClass('active')) {
            $(targetElement).show()
        } else {
            $(targetElement).hide()
        }

        $(actionElement).toggleClass('active')

        if (targetElementToScroll != null) {
            scrollToElement(targetElementToScroll)
        }
    }

    show = (actionElement, targetElement) => {
        if ($(actionElement).hasClass('active')) {
            $(targetElement).show()
        } else {
            $(targetElement).hide()
        }

        scrollToElement(targetElement)
    }

    $('#unpin-toolbar').click(() => {
        $('#toolbar').toggleClass('initial')
        $('#unpin-toolbar').toggleClass('active')
    })

    $('#hide-lyrics').click(() => {hide('#hide-lyrics', 'pre[type="lyrics"]') })
    $('#hide-progressions').click(() => { hide('#hide-progressions', '.progressions') })
    $('#hide-tabs').click(() => { hide('#hide-tabs', '.tabs') })
    $('#hide-chords').click(() => { hide('#hide-chords', 'pre[type="lyrics"] b') })
    $('#hide-miniplayer, #close-miniplayer').click(() => { hide('#hide-miniplayer', '#mini-player', null) })
    $('#only-lyrics').click(() => {
        hide('#only-lyrics', '#cipher')
        show('#only-lyrics', '#lyrics')
    })
})

const content =  $('#content')
const cipherWrapper = $('#cipher-wrapper')
const cipherContent = $('#cipher-content')
const toolbar = $('#toolbar')
const miniPlayer = $('#mini-player')
const btnHome = $('#btn-home')

// const homePath = 'base/home'

loadContent = (path, switchLanguage = false) => {
    setLoading(true)
    hideCipherWrapper()

    content.load(`templates/${ switchLanguage ? language.code : '' }/${ path }.html`, function() {
        if (!['album', 'author', 'music'].includes(currentContent.content)) {
            updateLanguage()
        }
    })

    updateCurrentContent(path)

    content.show()

    if ($(window).width() < 768 && $('#sidebar').width() > 250) {
        $('#sidebar').toggleClass('toggled')
    }

    scrollTop()
    setLoading(false, 2500)
}

loadCopy = () => {
    $('[data-clipboard-text]').on('click', function() {
        textToCopy = $(this).attr('data-clipboard-text')

        const clipboard = new ClipboardJS('[data-clipboard-text]', {
            text: function() { return textToCopy }
        })
    
        clipboard.onClick(event)
        changeText($(this))
    })
}

checkQueryParams = () => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    })

    if (params.music === null && params.album === null) {
        if (params.help === '') {
            loadContent('help', true)
        }
    } else if (params.music != null) {
        loadMusic(params.music)
    } else if (params.album != null) {
        loadAlbum(params.album)
    }
}

updateLanguage = () => {
    switch (currentContent.content) {
        case 'album':
            loadAlbum(currentContent.name)
            break
        // case 'music':
        //     loadMusic(currentContent.name)
        case 'author':
            loadContent('author', true)
            break
    }

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

    changeSidebarTitle()
}

loadMusic = music => {
    try {
        musics[music]
        selectMusic(music)
    } catch (e) {
        console.log('deu ruim')
    }
}

loadAlbum = album => {
    if (getAlbum(album) != undefined) {
        if (currentContent.content === undefined) return updateCurrentContent('album', album)
        loadContent(`albuns/${ album }`, true)
        updateCurrentContent('album', album)
    } else {
        console.log('deu ruim')
    }
}

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
    const text = element.text()
    
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

// CHORDS
/*
 * chord.js
 *
 * Copyright (C) 2012 Aaron Spike [aaron@ekips.org]
 *
 * Based On:
 * Chord Image Generator
 * http://einaregilsson.com/2009/07/23/chord-image-generator/
 *
 * Copyright (C) 2009-2012 Einar Egilsson [einar@einaregilsson.com]
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var ChordJS = (function(){
    
    //Constants
    var NO_FINGER = '-';
    var THUMB = 'T';
    var INDEX_FINGER = '1';
    var MIDDLE_FINGER = '2';
    var RING_FINGER = '3';
    var LITTLE_FINGER = '4';
    var OPEN = 0;
    var MUTED = -1;
    var FRET_COUNT = 5;
    var FONT_NAME = "Arial";
    
    var ChordBoxImage = function(name, chord, fingers, size, stringNames) {

        //Fields
        var _ctx;
        var Pen = function(color, size) {
            return function(){
                _ctx.strokeStyle = color;
                _ctx.lineWidth = size;
                _ctx.lineCap = 'round';
            };
        };
        var Font = function(fname, size) {
            return function(){
                _ctx.font = size+"px "+fname;
                _ctx.textBaseline = 'top';
            };
        };
        var _graphics = (function(){
            var DrawLine = function(pen, x1, y1, x2, y2) {
                _ctx.beginPath();
                pen();
                _ctx.moveTo(x1, y1);
                _ctx.lineTo(x2, y2);
                _ctx.stroke();
            };
            var FillRectangle = function(color, x1, y1, x2, y2){
                _ctx.beginPath();
                _ctx.fillStyle = color;
                _ctx.rect(x1, y1, x2, y2);
                _ctx.fill();
            };
            var DrawCircle = function(pen, x1, y1, diameter) {
                var radius = diameter/2;
                _ctx.beginPath();
                pen();
                _ctx.arc(x1+radius, y1+radius, radius, 0, 2 * Math.PI, false);
                _ctx.stroke();
            };
            var FillCircle = function(color, x1, y1, diameter) {
                var radius = diameter/2;
                _ctx.beginPath();
                _ctx.fillStyle = color;
                _ctx.arc(x1+radius, y1+radius, radius, 0, 2 * Math.PI, false);
                _ctx.fill();
            };
            var MeasureString = function(text, font) {
                font();
                var metrics = _ctx.measureText(text);
                metrics.Width = metrics.width;
                metrics.Height = _ctx.measureText('M').width; // calculating the with of the letter 'M' a good approximation of the line height
                return metrics;
            };
            var DrawString = function(text, font, color, x, y) {
                font();
                _ctx.fillStyle = color;
                _ctx.fillText(text, x, y);
            };
            return {
                DrawLine: DrawLine,
                FillRectangle: FillRectangle,
                DrawCircle: DrawCircle,
                FillCircle: FillCircle,
                MeasureString: MeasureString,
                DrawString: DrawString,
            };
        })();

        var _size;
        var _chordPositions = [];
        var _fingers = [NO_FINGER, NO_FINGER, NO_FINGER,
                                                 NO_FINGER, NO_FINGER, NO_FINGER];
        
        var _stringNames = stringNames || 'EADGBe';
        var _chordName;
        var _error;

        var _fretWidth;
        var _lineWidth;
        var _boxWidth;
        var _boxHeight;

        var _imageWidth;
        var _imageHeight;
        var _xstart; //upper corner of the chordbox
        var _ystart;
        var _nutHeight;

        var _dotWidth;
        var _signWidth;
        var _signRadius;

            //Different font sizes
        var _fretFontSize;
        var _fingerFontSize;
        var _nameFontSize;
        var _superScriptFontSize;
        var _markerWidth;

        var _foregroundBrush = '#000';
        var _backgroundBrush = '#FFF';

        var _baseFret;
        
        var InitializeSizes = function() {
            _fretWidth = 4 * _size;
            _nutHeight = _fretWidth / 2;
            _lineWidth = Math.ceil(_size * 0.31);
            _dotWidth = Math.ceil(0.9 * _fretWidth);
            _markerWidth = 0.7 * _fretWidth;
            _boxWidth = 5 * _fretWidth + 6 * _lineWidth;
            _boxHeight = FRET_COUNT * (_fretWidth + _lineWidth) + _lineWidth;

            //Find out font sizes
            //TODO: calculate perc via CSS
            //FontFamily family = new FontFamily(FONT_NAME);
            //perc = family.GetCellAscent(FontStyle.Regular) / family.GetLineSpacing(FontStyle.Regular);
            var perc = 0.8;
            _fretFontSize = _fretWidth / perc;
            _fingerFontSize = _fretWidth * 0.8;
            _guitarStringFontSize = 'bold ' + (_fretWidth * 0.8);
            _nameFontSize = _fretWidth * 2 / perc;
            _superScriptFontSize = 0.7 * _nameFontSize;
            if (_size == 1) {
                _nameFontSize += 2;
                _fingerFontSize += 2;
                _fretFontSize += 2;
                _superScriptFontSize += 2;
            }

            _xstart = _fretWidth;
            _ystart = Math.round(0.2 * _superScriptFontSize + _nameFontSize + _nutHeight + 1.7 * _markerWidth);

            _imageWidth = (_boxWidth + 5 * _fretWidth);
            _imageHeight = (_boxHeight + _ystart + _fretWidth + _fretWidth);

            _signWidth = (_fretWidth * 0.75);
            _signRadius = _signWidth / 2;
        };
        
        var getWidth = function(){return _imageWidth;};
        var getHeight = function(){return _imageHeight;};

        var ParseSize = function(size) {
            _size = parseFloat(size);
            if (isNaN(_size)) {
                _size = 1;
            }
        };

        var ParseFingers = function(fingers) {
            fingers = String(fingers).toUpperCase()+'------';
            fingers = fingers.replace(/[^\-T1234]/g,'');
            _fingers = fingers.substr(0,6).split('');
        };

        var ParseChord = function(chord) {
            if (chord == null || typeof chord == 'undefined' || !chord.match(/[\dxX]{6}|((1|2)?[\dxX]-){5}(1|2)?[\dxX]/)) {
                _error = true;
            } else {
                var parts;
                if (chord.length > 6) {
                    parts = chord.split('-');
                } else {
                    parts = chord.split('');
                }
                var maxFret = 0;
                var minFret = Number.MAX_VALUE;
                for (var i = 0; i < 6; i++) {
                    if (parts[i].toUpperCase() == "X") {
                        _chordPositions[i] = MUTED;
                    } else {
                        _chordPositions[i] = parseInt(parts[i]);
                        maxFret = Math.max(maxFret, _chordPositions[i]);
                        if (_chordPositions[i] != 0) {
                            minFret = Math.min(minFret, _chordPositions[i]);
                        }
                    }
                }
                if (maxFret <= 5) {
                    _baseFret = 1;
                } else {
                    _baseFret = minFret;
                }
            }
        };
        
        
        var CreateImage = function(ctx,layout) {
            _ctx = ctx;
            _graphics.FillRectangle(_backgroundBrush, 0, 0, _imageWidth, _imageHeight);
            if (_error) {
                //Draw red x
                var errorPen = Pen('red', 3);
                _graphics.DrawLine(errorPen, 0, 0, _imageWidth, _imageHeight);
                _graphics.DrawLine(errorPen, 0, _imageHeight, _imageWidth, 0);
            } else {
                if (typeof layout === 'undefined' || layout === '1') {
                    DrawChordBox();
                    DrawBars();
                    DrawChordPositionsAndFingers();
                    DrawChordName();
                    DrawStringNames();
                } else if (layout === '2') {
                    DrawChordBox();
                    DrawChordPositions();
                    DrawBars();
                    DrawChordName();
                    DrawFingers();
                }
            }
        };
        
        var DrawChordBox = function() {
            var pen = Pen(_foregroundBrush, _lineWidth);
            var totalFretWidth = _fretWidth + _lineWidth;

            for (var i = 0; i <= FRET_COUNT; i++) {
                var y = _ystart + i * totalFretWidth;
                _graphics.DrawLine(pen, _xstart, y, _xstart + _boxWidth - _lineWidth, y);
            }

            for (i = 0; i < 6; i++) {
                var x = _xstart + (i * totalFretWidth);
                _graphics.DrawLine(pen, x, _ystart, x, _ystart + _boxHeight - _lineWidth);
            }

            if (_baseFret == 1) {
                //Need to draw the nut
                var nutHeight = _fretWidth / 2;
                _graphics.FillRectangle(_foregroundBrush, _xstart - _lineWidth / 2, _ystart - nutHeight, _boxWidth, nutHeight);
            }
        };
        
        var DrawBars = function() {
            var bars = {};
            var bar;
            for (var i = 0; i < 5; i++) {
                if (_chordPositions[i] != MUTED && _chordPositions[i] != OPEN && _fingers[i] != NO_FINGER && !bars.hasOwnProperty(_fingers[i])) {
                    bar = { 'Str':i, 'Pos':_chordPositions[i], 'Length':0, 'Finger':_fingers[i] };
                    for (var j = i + 1; j < 6; j++) {
                        if (_fingers[j] == bar['Finger'] && _chordPositions[j] == _chordPositions[i]) {
                            bar['Length'] = j - i;
                        }
                    }
                    if (bar['Length'] > 0) {
                        bars[bar['Finger']] = bar;
                    }
                }
            }

            //TODO: figure out why there are two pens here
            var pen = Pen(_foregroundBrush, _lineWidth * 3);
            var totalFretWidth = _fretWidth + _lineWidth;
            for (var b in bars) {
                if (bars.hasOwnProperty(b)){
                    bar = bars[b];
                    var xstart = _xstart + bar['Str'] * totalFretWidth;
                    var xend = xstart + bar['Length'] * totalFretWidth;
                    var y = _ystart + (bar['Pos'] - _baseFret + 1) * totalFretWidth - (totalFretWidth / 2);
                    pen = Pen(_foregroundBrush, _dotWidth / 2);
                    _graphics.DrawLine(pen, xstart, y, xend, y);
                }
            }
        };

        
        var DrawChordPositions = function() {
            var yoffset = _ystart - _fretWidth;
            var xoffset = _lineWidth / 2;
            var totalFretWidth = _fretWidth + _lineWidth;
            var xfirstString = _xstart + 0.5 * _lineWidth;
            for (var i = 0; i < _chordPositions.length; i++) {
                var absolutePos = _chordPositions[i];
                var relativePos = absolutePos - _baseFret + 1;

                var xpos = _xstart - (0.5 * _fretWidth) + (0.5 * _lineWidth) + (i * totalFretWidth);
                if (relativePos > 0) {
                    var ypos = relativePos * totalFretWidth + yoffset;
                    _graphics.FillCircle(_foregroundBrush, xpos, ypos, _dotWidth);
                } else if (absolutePos == OPEN) {
                    var pen = Pen(_foregroundBrush, _lineWidth);
                    var ypos = _ystart - _fretWidth;
                    var markerXpos = xpos + ((_dotWidth - _markerWidth) / 2);
                    if (_baseFret == 1) {
                        ypos -= _nutHeight;
                    }
                    _graphics.DrawCircle(pen, markerXpos, ypos, _markerWidth);
                } else if (absolutePos == MUTED) {
                    var pen = Pen(_foregroundBrush, _lineWidth * 1.5);
                    var ypos = _ystart - _fretWidth;
                    var markerXpos = xpos + ((_dotWidth - _markerWidth) / 2);
                    if (_baseFret == 1) {
                        ypos -= _nutHeight;
                    }
                    _graphics.DrawLine(pen, markerXpos, ypos, markerXpos + _markerWidth, ypos + _markerWidth);
                    _graphics.DrawLine(pen, markerXpos, ypos + _markerWidth, markerXpos + _markerWidth, ypos);
                }
            }
        };
        
        
        var DrawChordPositionsAndFingers = function() {
            var yoffset = _ystart - _fretWidth;
            var xoffset = _lineWidth / 2;
            var totalFretWidth = _fretWidth + _lineWidth;
            var xfirstString = _xstart + 0.5 * _lineWidth;
            var font = Font(FONT_NAME, _fingerFontSize);
            for (var i = 0; i < _chordPositions.length; i++) {
                var absolutePos = _chordPositions[i];
                var relativePos = absolutePos - _baseFret + 1;

                var xpos = _xstart - (0.5 * _fretWidth) + (0.5 * _lineWidth) + (i * totalFretWidth);
                if (relativePos > 0) {
                    var ypos = relativePos * totalFretWidth + yoffset;
                    _graphics.FillCircle(_foregroundBrush, xpos, ypos, _dotWidth);
                    var finger = _fingers[i];
                    if (finger != NO_FINGER) {
                        var charSize = _graphics.MeasureString(finger.toString(), font);
                        _graphics.DrawString(finger.toString(), font, _backgroundBrush, xpos - (0.5 * charSize.Width) + _dotWidth/2, ypos - (0.5 * charSize.Height) + _dotWidth/2);
                    }
                } else if (absolutePos == OPEN) {
                    var pen = Pen(_foregroundBrush, _lineWidth);
                    var ypos = _ystart - _fretWidth;
                    var markerXpos = xpos + ((_dotWidth - _markerWidth) / 2);
                    if (_baseFret == 1) {
                        ypos -= _nutHeight;
                    }
                    _graphics.DrawCircle(pen, markerXpos, ypos, _markerWidth);
                    var finger = _fingers[i];
                    if (finger != NO_FINGER) {
                        var charSize = _graphics.MeasureString(finger.toString(), font);
                        _graphics.DrawString(finger.toString(), font, _backgroundBrush, xpos - (0.5 * charSize.Width) + _dotWidth/2, ypos - (0.5 * charSize.Height) + _dotWidth/2);
                    }
                } else if (absolutePos == MUTED) {
                    var pen = Pen(_foregroundBrush, _lineWidth * 1.5);
                    var ypos = _ystart - _fretWidth;
                    var markerXpos = xpos + ((_dotWidth - _markerWidth) / 2);
                    if (_baseFret == 1) {
                        ypos -= _nutHeight;
                    }
                    _graphics.DrawLine(pen, markerXpos, ypos, markerXpos + _markerWidth, ypos + _markerWidth);
                    _graphics.DrawLine(pen, markerXpos, ypos + _markerWidth, markerXpos + _markerWidth, ypos);
                    var finger = _fingers[i];
                    if (finger != NO_FINGER) {
                        var charSize = _graphics.MeasureString(finger.toString(), font);
                        _graphics.DrawString(finger.toString(), font, _backgroundBrush, xpos - (0.5 * charSize.Width) + _dotWidth/2, ypos - (0.5 * charSize.Height) + _dotWidth/2);
                    }
                }
            }
        };
        
        
        var DrawFingers = function() {
            var xpos = _xstart + (0.5 * _lineWidth);
            var ypos = _ystart + _boxHeight;
            var font = Font(FONT_NAME, _fingerFontSize);
            for (var f=0; f<_fingers.length; f++) {
                var finger = _fingers[f];
                if (finger != NO_FINGER) {
                    var charSize = _graphics.MeasureString(finger.toString(), font);
                    _graphics.DrawString(finger.toString(), font, _foregroundBrush, xpos - (0.5 * charSize.Width), ypos - (0.5 * charSize.Height) + _dotWidth/2);
                }
                xpos += (_fretWidth + _lineWidth);
            }
        }
        
        
        var DrawStringNames = function() {
            var xpos = _xstart + (0.5 * _lineWidth);
            var ypos = _ystart + _boxHeight;
            var font = Font(FONT_NAME, _guitarStringFontSize);
            for (var s=0; s<6; s++) {
                var guitarString = _stringNames[s];
                var charSize = _graphics.MeasureString(guitarString, font);
                _graphics.DrawString(guitarString, font, _foregroundBrush, xpos - (0.5 * charSize.Width), ypos);
                xpos += (_fretWidth + _lineWidth);
            }
        };

        var DrawChordName = function() {

            var nameFont = Font(FONT_NAME, _nameFontSize);
            var superFont = Font(FONT_NAME, _superScriptFontSize);
            var name;
            var supers;
            if (_chordName.indexOf('_') == -1) {
                name = _chordName;
                supers = "";
            } else {
                var parts = _chordName.split('_');
                name = parts[0];
                supers = parts[1];
            }
            var stringSize = _graphics.MeasureString(name, nameFont);

            var xTextStart = _xstart;
            if (stringSize.Width < _boxWidth) {
                xTextStart = _xstart + ((_boxWidth - stringSize.Width) / 2);
            }
            _graphics.DrawString(name, nameFont, _foregroundBrush, xTextStart, 0.2 * _superScriptFontSize);
            if (supers != "") {
                _graphics.DrawString(supers, superFont, _foregroundBrush, xTextStart + 0.8 * stringSize.Width, 0);
            }

            if (_baseFret > 1) {
                var fretFont = Font(FONT_NAME, _fretFontSize);
                var offset = (_fretFontSize - _fretWidth) / 2;
                _graphics.DrawString(_baseFret + "fr", fretFont, _foregroundBrush, _xstart + _boxWidth + 0.4 * _fretWidth, _ystart - offset);
            }
        };
        
        //MAIN
        if (name == null || typeof name == 'undefined') {
            _chordName = "";
        } else {
            _chordName = name.replace(" ", "");
        }
        ParseChord(chord);
        ParseFingers(fingers);
        ParseSize(size);
        InitializeSizes();
        
        return {
            getWidth: getWidth,
            getHeight: getHeight,
            Draw: CreateImage
        };

    };  
    
    function GenerateChordHtml(name, positions, fingering, size, layout, stringNames) {
        if (positions.length != 6 || fingering.length != 6) {
            console.error('ChordJS cannot generate a chord diagram from invalid chord input! (Too many positions or fingers.');
            console.log('ChordJS will render an empty chord instead!');
            positions = 'xxxxxx';
            fingering = '------';
        }
        var chordObj = ChordBoxImage(name, positions, fingering, size, stringNames);
        var canvas = document.createElement('canvas');
        canvas.setAttribute('class', 'rendered-chord');
        canvas.setAttribute('width', chordObj.getWidth());
        canvas.setAttribute('height', chordObj.getHeight());
        var ctx = canvas.getContext('2d');
        chordObj.Draw(ctx,layout);
        return canvas;
    }
    
    //requires jQuery
    //example: <chord name="A" positions="X02220" fingers="--222-" size="7" ></chord>
    var ReplaceChordElements = function(baseEl) {
          baseEl = baseEl || 'body';

          var renderedChords = document.querySelector(baseEl).getElementsByClassName('rendered-chord')
          for(var i=0, l=renderedChords.length; i<l; ++i) {
              var elt = renderedChords[0];
              elt.remove();
          }
          var chords = document.getElementsByTagName('chord');
          for(var i=0; i<chords.length; ++i) {
            var elt = chords[i]
            var name = elt.getAttribute('name');
            var positions = elt.getAttribute('positions');
            var fingers = elt.getAttribute('fingers');
            var size = elt.getAttribute('size');
            if (elt.getAttribute('layout') === null) {
				var layout = elt.setAttribute('layout', '1');
			} else {
				var layout = elt.getAttribute('layout');
			}
            var stringNames = elt.getAttribute('strings');
            var canvas = GenerateChordHtml(name, positions, fingers, size, layout, stringNames);
            elt.parentNode.insertBefore(canvas, elt);
        };
    };
      
    return {
        chord: ChordBoxImage,
        replace: ReplaceChordElements,
        generate: GenerateChordHtml
    };

})();

var chords = ChordJS;

// CIPHER-GENERATOR
let cipher = undefined

selectMusic = (selectedMusicId) => {
    resetConfig()

    btnHome.css({ 'display': 'inline-block' })
    cipherWrapper.show()
    const music = musics[selectedMusicId]
    cipherContent.empty()

    hideContent()
    resertToolbar()
    cipherContent.hide()

    createAlbumCSS(music.album)
    createCipherJS(music.album, music.id)

    loadCipher(music.id, music.album)

    cipherContent.show()

    scrollTop()

    toolbar.show()
    miniPlayer.show()

    toolbar.show()
    miniPlayer.show()

    if ($(window).width() < 768 && $('#sidebar').width() > 250) {
        $('#sidebar').toggleClass('toggled')
    }
}

resetConfig = () => {
    progressionsHtml = {}
    tabsHtml = {}
    cipherLyricsPartsHtml = {}
    cipherLyricsColumnsPartsHtml = {}
    partsCipher = []
    completeCipher = []
    completeCipherColumns = []

    tabs = []

    basicCipher = false
    palmMute = false
}

hideContent = () => {
    $('#content').hide()
}

hideCipherWrapper = () => {
    cipherWrapper.hide()
    toolbar.hide()
    cipherContent.hide()
    miniPlayer.hide()
}

createAlbumCSS = (album) => {
    cipherContent.prepend(`<link href="assets/custom/css/albuns/${ album }.css" rel="stylesheet">`)
}

createCipherJS = (album, music) => {
    cipherContent.prepend(`<script src="assets/custom/js/albuns/${ album }/${ music }.js"></script>`)
}

createCipherCapoHTML = () => {
    if (capoFret) {
        if (language.code === 'pt-BR') {
            return capoFret ? language.cipher.capo[0] + capoFret + language.cipher.capo[1] : ''
        } else {
            return `Capo: <b>${ capoFret }` + (capoFret > 3 ? 'th' : language.cipher.capo[capoFret]) + '</b> fret'
        }
    } else {
        return ''
    }
}

createCipherHeaderHTML = (album) => {
    const capo = createCipherCapoHTML()
    cipherContent.append(
        `<div id="cipher-header" class="animate__animated animate__fadeIn">
            ${ basicCipher ? '<span class="badge bg-' + album + ' mb-3">' + language.cipher.basicCipher + '</span>' : '' }
            <h1 class="title">${ musicTitle }</h1>
            <span class="cipher-tone">${ language.cipher.tuning }: <b>${ tuning }</b> ${ chordShape ? '(' + language.cipher.chordShape + ' ' + chordShape + ')' : '' }</span>
            <span class="song-capo">
                ${ capo }
            </span>
            <iframe style="border-radius:12px" src="${ spotify }" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    `)
}

createChordsHTML = () => {
    cipherContent.append(
        `<div id="chords" class="bd-callout bd-callout-info text-black-50 fw-normal position-relative">
            <div>
            </div>
            <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-album">
                Chords
            </span>
        </div>`
    )
    chordsMusic.forEach(chord => {
        cipherContent.find('#chords div').append(chordsHtml[chord])
    })
    ChordJS.replace()
}

createArrowsProgression = (baseProgression, changeChord = null, palmMute = false, blocking = false) => {
    let chordChange = false
    let chordChangeColor = false
    return baseProgression.split(' ').map((progression, i, {length}) => {
        if (progression === 'D') {
            return `<i class="fa-solid bi bi-arrow-down 
                ${ palmMute ? 'palm-mute' : '' } 
                ${ blocking ? 'blocking' : '' } 
                ${ chordChangeColor ? 'chordChange' : '' }"
                ${ chordChange ? 'note=" ' + changeChord + ' "' : ''}
            ></i> `
        }
        if (progression === 'd-highlight') {
            return `<b class="highlight"><i class="fa-solid bi bi-arrow-down 
                ${ palmMute ? 'palm-mute' : '' } 
                ${ blocking ? 'blocking' : '' } 
                ${ chordChangeColor ? 'chordChange' : '' }"
                ${ chordChange ? 'note=" ' + changeChord + ' "' : ''}
            ></i></b> `
        }
        chordChange = false
        if (progression === 'U') return `<i class="bi bi-arrow-up 
            ${ palmMute ? 'palm-mute' : '' } 
            ${ blocking ? 'blocking' : '' } 
            ${ chordChangeColor ? 'chordChange' : '' }"
            ${ chordChange ? 'note=" ' + changeChord + ' "' : ''}
        ></i> `
        if (progression === 'u-highlight') return `<b class="highlight"><i class="bi bi-arrow-up 
            ${ palmMute ? 'palm-mute' : '' } 
            ${ blocking ? 'blocking' : '' } 
            ${ chordChangeColor ? 'chordChange' : '' }"
            ${ chordChange ? 'note=" ' + changeChord + ' "' : ''}
        ></i></b> `
        if (progression === '-') return `<span class="strum">${ progression }</span> `
        if (progression === 'break') return `<br>`
        if (progression === 'block') return '<i class="fa-solid fa-ban strum"></i> '
        chordChange = progression === 'chordChange'
        chordChangeColor = progression === 'chordChange'
        return ''
    }).join('')
}

createNotes = (notes) => {
    let chordChange = false

    return notes.map((note) => {
        if (note === 'doubleBreak') return `<br><br>| `
        if (note === 'break') return `<br>| `
        if (note === 'block') return '<i class="fa-solid fa-ban strum"></i> |'
        if (note === '...') return `<b>...</b>`
        if (note.includes('x')) return `<b class="color-red">${ note }</b>`
        if (note.includes(',')) {
            return note.split(',').map((n, i, {length}) => {
                if (chordChange) return `<b class="chordChange">${ n }</b> ${ i + 1 === length ? ' | ' : '' } `
                if (n === ' chordChange') {
                    chordChange = true
                    return ''
                } else chordChange = false
                return `<b>${ n }</b> ${ i + 1 === length ? ' | ' : '' } `
            }).join('')
        }
        return `<b>${ note }</b> | `
    }).join('')
}

getMultipleProgressionsTable = (notes, progressions, marginNotes) => {
    let notesHTML = ''
    let progressionsHTML = ''

    Array(notes.length).fill(0).map((_, i) => {
        notesHTML = notesHTML.concat(`<th class="color-album" scope="col">${ notes[i] }</th>`)
        progressionsHTML = progressionsHTML.concat(`<td>${ createArrowsProgression(progressions[i]) }</td>`)
    })

    return `<table class="table table-bordered progression-table ${ marginNotes ? '' : 'mb-0' }">
        <thead>
            <tr>
                <th class="bg-album text-white" scope="col">CHORD</th>
                ${ notesHTML }
            </tr>
        </thead>
        <tbody>
            <tr>
                <th class="bg-album text-white" scope="row">STRUM</th>
                ${ progressionsHTML }
            </tr>
        </tbody>
    </table>`   
}

createProgressionHTML = () => {
    progressions.forEach(progression => {
        // const multipleProgression = progression.notesMultipleProgression !== undefined
        const notes = progression.notes !== undefined ? createNotes(progression.notes) : ''
        const multipleProgressionTable = progression.notesMultipleProgression !== undefined ? getMultipleProgressionsTable(
            progression.notesMultipleProgression,
            progression.multipleProgression,
            progression.notes !== undefined
        ) : ''

        const arrowProgression = progression.progression !== undefined ? createArrowsProgression(
            progression.progression,
            progression.chordChange !== undefined ? progression.chordChange : null,
            progression.palmMute !== undefined,
            progression.blocking !== undefined
        ) : ''

        const repeat = progression.repeat !== undefined ? `<div class="repeatChord">
            ${ progression.repeat }
        </div>` : ''

        progressionsHtml[progression.id] = `
            <div id="progression-${ progression.id }" class="bd-callout bd-callout-info text-black-50 fw-normal position-relative progressions">
                ${ multipleProgressionTable }
                <div class="d-flex justify-content-between ps-1 pe-1">
                    <div>
                        <div>${ notes ? '|' : '' } ${ notes }</div>
                        <div>
                            <div class="">${ progression.caption }</div>
                        </div>
                    </div>
                    ${ repeat }
                    <div class="d-flex align-items-center text-start ms-auto">
                        <div class="fw-bold strumming">${ arrowProgression }</div>
                    </div>
                </div>
                <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-album">${ progression.title }</span>
            </div>
        `
    })
}

createTabsHTML = () => {
    tabs.forEach(data => {
        let callout = '<div class="bd-callout bd-callout-info fw-normal position-relative tabs">'

        data.tabs.forEach(tab => {
            callout = callout.concat(`<div class="tab">${ tab }</div>`)
        })

        callout = callout.concat(
            `<span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-album">${ data.title }</span>`,
            '</div>'
        )

        tabsHtml[data.id] = callout
    })
}

createCipherLyricsHTML = () => {
    const cipherLyricsList = cipherLyrics.split(divider)

    cipherParts.forEach((part, index) => {
        cipherLyricsPartsHtml[part.id] = part.ignoreTitle !== undefined ? `<pre type="lyrics">
            ${ cipherLyricsList[index] }
            </pre>` : `<pre type="lyrics">
<a
    onclick="scrollToElement('#progression-${ part.referenceProgression.id }')"
    data-toggle="tooltip"
    data-bs-placement="right"
    data-bs-html="true"
    title="Progression <i class='fa-solid fa-arrow-right-long ms-2 me-2'></i> ${ part.referenceProgression.title }"
    class="title-part-cipher"
>[${ part.title }]</a>
            ${ cipherLyricsList[index] }
            </pre>`

        cipherLyricsColumnsPartsHtml[part.id] = part.ignoreTitle !== undefined ? `${ cipherLyricsList[index] }` : `
<a
    onclick="scrollToElement('#progression-${ part.referenceProgression.id }')"
    data-toggle="tooltip"
    data-bs-placement="right"
    data-bs-html="true"
    title="Progression <i class='fa-solid fa-arrow-right-long ms-2 me-2'></i> ${ part.referenceProgression.title }"
    class="title-part-cipher"
>[${ part.title }]</a>
            ${ cipherLyricsList[index] }`
    })
}

function replaceWholeChordsInLines() {
    const replacements_chords = chordsMusic.map(chord => {
        return { searchValue: chord, replaceValue: `<b>${ chord }</b>` }
    }).reverse()

    for (const replacement of replacements_chords) {
      const { searchValue, replaceValue } = replacement
      const regex = new RegExp(`\\b${searchValue}\\b`, 'g')
      cipherLyrics = cipherLyrics.replaceAll(regex, replaceValue)
    }

    return cipherLyrics
}

createChordColumns = () => {
    cipherContent.append(`<div id="cipher-columns" class="mt-3">
        <pre type="lyrics"></pre>
    </div>`)

    const cipherColumnsPre = $('#cipher-columns pre')

    completeCipherColumns.forEach(part => {
        cipherColumnsPre.append(`<div class="border-column pb-2 pt-2">${ part }</div>`)
    })
}

createLyrics = () => {
    cipherContent.append(`
        <div id="lyrics" class="mt-3">
            <pre type="only-lyrics">${ lyrics }</pre>
        </div>
    `)
}

updateShareLink = () => {
    $('#share-cipher').attr('data-clipboard-text', `https://taylorsongbook.com.br?music=${musicId}`)
}

loadCipher = (music, album) => {
    setLoading(true)
    createCipherHeaderHTML(album)
    createChordsHTML()

    createProgressionHTML()
    createTabsHTML()

    replaceWholeChordsInLines()

    createCipherLyricsHTML()

    partsCipher.forEach(part => {
        switch (part.type) {
            case 'progression':
                completeCipher.push(progressionsHtml[part.id])
                break
            case 'tabs':
                completeCipher.push(tabsHtml[part.id])
                break
            case 'cipherLyrics':
                completeCipher.push(cipherLyricsPartsHtml[part.id])
                completeCipherColumns.push(cipherLyricsColumnsPartsHtml[part.id])
                break
            case 'alert':
                completeCipher.push(alertsHtml[language.code][part.id])
                break
        }
    })

    cipherContent.append(`<div id="cipher"></div>`)
    cipher = $('#cipher')

    completeCipher.forEach(part => {
        cipher.append(part)
    })

    createChordColumns()
    createLyrics()
    updateShareLink()

    $('[data-toggle=tooltip]').tooltip({
        trigger : 'hover'
    })

    $('#mini-player iframe').attr('src', videoUrl)

    setLoading(false, 2500)
}
