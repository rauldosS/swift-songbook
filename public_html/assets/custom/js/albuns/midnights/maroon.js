const musicId = 'maroon'
const albumId = 'midnights'
const musicTitle = 'Maroon'
const tuning = 'G'
const chordShape = null
const capoFret = ''
const spotify = 'https://open.spotify.com/embed/track/3eX0NZfLtGzoLUxPNvRfqm?utm_source=generator'
const chordsMusic = ['Cadd9', 'G', 'D', 'Em7']
const videoUrl = 'https://www.youtube.com/embed/qTyJTkX0a6k'
const basicCipher = false
suggestedBy = 'Cheff Cris 👩🏼‍🍳'

// https://drive.google.com/file/d/19-0tIvFOnzP7lhdUaAGQeSLUqM6Dj8nK/view

const partsCipher = [
    { type: 'alert',                 id: 'palmMute' },

    { type: 'progression',           id: 'intro' },
    { type: 'cipherLyrics',          id: 'intro' },

    { type: 'progression',           id: 'firstVerse' },
    { type: 'cipherLyrics',          id: 'firstVerse' },

    { type: 'progression',           id: 'firstChorus' },
    { type: 'cipherLyrics',          id: 'firstChorus' },

    { type: 'progression',           id: 'instrumental' },
    { type: 'cipherLyrics',          id: 'instrumental' },

    { type: 'progression',           id: 'secondVerse' },
    { type: 'cipherLyrics',          id: 'secondVerse' },

    { type: 'progression',           id: 'secondChorus' },
    { type: 'cipherLyrics',          id: 'secondChorus' },

    { type: 'progression',           id: 'bridge' },
    { type: 'cipherLyrics',          id: 'bridge' },

    { type: 'progression',           id: 'lastChorus' },
    { type: 'cipherLyrics',          id: 'lastChorus' },

    { type: 'progression',           id: 'outro' },
    { type: 'cipherLyrics',          id: 'outro' },
]

const progressions = [
    {
        id: 'intro',
        title: 'Intro',
        caption: 'ACCENTED STRUMS UNDERLINED',
        notes: ['Cadd9', 'G', 'Em7', 'D'],
        progression: 'd-accented - - - D - d-accented - - - D - d-accented - D U',
        palmMute: true
    },
    {
        id: 'firstVerse',
        title: 'Verse 1',
        caption: '',
        notes: ['Cadd9', 'G', 'Em7', 'D', 'x3', 'break', 'Cadd9', 'G', 'D', 'D'],
        progression: 'd-accented - - - D - d-accented - - - D - d-accented - D U',
        palmMute: true
    },
    {
        id: 'firstChorus',
        title: 'Chorus',
        caption: '',
        notes: ['Cadd9', 'G', 'Em7', 'D', 'x4'],
        progression: 'd-accented - - - D - d-accented - - - D - d-accented - D U'
    },
    {
        id: 'instrumental',
        title: 'Instrumental',
        caption: '',
        notes: ['Cadd9', 'break', 'G', 'Em7', 'D'],
        progression: 'D - D - - - - - - - - - - - - - break D - - - - - - - - - - - - - - -'
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        caption: '',
        notes: ['Cadd9', 'break', 'G', 'Em7', 'D', 'doubleBreak', 'Cadd9', 'G', 'Em7', 'D', 'x2', ],
        progression: 'D - D - - - - - - - - - - - - - break D - - - - - - - - - - - - - - - break break break d-accented - - - D - d-accented - - - D - d-accented - D U',
        palmMute: true,
        repeats: [
            { repeat: 'x2', data: { start: 1, size: 2 } },
        ]
    },
    {
        id: 'secondChorus',
        title: 'Chorus',
        caption: '',
        notes: ['Cadd9', 'G', 'Em7', 'D', 'x4'],
        progression: 'd-accented - - - D - d-accented - - - D - d-accented - D U'
    },
    {
        id: 'bridge',
        title: 'Bridge',
        caption: '',
        notes: ['Cadd9', 'G', 'Em7', 'D', 'break', 'Cadd9', 'G', 'Em7', 'break', 'D'],
        progression: 'd-accented - - - D - d-accented - - - D - d-accented - D U break break d-accented - - - D - d-accented - - - - - - - - -',
        palmMute: true
    },
    {
        id: 'lastChorus',
        title: 'Chorus',
        caption: '',
        notes: ['Cadd9', 'G', 'Em7', 'D', 'break', 'Cadd9', 'G', 'Em7', 'break', 'D', 'doubleBreak', 'Cadd9', 'G', 'Em7', 'D'],
        progression: 'd-accented - - - D - d-accented - - - D - d-accented - D U break break D - - - - - - - - - - - - - - - break break d-accented - - - D - d-accented - - - D - d-accented - D U',
        palmMute: true
    },
    {
        id: 'outro',
        title: 'Chorus',
        caption: '',
        notes: ['Cadd9', 'G', 'Em7', 'D', 'break', 'Cadd9', 'G', 'Em7', 'break', 'D'],
        progression: 'd-accented - - - D - d-accented - - - D - d-accented - D U break break d-accented - - - D - d-accented - - - - - - - - -',
        palmMute: true
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
        id: 'firstChorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'firstChorus')
    },
    {
        id: 'instrumental',
        title: 'Instrumental',
        referenceProgression: progressions.find(progression => progression.id === 'instrumental'),
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
        id: 'outro',
        title: 'Outro',
        referenceProgression: progressions.find(progression => progression.id === 'outro')
    },
]

let cipherLyrics = `
Cadd9 G Em7 D
${ divider }
Cadd9
 When the morning came
  G                              Em7
We were cleaning incense off your vinyl shelf
               D
'Cause we lost track of time again
Cadd9                  G
 Laughing with my feet in your lap
     Em7          D
Like you were my closest friend
Cadd9                 G
"How'd we end up on the floor, anyway?"
         Em7                                    D
You say, "Your roommate's cheap-ass screw top Rosé, that's how"
Cadd9      G         D
 I see you every day now
${ divider }
     Cadd9  G
And I chose you
    Em7        D
The one I was dancing with
       Cadd9    G
In New York, no shoes
       Em7        D
Looked up at the sky, and it was
    Cadd9
The burgundy on my T-shirt
         G
When you splashed your wine into me
            Em7
And how the blood rushed into my cheeks
   D
So scarlet, it was
    Cadd9
The mark they saw on my collarbone
    G
The rust that grew between telephones
    Em7
The lips I used to call "home"
   D                      Cadd9 G Em7 D
So scarlet, it was maroon
${ divider }
Cadd9 G Em7 D
${ divider }
Cadd9
 When the silence came
  G
We were shaking, blind, and hazy
Em7                       D
How the hell did we lose sight of us again?
Cadd9                          G
Sobbing with your head in your hands
      Em7                D
Ain't that the way shit always ends?
Cadd9                     G
 You were standing hollow-eyed in the hallway
Em7                                D
  Carnations you had thought were roses, that's us
Cadd9        G
 I feel you, no matter what
D
 The rubies that I gave up
${ divider }
    Cadd9  G
And I lost you
    Em7        D
The one I was dancing with
       Cadd9    G
In New York, no shoes
       Em7        D
Looked up at the sky, and it was maroon
    Cadd9
The burgundy on my T-shirt
         G
When you splashed your wine into me
            Em7
And how the blood rushed into my cheeks
   D
So scarlet, it was maroon
    Cadd9
The mark they saw on my collarbone
    G
The rust that grew between telephones
    Em7
The lips I used to call "home"
   D
So scarlet, it was (Was) maroon
${ divider }
 Cadd9                     G
And I wake with your memory over me
         Em7                 D
That's a real fucking legacy, legacy
 Cadd9                     G
And I wake with your memory over me
         Em7                 D
That's a real fucking legacy to leave
${ divider }
    Cadd9
The burgundy on my T-shirt
         G
When you splashed your wine into me
            Em7
And how the blood rushed into my cheeks
   D
So scarlet, it was maroon
    Cadd9
The mark they saw on my collarbone
    G
The rust that grew between telephones
    Em7
The lips I used to call "home"
   D                 Cadd9 G Em7 D
So scarlet, it was maroon
${ divider }
         Cadd9 G Em7 D
It was maroon
        N.Cadd9.
It was maroon
`

const lyrics = `
<b>[Verse 1]</b>
When the morning came
We were cleaning incense off your vinyl shelf
'Cause we lost track of time again
Laughing with my feet in your lap
Like you were my closest friend
"How'd we end up on the floor, anyway?" you say
"Your roommate's cheap-ass screw-top rosé, that's how"
I see you every day now

<b>[Chorus]</b>
And I chose you
The one I was dancing with
In New York, no shoes
Looked up at the sky and it was
The burgundy on my t-shirt
When you splashed your wine into me
And how the blood rushed into my cheeks
So scarlet, it was
The mark they saw on my collarbone
The rust that grew between telephones
The lips I used to call home
So scarlet, it was maroon

<b>[Verse 2]</b>
When the silence came
We were shaking, blind and hazy
How the hell did we lose sight of us again?
Sobbing with your head in your hands
Ain't that the way shit always ends?
You were standing hollow-eyed in the hallway
Carnations you had thought were roses, that's us
I feel you, no matter what
The rubies that I gave up

<b>[Chorus]</b>
And I lost you
The one I was dancing with
In New York, no shoes
Looked up at the sky and it was (Maroon)
The burgundy on my t-shirt
When you splashed your wine into me
And how the blood rushed into my cheeks
So scarlet, it was (Maroon)
The mark they saw on my collarbone
The rust that grew between telephones
The lips I used to call home
So scarlet, it was maroon

<b>[Bridge]</b>
And I wake with your memory over me
That's a real fucking legacy, legacy (It was maroon)
And I wake with your memory over me
That's a real fucking legacy to leave

<b>[Chorus]</b>
The burgundy on my t-shirt
When you splashed your wine into me
And how the blood rushed into my cheeks
So scarlet, it was maroon
The mark they saw on my collarbone
The rust that grew between telephones
The lips I used to call home
So scarlet, it was maroon

<b>[Outro]</b>
It was maroon
It was maroon
`
