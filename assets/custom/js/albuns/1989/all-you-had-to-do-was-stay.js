const musicId = 'all-you-had-to-do-was-stay'
const albumId = '1989'
const musicTitle = 'All You Had To Do Was Stay'
const tuning = 'F'
const chordShape = ''
const capoFret = '5'
const spotify = 'https://open.spotify.com/embed/track/0cqRj7pUJDkTCEsJkx8snD?utm_source=generator'
const chordsMusic = ['Am', 'C', 'G']
const videoUrl = 'https://www.youtube.com/embed/C0617eCMpCY?si=xcNplAG2vE8n9olb&amp;start=307'
const basicCipher = false

// https://drive.google.com/file/d/1VQJCLE7nVDKVHJY0SCm3DLRnplWxRH_L/view

const partsCipher = [
    { type: 'alert',            id: 'palmMute' },

    { type: 'progression',      id: 'intro' },
    { type: 'cipherLyrics',     id: 'intro' },

    { type: 'progression',      id: 'firstVerse' },
    { type: 'cipherLyrics',     id: 'firstVerse' },

    { type: 'progression',      id: 'firstPreChorus' },
    { type: 'cipherLyrics',     id: 'firstPreChorus' },

    { type: 'progression',      id: 'firstChorus' },
    { type: 'cipherLyrics',     id: 'firstChorus' },

    { type: 'progression',      id: 'secondVerse' },
    { type: 'cipherLyrics',     id: 'secondVerse' },

    { type: 'progression',      id: 'secondPreChorus' },
    { type: 'cipherLyrics',     id: 'secondPreChorus' },

    { type: 'progression',      id: 'secondChorus' },
    { type: 'cipherLyrics',     id: 'secondChorus' },

    { type: 'progression',      id: 'postChorus' },
    { type: 'cipherLyrics',     id: 'postChorus' },

    { type: 'progression',      id: 'interlude' },
    { type: 'cipherLyrics',     id: 'interlude' },

    { type: 'progression',      id: 'bridge' },
    { type: 'cipherLyrics',     id: 'bridge' },

    { type: 'progression',      id: 'lastChorus' },
    { type: 'cipherLyrics',     id: 'lastChorus' },

    { type: 'progression',      id: 'lastPostChorus' },
    { type: 'cipherLyrics',     id: 'lastPostChorus' },

    { type: 'progression',      id: 'outro' },
    { type: 'cipherLyrics',     id: 'outro' },
]

const progressions = [
    {
        id: 'intro',
        title: 'Intro',
        caption: '',
        notes: ['N.C.', 'N.C.'],
        progression: 'D - D - D U D U - U D - D U D U'
    },
    {
        id: 'firstVerse',
        title: 'Verse 1',
        caption: '',
        notes: ['Am', 'C', 'G', 'G', 'x2'],
        progression: 'D - D - D U D U - U D - D U D U',
        palmMute: true
    },
    {
        id: 'firstPreChorus',
        title: 'Pre-Chorus 1',
        caption: '',
        notes: ['Am', 'C', 'G', 'G'],
        progression: 'D - D - D U D U - U D - D U D U',
        palmMute: true
    },
    {
        id: 'firstChorus',
        title: 'Chorus 1',
        caption: '',
        notes: ['Am', 'C', 'G', 'G', 'x2'],
        progression: 'D - D - D U D U - U D - D U D U',
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        caption: '',
        notes: ['Am', 'C', 'G', 'G', 'x2'],
        progression: 'D - D - D U D U - U D - D U D U',
        palmMute: true
    },
    {
        id: 'secondPreChorus',
        title: 'Pre-Chorus 2',
        caption: '',
        notes: ['Am', 'C', 'G', 'break', 'G'],
        progression: 'D - D - D U D U - U D - D U D U break D - - - - - - - - D - D - U D U',
        palmMute: true
    },
    {
        id: 'secondChorus',
        title: 'Chorus 2',
        caption: '',
        notes: ['Am', 'C', 'G', 'G', 'x2'],
        progression: 'D - D - D U D U - U D - D U D U',
    },
    {
        id: 'postChorus',
        title: 'Post-Chorus 2',
        caption: '',
        notes: ['Am', 'C', 'G', 'G', 'x2'],
        progression: 'D - D - D U D U - U D - D U D U',
    },
    {
        id: 'interlude',
        title: 'Interlude',
        caption: '',
        notes: ['Am', 'C', 'G', 'G'],
        progression: 'D - D - D U D U - U D - D U D U',
    },
    {
        id: 'bridge',
        title: 'Bridge',
        caption: '',
        notes: ['N.C.', 'N.C.', 'N.C.', 'break', 'N.C.'],
        progression: 'D - D - D U D U - U D - D U D U break D - D - D U D U d-accented - - u-accented - - d-accented -',
    },
    {
        id: 'lastChorus',
        title: 'Chorus 3',
        caption: '',
        notes: ['Am', 'C', 'G', 'G', 'x2'],
        progression: 'D - D - D U D U - U D - D U D U',
    },
    {
        id: 'lastPostChorus',
        title: 'Post-Chorus 3',
        caption: '',
        notes: ['Am', 'C', 'G', 'G', 'x2'],
        progression: 'D - D - D U D U - U D - D U D U',
    },
    {
        id: 'outro',
        title: 'Outro',
        caption: '',
        notes: ['Am'],
        progression: 'D - - - - - - - - - - - - - - -',
    },
]

const tabs = []

const cipherParts = [
    {
        id: 'intro',
        title: 'Intro',
        referenceProgression: progressions.find(progression => progression.id === 'intro'),
        onlyCipherColumns: true
    },
    {
        id: 'firstVerse',
        title: 'Verse 1',
        referenceProgression: progressions.find(progression => progression.id === 'firstVerse')
    },
    {
        id: 'firstPreChorus',
        title: 'Pre-Chorus 1',
        referenceProgression: progressions.find(progression => progression.id === 'firstPreChorus')
    },
    {
        id: 'firstChorus',
        title: 'Chorus 1',
        referenceProgression: progressions.find(progression => progression.id === 'firstChorus')
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        referenceProgression: progressions.find(progression => progression.id === 'secondVerse')
    },
    {
        id: 'secondPreChorus',
        title: 'Pre-Chorus 2',
        referenceProgression: progressions.find(progression => progression.id === 'secondPreChorus')
    },
    {
        id: 'secondChorus',
        title: 'Chorus 2',
        referenceProgression: progressions.find(progression => progression.id === 'secondChorus')
    },
    {
        id: 'postChorus',
        title: 'Post-Chorus 2',
        referenceProgression: progressions.find(progression => progression.id === 'postChorus')
    },
    {
        id: 'interlude',
        title: 'Interlude',
        referenceProgression: progressions.find(progression => progression.id === 'interlude')
    },
    {
        id: 'Bridge',
        title: 'Bridge',
        referenceProgression: progressions.find(progression => progression.id === 'bridge')
    },
    {
        id: 'lastChorus',
        title: 'Chorus 3',
        referenceProgression: progressions.find(progression => progression.id === 'lastChorus')
    },
    {
        id: 'lastPostChorus',
        title: 'Post-Chorus 3',
        referenceProgression: progressions.find(progression => progression.id === 'lastPostChorus')
    },
    {
        id: 'outro',
        title: 'outro',
        referenceProgression: progressions.find(progression => progression.id === 'outro')
    }
]

let cipherLyrics = `
${ divider }
`

const lyrics = `
<b>[Intro]</b>
(Hey, hey, hey)
(Hey, hey, hey)
(Hey, hey, hey)
(Hey, hey, hey)

<b>[Verse 1]</b>
People like you always want back
The love they gave away
And people like me wanna believe you
When you say you've changed
The more I think about it now
The less I know
All I know is that you drove us
Off the road

<b>[Chorus]</b>
(Stay) Hey, all you had to do was stay
Had me in the palm of your hand, then
Why'd you have to go and lock me out when I let you in?
(Stay) Hey, now you say you want it back
Now that it's just too late, well, could've been easy
All you had to do was (Stay)

<b>[Post-Chorus]</b>
All you had to do was (Stay)
All you had to do was (Stay)
All you had to do was (Stay)
All you had to do was stay

<b>[Verse 2]</b>
Here you are now, calling me up
But I don't know what to say
I've been pickin' up the pieces
Of the mess you made
People like you always want back
The love they pushed aside
But people like me are gone forever
When you say goodbye

<b>[Chorus]</b>
(Stay) Hey, all you had to do was stay
Had me in the palm of your hand, then
Why'd you have to go and lock me out when I let you in?
(Stay) Hey, now you say you want it back
Now that it's just too late, well, could've been easy
All you had to do was (Stay)

<b>[Post-Chorus]</b>
All you had to do was (Stay)
All you had to do was (Stay)
All you had to do was (Stay, stay, stay, stay, stay)

<b>[Bridge]</b>
Let me remind you
This was what you wanted (Oh, oh, oh-oh-oh)
You ended it
You were all I wanted (Oh, oh, oh-oh-oh)
But not like this
Not like this, not like this
Oh, all you had to do was

<b>[Chorus]</b>
(Stay) Hey, all you had to do was stay
Had me in the palm of your hand, then
Why'd you have to go and lock me out when I let you in?
(Stay) Hey, now you say you want it back
Now that it's just too late, well, could've been easy
All you had to do was
(Stay) Hey, all you had to do was stay
Had me in the palm of your hand, then
Why'd you have to go and lock me out when I let you in?
(Stay) Hey, now you say you want it back
Now that it's just too late, well, it could've been easy (All you had to do was stay)
All you had to do was (Stay)

<b>[Post-Chorus]</b>
All you had to do was (Stay, oh)
All you had to do was (Stay)
All you had to do was (Stay, ooh)
All you had to do was (Stay)
`
