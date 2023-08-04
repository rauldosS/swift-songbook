const musicId = 'cardigan'
const musicTitle = 'Cardigan'
const tuning = 'Eb'
const chordShape = null
const capoFret = '1'
const spotify = 'https://open.spotify.com/embed/track/4R2kfaDFhslZEMJqAFNpdd?utm_source=generator'
const chordsMusic = ['Em', 'A', 'G', 'D', 'Bm']
const videoUrl = 'https://www.youtube.com/embed/K-a8s8OLBSE'
const basicCipher = true

// https://tabs.ultimate-guitar.com/tab/taylor-swift/cardigan-chords-3261305
// https://www.cifraclub.com.br/taylor-swift/cardigan/
// https://www.youtube.com/watch?v=Cp06ZbQbH9Y&t=56s&ab_channel=NenaShelbyMusic

const partsCipher = [
    { type: 'progression',          id: 'main' },

    { type: 'cipherLyrics',          id: 'firstVerse' },
    { type: 'cipherLyrics',          id: 'preChorus' },
    { type: 'cipherLyrics',          id: 'firstChorus' },
    { type: 'cipherLyrics',          id: 'secondVerse' },
    { type: 'cipherLyrics',          id: 'preChorus' },
    { type: 'cipherLyrics',          id: 'secondChorus' },
    { type: 'cipherLyrics',          id: 'Break' },
    { type: 'cipherLyrics',          id: 'thirdVerse' },
    { type: 'cipherLyrics',          id: 'bridge' },
    { type: 'cipherLyrics',          id: 'thirdChorus' },
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
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'preChorus',
        title: 'Pre-Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'firstChorus',
        title: 'Chorus 1',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'preChorus',
        title: 'Pre-Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'secondChorus',
        title: 'Chorus 2',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'Break',
        title: 'Break',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'thirdVerse',
        title: 'Verse 3',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'bridge',
        title: 'Bridge',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'thirdChorus',
        title: 'Chorus 3',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
]

let cipherLyrics = `
Em                          A
   Vintage tee, brand new phone
                         G
   High heels on cobblestones
                                          A
   When you are young they assume you know nothing
Em                          A                  G
   Sequined smile, black lipstick, sensual politics
                                            A
   When you are young, they assume you know nothing
${ divider }
D                                  A
   But I knew you, dancin' in your Levi's
                                G
   Drunk under a streetlight, I
                             A
   I knew you, hand under my sweatshirt
 
   Baby, kiss it better, I
${ divider }
Em                                   A
   And when I felt like I was an old cardigan
                       G
   Under someone's bed
                                     A
   You put me on and said I was your favorite
${ divider }
Em                                 A
   A friend to all is a friend to none
                             G
   Chase two girls, lose the one
                                            A
   When you are young, they assume you know nothing
${ divider }
D
   But I knew you
                    A
   Playing hide-and-seek and
                            G
   Giving me your weekends, I
 
   I knew you
                         A
   Your heartbeat on the High Line
 
   Once in twenty lifetimes, I
${ divider }
G                                    Bm
   And when I felt like I was an old cardigan
                       D
   Under someone's bed
                                     A
   You put me on and said I was your favorite
${ divider }
G   Bm
A   G
${ divider }
              G
   To kiss in cars, and downtown bars
              Bm
   Was all we needed
            A
   You drew stars around my scars
               G
   But now I'm bleedin'
D
   'Cause I knew you
                   A
   Steppin' on the last train
                                G
   Marked me like a bloodstain, I
 
   I knew you
                       A
   Tried to change the ending
 
   Peter losin' Wendy, I
D
   I knew you
                   A                             G
   Leavin' like a father, runnin' like water, I
                                            A
   When you are young, they assume you know nothing
${ divider }
                    D
   But I knew you'd linger like a tattoo kiss
                 A
   I knew you'd haunt all of my what-ifs
                 G
   The smell of smoke would hang around this long
                 A
   'Cause I knew everything when I was young
               D
   I knew I'd curse you for the longest time
           A
   Chasin' shadows in the grocery line
                 G
   I knew you'd miss me once the thrill expired
                  A
   And you'd be standin' in my front porch light
                         Em
   And I knew you'd come back to me
                   A
   And you'd come back to me
                   G
   And you'd come back to me
                   A
   And you'd come back
${ divider }
G                                    Bm
   And when I felt like I was an old cardigan
                       D
   Under someone's bed
                                     A
   You put me on and said I was your favorite
`

const lyrics = `
<b>[Verse 1]</b>
Vintage tee, brand new phone
High heels on cobblestones
When you are young, they assume you know nothing
Sequin smile, black lipstick
Sensual politics
When you are young, they assume you know nothing

<b>[Chorus]</b>
But I knew you
Dancin' in your Levi's
Drunk under a streetlight, I
I knew you
Hand under my sweatshirt
Baby, kiss it better, I

<b>[Refrain]</b>
And when I felt like I was an old cardigan
Under someone's bed
You put me on and said I was your favorite

<b>[Verse 2]</b>
A friend to all is a friend to none
Chase two girls, lose the one
When you are young, they assume you know nothing

<b>[Chorus]</b>
But I knew you
Playing hide-and-seek and
Giving me your weekends, I
I knew you
Your heartbeat on the High Line
Once in twenty lifetimes, I

<b>[Refrain]</b>
And when I felt like I was an old cardigan
Under someone's bed
You put me on and said I was your favorite

<b>[Bridge]</b>
To kiss in cars and downtown bars
Was all we needed
You drew stars around my scars
But now I'm bleedin'

<b>[Chorus]</b>
'Cause I knew you
Steppin' on the last train
Marked me like a bloodstain, I
I knew you
Tried to change the ending
Peter losing Wendy, I
I knew you
Leavin' like a father
Running like water, I
And when you are young, they assume you know nothing

<b>[Verse 3]</b>
But I knew you'd linger like a tattoo kiss
I knew you'd haunt all of my what-ifs
The smell of smoke would hang around this long
'Cause I knew everything when I was young
I knew I'd curse you for the longest time
Chasin' shadows in the grocery line
I knew you'd miss me once the thrill expired
And you'd be standin' in my front porch light
And I knew you'd come back to me
You'd come back to me
And you'd come back to me
And you'd come back

<b>[Refrain]</b>
And when I felt like I was an old cardigan
Under someone's bed
You put me on and said I was your favorite
`
