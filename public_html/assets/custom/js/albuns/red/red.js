musicId = 'red'
musicTitle = 'Red'
tuning = 'E'
chordShape = null
capoFret = '4'
// spotify = 'https://open.spotify.com/embed/track/4yBEU0askBZzE2XEVdEwmx?utm_source=generator'
spotify = 'https://open.spotify.com/embed/track/4OAuvHryIVv4kMDNSLuPt6?utm_source=generator'
chordsMusic = ['F', 'Am', 'G', 'C', 'G/B', 'C/E']
videoUrl = 'https://www.youtube.com/embed/Zlot0i3Zykw'

partsCipher = [
    { type: 'progression',      id: 'intro' },
    { type: 'tabs',             id: 'intro' },

    { type: 'tabs',             id: 'verse' },
    { type: 'cipherLyrics',     id: 'firstVerse' },

    { type: 'progression',      id: 'chorus' },
    { type: 'cipherLyrics',     id: 'firstChorus' },

    { type: 'progression',      id: 'postChorus' },
    { type: 'cipherLyrics',     id: 'postFirstChorus' },

    { type: 'progression',      id: 'secondVerse' },
    { type: 'cipherLyrics',     id: 'secondVerse' },

    { type: 'cipherLyrics',     id: 'firstChorus' },
    { type: 'cipherLyrics',     id: 'postFirstChorus' },

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

progressions = [
    {
        id: 'intro',
        title: 'Intro | Verse',
        caption: 'Or, single strum each chord',
        notes: ['F', 'Am', 'G'],
        progressionCaption: '',
        progression: 'D - - - - - - -'
    },
    {
        id: 'chorus',
        title: 'Chorus',
        caption: '',
        notes: ['F', 'C', 'G', 'G', 'break', 'F', 'Am', 'G', 'G'],
        progressionCaption: '',
        progression: 'D - D - D U D U'
    },
    {
        id: 'postChorus',
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

tabs = [
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

cipherParts = [
    {
        id: 'firstVerse',
        title: 'Verse 1',
        ignoreTitle: false,
        referenceProgression: progressions.find(progression => progression.id === 'intro')
    },
    {
        id: 'firstChorus',
        title: 'Chorus',
        ignoreTitle: false,
        referenceProgression: progressions.find(progression => progression.id === 'chorus')
    },
    {
        id: 'postFirstChorus',
        title: 'Post Chorus',
        ignoreTitle: false,
        referenceProgression: progressions.find(progression => progression.id === 'secondVerse')
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        ignoreTitle: false,
        referenceProgression: progressions.find(progression => progression.id === 'secondVerse')
    },
    {
        id: 'bridge',
        title: 'Bridge',
        ignoreTitle: false,
        referenceProgression: progressions.find(progression => progression.id === 'bridge')
    },
    {
        id: 'lastChorus',
        title: 'Last Chorus',
        ignoreTitle: false,
        referenceProgression: progressions.find(progression => progression.id === 'lastChorus')
    },
    {
        id: 'postLastChorus',
        title: 'Post Last Chorus',
        ignoreTitle: false,
        referenceProgression: progressions.find(progression => progression.id === 'postLastChorus')
    },
    {
        id: 'outro',
        title: 'Outro',
        ignoreTitle: false,
        referenceProgression: progressions.find(progression => progression.id === 'outro')
    }
]

cipherLyrics = `
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
${ divider}
               F                    C
Losing him was blue, like I'd never known
                G
Missing him was dark grey, all alone
                   F                       Am
Forgetting him was like trying to know somebody
          G
You never met
${ divider}
                   F
But loving him was red
          Am        G
Re ee ed, re ee ed, re ee ed
               F
Lovin' him was red
          Am        G
Re ee ed, re ee ed, re ee ed
${ divider}
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
${ divider}
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
${ divider}
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
${ divider}
F                  Am              G
And that's Why he's spinnin' 'round in my head
                              F
Comes back to me, burnin' red 
  Am      G
Yeah, yeah
${ divider} 
                   F                 Am
His love was like, drivin' a new Maserati
               G
Down a dead end street.

`

lyrics = `

`
