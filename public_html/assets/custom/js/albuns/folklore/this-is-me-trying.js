const musicId = 'this-is-me-trying'
const albumId = 'folklore'
const musicTitle = 'This Is Me Trying'
const tuning = 'G'
const chordShape = ''
const capoFret = '2'
const spotify = 'https://open.spotify.com/embed/track/0ZNU020wNYvgW84iljPkPP?utm_source=generator'
const chordsMusic = ['C', 'Cadd9', 'Em7', 'D', 'G']
const videoUrl = 'https://www.youtube.com/embed/DCkB-5okmJQ'
const basicCipher = false

const partsCipher = [
    { type: 'progression',      id: 'intro' },

    { type: 'progression',      id: 'firstVerse' },
    { type: 'cipherLyrics',     id: 'firstVerse' },

    { type: 'progression',      id: 'firstChorus' },
    { type: 'cipherLyrics',     id: 'firstChorus' },

    { type: 'cipherLyrics',     id: 'break' },
    { type: 'progression',      id: 'break' },

    { type: 'progression',      id: 'secondVerse' },
    { type: 'cipherLyrics',     id: 'secondVerse' },

    { type: 'progression',      id: 'secondChorus' },
    { type: 'cipherLyrics',     id: 'secondChorus' },

    { type: 'cipherLyrics',     id: 'secondBreak' },
    { type: 'progression',      id: 'secondBreak' },

    { type: 'progression',      id: 'bridge' },
    { type: 'cipherLyrics',     id: 'bridge' },

    { type: 'progression',      id: 'lastChorus' },
    { type: 'cipherLyrics',     id: 'lastChorus' },

    { type: 'cipherLyrics',     id: 'lastBreak' },
    { type: 'progression',      id: 'lastBreak' },
    { type: 'cipherLyrics',     id: 'outro' },
    { type: 'progression',      id: 'outro' },
]

const progressions = [
    {
        id: 'intro',
        title: 'Intro',
        caption: '',
        notes: ['G', 'G', 'Cadd9', 'Cadd9', 'x2'],
        progression: 'D - - - D - - U - U D - - U D U'
    },
    {
        id: 'firstVerse',
        title: 'Verse 1',
        caption: '',
        notes: ['G', 'Cadd9', 'G', 'D', 'break', 'Em7', 'Cadd9', 'D', 'D'],
        progression: 'D - - - D - - U - U D - - U D U'
    },
    {
        id: 'firstChorus',
        title: 'Chorus',
        caption: '',
        notes: ['Em7, Cadd9', 'G', 'break', 'Em7, Cadd9', 'D'],
        progression: 'D - - - D - - u-highlight - U D - - U D U'
    },
    {
        id: 'break',
        title: 'Break',
        caption: '',
        notes: ['G', 'G', 'Cadd9', 'Cadd9'],
        progression: 'D - - - D - - U - U D - - U D U'
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        caption: '',
        notes: ['G', 'Cadd9', 'G', 'D', 'break', 'Em7', 'Cadd9', 'D', 'D'],
        progression: 'D - - - D - - U - U D - - U D U'
    },
    {
        id: 'secondChorus',
        title: 'Chorus',
        caption: '',
        notes: ['Em7, Cadd9', 'G', 'break', 'Em7, Cadd9', 'D', 'break', 'G'],
        progression: 'D - - - D - - u-highlight - U D - - U D U'
    },
    {
        id: 'secondBreak',
        title: 'Break',
        caption: '',
        notes: ['Cadd9', 'G', 'D'],
        progression: 'D - - - D - - U - U D - - U D U'
    },
    {
        id: 'bridge',
        title: 'Bridge',
        caption: '',
        notes: ['Em7', 'Cadd9', 'D', 'D'],
        progression: 'D - - - D - - U - U D - - U D U'
    },
    {
        id: 'lastChorus',
        title: 'Chorus',
        caption: '',
        notes: ['Em7, Cadd9', 'G', 'break', 'Em7, Cadd9', 'D', 'break', 'G'],
        progression: 'D - - - D - - u-highlight - U D - - U D U'
    },
    {
        id: 'lastBreak',
        title: 'Break',
        caption: '',
        notes: ['G', 'G', 'G', 'G'],
        progression: 'D - - - D - - U - U D - - U D U'
    },
    {
        id: 'outro',
        title: 'Outro',
        caption: '',
        notes: ['G'],
        progression: 'D - - - - - - - - - - - - - - -'
    },
]

const tabs = []

const cipherParts = [
    {
        id: 'firstVerse',
        title: 'Verse 1',
        referenceProgression: progressions.find(progression => progression.id === 'firstVerse')
    },
    {
        id: 'firstChorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'firstChorus')
    },
    {
        id: 'break',
        title: 'Break',
        referenceProgression: progressions.find(progression => progression.id === 'break'),
        onlyCipherColumns: true
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        referenceProgression: progressions.find(progression => progression.id === 'secondVerse')
    },
    {
        id: 'secondChorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'secondChorus')
    },
    {
        id: 'secondBreak',
        title: 'Break',
        referenceProgression: progressions.find(progression => progression.id === 'secondBreak'),
        onlyCipherColumns: true
    },
    {
        id: 'bridge',
        title: 'Bridge',
        referenceProgression: progressions.find(progression => progression.id === 'bridge')
    },
    {
        id: 'lastChorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'lastChorus')
    },
    {
        id: 'lastBreak',
        title: 'Break',
        referenceProgression: progressions.find(progression => progression.id === 'lastBreak'),
        onlyCipherColumns: true
    },
    {
        id: 'outro',
        title: 'Outro',
        referenceProgression: progressions.find(progression => progression.id === 'outro'),
        onlyCipherColumns: true
    }
]

let cipherLyrics = `
G
I've been having a hard time adjusting
Cadd9
I had the shiniest wheels, now they're rusting
G
I didn't know if you'd care if I came back
D
I have a lot of regrets about that
Em7
Pulled the car off the road to the lookout
Cadd9
Could've followed my fears all the way down
D
And maybe I don't quite know what to say
        D
But I'm here in your doorway
${ divider }
              Em7               Cadd9               G
I just wanted you to know that this is me trying
              Em7               Cadd9               D
I just wanted you to know that this is me trying
${ divider }
G G Cadd9 Cadd9
${ divider }
G
They told me all of my cages were mental
Cadd9
So I got wasted like all my potential
G
And my words shoot to kill when I'm mad
D
I have a lot of regrets about that
Em7                                              Cadd9
I was so ahead of the curve, the curve became a sphere
                                             D
Fell behind all my classmates and I ended up here
                                          D
Pouring out my heart to a stranger, but I didn't pour the whiskey
${ divider }
              Em7               Cadd9               G
I just wanted you to know that this is me trying
              Em7               Cadd9               D
I just wanted you to know that this is me trying
              G
At least I'm trying
${ divider }
Cadd9 G D
${ divider }
         Em7                                             Cadd9
And it's hard to be at a party when I feel like an open wound
                                                       D
It's hard to be anywhere these days when all I want is you
                                                       D
You're a flashback in a film reel on the one screen in my town
${ divider }
                  Em7               Cadd9               G
And I just wanted you to know that this is me trying
                         D
(And maybe I don't quite know what to say)
              Em7               Cadd9               D
I just wanted you to know that this is me trying
             G
At least I'm trying
${ divider }
G G G G
${ divider }
G
`

const lyrics = `
<b>[Verse 1]</b>
I've been having a hard time adjusting
I had the shiniest wheels, now they're rusting
I didn't know if you'd care if I came back
I have a lot of regrets about that
Pulled the car off the road to the lookout
Could've followed my fears all the way down
And maybe I don't quite know what to say
But I'm here in your doorway

<b>[Chorus]</b>
I just wanted you to know that this is me trying
I just wanted you to know that this is me trying

<b>[Verse 2]</b>
They told me all of my cages were mental
So I got wasted like all my potential
And my words shoot to kill when I'm mad
I have a lot of regrets about that
I was so ahead of the curve, the curve became a sphere
Fell behind all my classmates and I ended up here
Pouring out my heart to a stranger
But I didn't pour the whiskey

<b>[Chorus]</b>
I just wanted you to know that this is me trying
I just wanted you to know that this is me trying

<b>[Post-Chorus]</b>
At least I'm trying

<b>[Bridge]</b>
And it's hard to be at a party when I feel like an open wound
It's hard to be anywhere these days when all I want is you
You're a flashback in a film reel on the one screen in my town

<b>[Chorus]</b>
And I just wanted you to know that this is me trying
(And maybe I don't quite know what to say)
I just wanted you to know that this is me trying

<b>[Outro]</b>
At least I'm trying
`
