const musicId = 'red'
const musicTitle = 'Red'
const tuning = 'E'
const chordShape = null
const capoFret = '4'
// const spotify = 'https://open.spotify.com/embed/track/4yBEU0askBZzE2XEVdEwmx?utm_source=generator'
const spotify = 'https://open.spotify.com/embed/track/4OAuvHryIVv4kMDNSLuPt6?utm_source=generator'
const chordsMusic = ['F', 'Am', 'G', 'C', 'G/B', 'C/E']
const videoUrl = 'https://www.youtube.com/embed/Zlot0i3Zykw'
const basicCipher = false

const partsCipher = [
    { type: 'tabs',             id: 'intro' },

    { type: 'progression',      id: 'intro' },
    { type: 'tabs',             id: 'verse' },
    { type: 'cipherLyrics',     id: 'firstVerse' },

    { type: 'progression',      id: 'firstChorus' },
    { type: 'cipherLyrics',     id: 'firstChorus' },

    { type: 'progression',      id: 'postChorus' },
    { type: 'cipherLyrics',     id: 'firstPostChorus' },

    { type: 'progression',      id: 'secondVerse' },
    { type: 'cipherLyrics',     id: 'secondVerse' },

    { type: 'progression',      id: 'secondChorus' },
    { type: 'cipherLyrics',     id: 'secondChorus' },

    { type: 'progression',      id: 'secondPostChorus' },
    { type: 'cipherLyrics',     id: 'secondPostChorus' },

    { type: 'progression',      id: 'bridge' },
    { type: 'cipherLyrics',     id: 'bridge' },

    { type: 'progression',      id: 'solo' },
    { type: 'tabs',             id: 'solo' },

    { type: 'progression',     id: 'lastChorus' },
    { type: 'cipherLyrics',     id: 'lastChorus' },

    { type: 'progression',      id: 'postLastChorus' },
    { type: 'cipherLyrics',     id: 'postLastChorus' },

    { type: 'progression',      id: 'outro' },
    { type: 'cipherLyrics',     id: 'outro' },
]

const progressions = [
    {
        id: 'intro',
        title: 'Intro | Verse',
        caption: 'Or, single strum each chord',
        notes: ['F', 'Am', 'G'],
        progressionCaption: '',
        progression: 'D - - - - - - -'
    },
    {
        id: 'firstChorus',
        title: 'Chorus',
        caption: '',
        notes: ['F', 'C', 'G', 'G', 'break', 'F', 'Am', 'G', 'G'],
        progressionCaption: '',
        progression: 'D - D - D U D U'
    },
    {
        id: 'firstPostChorus',
        title: 'Post Chorus',
        caption: '',
        notes: ['F', 'Am', 'G', 'G'],
        progressionCaption: '',
        progression: 'D - D - D U D U'
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        caption: '',
        notes: ['F', 'Am', 'G', 'G', 'x2', 'break', 'F', 'Am', 'G', 'G'],
        progressionCaption: '',
        progression: 'D - - - - - - - break block block D block block D block D'
    },
    {
        id: 'secondChorus',
        title: 'Chorus',
        caption: '',
        notes: ['F', 'C', 'G', 'G'],
        progressionCaption: '',
        progression: 'D - D - D U D U'
    },
    {
        id: 'secondPostChorus',
        title: 'Post Chorus',
        caption: '',
        notes: ['F', 'Am', 'G', 'G'],
        progressionCaption: '',
        progression: 'D - D - D U D U'
    },
    {
        id: 'bridge',
        title: 'Bridge',
        caption: '',
        notes: ['F', 'G', 'Am', 'G/B, C', 'break', 'F', 'C/E', 'G', 'G'],
        progressionCaption: '',
        progression: 'D block D block D block D'
    },
    {
        id: 'solo',
        title: 'Solo 2x',
        caption: '',
        notes: ['F', 'Am', 'G', 'G'],
        progressionCaption: '',
        progression: 'D - D - D U D U'
    },
    {
        id: 'lastChorus',
        title: 'Last Chorus',
        caption: '',
        progressionCaption: '',
        notes: ['F', 'Am', 'G', 'G'],
        progression: 'D - D - D U D U',
        notesMultipleProgression: ['F', 'C', 'G', 'G'],
        multipleProgression: ['D - D', 'D U D', 'D - D - D - D', 'D U D U D U D U ']
    },
    {
        id: 'postLastChorus',
        title: 'Post Last Chorus',
        caption: '',
        notes: ['F', 'Am', 'G', 'G'],
        progressionCaption: '',
        progression: 'D - D - D U D U'
    },
    {
        id: 'outro',
        title: 'Outro',
        caption: '',
        notes: ['F', 'Am', 'G', 'G'],
        progressionCaption: '',
        progression: 'D - - - - - -'
    }
]

const tabs = [
    {
        id: 'intro',
        title: 'Intro',
        tabs: [`
   <b>F</b>                 <b>Am</b>                <b>G</b>                 
E|-----------------|-----------------|-----------------|-----------------|
B|-----1-----------|-----1-----------|-----0-----------|-----------------|
G|---2-------------|---2-------------|---0-------------|-----------------|
D|-3---------------|-2---------------|-0---------------|-----------------|
A|-----------------|-----------------|-----------------|-----------------|
E|-----------------|-----------------|-----------------|-----------------|
   <span class="text-muted">1 + 2 + 3 + 4 +   1 + 2 + 3 + 4 +   1 + 2 + 3 + 4 +   1 + 2 + 3 + 4 +</span>     
        `,
        ]
    },
    {
        id: 'verse',
        title: 'Verse',
        tabs: [`
   <b>F</b>                 <b>Am</b>                <b>G</b>                 
E|-----------------|-----------------|-----------------|-----------------|
B|-----1-----1---1-|-----1-----1---1-|-----0-----0---0-|-----0-----0---0-|
G|---2---2---------|---2---2---------|---0---0---------|---0---0---------|
D|-3-------3---3---|-2-------2---2---|-0-------0---0---|-0-------0---0---|
A|-----------------|-----------------|-----------------|-----------------|
E|-----------------|-----------------|-----------------|-----------------|
   <span class="text-muted">1 + 2 + 3 + 4 +   1 + 2 + 3 + 4 +   1 + 2 + 3 + 4 +   1 + 2 + 3 + 4 +</span>     
        `,
        ]
    },
    {
        id: 'solo',
        title: 'Solo',
        tabs: [`    
E|----------------------------------------------------------------|
B|-10/12---12\\10-9------------------------------------------------|
G|--------------------9\\11---11\\9-8-------------------------------|
D|-----------------------------------9----------------------------|
A|----------------------------------------------------------------|
E|----------------------------------------------------------------|`,

`E|------------12-------12----12\\14--14\\12---12\\11--------17b19----|
B|-10/12---12-------12----------------------------12--------------|
G|----------------------------------------------------------------|
D|----------------------------------------------------------------|
A|----------------------------------------------------------------|
E|----------------------------------------------------------------|`,
        ]
    }
]

const cipherParts = [
    {
        id: 'firstVerse',
        title: 'Verse 1',
        referenceProgression: progressions.find(progression => progression.id === 'intro')
    },
    {
        id: 'firstChorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'firstChorus')
    },
    {
        id: 'firstPostChorus',
        title: 'Post Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'firstPostChorus')
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
        id: 'secondPostChorus',
        title: 'Post Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'secondPostChorus')
    },
    {
        id: 'bridge',
        title: 'Bridge',
        referenceProgression: progressions.find(progression => progression.id === 'bridge')
    },
    {
        id: 'lastChorus',
        title: 'Last Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'lastChorus')
    },
    {
        id: 'postLastChorus',
        title: 'Post Last Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'postLastChorus')
    },
    {
        id: 'outro',
        title: 'Outro',
        referenceProgression: progressions.find(progression => progression.id === 'outro')
    }
]

let cipherLyrics = `
                    F                 Am
Lovin' him is like, drivin' a new Maserati
                G
Down a dead end street
F                           Am
Faster than the wind, passionate as sin
         G
Ended so suddenly
                    F
Loving him is like, tryin' to change your mind 
            Am                         G
Once you're already flying through the free fall
         F                  Am
Like the colors in autumn so bright
                 G
Just before they lose it all
${ divider }
               F                    C
Losing him was blue, like I'd never known
                G
Missing him was dark grey, all alone
                   F                       Am
Forgetting him was like trying to know somebody
          G
You never met
${ divider }
                   F
But loving him was red
          Am        G
Re ee ed, re ee ed, re ee ed
               F
Lovin' him was red
          Am        G
Re ee ed, re ee ed, re ee ed
${ divider }
                       F                      Am
Touching him was like, realizing all you ever wanted 
                   G
Was right there in front of you
                       F                       Am
Memorizing him was as, easy as knowin' all the words
                    G
To your old favorite song
                           F
Fighting with him was like tryin' to solve a 
              Am                           G
Crossword and realizing there's no right answer
                        F                        Am
Regretting him was like wishing you never found out 
                       G
That love could be that strong
${ divider }
               F                    C
Losing him was blue, like I'd never known
                G
Missing him was dark grey, all alone
                   F                       Am
Forgetting him was like trying to know somebody
          G
You never met
${ divider }
                   F
But loving him was red
          Am        G
Re ee ed, re ee ed, re ee ed
               F
Lovin' him was red
          Am        G
Re ee ed, re ee ed, re ee ed
${ divider }
                         F               G
Remembering him comes in flashbacks and echos
                    Am             G/B
Tellin' myself it's time now gotta let go 
     C              F
But moving on from him is impossible 
     C/E                       G
When I still see it all in my, head 
            F   Am  G
And burning red
       F      Am  G
Burning was reeeeed
${ divider }
                   F                    Am
Oh losing him was blue, like I'd never known
                G               G
Missing him was dark grey, all alone
                   F                       Am
Forgetting him was like tryin' to know somebody
          G
You never met
                     F
Cause loving him was red
Am          G
Yeah, yeah, red
           F   Am  G
Oh Burning reeeeeeeed
${ divider }
F                  Am              G
And that's Why he's spinnin' 'round in my head
                              F
Comes back to me, burnin' red 
  Am      G
Yeah, yeah
${ divider } 
                   F                 Am
His love was like, drivin' a new Maserati
               G
Down a dead end street.

`

const lyrics = `
<b>[Verse 1]</b>
Loving him is like driving a new Maserati down a dead-end street
Faster than the wind, passionate as sin, ending so suddenly
Loving him is like trying to change your mind once you're already flying through the free fall
Like the colors in autumn, so bright just before they lose it all

<b>[Chorus]</b>
Losing him was blue like I'd never known
Missing him was dark gray, all alone (Woah)
Forgetting him was like tryin' to know somebody you never met
But loving him was red (Red, red)
(Red, red)
But loving him was red (Red, red)
(Red, red)

<b>[Verse 2]</b>
Touching him was like realizing all you ever wanted was right there in front of you
Memorizing him was as easy as knowing all the words to your old favorite song
Fighting with him was like trying to solve a crossword and realizing there's no right answer
Regretting him was like wishing you never found out that love could be that strong

<b>[Chorus]</b>
Losing him was blue like I'd never known
Missing him was dark gray, all alone (Woah)
Forgetting him was like tryin' to know somebody you never met
But loving him was red (Red, red)
Oh, red (Red, red)
Burning red (Red, red)
(Red, red)

<b>[Bridge]</b>
Remembering him comes in flashbacks and echoes
Tell myself it's time now, gotta let go
But moving on from him is impossible when I still see it all in my head
In burning red
Burning, it was red

<b>[Chorus]</b>
Oh, losing him was blue like I'd never known
Missing him was dark gray, all alone (Woah)
Forgetting him was like tryin' to know somebody you never met
'Cause loving him was red (Red, red)
Yeah, yeah, red (Red, red)
Oh, burning red (Red, red)
(Red, red)

<b>[Post-Chorus]</b>
And that's why he's spinning 'round in my head (Red, red)
Comes back to me, burning red (Red, red)
(Red, red)
Yeah, yeah (Red, red)

<b>[Outro]</b>
His love was like driving a new Maserati down a dead-end street
`
