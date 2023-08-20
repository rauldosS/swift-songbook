const musicId = 'the-man'
const albumId = 'lover'
const musicTitle = 'The Man'
const tuning = 'C'
const chordShape = null
const capoFret = null
const spotify = 'https://open.spotify.com/embed/track/3RauEVgRgj1IuWdJ9fDs70?utm_source=generator'
const chordsMusic = ['F', 'G', 'C', 'Am']
const videoUrl = 'https://www.youtube.com/embed/JH14683wgl0'
const basicCipher = false

const partsCipher = [
    { type: 'alert',                id: 'palmMute' },

    { type: 'progression',          id: 'main' },
    { type: 'cipherLyrics',         id: 'firstVerse' },

    { type: 'progression',          id: 'chorus' },
    { type: 'cipherLyrics',         id: 'firstPreChorus' },

    { type: 'cipherLyrics',         id: 'chorus' },

    { type: 'progression',          id: 'main' },
    { type: 'cipherLyrics',         id: 'secondVerse' },

    { type: 'progression',          id: 'chorus' },
    { type: 'cipherLyrics',         id: 'secondPrechorus' },
    { type: 'cipherLyrics',         id: 'secondChorus' },

    { type: 'progression',          id: 'bridge' },
    { type: 'cipherLyrics',         id: 'bridge' },

    { type: 'progression',          id: 'lastPreChorus' },
    { type: 'cipherLyrics',         id: 'lastPreChorus' },

    { type: 'progression',          id: 'lastChorus' },
    { type: 'cipherLyrics',         id: 'lastChorus' },

    { type: 'progression',          id: 'outro' },
    { type: 'cipherLyrics',         id: 'outro' },
]

const progressions = [
    {
        id: 'main',
        title: 'Intro | Verse Progression',
        caption: '',
        progressionCaption: '',
        notes: ['F', 'G', 'C', 'Am', 'x2'],
        progression: 'D - U D U D',
    },
    {
        id: 'chorus',
        title: 'Pre-chorus | Chorus Progression',
        caption: '',
        progressionCaption: '',
        notes: ['F', 'G', 'C', 'Am', 'x5'],
        progression: 'D - U D U D - U D U D - D U',
    },
    {
        id: 'bridge',
        title: 'Bridge',
        caption: 'ACCENTED STRUMS UNDERLINED',
        progressionCaption: '',
        notes: ['F', 'G', 'C', 'Am'],
        progression: 'd-accented D D d-accented D D d-accented D',
        palmMute: true
    },
    {
        id: 'lastPreChorus',
        title: 'Pre-chorus',
        caption: '',
        progressionCaption: '',
        notes: ['F', 'G', 'C', 'Am'],
        progression: 'D - - - - - - -',
    },
    {
        id: 'lastChorus',
        title: 'Chorus',
        caption: '',
        progressionCaption: '',
        notes: ['F', 'G', 'C', 'Am', 'x5'],
        progression: 'D - U D U D - U D U D - D U',
    },
    {
        id: 'outro',
        title: 'Outro',
        caption: '',
        progressionCaption: '',
        notes: ['F', 'G', 'C', 'Am'],
        progression: 'D - - - - - - -',
    },
]

const tabs = []

const cipherParts = [
    {
        id: 'firstVerse',
        title: 'Verse 1',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'firstPreChorus',
        title: 'Pre-chorus 1',
        referenceProgression: progressions.find(progression => progression.id === 'chorus')
    },
    {
        id: 'chorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'chorus')
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'secondPrechorus',
        title: 'Pre-chorus 2',
        referenceProgression: progressions.find(progression => progression.id === 'chorus')
    },
    {
        id: 'secondChorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'chorus')
    },
    {
        id: 'bridge',
        title: 'Bridge',
        referenceProgression: progressions.find(progression => progression.id === 'bridge')
    },
    {
        id: 'lastPreChorus',
        title: 'Pre-chorus',
        referenceProgression: progressions.find(progression => progression.id === 'chorus')
    },
    {
        id: 'lastChorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'chorus')
    },
    {
        id: 'outro',
        title: 'Outro',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    }
]

let cipherLyrics = `
           F                   G
I would be complex, I would be cool
             C                                   Am
They'd say I played the field before I found someone to commit to
                  F              G
And that would be okay for me to do
      C                                 Am
Every conquest I had made would make me more of a boss to you
${ divider }
F
 I'd be a fearless leader
G
 I'd be an alpha type
C
 When everyone believes ya
Am
 What's that like?
${ divider }
F                         G
I'm so sick of running as fast as I can
C                                      Am
 Wondering if I'd get there quicker if I was a man
    F                          G
And I'm so sick of them coming at me again
          C                 Am
'Cause if I was a man, then I'd be the man
           F   G
I'd be the man
           C   Am
I'd be the man
${ divider }
             F                   G
They'd say I hustled, put in the work
              C                                       Am
They wouldn't shake their heads and question how much of this I deserve
           F                 G
What I was wearing, if I was rude
             C                       Am
Could all be separated from my good ideas and power moves
${ divider }
F                             G
 And they would toast to me, oh, let the players play
C                   Am
 I'd be just like Leo in Saint Tropez
${ divider }
F                         G
I'm so sick of running as fast as I can
C                                      Am
 Wondering if I'd get there quicker if I was a man
    F                          G
And I'm so sick of them coming at me again
          C                 Am
'Cause if I was a man, then I'd be the man
           F   G
I'd be the man
           C   Am
I'd be the man
${ divider }
                             F
What's it like to brag about raking in dollars
            G
And getting bitches and models?
             C
And it's all good if you're bad
          Am
And it's okay if you're mad
             F                             G
If I was out flashing my dollars, I'd be a bitch not a baller
                C
They'd paint me out to be bad
          Am
So, it's okay that I'm mad
${ divider }
F                         G
I'm so sick of running as fast as I can
C                                      Am
 Wondering if I'd get there quicker if I was a man (You know that)
${ divider }
    F                          G
And I'm so sick of them coming at me again (Coming at me again)
          C
'Cause if I was a man (If I was a man)
     Am
Then I'd be the man (Then I'd be the man)
F                         G
I'm so sick of running as fast as I can (As fast as I can)
C                                      Am
 Wondering if I'd get there quicker if I was a man (Hey)
    F                          G
And I'm so sick of them coming at me again (Coming at me again)
          C                                  Am
'Cause if I was a man (If I was a man), then I'd be the man
           F   G
I'd be the man
           C       Am
I'd be the man (Oh)
           F         G
I'd be the man (Yeah)
           C   Am
I'd be the man (I'd be the man)
${ divider }
F            G   
  If I was a man
C     Am
  Then I'd be the man
`

const lyrics = `
<b>[Verse 1]</b>
I would be complex, I would be cool
They'd say I played the field before I found someone to commit to
And that would be okay for me to do
Every conquest I had made would make me more of a boss to you

<b>[Pre-Chorus]</b>
I'd be a fearless leader, I'd be an alpha type
When everyone believes ya, what's that like?

<b>[Chorus]</b>
I'm so sick of running as fast as I can
Wonderin' if I'd get there quicker if I was a man
And I'm so sick of them comin' at me again
'Cause if I was a man, then I'd be the man
I'd be the man (Man)
I'd be the man (Man)

<b>[Verse 2]</b>
They'd say I hustled, put in the work
They wouldn't shake their heads and question how much of this I deserve
What I was wearing, if I was rude
Could all be separated from my good ideas and power moves

<b>[Pre-Chorus]</b>
And they would toast to me, oh (Ayy), let the players play
I'd be just like Leo in Saint-Tropez

<b>[Chorus]</b>
I'm so sick of running as fast as I can
Wonderin' if I'd get there quicker if I was a man
And I'm so sick of them comin' at me again
'Cause if I was a man, then I'd be the man
I'd be the man (Man)
I'd be the man (Man)

<b>[Bridge]</b>
What's it like to brag about raking in dollars
And getting bitches and models?
And it's all good if you're bad
And it's okay if you're mad
If I was out flashin' my dollars
I'd be a bitch, not a baller
They'd paint me out to be bad
So it's okay that I'm mad

<b>[Chorus]</b>
I'm so sick of running as fast as I can
Wonderin' if I'd get there quicker if I was a man (You know that)
And I'm so sick of them comin' at me again (Comin' at me again)
'Cause if I was a man (If I was a man), then I'd be the man (Then I'd be the man)
I'm so sick of running as fast as I can (As fast as I can)
Wonderin' if I'd get there quicker if I was a man (Hey)
And I'm so sick of them comin' at me again (Comin' at me again)
'Cause if I was a man (If I was a man), then I'd be the man
I'd be the man (Man)
I'd be the man (Man, oh)
I'd be the man (Man, yeah)
I'd be the man (Man, I'd be the man)

<b>[Outro]</b>
If I was a man
Then I'd be the man
`
