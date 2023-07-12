musicId = 'hoax'
musicTitle = 'Hoax'
tuning = 'Ab'
chordShape = 'G'
capoFret = '1'
spotify = 'https://open.spotify.com/embed/track/6MWoRt97mnSTXZhu3ggi9C?utm_source=generator'
chordsMusic = ['Am', 'G', 'D', 'Em', 'D4', 'Am7', 'Cadd9']
videoUrl = 'https://www.youtube.com/embed/GGyY_kfvwak'
basicCipher = false


partsCipher = [
    { type: 'progression',          id: 'firstVerse' },

    { type: 'tabs',                 id: 'firstVerse' },

    { type: 'cipherLyrics',         id: 'firstVerse' },
    
    { type: 'tabs',                 id: 'preChorus' },
    { type: 'progression',          id: 'preChorus' },
    { type: 'cipherLyrics',         id: 'preChorus' },

    { type: 'progression',          id: 'chorus' },
    { type: 'cipherLyrics',         id: 'chorus' },

    { type: 'tabs',                 id: 'secondVerse' },
    { type: 'progression',          id: 'secondVerse' },
    { type: 'cipherLyrics',         id: 'secondVerse' },

    { type: 'tabs',                 id: 'secondPreChorus' },
    { type: 'progression',          id: 'secondPreChorus' },
    { type: 'cipherLyrics',         id: 'secondPreChorus' },

    { type: 'progression',          id: 'secondChorus' },
    { type: 'cipherLyrics',         id: 'secondChorus' },

    { type: 'progression',          id: 'bridge' },
    { type: 'cipherLyrics',         id: 'bridge' },

    { type: 'progression',          id: 'outro' },
    { type: 'cipherLyrics',         id: 'outro' },

    { type: 'cipherLyrics',         id: 'final' },
    { type: 'tabs',                 id: 'final' },
]

progressions = [
    {
        id: 'firstVerse',
        title: 'Verse 1',
        caption: '',
        progressionCaption: '',
        notes: ['Am', 'G', 'Cadd9', 'D'],
        progression: 'D - D D',
    },
    {
        id: 'preChorus',
        title: 'Pre-chorus',
        caption: 'Play the Pre-chorus tabs on Em',
        progressionCaption: '',
        notes: ['Em', 'break', 'Cadd9', 'D', 'break', 'G'],
        progression: '- - D D D U break D - - D - U break D - - D - -',
    },
    {
        id: 'chorus',
        title: 'Chorus',
        caption: '',
        progressionCaption: '',
        notes: ['Em', 'G', 'break', 'Cadd9, D'],
        progression: 'D - D - D U break D - D U D U',
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        caption: '',
        progressionCaption: '',
        notes: ['Am', 'G', 'Cadd9', 'D'],
        progression: 'D - D D',
    },
    {
        id: 'secondPreChorus',
        title: 'Pre-chorus',
        caption: 'Play the Pre-chorus tabs on Em',
        progressionCaption: '',
        notes: ['Em', 'break', 'Cadd9', 'D', 'break', 'G'],
        progression: '- - D D D U break D - - D - U break D - - D - -',
    },
    {
        id: 'secondChorus',
        title: 'Chorus',
        caption: '',
        progressionCaption: '',
        notes: ['Em', 'G', 'break', 'Cadd9, D'],
        progression: 'D - D - D U break D - D U D U',
    },
    {
        id: 'bridge',
        title: 'Bridge',
        caption: 'Play the D chord more freely',
        progressionCaption: '',
        notes: ['Am', 'G', 'Cadd9', 'D'],
        progression: 'D - - D - D U',
        repeat: 'x6'
    },
    {
        id: 'outro',
        title: 'Outro',
        caption: '',
        progressionCaption: '',
        notes: ['G', 'Cadd9', 'D', 'break', 'G', 'G', 'Cadd9', 'break', 'D', 'break', 'G', 'break', 'Em', 'Cadd9', 'D', 'block', 'x2'],
        progression: 'D - - - - - - break D - - D - D U break D - - U D D - break U D - D U D U break D D D - D - U',
        chordChange: 'G'
    },
]

tabs = [
    {
        id: 'firstVerse',
        title: 'Verse 1',
        tabs: [
`             <b>Em</b>       <b>G</b>                <b>Cadd9</b> <b>D</b>    
E|-0---------x--x-----x--x---0---------x--x--x--x-|
B|--3-0---0--x--0-----x--3----3-0---0--x--3--3--x-|
G|------2----0--0-----x--0--------2----0--0--2--2-|
D|-----------2--2-----0--0-------------0--0--0--0-|
A|-----------2--x-----2--x-------------3----------|
E|-----------0--x-----3--x------------------------|
             <b>D</b>  <b>U</b>     <b>D</b>  <b>D</b>             <b>D</b>  <b>U</b>  <b>D</b>  <b>D</b>`,
`             <b>Em</b>       <b>G</b>                <b>Cadd9</b> <b>D</b>    
E|-0---------x--x-----x-----------------------2---|
B|--3-0---0--x--0-----x--------3-----------3--3---|
G|------2----0--0-----x-----0-----------0-----2---|
D|-----------2--2-----0--0-----------0--------0---|
A|-----------2--x-----2-----------3---------------|
E|-----------0--x-----3---------------------------|
             <b>D</b>  <b>U</b>     <b>D</b>                       <b>D</b>`
        ]
    },
    {
        id: 'preChorus',
        title: 'Pre-chorus',
        tabs: [
`   <b>Em</b>
E|---------|
B|-1-0-----|
G|-----2-0-|
D|---------|
A|---------|
E|---------|`
        ]
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        tabs: [
`             <b>Em</b>       <b>G</b>                <b>Cadd9</b> <b>D</b>    
E|-0---------x--x-----x--x---0---------x--x--x--x-|
B|--3-0---0--x--0-----x--3----3-0---0--x--3--3--x-|
G|------2----0--0-----x--0--------2----0--0--2--2-|
D|-----------2--2-----0--0-------------0--0--0--0-|
A|-----------2--x-----2--x-------------3----------|
E|-----------0--x-----3--x------------------------|
             <b>D</b>  <b>U</b>     <b>D</b>  <b>D</b>             <b>D</b>  <b>U</b>  <b>D</b>  <b>D</b>`,
`             <b>Em</b>       <b>G</b>                <b>Cadd9</b> <b>D</b>    
E|-0---------x--x-----x-----------------------2---|
B|--3-0---0--x--0-----x--------3-----------3--3---|
G|------2----0--0-----x-----0-----------0-----2---|
D|-----------2--2-----0--0-----------0--------0---|
A|-----------2--x-----2-----------3---------------|
E|-----------0--x-----3---------------------------|
             <b>D</b>  <b>U</b>     <b>D</b>                       <b>D</b>`
        ]
    },
    {
        id: 'secondPreChorus',
        title: 'Pre-chorus',
        tabs: [
`   <b>Em</b>
E|---------|
B|-1-0-----|
G|-----2-0-|
D|---------|
A|---------|
E|---------|`
        ]
    },
    {
        id: 'final',
        title: 'Final',
        tabs: [
`
   <b>Em</b>       <b>G</b>       <b>Cadd9</b>                <b>D</b>      <b>G</b>
E|-------------2-------x--x---------------------------|
B|-1-0---------2-------x--3-----1-0----------0--------|
G|-----2-0-----0-------0--0---------2-0----2--------0-|
D|-------------0-------0--0--------------0--------0---|
A|------------------3--3--x---------------------------|
E|----------3-----------------------------------3-----|
               <b>D</b>       <b>D</b>  <b>D</b>`,
               `
   <b>Em</b>       <b>G</b>      <b>Cadd9</b>  <b>Cadd9</b>   <b>D</b>         <b>D4</b>  <b>G</b>
E|-------------2----------3-3-3---2--2-2-2--3---3-|
B|-1-0---------2----------3-3-3---3--3-3-3--3---3-|
G|-----2-0-----0------0---0-0-0---2--2-2-2--2---0-|
D|-------------0------2---2-2-2-----------------0-|
A|-------------x---3------3-3-3-----------------2-|
E|----------3--x--------------------------------3-|
                          <b>D</b> <b>D</b> <b>U</b>   <b>D</b>  <b>D</b> <b>U</b> <b>D</b>  <b>D</b>   <b>D</b>`
        ]
    },
]

cipherParts = [
    {
        id: 'firstVerse',
        title: 'Verse 1',
        referenceProgression: progressions.find(progression => progression.id === 'firstVerse')
    },
    {
        id: 'preChorus',
        title: 'Pre-chorus',
        referenceProgression: progressions.find(progression => progression.id === 'preChorus')
    },
    {
        id: 'chorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'chorus')
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        referenceProgression: progressions.find(progression => progression.id === 'secondVerse')
    },
    {
        id: 'secondPreChorus',
        title: 'Pre-chorus',
        referenceProgression: progressions.find(progression => progression.id === 'secondPreChorus')
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
        id: 'outro',
        title: 'Outro',
        referenceProgression: progressions.find(progression => progression.id === 'outro')
    },
    {
        id: 'final',
        title: 'Final',
        referenceProgression: progressions.find(progression => progression.id === 'outro')
    }
]

cipherLyrics = `
   Am       G
My only one
   Cadd9      D
My smoking gun
   Am           G
My eclipsed sun
          Cadd9        D
This has broken me down
   Am            G
My twisted knife
   Cadd9          D
My sleepless night
   Am            G
My winless fight
           Cadd9            D
This has frozen my ground
${ divider }
Em            Cadd9              D         G
 Stood on the cliffside screaming, "Give me a reason"
Em              Cadd9        D        G
 Your faithless love's the only hoax I believe in
${ divider }
Am              G             Cadd9     D
 Don't want no other shade of blue but you
Am        G              Cadd9       D
 No other sadness in the world would do
${ divider }
   Am            G
My best laid plan
     Cadd9          D7
Your sleight of hand
   Am           G
My barren land
     Cadd9             D
I am ash from your fire
${ divider }
Em            Cadd9              D         G
 Stood on the cliffside screaming, "Give me a reason"
Em              Cadd9        D        G
 Your faithless love's the only hoax I believe in
${ divider }
Am              G             Cadd9     D
 Don't want no other shade of blue but you
Am        G              Cadd9       D
 No other sadness in the world would do
${ divider }
Am          G                            Cadd9
 You know I left a part of me back in New York
              D                            Am
 You knew the hero died so what's the movie for?
             G                         Cadd9
 You knew it still hurts underneath my scars
                           D
 From when they pulled me apart
Am            G                           Cadd9
 You knew the password so I let you in the door
              D                                 Am
 You knew you won so what's the point of keeping score?
             G                         Cadd9
 You knew it still hurts underneath my scars
                           D
 From when they pulled me apart
                            Am
 But what you did was just as dark
G     Cadd9  D
 (Ah, ah, ah)
                    Am
 Darling, this was just as hard
G                C            D
 As when they pulled me apart
${ divider }
   G       Cadd9
My only one
   D            G
My kingdom come undone
   G          Cadd9
My broken drum
         D               G
You have beaten my heart
Em             Cadd9          D          <span class="badge badge-info-cipher rounded-pill"><i class="fa-solid fa-ban strum"></i> No Chords</span>
 Don't want no other shade of blue but you
Em        Cadd9                      D
 No other sadness in the world would do
${ divider }
Em Cadd9 D G
Em Cadd9 D G
`

lyrics = `
<b>[Verse 1]</b>
My only one
My smoking gun
My eclipsed sun
This has broken me down
My twisted knife
My sleepless night
My winless fight
This has frozen my ground

<b>[Chorus]</b>
Stood on the cliffside screaming, "Give me a reason"
Your faithless love's the only hoax I believe in
Don't want no other shade of blue but you
No other sadness in the world would do

<b>[Verse 2]</b>
My best laid plan
Your sleight of hand
My barren land
I am ash from your fire

<b>[Chorus]</b>
Stood on the cliffside screaming, "Give me a reason"
Your faithless love's the only hoax I believe in
Don't want no other shade of blue but you
No other sadness in the world would do

<b>[Bridge]</b>
You know I left a part of me back in New York
You knew the hero died so what's the movie for?
You knew it still hurts underneath my scars
From when they pulled me apart
You knew the password so I let you in the door
You knew you won so what's the point of keeping score?
You knew it still hurts underneath my scars
From when they pulled me apart
But what you did was just as dark
(Ah, ah, ah)
Darling, this was just as hard
As when they pulled me apart

<b>[Outro]</b>
My only one
My kingdom come undone
My broken drum
You have beaten my heart
Don't want no other shade of blue but you
No other sadness in the world would do
`
