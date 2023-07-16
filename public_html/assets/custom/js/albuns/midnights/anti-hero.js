musicId = 'anti-hero'
musicTitle = 'Anti-Hero'
tuning = 'E'
chordShape = null
capoFret = '4'
spotify = 'https://open.spotify.com/embed/track/0V3wPSX9ygBnCm8psDIegu?utm_source=generator'
chordsMusic = ['Fmaj7', 'C', 'Gadd11', 'Am7']
videoUrl = 'https://www.youtube.com/embed/DufVVyUI_NA'
palmMute = true

partsCipher = [
    { type: 'progression',          id: 'firstVerse' },
    { type: 'cipherLyrics',         id: 'firstVerse' },

    { type: 'cipherLyrics',         id: 'firstPreChorus' },

    { type: 'progression',          id: 'chorus' },
    { type: 'cipherLyrics',         id: 'chorus' },

    { type: 'cipherLyrics',         id: 'instrumental' },

    { type: 'progression',          id: 'secondVerse' },
    { type: 'cipherLyrics',         id: 'secondVerse' },

    { type: 'cipherLyrics',         id: 'secondPrechorus' },

    { type: 'progression',          id: 'bridge' },
    { type: 'cipherLyrics',         id: 'bridge' },

    { type: 'progression',          id: 'lastChorus' },
    { type: 'cipherLyrics',         id: 'lastChorus' },

    { type: 'progression',          id: 'outro' },
]

progressions = [
    {
        id: 'firstVerse',
        title: 'Verse | Pre-Chorus',
        caption: '',
        progressionCaption: '',
        // notesMultipleProgression: ['Fmaj7', 'C', 'Gadd11', 'Am7'],
        // multipleProgression: ['D - U D U', 'D - U D U D D U', 'D - U D U', 'D - U D U D D U']
        notes: ['Fmaj7, C', 'Gadd11, Am7'],
        progression: 'D - D - D - D u-highlight - U D - D - D U',
        palmMute: true
    },
    {
        id: 'secondVerse',
        title: 'Verse | Pre-Chorus',
        caption: '',
        progressionCaption: '',
        notes: ['Fmaj7, C', 'Gadd11, Am7'],
        progression: 'D - D - D - D u-highlight - U D - D - D U',
        palmMute: true
    },
    {
        id: 'chorus',
        title: 'Chorus',
        caption: '',
        progressionCaption: '',
        notes: ['Fmaj7, C', 'Gadd11, Am7'],
        progression: 'D - D - D - D u-highlight - U D - D - D U'
    },
    {
        id: 'instrumental',
        title: 'Instrumental',
        caption: '',
        progressionCaption: '',
        notes: ['Fmaj7, C', 'Gadd11, Am7'],
        progression: 'D - D - D - D u-highlight - U D - D - D U'
    },
    {
        id: 'bridge',
        title: 'Bridge',
        caption: 'Only the first line with palm mute (x3)',
        progressionCaption: '',
        notes: [
            'Fmaj7, C', 'Gadd11, Am7', 'x3', 'break',
            'Fmaj7, C', 'Gadd11, Am7', 'break',
            'Fmaj7, C', 'Gadd11, Am7', 'x4'
        ],
        progression: 'D - D - D - D u-highlight - U D - D - D U break D - D - D - D u-highlight - U D - D - D U break D - - - - - - - d-highlight - - - - - - - break'
    },
    {
        id: 'lastChorus',
        title: 'Chorus',
        caption: '',
        progressionCaption: '',
        notes: ['-', 'C', 'Gadd11, Am7', 'break', 'Fmaj7, C', 'Gadd11, Am7', 'x3'],
        progression: '- - - - - - - - - - - - D - D - break D - D - D - D u-highlight - U D - D - D U x'
    },
    {
        id: 'outro',
        title: 'Outro',
        caption: '',
        progressionCaption: '',
        notes: ['Fmaj7, C', 'Gadd11, Am7'],
        progression: 'D - - - - - - - d-highlight - - - - - - -'
    }
]

tabs = []

cipherParts = [
    {
        id: 'firstVerse',
        title: 'Verse 1',
        referenceProgression: progressions.find(progression => progression.id === 'firstVerse')
    },
    {
        id: 'firstPreChorus',
        title: 'Pre-chorus 1',
        referenceProgression: progressions.find(progression => progression.id === 'firstVerse')
    },
    {
        id: 'chorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'chorus')
    },
    // {
    //     id: 'instrumental',
    //     title: 'Instrumental',
    //     referenceProgression: progressions.find(progression => progression.id === 'main')
    // },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        referenceProgression: progressions.find(progression => progression.id === 'secondVerse')
    },
    {
        id: 'secondPrechorus',
        title: 'Pre-chorus 2',
        referenceProgression: progressions.find(progression => progression.id === 'secondVerse')
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
    }
]

cipherLyrics = `
Fmaj7       C                Gadd11      Am7
I have this thing where I get older but just never wiser
Fmaj7     C              Gadd11
Midnights become my afternoons
Fmaj7    C                    Gadd11           Am7           
When my depression works the graveyard shift, all of the people
Fmaj7      C                    Gadd11
I’ve ghosted stand there in the room
${ divider }
  Fmaj7         C                Gadd11
I should not be left to my own devices
     Am7                  Fmaj7
They come with prices and vices
  C                 Gadd11           Am7
I end up in crisis (Tale as old as time)
Fmaj7       C             Gadd11
  I wake up screaming from dreaming
        Am7                     Fmaj7
One day I’ll watch as you’re leaving
          C                 Gadd11
Cause you got tired of my scheming
         Am7
(For the last time)
${ divider }
Fmaj7  C
It’s me, hi
Gadd11                Am7
I’m the problem, it’s me
Fmaj7  C     Gadd11       Am7
At tea time, everybody agrees
Fmaj7      C               Gadd11                  Am7
I’ll stare directly at the sun, but never in the mirror
Fmaj7      C         Gadd11         Am7
It must be exhausting Always rooting for the anti-hero
${ divider }
Fmaj7    C                 Gadd11     Am7
Sometimes I feel like everybody is a sexy baby
Fmaj7     C               Gadd11
And I’m a monster on the hill
Fmaj7      C                Gadd11           Am7
Too big to hang out, slowly lurching toward your favorite city
Fmaj7          C                  Gadd11    Am7
Pierced through the heart, but never killed
${ divider }
Fmaj7      C                 Gadd11   Am7           Fmaj7
  Did you hear my covert narcissism I disguise as altruism
      C           Gadd11                    Am7
Like some kind of congressman (Tale as old as time)
Fmaj7       C                Gadd11
  I wake up screaming from dreaming
       Am7                     Fmaj7
One day I’ll watch as you’re leaving
      C                Gadd11
And life will lose all its meaning
         Am7
(For the last time)
${ divider }
Fmaj7      C                   Gadd11           Am7
 I have this dream my daughter-in-law kills me for the money
Fmaj7      C              Gadd11    Am7
She thinks I left them in the will
Fmaj7     C                   Gadd11       Am7
 The family gathers around and reads it and then someone screams out
Fmaj7       C                  Gadd11      Am7
 “She’s laughing up at us from hell!”
Fmaj7     C
It’s me, hi,
Gadd11                Am7
I’m the problem, it’s me
Fmaj7     C
It’s me, hi
Gadd11               Am7
I’m the problem, it’s me
Fmaj7    C      
It’s me, hi,    
Gadd11     Am7      Fmaj7  C     Gadd11     Am7
everybody agrees, everybody agrees…
${ divider }
 <b>-</b>      C
It’s me, hi
Gadd11                Am7
I’m the problem, it’s me
Fmaj7  C     Gadd11       Am7
At tea time, everybody agrees
Fmaj7      C               Gadd11                  Am7
I’ll stare directly at the sun, but never in the mirror
Fmaj7      C         Gadd11         Am7
It must be exhausting Always rooting for the anti-hero
`

lyrics = `
<b>[Verse 1]</b>
I have this thing where I get older, but just never wiser
Midnights become my afternoons
When my depression works the graveyard shift, all of the people
I've ghosted stand there in the room

<b>[Pre-Chorus]</b>
I should not be left to my own devices
They come with prices and vices
I end up in crisis
(Tale as old as time)
I wake up screaming from dreaming
One day, I'll watch as you're leaving
'Cause you got tired of my scheming
(For the last time)

<b>[Chorus]</b>
It's me, hi
I'm the problem, it's me
At teatime, everybody agrees
I'll stare directly at the sun, but never in the mirror
It must be exhausting always rooting for the anti-hero

<b>[Verse 2]</b>
Sometimes, I feel like everybody is a sexy baby
And I'm a monster on the hill
Too big to hang out, slowly lurching toward your favorite city
Pierced through the heart, but never killed
<b>[Pre-Chorus]</b>
Did you hear my covert narcissism I disguise as altruism
Like some kind of congressman?
(A tale as old as time)
I wake up screaming from dreaming
One day, I'll watch as you're leaving
And life will lose all its meaning
(For the last time)

<b>[Chorus]</b>
It's me, hi
I'm the problem, it's me (I'm the problem, it's me)
At teatime, everybody agrees
I'll stare directly at the sun, but never in the mirror
It must be exhausting always rooting for the anti-hero

<b>[Bridge]</b>
I have this dream my daughter-in-law kills me for the money
She thinks I left them in the will
The family gathers 'round and reads it and then someone screams out
"She's laughing up at us from Hell"

<b>[Breakdown]</b>
It's me, hi
I'm the problem, it's me
It's me, hi
I'm the problem, it's me
It's me, hi
Everybody agrees, everybody agrees
[Chorus]
It's me, hi (Hi)
I'm the problem, it's me (I'm the problem, it's me)
At teatime (Teatime), everybody agrees (Everybody agrees)
I'll stare directly at the sun, but never in the mirror
It must be exhausting always rooting for the anti-hero
`
