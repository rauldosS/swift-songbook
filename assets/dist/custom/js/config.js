let title = undefined
let block = undefined
let tuning = undefined
let chord_shape = undefined
let capo_fret = undefined
let spotify = undefined
let chords_music = undefined
let videoUrl = undefined
let versions = undefined
let cipherParts = undefined
let cipherLyrics = undefined
let tabs_parts = undefined
let tabs = undefined
let progressions = undefined
let lyrics = undefined
let alerts = undefined
let progressions_html = {}
let tabs_html = {}
let cipherLyricsPartsHtml = {}

let parts_cipher = []
let complete_cipher = []

const chords_html = {
    'C': `<chord name="C" positions="x32010" fingers="-32-1-" size="2" ></chord>`,
    'Em': `<chord name="Em" positions="022000" fingers="-23---" size="2" ></chord>`,
    'F': `<chord name="F" positions="133211" fingers="134211" size="2" ></chord>`,
    'G': `<chord name="G" positions="320033" fingers="21--34" size="2" ></chord>`,
    'D': `<chord name="D" positions="xx0232" fingers="---132" size="2" ></chord>`,
    'A': `<chord name="A" positions="x02220" fingers="--123-" size="2" ></chord>`,
    'Am': `<chord name="Am" positions="x02210" fingers="--231-" size="2" ></chord>`,
}

const alerts_html = {
    'repeatIntro': `
        <div class="alert d-flex align-items-center mb-4" role="alert">
            <i class="fa-solid fa-rotate-right me-2"></i>
            <div>
                Repeat Intro
            </div>
        </div>
    `
}

const divider = '======================================================='

const albuns = [
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
            { 'id': 'fearless', 'name': 'Fearless', 'block': false },
            { 'id': '', 'name': 'Fifteen', 'block': true },
            { 'id': '', 'name': 'Love Story', 'block': true },
            { 'id': '', 'name': 'Hey Stephen', 'block': true },
            { 'id': '', 'name': 'White Horse', 'block': true },
            { 'id': '', 'name': 'You Belong With Me', 'block': true },
            { 'id': '', 'name': 'Breathe (feat. Colbie Caillat)', 'block': true },
            { 'id': '', 'name': 'Tell Me Why', 'block': true },
            { 'id': '', 'name': "You're Not Sorry", 'block': true },
            { 'id': '', 'name': 'The Way I Loved You', 'block': true },
            { 'id': '', 'name': 'Forever & Always', 'block': true },
            { 'id': '', 'name': 'The Best Day', 'block': true },
            { 'id': '', 'name': 'Change', 'block': true },
            { 'id': '', 'name': 'Jump Then Fall', 'block': true },
            { 'id': '', 'name': 'Untouchable', 'block': true },
            { 'id': '', 'name': 'Forever & Always (Piano Version)', 'block': true },
            { 'id': '', 'name': 'Come In With the Rain', 'block': true },
            { 'id': '', 'name': 'Superstar', 'block': true },
            { 'id': '', 'name': 'The Other Side of the Door', 'block': true },
            { 'id': '', 'name': 'Today Was a Fairytale', 'block': true },
            { 'id': '', 'name': 'You All Over Me', 'block': true },
            { 'id': '', 'name': 'Mr. Perfectly Fine', 'block': true },
            { 'id': '', 'name': 'We Were Happy', 'block': true },
            { 'id': '', 'name': "That's When (feat. Keith Urban)", 'block': true },
            { 'id': '', 'name': "Don't You", 'block': true },
            { 'id': '', 'name': 'Bye Bye Baby', 'block': true },
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
        'musics': [
            { 'id': 'red', 'name': 'Red', 'block': false },
        ]
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
        'musics': [
            { 'id': 'the-man', 'name': 'The Man', 'block': false },
        ]
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
