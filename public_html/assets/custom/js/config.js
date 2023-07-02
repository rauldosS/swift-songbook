let musicId = undefined
let musicTitle = undefined
let blocked = undefined
let tuning = undefined
let chord_shape = undefined
let capo_fret = undefined
let spotify = undefined
let chords_music = undefined
let videoUrl = undefined
let versions = undefined
let cipherParts = undefined
let cipherLyrics = undefined
let tabs = undefined
let progressions = undefined
let lyrics = undefined
let alerts = undefined
let currentlySelectedAlbum = undefined
let progressions_html = {}
let tabs_html = {}
let cipherLyricsPartsHtml = {}
let cipherLyricsColumnsPartsHtml = {}

let parts_cipher = []
let complete_cipher = []
let complete_cipher_columns = []

const userLang = navigator.language || navigator.userLanguage
const languages = ['en-US', 'pt-BR']
const userContainsLanguage = languages.includes(userLang)

const chords_html = {
    C: `<chord name="C" positions="x32010" fingers="-32-1-" size="2" ></chord>`,
    Cadd9: `<chord name="Cadd9" positions="x32030" fingers="-21-3-" size="2" ></chord>`,
    E: `<chord name="E" positions="022100" fingers="-231--" size="2" ></chord>`,
    Em: `<chord name="Em" positions="022000" fingers="-23---" size="2" ></chord>`,
    F: `<chord name="F" positions="133211" fingers="134211" size="2" ></chord>`,
    G: `<chord name="G" positions="320033" fingers="21--34" size="2" ></chord>`,
    D: `<chord name="D" positions="xx0232" fingers="---132" size="2" ></chord>`,
    A: `<chord name="A" positions="x02220" fingers="--123-" size="2" ></chord>`,
    Am: `<chord name="Am" positions="x02210" fingers="--231-" size="2" ></chord>`,
}

const alerts_html = {
    repeatIntro: `
        <div class="alert d-flex align-items-center mb-3" role="alert">
            <i class="fa-solid fa-rotate-right me-2"></i>
            <div>
                Repeat Intro
            </div>
        </div>
    `,
    mainProgression: `<span class="badge rounded-pill">Main progression</span>`
}

const divider = '======================================================='

const albuns = [
    {
        id: 'taylor-swift',
        name: 'Taylor Swift',
        musics: [
            {id: 'our-song', name: 'Our Song', blocked: true},
        ]
    },
    {
        id: 'fearless',
        name: 'Fearless',
        musics: [
            { id: 'fearless', album: 'fearless', name: 'Fearless', blocked: false },
            { id: '', name: 'Fifteen', blocked: true },
            { id: '', name: 'Love Story', blocked: true },
            { id: '', name: 'Hey Stephen', blocked: true },
            { id: '', name: 'White Horse', blocked: true },
            { id: '', name: 'You Belong With Me', blocked: true },
            { id: '', name: 'Breathe (feat. Colbie Caillat)', blocked: true },
            { id: '', name: 'Tell Me Why', blocked: true },
            { id: '', name: "You're Not Sorry", blocked: true },
            { id: '', name: 'The Way I Loved You', blocked: true },
            { id: '', name: 'Forever & Always', blocked: true },
            { id: '', name: 'The Best Day', blocked: true },
            { id: '', name: 'Change', blocked: true },
            { id: '', name: 'Jump Then Fall', blocked: true },
            { id: '', name: 'Untouchable', blocked: true },
            { id: '', name: 'Forever & Always (Piano Version)', blocked: true },
            { id: '', name: 'Come In With the Rain', blocked: true },
            { id: '', name: 'Superstar', blocked: true },
            { id: '', name: 'The Other Side of the Door', blocked: true },
            { id: '', name: 'Today Was a Fairytale', blocked: true },
            { id: '', name: 'You All Over Me', blocked: true },
            { id: '', name: 'Mr. Perfectly Fine', blocked: true },
            { id: '', name: 'We Were Happy', blocked: true },
            { id: '', name: "That's When (feat. Keith Urban)", blocked: true },
            { id: '', name: "Don't You", blocked: true },
            { id: '', name: 'Bye Bye Baby', blocked: true },
        ]
    },
    {
        id: 'speak-now',
        name: 'Speak Now',
        musics: []
    },
    {
        id: 'red',
        name: 'RED',
        musics: [
            { id: 'red', album: 'red', name: 'Red', blocked: true },
        ]
    },
    {
        id: '1989',
        name: '1989',
        musics: []
    },
    {
        id: 'reputation',
        name: 'Reputation',
        musics: []
    },
    {
        id: 'lover',
        name: 'Lover',
        musics: [
            { id: 'the-man', album: 'lover', name: 'The Man', blocked: true },
        ]
    },
    {
        id: 'folklore',
        name: 'Folklore',
        musics: []
    },
    {
        id: 'evermore',
        name: 'Evermore',
        musics: []
    },
    {
        id: 'midnights',
        name: 'Midnights',
        musics: []
    },
]

let musics = {}

albuns.forEach(album => {
    album.musics.forEach(music => {    
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
    const targetElement = $(elementSelector)
    const scrollContainer = $(scrollContainerSelector)
    
    // Check if the target element and scroll container exist
    if (targetElement.length > 0 && scrollContainer.length > 0) {
        // Get the current scroll position in the container
        const currentPosition = scrollContainer.scrollTop() - 32
    
        // Get the offset of the target element relative to the document
        const targetOffset = targetElement.offset().top
    
        // Adjust the target position based on the scroll container's position
        const targetPosition = targetOffset - scrollContainer.offset().top + currentPosition - 32
    
        // Check if the scroll is already at the correct position
        if (currentPosition !== targetPosition) {
        // Scroll to the element inside the container
        scrollContainer.animate({
            scrollTop: targetPosition
        }, 500)
        }
    }
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
