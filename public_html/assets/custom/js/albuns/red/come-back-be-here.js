musicId = 'come-back-be-here'
musicTitle = 'Come Back... Be Here'
tuning = 'E'
chordShape = null
capoFret = '2'
spotify = 'https://open.spotify.com/embed/track/4pNApnaUWAL2J4KO2eqokq?utm_source=generator'
chordsMusic = ['D', 'A', 'Bm', 'G']
videoUrl = 'https://www.youtube.com/embed/hHWOAUjnmjQ'

partsCipher = [
    { type: 'progression',      id: 'intro' },

    { type: 'progression',      id: 'main' },
    { type: 'cipherLyrics',     id: 'firstVerse' },

    { type: 'cipherLyrics',     id: 'preChorus' },

    { type: 'cipherLyrics',     id: 'chorus' },

    { type: 'cipherLyrics',     id: 'secondVerse' },

    { type: 'cipherLyrics',     id: 'bridge' },

    { type: 'cipherLyrics',     id: 'secondPreChorus' },

    { type: 'cipherLyrics',     id: 'secondChorus' },

    { type: 'cipherLyrics',     id: 'lastChorus' },
]

progressions = [
    {
        id: 'intro',
        title: 'Intro',
        caption: '',
        notes: ['D', 'D'],
        progressionCaption: '',
        progression: 'D - D U D U D - D - D U'
    },
    {
        id: 'main',
        title: 'Main Progression',
        caption: '',
        notes: ['D', 'A', 'Bm', 'G'],
        progressionCaption: '',
        progression: 'D - D U D U D - D - D U'
    },
    // {
    //     id: 'chorus',
    //     title: 'Chorus',
    //     caption: '',
    //     notes: ['F', 'C', 'G', 'G', 'break', 'F', 'Am', 'G', 'G'],
    //     progressionCaption: '',
    //     progression: 'D - D - D U D U'
    // },
    // {
    //     id: 'postChorus',
    //     title: 'Post Chorus',
    //     caption: '',
    //     notes: ['F', 'Am', 'G', 'G'],
    //     progressionCaption: '',
    //     progression: 'D - D - D U D U'
    // },
    // {
    //     id: 'secondVerse',
    //     title: 'Verse 2',
    //     caption: '',
    //     notes: ['F', 'Am', 'G', 'G'],
    //     progressionCaption: '',
    //     progression: 'D - D - D U D U'
    // },
    // {
    //     id: 'bridge',
    //     title: 'Bridge',
    //     caption: '',
    //     notes: ['F', 'G', 'Am', 'G/B, C', 'break', 'F', 'C/E', 'G', 'G'],
    //     progressionCaption: '',
    //     progression: 'D block D block D block D'
    // },
    // {
    //     id: 'solo',
    //     title: 'Solo 2x',
    //     caption: '',
    //     notes: ['F', 'Am', 'G', 'G'],
    //     progressionCaption: '',
    //     progression: 'D - D - D U D U'
    // },
    // {
    //     id: 'lastChorus',
    //     title: 'Last Chorus',
    //     caption: '',
    //     progressionCaption: '',
    //     notes: ['F', 'Am', 'G', 'G'],
    //     progression: 'D - D - D U D U',
    //     notesMultipleProgression: ['F', 'C', 'G', 'G'],
    //     multipleProgression: ['D - D', 'D U D', 'D - D - D - D', 'D U D U D U D U ']
    // },
    // {
    //     id: 'postLastChorus',
    //     title: 'Post Last Chorus',
    //     caption: '',
    //     notes: ['F', 'Am', 'G', 'G'],
    //     progressionCaption: '',
    //     progression: 'D - D - D U D U'
    // },
    // {
    //     id: 'outro',
    //     title: 'Outro',
    //     caption: '',
    //     notes: ['F', 'Am', 'G', 'G'],
    //     progressionCaption: '',
    //     progression: 'D - - - - - -'
    // }
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
        id: 'preChorus',
        title: 'Pre-chorus',
        ignoreTitle: false,
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'chorus',
        title: 'Chorus',
        ignoreTitle: false,
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        ignoreTitle: false,
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'bridge',
        title: 'Bridge',
        ignoreTitle: false,
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'secondPreChorus',
        title: 'Pre-chorus',
        ignoreTitle: false,
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'secondChorus',
        title: 'Last Chorus',
        ignoreTitle: false,
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'lastChorus',
        title: 'Last Chorus',
        ignoreTitle: false,
        referenceProgression: progressions.find(progression => progression.id === 'main')
    }
]

cipherLyrics = `
    D
You said it in a simple way
A
4am the second day
    Bm                                G
How strange that I don't know you at all
 
   D
We stumble through the long goodbye
A
One last kiss then catch your flight
Bm                              G
Right when I was just about to fall
${ divider }
         A
I told myself don't get attached
          Bm
But in my mind I play it back
         G               A
Spinning faster than the plane that took you
${ divider }
D                                  A
  This is when the feeling sinks in
                                Bm
I don't wanna miss you like this
                  G
Come back, be here, come back, be here
D                                 A
  I guess you're in New York today
                               Bm
I don't wanna need you this way
                   G
Come back, be here, come back, be here
${ divider }
    D
The delicate beginning rush
    A
The feeling you can know so much
Bm                          G
Without knowing anything at all
    D
And now that I can put this down
   A
If I had known what I know now
  Bm                               G
I never would have played so nonchalant
${ divider }
     A
Taxi cabs and busy streets
           Bm
They never bring you back to me
        G                 A
I can't help but wish you took me with you
${ divider }
D                                  A
  This is when the feeling sinks in
                                Bm
I don't wanna miss you like this
                  G
Come back, be here, come back, be here
D                               A
  I guess you're in London today
                                   Bm
And I don't wanna need you this way
                  G
Come back, be here, come back, be here

D      A  Bm     G
Aaaahhh   Aaaahhh 
${ divider }
G                     Bm                    A
  This is falling in love in the cruelest way
G                      Bm              A
  This is falling for you when you are worlds away
Bm           A        G
  In New York, be here, but you're in
Bm      A                G                   A
  London and I break down cause it's not fair
                  D N.C.
That you're not around
${ divider }
                                 A*
This is when the feeling sinks in
                                 Bm*
I don't wanna miss you like this
                   G*
Come back, be here, come back, be here
D                                 A
  I guess you're in New York today
                               Bm
I don't wanna need you this way
                   G
Come back, be here, come back, be here

D       A
Ahh ohh, I don't want to miss you like this
Bm  G
Ahh ohh

D                  A  Bm              G
 Come back, be here,    come back, be here
`

lyrics = `
[Verse 1]
Loving him is like driving a new Maserati down a dead-end street
Faster than the wind, passionate as sin, ending so suddenly
Loving him is like trying to change your mind once you're already flying through the free fall
Like the colors in autumn, so bright just before they lose it all

[Chorus]
Losing him was blue like I'd never known
Missing him was dark gray, all alone (Woah)
Forgetting him was like tryin' to know somebody you never met
But loving him was red (Red, red)
(Red, red)
But loving him was red (Red, red)
(Red, red)

[Verse 2]
Touching him was like realizing all you ever wanted was right there in front of you
Memorizing him was as easy as knowing all the words to your old favorite song
Fighting with him was like trying to solve a crossword and realizing there's no right answer
Regretting him was like wishing you never found out that love could be that strong

[Chorus]
Losing him was blue like I'd never known
Missing him was dark gray, all alone (Woah)
Forgetting him was like tryin' to know somebody you never met
But loving him was red (Red, red)
Oh, red (Red, red)
Burning red (Red, red)
(Red, red)

[Bridge]
Remembering him comes in flashbacks and echoes
Tell myself it's time now, gotta let go
But moving on from him is impossible when I still see it all in my head
In burning red
Burning, it was red

[Chorus]
Oh, losing him was blue like I'd never known
Missing him was dark gray, all alone (Woah)
Forgetting him was like tryin' to know somebody you never met
'Cause loving him was red (Red, red)
Yeah, yeah, red (Red, red)
Oh, burning red (Red, red)
(Red, red)

[Post-Chorus]
And that's why he's spinning 'round in my head (Red, red)
Comes back to me, burning red (Red, red)
(Red, red)
Yeah, yeah (Red, red)

[Outro]
His love was like driving a new Maserati down a dead-end street
`
