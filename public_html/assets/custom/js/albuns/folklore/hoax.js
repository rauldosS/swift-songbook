musicId = 'hoax'
musicTitle = 'Hoax'
tuning = 'Eb'
chordShape = null
capoFret = '1'
spotify = 'https://open.spotify.com/embed/track/4R2kfaDFhslZEMJqAFNpdd?utm_source=generator'
chordsMusic = ['Em', 'A', 'G', 'D', 'Bm']
videoUrl = 'https://www.youtube.com/embed/K-a8s8OLBSE'
basicCipher = true

partsCipher = [
    { type: 'progression',          id: 'main' },

    { type: 'cipherLyrics',          id: 'firstVerse' },
]

progressions = [
    {
        id: 'main',
        title: 'Progression',
        caption: '',
        progressionCaption: '',
        notes: ['Em', 'A', 'G', 'A'],
        progression: 'D D - U U - D - U D U',
    }
]

tabs = []

cipherParts = [
    {
        id: 'firstVerse',
        title: 'Verse 1',
        ignoreTitle: false,
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
]

cipherLyrics = `
${ divider }
`

lyrics = `
`
