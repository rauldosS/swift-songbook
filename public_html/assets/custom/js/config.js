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
    Cadd9: `<chord name="Cadd9" positions="x32030" fingers="-21-3-" size="2" ></chord>`,
    E: `<chord name="E" positions="022100" fingers="-231--" size="2" ></chord>`,
    Em: `<chord name="Em" positions="022000" fingers="-23---" size="2" ></chord>`,
    F: `<chord name="F" positions="133211" fingers="134211" size="2" ></chord>`,
    'F#m': `<chord name="F#m" positions="244322" fingers="134211" size="2" ></chord>`,
    Fsus2: `<chord name="Fsus2" positions="xx3011" fingers="--3-11" size="2" ></chord>`,
    G: `<chord name="G" positions="320033" fingers="21--34" size="2" ></chord>`,
    Gsus4: `<chord name="Gsus4" positions="300010" fingers="3---1-" size="2" ></chord>`,
    'G/B': `<chord name="G/B" positions="x20003" fingers="-1---2" size="2" ></chord>`,
    D: `<chord name="D" positions="xx0232" fingers="---132" size="2" ></chord>`,
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
                <i class="fa-solid fa-rotate-right me-2"></i>
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
                <i class="fa-solid fa-rotate-right me-2"></i>
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
            { id: 'fearless', name: 'Fearless', blocked: false },
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
            { id: "hoax", name: "hoax", blocked: true },
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
