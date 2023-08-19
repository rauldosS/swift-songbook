const musicId = 'mirrorball'
const albumId = 'folklore'
const musicTitle = 'Mirrorball'
const tuning = 'D'
const chordShape = ''
const capoFret = '2'
const spotify = 'https://open.spotify.com/embed/track/0ZNU020wNYvgW84iljPkPP?utm_source=generator'
const chordsMusic = ['C', 'Am', 'Fmaj7']
const videoUrl = 'https://www.youtube.com/embed/faOiOUOOTWM'
const basicCipher = false

const partsCipher = [
    { type: 'progression',      id: 'main' },

    { type: 'cipherLyrics',     id: 'firstVerse' },

    { type: 'cipherLyrics',     id: 'firstChorus' },

    { type: 'cipherLyrics',     id: 'secondVerse' },

    { type: 'cipherLyrics',     id: 'secondChorus' },

    { type: 'progression',      id: 'bridge' },
    { type: 'cipherLyrics',     id: 'bridge' },

    { type: 'cipherLyrics',     id: 'outro' },
]

const progressions = [
    {
        id: 'main',
        title: 'Main Progression',
        caption: '',
        notes: ['C', 'Fmaj7', 'Am', 'Fmaj7'],
        progression: 'D - D U - U D U - U D U - U D U'
    },
    {
        id: 'bridge',
        title: 'Bridge',
        caption: '2nd time from Em just tap down',
        notes: ['C', 'Fmaj7', 'Am', 'Fmaj7'],
        progression: 'd-accented D D d-accented D D d-accented D d-accented D D d-accented D D d-accented D U'
    }
]

const tabs = []

const cipherParts = [
    {
        id: 'firstVerse',
        title: 'Verse 1',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'firstChorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'secondChorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'bridge',
        title: 'Bridge',
        referenceProgression: progressions.find(progression => progression.id === 'bridge')
    },
    {
        id: 'outro',
        title: 'Outro',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
]

let cipherLyrics = `
C       Fmaj7
 I want you to know
       Am
I'm a mirrorball
              Fmaj7                        C
I'll show you every version of yourself tonight
                 Fmaj7
I'll get you out on the floor
            Am
Shimmering beautiful
           Fmaj7
And when I break, it's in a million pieces
${ divider }
C                                 Fmaj7
 Hush, when no one is around, my dear
                      Am
You'll find me on my tallest tip-toes
                 Fmaj7
Spinning in my highest heels, love
Shining just for you
C                                       Fmaj7
 Hush, I know they said the end is near
                     Am
But I'm still on my tallest tip-toes
                Fmaj7
Spinning in my highest heels, love
 
Shining just for you
${ divider }
C        Fmaj7
 I want you to know
       Am
I'm a mirrorball
              Fmaj7
I can change everything about me to fit in
C                       Fmaj7
 You are not like the regulars
                Am
The masquerade revelers
               Fmaj7
Drunk as they watch my shattered edges glisten
${ divider }
C                                 Fmaj7
 Hush, when no one is around, my dear
                      Am
You'll find me on my tallest tip-toes
                 Fmaj7
Spinning in my highest heels, love
Shining just for you
C                                       Fmaj7
 Hush, I know they said the end is near
                     Am
But I'm still on my tallest tip-toes
                Fmaj7
Spinning in my highest heels, love
 
Shining just for you
${ divider }
Fmaj7
 And they called off the circus, burned the disco down
C
 When they sent home the horses and the rodeo clowns
Am
 I'm still on that tightrope
                 Fmaj7
I'm still trying everything to get you laughing at me
C
 I'm still a believer, but I don't know why
 Fmaj7                                             Am
 I've never been a natural, all I do is try, try, try
Am
 I'm still on that trapeze
                  Fmaj7
I'm still trying everything to keep you looking at me
${ divider }
C               Fmaj7
 Because I'm a mirrorball
       Am
I'm a mirrorball
                   Fmaj7                     C
And I'll show you every version of yourself tonight
`

const lyrics = `
<b>[Verse 1]</b>
I want you to know
I'm a mirrorball
I'll show you every version of yourself tonight
I'll get you out on the floor
Shimmering beautiful
And when I break, it's in a million pieces

<b>[Chorus]</b>
Hush, when no one is around, my dear
You'll find me on my tallest tiptoes
Spinning in my highest heels, love
Shining just for you
Hush, I know they said the end is near
But I'm still on my tallest tiptoes
Spinning in my highest heels, love
Shining just for you

<b>[Verse 2]</b>
I want you to know
I'm a mirrorball
I can change everything about me to fit in
You are not like the regulars
The masquerade revelers
Drunk as they watch my shattered edges glisten

<b>[Chorus]</b>
Hush, when no one is around, my dear
You'll find me on my tallest tiptoes
Spinning in my highest heels, love
Shining just for you
Hush, I know they said the end is near
But I'm still on my tallest tiptoes
Spinning in my highest heels, love
Shining just for you

<b>[Bridge]</b>
And they called off the circus, burned the disco down
When they sent home the horses and the rodeo clowns
I'm still on that tightrope
I'm still trying everything to get you laughing at me
And I'm still a believer, but I don't know why
I've never been a natural, all I do is try, try, try
I'm still on that trapeze
I'm still trying everything to keep you looking at me

<b>[Outro]</b>
Because I'm a mirrorball
I'm a mirrorball
And I'll show you every version of yourself tonight
`
