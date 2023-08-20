const musicId = 'enchanted'
const albumId = 'speak-now'
const musicTitle = 'Enchanted'
const tuning = 'Ab'
const chordShape = null
const capoFret = '1'
const spotify = 'https://open.spotify.com/embed/track/3sW3oSbzsfecv9XoUdGs7h?utm_source=generator'
const chordsMusic = ['G', 'C', 'D', 'Em', 'Bm', 'Dsus4', 'Cadd9']
const videoUrl = 'https://www.youtube.com/embed/h0Zewndw2u0'
const basicCipher = false

// https://www.youtube.com/watch?v=h0Zewndw2u0&ab_channel=TunezbyLucz
// https://drive.google.com/file/d/1Rs2xPG0A0_Rrd7OGUeoACf4sn6EPeD4U/view

// Variação no Dsus4 no início
// Com ou sem capotrastes nas tbs

const partsCipher = [
    { type: 'alert',                 id: 'palmMute' },

    { type: 'progression',           id: 'intro' },

    { type: 'progression',           id: 'firstVerse' },
    { type: 'cipherLyrics',           id: 'firstVerse' },

    { type: 'progression',           id: 'secondVerse' },
    { type: 'tabs',                  id: 'secondVerse' },
    { type: 'cipherLyrics',          id: 'secondVerse' },

    { type: 'progression',           id: 'firstChorus' },
    { type: 'cipherLyrics',          id: 'firstChorus' },

    { type: 'cipherLyrics',          id: 'instrumental' },
    { type: 'progression',           id: 'instrumental' },

    { type: 'progression',           id: 'thirdVerse' },
    { type: 'cipherLyrics',          id: 'thirdVerse' },

    { type: 'progression',           id: 'secondChorus' },
    { type: 'cipherLyrics',          id: 'secondChorus' },

    { type: 'cipherLyrics',          id: 'solo' },
    { type: 'progression',           id: 'solo' },
    { type: 'tabs',                  id: 'solo' },

    { type: 'progression',           id: 'bridge' },
    { type: 'cipherLyrics',          id: 'bridge' },
    { type: 'tabs',                  id: 'bridge' },

    { type: 'progression',           id: 'breakdown' },
    { type: 'cipherLyrics',          id: 'breakdown' },

    { type: 'progression',           id: 'secondChorus' },
    { type: 'cipherLyrics',          id: 'chorus' },

    { type: 'progression',           id: 'outro' },
    { type: 'cipherLyrics',          id: 'outro' },
]

const progressions = [
    {
        id: 'intro',
        title: 'Intro',
        caption: '',
        progressionCaption: '',
        notes: ['G', 'Bm', 'C', 'G'],
        progression: 'D - D - D - D - D - D - D - D -',
        palmMute: true
    },
    {
        id: 'firstVerse',
        title: 'Verse 1',
        caption: '',
        progressionCaption: '',
        notes: ['G', 'Bm', 'C', 'G', 'x2', 'break', 'C', 'Em', 'D', 'Dsus4 D'],
        progression: 'D - D - D - D - D - D - D - D -',
        palmMute: true
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        caption: '',
        progressionCaption: '',
        notes: ['G', 'Bm', 'C', 'G', 'x2', 'break', 'C', 'Em', 'D', 'D', 'x2'],
        progression: 'D - - - - - - - - - - - - - - - break D - D - D - D - D - D - D - D -',
        palmMute: true
    },
    {
        id: 'firstChorus',
        title: 'Chorus',
        caption: '',
        progressionCaption: '',
        // notes: ['C', 'G, D', 'x3', 'break', 'C', 'doubleBreak', 'Em, chordChange, D'],
        notes: ['C', 'G, D', 'x3', 'break', 'C', 'Em, D'],
        // progression: 'D - D - D - D U D - D - D - D U break break break D - D - D - D U chordChange D - D - D - D U',
        progression: 'D - D - D - D U d-highlight - D - D - D U break D - D - D - D U d-highlight - D - D - D U',
        chordChange: 'D'
    },
    {
        id: 'instrumental',
        title: 'Instrumental',
        caption: '',
        progressionCaption: '',
        notes: ['G', 'G'],
        progression: 'D - D - D - D - D - D - D - D -',
        palmMute: true
    },
    {
        id: 'thirdVerse',
        title: 'Verse 3',
        caption: '',
        progressionCaption: '',
        notes: ['G', 'Bm', 'C', 'G', 'x2', 'break', 'C', 'Em', 'D', 'D', 'x2'],
        progression: 'D - D - D - D - D - D - D - D -',
        palmMute: true
    },
    {
        id: 'secondChorus',
        title: 'Chorus 2',
        caption: '',
        progressionCaption: '',
        notes: ['C', 'G, D', 'x3', 'break', 'C', 'break', 'Em, D'],
        progression: 'D - D - D - D U d-highlight - D - D - D U',
        repeat: 'x2'
    },
    {
        id: 'solo',
        title: 'solo',
        caption: '',
        progressionCaption: '',
        notes: ['G', 'Bm', 'C', 'G', 'break', 'G', 'Bm', 'C', 'D'],
        progression: 'D - D - D - D - D - D - D - D U'
    },
    {
        id: 'bridge',
        title: 'Bridge',
        caption: '',
        progressionCaption: '',
        notes: ['C', 'Em, D', 'x2', 'break', 'C', 'break', 'Em, D', 'break', 'C'],
        progression: 'D - - - D - - - d-highlight - - - D - - - break break D - - - - - - - d-highlight - - - - - - - break D - - - - - - - - - - - - - - -'
    },
    {
        id: 'breakdown',
        title: 'breakdown',
        caption: '',
        progressionCaption: '',
        notes: ['G', 'Bm', 'C', 'G'],
        progression: 'D - D - D - D - D - D - D - D -',
        repeat: 'x2',
        palmMute: true
    },
    {
        id: 'outro',
        title: 'Outro',
        caption: '',
        progressionCaption: '',
        notes: ['G', 'Bm', 'C', 'G'],
        progression: 'D - D - D - D - D - D - D - D -',
        palmMute: true
    },
]

const tabs = [
    {
        id: 'secondVerse',
        title: 'Verse 2 | Last two times',
        tabs: [
`
   <b>Cadd9</b>             <b>Em7</b>                 <b>D</b>                 <b>D</b>
E|-----------------|-------------------|-----------------|-----------------|
B|-----3-----3-----|-----3-----3-------|-----3-----3-----|-----3-----3-----|
G|---0-----0-----0-|---0-----0-----0---|---2-----2-----2-|---2-----2-----2-| x2
D|-----------------|-------------------|-0-----0-----0---|-0-----0-----0---|
A|-3-----3-----3---|-------------------|-----------------|-----------------|
E|-----------------|-0-----0-----0-----|-----------------|-----------------|`,
`
   <b>Cadd9</b>             <b>Em7</b>                 <b>D</b>                 <b>D</b>
E|-----------------|-------------------|-----------------|-----------------|
B|-----3-----3-----|-----3-----3/8-----|-7~--------------|-8-10--7\\0-------|
G|---0-----0-----0-|---0-----0---------|-----------------|-----------------| x2
D|-----------------|-------------------|-----------------|-----------------|
A|-3-----3-----3---|-------------------|-----------------|-----------------|
E|-----------------|-0-----0-----------|-----------------|-----------------|`,
        ]
    },
    {
        id: 'solo',
        title: 'Solo | No capo',
        tabs: [
`
E|--------------------------------------------|
B|--------------------------------------------|
G|--3/5-5-5-5-5-5-5/8-8-8-8-8\\5---------------|
D|--------------------------------------------|
A|--------------------------------------------|
E|--------------------------------------------|`,
`
E|--------------------------------------------|
B|--------------------------------------------|
G|-5/10-10-10-10-10\\8-8-8-8\\5-5-5-5-5-5-5-5---|
D|--------------------------------------------|
A|--------------------------------------------|
E|--------------------------------------------|`,
`
E|--------------------------------------------|
B|-11-13-9-11-8------------8-9-11/13-~11------|
G|--------------------8-10--------------------|
D|--------------10-11-------------------------|
A|--------------------------------------------|
E|--------------------------------------------|`
        ]
    },
    {
        id: 'bridge',
        title: 'Bridge',
        tabs: [
`
   <b>Em</b> <b>D</b>
E|-------------2------|
B|-----0---------3----|
G|-------0---2--------|
D|---2-----0----------|
A|--------------------|
E|-0------------------|`
        ]
    }
]

const cipherParts = [
    {
        id: 'firstVerse',
        title: 'Verse 1',
        referenceProgression: progressions.find(progression => progression.id === 'firstVerse')
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        referenceProgression: progressions.find(progression => progression.id === 'secondVerse')
    },
    {
        id: 'firstChorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'firstChorus')
    },
    {
        id: 'thirdVerse',
        title: 'Verse 3',
        referenceProgression: progressions.find(progression => progression.id === 'thirdVerse')
    },
    {
        id: 'secondChorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'secondChorus')
    },
    {
        id: 'solo',
        title: 'Solo',
        referenceProgression: progressions.find(progression => progression.id === 'solo'),
        onlyCipherColumns: true
    },
    {
        id: 'bridge',
        title: 'Bridge',
        referenceProgression: progressions.find(progression => progression.id === 'bridge')
    },
    {
        id: 'breakdown',
        title: 'Breakdown',
        referenceProgression: progressions.find(progression => progression.id === 'breakdown')
    },
    {
        id: 'chorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'secondChorus')
    },
    {
        id: 'outro',
        title: 'Outro',
        referenceProgression: progressions.find(progression => progression.id === 'outro')
    },
    {
        id: 'instrumental',
        title: 'Instrumental',
        referenceProgression: progressions.find(progression => progression.id === 'instrumental'),
        onlyCipherColumns: true
    },
]

let cipherLyrics = `
   G                        Bm
There I was again tonight, forcing laughter, faking smiles,
   C                    G
Same old tired lonely place.
 G                      Bm
Walls of insincerity, shifting eyes and vacancy
    C                      G
Vanished when I saw your face;
                    C                 Em       D        Dsus4 D
All I can say is it was enchanting to meet you.
${ divider }
  G                                   Bm
Your eyes whispered, "Have we met?" across the room, your silhouette
   C                      G
Starts to make its way to me.
      G                            Bm
The playful conversation starts, counter all your quick remarks
       C                 G
Like passing notes in secrecy
        C                 Em      D
And it was enchanting to meet you.
                    C               Em    D
All I can say is I was enchanted to meet you.
${ divider }
  C                G       D               C
This night is sparkling, don't you let it go
             G              D            C
I'm wonderstruck, blushing all the way home
               G       D              C
I'll spend forever wondering if you knew
C                   Em      D
I was enchanted to meet you
${ divider }
       G                            Bm
The lingering question kept me up, 2 a.m., who do you love?
 C                      G
I wonder 'till I'm wide-awake
 G                               Bm
Now I'm pacing back and forth, wishing you were at my door
      C                    G
I'd open up and you would say, "Hey,
    C                Em      D
It was enchanting to meet you.
                C                Em    D
All I know is I was enchanted to meet you.
${ divider }
 C                G       D               C
This night is sparkling, don't you let it go
             G              D            C
I'm wonderstruck, blushing all the way home
               G       D
I'll spend forever wondering if you knew...
 C               G       D                C
This night is flawless, don't you let it go
             G              D          C
I'm wonderstruck, dancing around all alone
                G       D             C
I'll spend forever wondering if you knew
                    Em   D
I was enchanted to meet you
${ divider }
G Bm C G
G Bm C D
${ divider }
      D
This is me praying that
 
   C                      Em                   D       
This was the very first page, not where the storyline ends
  C                         Em          D         
My thoughts will echo your name until I see you again
  C                          Em             D         C
These are the words I held back as I was leaving too soon
                    Em     D
I was enchanted to meet you
${ divider }
   G                           Bm
Please don't be in love with someone else,
  C                          G
Please don't have somebody waiting on you.
   G                           Bm
Please don't be in love with someone else (Ooh)
  C                          G
Please don't have somebody waiting on you (Oh-oh)
${ divider }
 C                G       D               C
This night is sparkling, don't you let it go
             G              D            C
I'm wonderstruck, blushing all the way home
               G       D
I'll spend forever wondering if you knew...
 C               G       D                C
This night is flawless, don't you let it go
             G              D          C
I'm wonderstruck, dancing around all alone
                G       D             C
I'll spend forever wondering if you knew
                    Em   D
I was enchanted to meet you
${ divider }
   G                           Bm
Please don't be in love with someone else,
  C                          <span class="badge badge-info-cipher rounded-pill"><span class="text-white">G</span> <i class="fa-solid fa-arrow-right-long"></i> Down</span>
Please don't have somebody waiting on you.
${ divider }
G G
`

const lyrics = `
<b>[Verse 1]</b>
There I was again tonight
Forcing laughter, faking smiles
Same old tired, lonely place
Walls of insincerity
Shifting eyes and vacancy
Vanished when I saw your face
All I can say is it was enchanting to meet you

<b>[Verse 2]</b>
Your eyes whispered, "Have we met?"
Across the room, your silhouette
Starts to make its way to me
The playful conversation starts
Counter all your quick remarks
Like passing notes in secrecy
And it was enchanting to meet you
All I can say is I was enchanted to meet you

<b>[Chorus]</b>
This night is sparklin', don't you let it go
I'm wonderstruck, blushin' all the way home
I'll spеnd forever wonderin' if you knеw
I was enchanted to meet you

<b>[Verse 3]</b>
The lingering question kept me up
2AM, who do you love?
I wonder 'til I'm wide awake
And now, I'm pacing back and forth
Wishing you were at my door
I'd open up and you would say
"Hey, it was enchanting to meet you"
All I know is I was enchanted to meet you

<b>[Chorus]</b>
This night is sparklin', don't you let it go
I'm wonderstruck, blushin' all the way home
I'll spend forever wonderin' if you knew
This night is flawless, don't you let it go
I'm wonderstruck, dancing around all alone
I'll spend forever wonderin' if you knew
I was enchanted to meet you

<b>[Bridge]</b>
This is me praying that
This was the very first page
Not where the storyline ends
My thoughts will echo your name
Until I see you again
These are the words I held back
As I was leaving too soon
I was enchanted to meet you
Please, don't be in love with someone else
Please, don't have somebody waitin' on you
Please, don't be in love with someone else (Ooh)
Please, don't have somebody waitin' on you (Oh-oh)

<b>[Chorus]</b>
This night is sparklin', don't you let it go
I'm wonderstruck, blushin' all the way home
I'll spend forever wonderin' if you knew
This night is flawless (Please, don't be in love with someone else)
Don't you let it go
I'm wonderstruck (Please, don't have somebody waitin' on you)
Dancing around all alone
I'll spend forever (Please, don't be in love with someone else)
Wonderin' if you knew
I was enchanted to meet you

<b>[Outro]</b>
Please, don't be in love with someone else
Please, don't have somebody waitin' on you
`
