const musicId = 'ready-for-it'
const albumId = 'reputation'
const musicTitle = '...Ready For It?'
const tuning = 'Em'
const chordShape = ''
const capoFret = ''
const spotify = 'https://open.spotify.com/embed/track/2yLa0QULdQr0qAIvVwN6B5?utm_source=generator'
const chordsMusic = ['Em', 'G', 'Am', 'C', 'D']
const videoUrl = 'https://www.youtube.com/embed/PCk2Ud8xjYs'
const basicCipher = false

// https://drive.google.com/file/d/1Pfc2yNKmnGR5seAKfWZqc7cEtHA4b6Gh/view

const partsCipher = [
    { type: 'progression',      id: 'intro' },
    { type: 'cipherLyrics',     id: 'intro' },

    { type: 'progression',      id: 'firstVerse' },
    { type: 'cipherLyrics',     id: 'firstVerse' },

    { type: 'progression',      id: 'firstPreChorus' },
    { type: 'cipherLyrics',     id: 'firstPreChorus' },

    { type: 'progression',      id: 'firstChorus' },
    { type: 'cipherLyrics',     id: 'firstChorus' },

    { type: 'progression',      id: 'firstInstrumental' },
    { type: 'cipherLyrics',     id: 'firstInstrumental' },

    { type: 'progression',      id: 'secondVerse' },
    { type: 'cipherLyrics',     id: 'secondVerse' },

    { type: 'progression',      id: 'secondPreChorus' },
    { type: 'cipherLyrics',     id: 'secondPreChorus' },

    { type: 'progression',      id: 'secondChorus' },
    { type: 'cipherLyrics',     id: 'secondChorus' },

    { type: 'progression',      id: 'secondInstrumental' },
    { type: 'cipherLyrics',     id: 'secondInstrumental' },

    { type: 'progression',      id: 'refrain' },
    { type: 'cipherLyrics',     id: 'refrain' },

    { type: 'progression',      id: 'lastPreChorus' },
    { type: 'cipherLyrics',     id: 'lastPreChorus' },

    { type: 'progression',      id: 'lastChorus' },
    { type: 'cipherLyrics',     id: 'lastChorus' },

    { type: 'progression',      id: 'lastRefrain' },
    { type: 'cipherLyrics',     id: 'lastRefrain' },
]

const progressions = [
    {
        id: 'intro',
        title: 'Intro',
        caption: 'PROGRESSIVE SLIDE ON ACCENTED NOTES',
        notes: [
            'Em', 'break',
            'Em', 'x2',
            'doubleBreak',
            'Em',
        ],
        progression: `
            D - D - D - - - - - - - - - - - - - break 
            D - D - D - X - - - - - - - - - - - break break 
            D D D - d-accented u-accented - d-accented u-accented - d-accented u-accented - d-accented u-accented - d-accented u-accented 
        `,
    },
    {
        id: 'firstVerse',
        title: 'Verse 1',
        caption: 'PROGRESSIVE SLIDE ON ACCENTED NOTES',
        notes: [
            'Em', 'x3', 'break',
            'N.C. ON ACCENTED NOTES',
            'doubleBreak',
            'Em',
        ],
        progression: `
            D - D - d-accented u-accented d-accented u-accented - d-accented d-accented - d-accented u-accented break 
            break 
            break 
            D D D - d-accented u-accented - d-accented u-accented - d-accented u-accented - d-accented u-accented - d-accented u-accented 
            break 
        `,
        repeat: 'x2'
    },
    {
        id: 'firstPreChorus',
        title: 'Pre-Chorus',
        caption: 'PROGRESSIVE SLIDE ON ACCENTED NOTES',
        notes: [
            'Em', 'x3', 'break',
            'N.C. ON ACCENTED NOTES',
            'doubleBreak',
            'Em',
        ],
        progression: `
            D - D - d-accented u-accented d-accented u-accented - d-accented d-accented - d-accented u-accented break 
            break 
            break 
            D D D - d-accented u-accented - d-accented u-accented - d-accented u-accented - d-accented u-accented - d-accented u-accented 
            break 
        `,
    },
    {
        id: 'firstChorus',
        title: 'Chorus',
        caption: '',
        notes: ['G', 'Am', 'Em', 'x4'],
        progression: `D - U U D U`,
    },
    {
        id: 'firstInstrumental',
        title: 'Instrumental',
        caption: 'PROGRESSIVE SLIDE ON ACCENTED NOTES',
        notes: [
            'Em',
            'doubleBreak',
            'Em',
        ],
        progression: `
            D - D - D - X - - - - - - - - - - - break break 
            D D D - d-accented u-accented - d-accented u-accented - d-accented u-accented - d-accented u-accented - d-accented u-accented 
        `,
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        caption: 'PROGRESSIVE SLIDE ON ACCENTED NOTES',
        notes: [
            'Em', 'x3', 'break',
            'N.C. ON ACCENTED NOTES',
            'doubleBreak',
            'Em',
        ],
        progression: `
            D - D - d-accented u-accented d-accented u-accented - d-accented d-accented - d-accented u-accented break 
            break 
            break 
            D D D - d-accented u-accented - d-accented u-accented - d-accented u-accented - d-accented u-accented - d-accented u-accented 
            break 
        `,
        repeat: 'x2'
    },
    {
        id: 'secondPreChorus',
        title: 'Pre-Chorus',
        caption: 'PROGRESSIVE SLIDE ON ACCENTED NOTES',
        notes: [
            'Em', 'x3', 'break',
            'N.C. ON ACCENTED NOTES',
            'doubleBreak',
            'Em',
        ],
        progression: `
            D - D - d-accented u-accented d-accented u-accented - d-accented d-accented - d-accented u-accented break 
            break 
            break 
            D D D - d-accented u-accented - d-accented u-accented - d-accented u-accented - d-accented u-accented - d-accented u-accented 
            break 
        `,
    },
    {
        id: 'secondChorus',
        title: 'Chorus',
        caption: '',
        notes: ['G', 'Am', 'Em', 'x4'],
        progression: `D - U U D U`,
    },
    {
        id: 'secondInstrumental',
        title: 'Instrumental',
        caption: 'PROGRESSIVE SLIDE ON ACCENTED NOTES',
        notes: ['Em', 'x2'],
        progression: `D - D - D - X - - - - - - - - - - -`,
    },
    {
        id: 'refrain',
        title: 'Refrain',
        caption: 'PROGRESSIVE SLIDE ON ACCENTED NOTES',
        notes: ['Em', 'x4',],
        progression: `D - D - d-accented u-accented d-accented u-accented - d-accented d-accented - d-accented u-accented break `
    },
    {
        id: 'lastPreChorus',
        title: 'Pre-Chorus',
        caption: '',
        notes: ['C', 'Em', 'D', 'Am', 'break', 'C', 'Em', 'D'],
        progression: `D - - - - - - -`
    },
    {
        id: 'lastChorus',
        title: 'Chorus',
        caption: '',
        notes: ['G', 'Am', 'Em', 'x4'],
        progression: `D U D D - D U`,
    },
    {
        id: 'lastRefrain',
        title: 'Chorus',
        caption: '',
        notes: ['G', 'Am', 'Em', 'x2', 'break', 'C'],
        progression: `D U D D - D U break D - - - - - - -`,
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
        title: 'Post-Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'firstPreChorus')
    },
    {
        id: 'firstChorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'firstChorus')
    },
    {
        id: 'firstInstrumental',
        title: 'Instrumental',
        referenceProgression: progressions.find(progression => progression.id === 'firstInstrumental'),
        onlyCipherColumns: true
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        referenceProgression: progressions.find(progression => progression.id === 'secondVerse')
    },
    {
        id: 'secondPreChorus',
        title: 'Post-Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'secondPreChorus')
    },
    {
        id: 'secondChorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'secondChorus')
    },
    {
        id: 'secondInstrumental',
        title: 'Instrumental',
        referenceProgression: progressions.find(progression => progression.id === 'secondInstrumental'),
        onlyCipherColumns: true
    },
    {
        id: 'refrain',
        title: 'Refrain',
        referenceProgression: progressions.find(progression => progression.id === 'refrain')
    },
    {
        id: 'lastPreChorus',
        title: 'Pre-Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'lastPreChorus')
    },
    {
        id: 'lastChorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'lastChorus')
    },
    {
        id: 'lastRefrain',
        title: 'Refrain',
        referenceProgression: progressions.find(progression => progression.id === 'lastRefrain')
    },
]

let cipherLyrics = `
Em  Em  Em  Em
${ divider }
               Em
 Knew he was a killer
 
 First time that I saw him
                 Em
 Wonder how many girls he had loved and left haunted
               Em
 But if he's a ghost then I can be a phantom
                 Em
 Holdin' him for ransom
                            Em
 Some, some boys are tryin' too hard
 
 He don't try at all though
                 Em
 Younger than my exes but he act like such a man, so
               Em
 I see nothing better, I keep him forever
           Em
 Like a vendetta-ta
${ divider }
       Em
 I-I-I see how this is gon' go
       Em
 Touch me, and you'll never be alone
          Em
 I-Island breeze and lights down low
               Em
 No one has to know
${ divider }
                      G            Am     Em
 In the middle of the night, in my dreams
 C                            G     Am    Em   C
 You should see the things we do, baby
                      G           Am     Em
 In the middle of the night in my dreams
   C                      G
 I know I'm gonna be with you
       Am
 So I take my time
N.C.
 Are you ready for it?
${ divider } 
Em  Em
${ divider }
             Em
 Knew I was a robber
 
 First time that he saw me
                     Em
 Stealing hearts and running off and never saying sorry
              Em
 But if I'm a thief then
 
 He can join the heist
                      Em
 And we'll move to an island-and

              Em
 He can be my jailer
 
 Burton to this Taylor
             Em
 Every lover known in comparison is a failure
                Em
 I forget their names now
 
 I'm so very tame now
              Em
 Never be the same now, now
${ divider } 
       Em
 I-I-I see how this is gon' go
       Em
 Touch me, and you'll never be alone
          Em
 I-Island breeze and lights down low
               Em
 No one has to know
${ divider }
                      G            Am     Em
 In the middle of the night, in my dreams
 C                            G     Am    Em   C
 You should see the things we do, baby
                      G           Am     Em
 In the middle of the night in my dreams
   C                      G
 I know I'm gonna be with you
       Am
 So I take my time
N.C.
 Are you ready for it?
${ divider }
Em Em
${ divider }
 Em
 Baby, let the games begin
                 Em
 Let the games begin, let the games begin
 Em
 Baby, let the games begin
                 Em
 Let the games begin, let the games begin
${ divider }
       C               Em
 I-I-I see how this is gon' go
       D                   Am
 Touch me and you'll never be alone
          C                      Em
 I-Island breeze and lights down low
               D
 No one has to know
${ divider }
                      G         Am            Em      C
 In the middle of the night, in my dreams (my dreams)
                              G          Am           Em  C
 You should see the things we do (we do) baby (baby)
                      G        Am                   Em  C
 In the middle of the night in my dreams (my dreams)
                          G
 I know I'm gonna be with you
       Am      Em  C
 So I take my time (in the mddle of the...)
${ divider }
 G               Am
 Baby, let the games begin
                 Em
 Let the games begin
           C
 Let the games begin (Are you ready for it?)
 G               Am
 Baby, let the games begin
                 Em
 Let the games begin
           C
 Let the games begin (Are you ready for it?)
`

const lyrics = `
<b>[Verse 1]</b>
Knew he was a killer first time that I saw him
Wondered how many girls he had loved and left haunted
But if he's a ghost, then I can be a phantom
Holdin' him for ransom, some
Some boys are tryin' too hard, he don't try at all, though
Younger than my exes, but he act like such a man, so
I see nothing better, I keep him forever
Like a vendetta-ta

<b>[Pre-Chorus]</b>
I, I, I see how this is gon' go
Touch me and you'll never be alone
I-Island breeze and lights down low
No one has to know

<b>[Chorus]</b>
In the middle of the night, in my dreams
You should see the things we do, baby, mmm
In the middle of the night, in my dreams
I know I'm gonna be with you, so I take my time
Are you ready for it?

<b>[Verse 2]</b>
Knew I was a robber first time that he saw me
Stealing hearts and running off and never sayin' sorry
But if I'm a thief, then he can join the heist, and
We'll move to an island, and
And he can be my jailer, Burton to this Taylor
Every love I've known in comparison is a failure
I forget their names now, I'm so very tame now
Never be the same now, now

<b>[Pre-Chorus]</b>
I, I, I see how this is gon' go
Touch me and you'll never be alone
I-Island breeze and lights down low
No one has to know (No one has to know)

<b>[Chorus]</b>
In the middle of the night, in my dreams
You should see the things we do, baby, mmm
In the middle of the night in my dreams
I know I'm gonna be with you, so I take my time
Are you ready for it?
Oh, are you ready for it?

<b>[Refrain]</b>
Baby, let the games begin
Let the games begin
Let the games begin
Baby, let the games begin
Let the games begin
Let the games begin

<b>[Pre-Chorus]</b>
I, I, I see how this is gon' go
Touch me and you'll never be alone
I-Island breeze and lights down low
No one has to know

<b>[Chorus]</b>
In the middle of the night (Night), in my dreams (My dreams)
You should see the things we do (We do), baby (Baby), mmm (Eh)
In the middle of the night, in my dreams (My dreams)
I know I'm gonna be with you (I know I'm gonna be with you), so I take my time
In the middle of the night

<b>[Refrain]</b>
Baby, let the games begin
Let the games begin
Let the games begin
Are you ready for it?
Baby, let the games begin
Let the games begin
Let the games begin
Are you ready for it?
`
