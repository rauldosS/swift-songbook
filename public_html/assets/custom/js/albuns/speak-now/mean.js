const musicId = 'mean'
const albumId = 'speak-now'
const musicTitle = 'Mean'
const tuning = 'E'
const chordShape = ''
const capoFret = '4'
const spotify = 'https://open.spotify.com/embed/track/30Y4CV7A6YqtQtTTo7Ue4j?utm_source=generator'
const chordsMusic = ['Am', 'Gadd11', 'Fmaj7', 'C', 'G', 'F']
const videoUrl = 'https://www.youtube.com/embed/aYWW8gkp58k'
const basicCipher = false

const partsCipher = [
    { type: 'alert',            id: 'palmMute' },

    { type: 'progression',      id: 'firstVerse' },
    { type: 'cipherLyrics',     id: 'firstVerse' },

    { type: 'progression',      id: 'firstPreChorus' },
    { type: 'cipherLyrics',     id: 'firstPreChorus' },

    { type: 'progression',      id: 'firstChorus' },
    { type: 'cipherLyrics',     id: 'firstChorus' },

    { type: 'progression',      id: 'firstInstrumental' },

    { type: 'progression',      id: 'secondVerse' },
    { type: 'cipherLyrics',     id: 'secondVerse' },

    { type: 'progression',      id: 'secondPreChorus' },
    { type: 'cipherLyrics',     id: 'secondPreChorus' },

    { type: 'progression',      id: 'secondChorus' },
    { type: 'cipherLyrics',     id: 'secondChorus' },

    { type: 'progression',      id: 'secondInstrumental' },

    { type: 'progression',      id: 'firstBridge' },
    { type: 'cipherLyrics',     id: 'firstBridge' },

    { type: 'progression',      id: 'secondBridge' },
    { type: 'cipherLyrics',     id: 'secondBridge' },

    { type: 'progression',      id: 'refrain' },
    { type: 'cipherLyrics',     id: 'refrain' },

    { type: 'progression',      id: 'lastChorus' },
    { type: 'cipherLyrics',     id: 'lastChorus' },

    { type: 'progression',      id: 'outro' },
    { type: 'cipherLyrics',     id: 'outro' },
]

const progressions = [
    {
        id: 'firstVerse',
        title: 'Verse 1',
        caption: '',
        notes: ['Am', 'Gadd11', 'Fmaj7', 'Fmaj7', 'x4'],
        progression: 'D - D - - U D U',
        palmMute: true
    },
    {
        id: 'firstPreChorus',
        title: 'Pre-Chorus',
        caption: '',
        notes: ['Gadd11', 'Gadd11', 'C', 'Fmaj7', 'break', 'Gadd11', 'Gadd11', 'break', 'Fmaj7', '-'],
        progression: 'D - D - - U D U break break D - - - - - - -',
        palmMute: true
    },
    {
        id: 'firstChorus',
        title: 'Chorus',
        caption: '',
        notes: ['C', 'Gadd11', 'Am', 'Fmaj7', 'break', 'C', 'Gadd11', 'break', 'Fmaj7', 'break', 'Fmaj7'],
        progression: 'D - D - - U D U break break D - D U - U D U break - U D U - U D U',
        repeat: 'x2'
    },
    {
        id: 'firstInstrumental',
        title: 'Instrumental',
        caption: '',
        notes: ['C', 'C', 'C', 'C'],
        progression: 'D - D - - U D U',
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        caption: '',
        notes: ['Am', 'Gadd11', 'Fmaj7', 'Fmaj7', 'x4'],
        progression: 'D - D - - U D U',
        palmMute: true
    },
    {
        id: 'secondPreChorus',
        title: 'Pre-Chorus',
        caption: '',
        notes: ['Gadd11', 'Gadd11', 'C', 'Fmaj7', 'break', 'Gadd11', 'Gadd11', 'Fmaj7', 'Fmaj7', 'break', 'Fmaj7', 'break', 'Fmaj7'],
        progression: 'D - D - - U D U break break break D - - - - - - -',
        palmMute: true
    },
    {
        id: 'secondChorus',
        title: 'Chorus',
        caption: '',
        notes: ['C', 'Gadd11', 'Am', 'Fmaj7', 'break', 'C', 'Gadd11', 'break', 'Fmaj7', 'break', 'Fmaj7'],
        progression: 'D - D - - U D U break break D - D U - U D U break - U D U - U D U',
        repeat: 'x2'
    },
    {
        id: 'secondInstrumental',
        title: 'Instrumental',
        caption: '',
        notes: ['C', 'C', 'C', 'C', 'break', 'Fmaj7', 'Fmaj7','Fmaj7','Fmaj7'],
        progression: 'D - D - - U D U',
    },
    {
        id: 'firstBridge',
        title: 'Bridge 1',
        caption: '',
        notes: ['Gadd11', 'Gadd11', 'C', 'Fmaj7', 'x2', 'break', 'Gadd11', 'Gadd11', 'break', 'Am', 'Gadd11', 'break', 'Fmaj7', 'Fmaj7', 'break', 'Fmaj7', 'doubleBreak', 'Gadd11', 'Gadd11', 'break', 'Am, Gadd11', 'Fmaj7', '-'],
        progression: 'D - D - - U D U break break D - - - - - - - break D - D - - U D U break D - - - - - - - break break D - D - - U D U break D - - - - - - -',
    },
    {
        id: 'secondBridge',
        title: 'Bridge 2',
        caption: 'ACCENTED STRUMS UNDERLINED',
        notes: ['C','Gadd11', 'Am', 'Fmaj7', 'x2', 'break', 'C','Gadd11', 'Am', 'Fmaj7'],
        progression: 'D - D - - U D U break D - d-accented - - U D U',
        palmMute: true
    },
    {
        id: 'refrain',
        title: 'Verse 3',
        caption: 'OR SIMPLY CLAP YOUR HANDS, LIKE TAYLOR DOES LIVE!',
        notes: ['NO CHORDS', 'x7', 'break', 'Fmaj7'],
        progression: 'D - D - D U D U break D U D U D U D U'
    },
    {
        id: 'lastChorus',
        title: 'Chorus',
        caption: '',
        notes: ['C','Gadd11', 'Am', 'Fmaj7', 'break', 'C','Gadd11', 'Fmaj7', 'Fmaj7'],
        progression: 'D - D U - U D U',
        repeat: 'x2'
    },
    {
        id: 'outro',
        title: 'Outro',
        caption: '',
        notes: ['C','Gadd11', 'Am', 'Fmaj7', 'break', 'C','Gadd11', 'Fmaj7', '-', 'break', 'C'],
        progression: 'D - D U - U D U break D - - - - - - - break D - - - - - - -',
    }
]

const tabs = []

const cipherParts = [
    {
        id: 'firstVerse',
        title: 'Verse 1',
        referenceProgression: progressions.find(progression => progression.id === 'firstVerse')
    },
    {
        id: 'firstPreChorus',
        title: 'Pre-Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'firstPreChorus')
    },
    {
        id: 'firstChorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'firstChorus')
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        referenceProgression: progressions.find(progression => progression.id === 'secondVerse')
    },
    {
        id: 'secondPreChorus',
        title: 'Pre-Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'secondPreChorus')
    },
    {
        id: 'secondChorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'secondChorus')
    },
    {
        id: 'firstBridge',
        title: 'Bridge 1',
        referenceProgression: progressions.find(progression => progression.id === 'firstBridge')
    },
    {
        id: 'secondBridge',
        title: 'Bridge 2',
        referenceProgression: progressions.find(progression => progression.id === 'secondBridge')
    },
    {
        id: 'refrain',
        title: 'Verse 3',
        referenceProgression: progressions.find(progression => progression.id === 'refrain')
    },
    {
        id: 'lastChorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'lastChorus')
    },
    {
        id: 'Outro',
        title: 'outro',
        referenceProgression: progressions.find(progression => progression.id === 'outro')
    }
]

let cipherLyrics = `
Am             G                     F
You, with your words like knives and swords
F
And weapons that you use against me
Am        G                 F
You, have knocked me off my feet again
F
Got me feelin' like a nothin'
Am             G                     F
You, with your voice like nails on a chalkboard
F
Callin' me out when I'm wounded
Am   G                     F
You, pickin' on the weaker man
${ divider }
G
 Well you can take me down
C               F      G
 With just one single blow
      (F)
But you don't know, what you don't know
C       G      F
Someday I'll be livin' in a big ol' city
    C          G            F
And all you're ever gonna be is mean
${ divider }
C       G   F
Someday I'll be big enough so you can't hit me
    C          G            F......
And all you're ever gonna be is mean
  ......           C         C
Why you gotta be so mean?
${ divider }
Am             G
You, with your switching sides and
     F
Your wildfire lies and your humiliation
Am        G              F
You, have pointed out my flaws again

As if I don't already see them
Am          G
I walk with my head down
          F
Tryin' to block you out
         F
'Cause I never impress you
Am     G           F
I just wanna feel okay again
${ divider }
G
I bet you got pushed around
C           F        G
Somebody made you cold
G
But the cycle ends right now 'cause
F                     G
You can't lead me down that road
       (F)
And you don't know what you don't know
${ divider }
C       G      F
Someday I'll be livin' in a big ol' city
    C          G            F
And all you're ever gonna be is mean
C       G   F
Someday I'll be big enough so you can't hit me
    C          G            F
And all you're ever gonna be is mean
                   D       D -once  A4   G
Why you gotta be so mean?
${ divider }
          G
And I can see you years from now in a bar
C               F            G
 Talkin' over a football game
G
With that same big loud opinion
C            F        G
But nobody´s listening
G
Washed up and ranting about the
C          G        F
Same old   bitter   things
G                                 C  G     F
Drunk and grumblin' all about how I  can't sing
                  C    G  Am
But all you are is mean
${ divider }
F              C            G          Am
All you are is mean...and a liar...and pathetic
    F                 C         G         Am        F
And alone in life and mean, and mean, and mean, and mean
${ divider }
But someday I'll be livin' in a big ol' city
                                        F
And all you're ever gonna be is mean,  yeah--ah
${ divider }
C       G   F
Someday I'll be big enough so you can't hit me
    C          G            F
And all you're ever gonna be is mean
F                   C
Why you gotta be so...Someday
G      F
I'll be livin' in a big ol' city (why ya gotta be so mean)
    C          G            F
And all you're ever gonna be is mean (why ya gotta be so mean)
C       G   F
Someday I'll be big enough so you can't hit me (why ya gotta be so mean)
    C     G            F
And all you're ever gonna be is mean
${ divider }
                   C
Why you gotta be so  mean?
`

const lyrics = `
<b>[Verse 1]</b>
You, with your words like knives
And swords and weapons that you use against me
You have knocked me off my feet again
Got me feelin' like a nothing
You, with your voice like nails on a chalkboard
Calling me out when I'm wounded
You, pickin' on the weaker man

<b>[Pre-Chorus]</b>
Well, you can take me down
With just one single blow
But you don't know what you don't know

<b>[Chorus]</b>
Someday, I'll be livin' in a big ole city
And all you're ever gonna be is mean
Someday, I'll be big enough so you can't hit me
And all you're ever gonna be is mean
Why you gotta be so mean?

<b>[Verse 2]</b>
You, with your switching sides
And your wildfire lies and your humiliation
You have pointed out my flaws again
As if I don't already see them
I walk with my head down, trying to block you out
'Cause I'll never impress you
I just wanna feel okay again

<b>[Pre-Chorus]</b>
I bet you got pushed around
Somebody made you cold
But the cycle ends right now
'Cause you can't lead me down that road
And you don't know what you don't know

<b>[Chorus]</b>
Someday, I'll be livin' in a big ole city
And all you're ever gonna be is mean
Someday, I'll be big enough so you can't hit me
And all you're ever gonna be is mean
Why you gotta be so mean?

<b>[Bridge]</b>
And I can see you years from now in a bar
Talking over a football game
With that same big, loud opinion, but nobody's listening
Washed up and ranting about the same ole bitter things
Drunk and grumbling on about how I can't sing
But all you are is mean

<b>[Buildup]</b>
All you are is mean
And a liar, and pathetic
And alone in life, and mean
And mean, and mean, and mean

<b>[Chorus]</b>
But someday, I'll be livin' in a big ole city
And all you're ever gonna be is mean, yeah
Someday, I'll be big enough so you can't hit me
And all you're ever gonna be is mean
Why you gotta be so mean?
Someday, I'll be livin' in a big ole city
(Why you gotta be so mean?)
And all you're ever gonna be is mean
(Why you gotta be so mean?)
Someday, I'll be big enough so you can't hit me
(Why you gotta be so mean?)
And all you're ever gonna be is mean
Why you gotta be so mean?
`
