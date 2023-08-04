const musicId = 'ready-for-it'
const musicTitle = '...Ready For It?'
const tuning = 'Eb'
const chordShape = null
const capoFret = '1'
const spotify = 'https://open.spotify.com/embed/track/4R2kfaDFhslZEMJqAFNpdd?utm_source=generator'
const chordsMusic = ['Em', 'A', 'G', 'D', 'Bm']
const videoUrl = 'https://www.youtube.com/embed/K-a8s8OLBSE'
const basicCipher = true

const partsCipher = [
    { type: 'progression',          id: 'main' },

    { type: 'cipherLyrics',          id: 'firstVerse' },
]

const progressions = [
    {
        id: 'main',
        title: 'Progression',
        caption: '',
        progressionCaption: '',
        notes: ['Em', 'A', 'G', 'A'],
        progression: 'D D - U U - D - U D U',
    }
]

const tabs = []

const cipherParts = [
    {
        id: 'firstVerse',
        title: 'Verse 1',
        ignoreTitle: false,
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
]

let cipherLyrics = `
${ divider }
`

const lyrics = `
`
