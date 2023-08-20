const musicId = 'the-way-i-loved-you'
const albumId = 'fearless'
const musicTitle = 'The Way I Loved You'
const tuning = 'F'
const chordShape = 'D'
const capoFret = '3'
const spotify = 'https://open.spotify.com/embed/track/22bPsP2jCgbLUvh82U0Z3M?utm_source=generator&theme=0'
const chordsMusic = ['D', 'A', 'Em', 'G', 'Gm']
const videoUrl = 'https://www.youtube.com/embed/Vse44B_ASGE'
const basicCipher = false

const partsCipher = [
    { type: 'alert',            id: 'palmMute' },

    { type: 'progression',      id: 'intro' },

    { type: 'tabs',             id: 'firstRiff' },
    { type: 'tabs',             id: 'secondRiff' },
    { type: 'progression',      id: 'firstVerse' },
    { type: 'cipherLyrics',     id: 'firstVerse' },

    { type: 'progression',      id: 'firstChorus' },
    { type: 'cipherLyrics',     id: 'firstChorus' },

    { type: 'progression',      id: 'instrumental' },
    { type: 'cipherLyrics',     id: 'instrumental' },

    { type: 'progression',      id: 'secondVerse' },
    { type: 'cipherLyrics',     id: 'secondVerse' },

    { type: 'progression',      id: 'secondChorus' },
    { type: 'cipherLyrics',     id: 'secondChorus' },

    { type: 'progression',      id: 'solo' },
    { type: 'cipherLyrics',     id: 'solo' },
    // { type: 'tabs',             id: 'solo' },

    { type: 'progression',      id: 'bridge' },
    { type: 'cipherLyrics',     id: 'bridge' },

    { type: 'progression',      id: 'thirdChorus' },
    { type: 'cipherLyrics',     id: 'thirdChorus' },

    { type: 'progression',      id: 'fourthChorus' },
    { type: 'cipherLyrics',     id: 'fourthChorus' },

    { type: 'progression',      id: 'outro' },
    { type: 'cipherLyrics',     id: 'outro' }
]

const progressions = [
    {
        id: 'intro',
        title: 'Intro',
        caption: '',
        notes: ['D', 'A', 'Em', 'G', 'x2'],
        progression: 'D D D D D D D D',
        palmMute: true
    },
    {
        id: 'firstVerse',
        title: 'Verse 1',
        caption: '',
        notes: ['D', 'A', 'Em', 'G', 'x3'],
        progression: 'D D D D D D D D',
        palmMute: true
    },
    {
        id: 'firstChorus',
        title: 'Chorus',
        caption: '',
        notes: ['D', 'A', 'Em', 'break','G, A'],
        progression: 'D - D - U U D D D U break D - D D U - d-highlight - D D U - '
    },
    {
        id: 'instrumental',
        title: 'Instrumental',
        caption: '',
        notes: ['D', 'A', 'Em', 'G'],
        progression: 'D - D - U U D D D U'
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        caption: '',
        notes: ['D', 'A', 'Em', 'G', 'x2'],
        progression: 'D D D D D D D D',
        palmMute: true
    },
    {
        id: 'secondChorus',
        title: 'Chorus',
        caption: '',
        notes: ['D', 'A', 'Em', 'break', 'G, A'],
        progression: 'D - D - U U D D D U break D - D D U - d-highlight - D D U - '
    },
    {
        id: 'main',
        title: 'Main Progression',
        caption: '',
        notes: ['D', 'A', 'Em', 'break','G', 'A'],
        progression: 'D D D D D D D D break D - D - D U - - ',
        palmMute: true
    },
    {
        id: 'solo',
        title: 'Solo',
        caption: '',
        notes: ['D', 'A', 'Em', 'G'],
        progression: 'D - D - U U D D D U'
    },
    {
        id: 'thirdChorus',
        title: 'Chorus',
        caption: '',        
        notes: ['D', 'A', 'Em', 'G, A'],
        progression: 'D D D D D D D D',
        palmMute: true
    },
    {
        id: 'bridge',
        title: 'Bridge',
        caption: '',
        notes: ['Em', 'G', 'D', 'A', 'x2'],
        progression: 'D block D block D block D block'
    },
    {
        id: 'fourthChorus',
        title: 'Chorus',
        caption: '',
        notes: ['D', 'A', 'Em', 'break', 'G, A'],
        progression: 'D - D - U U D D D U break D - D D U - d-highlight - D D U - '
    },
    {
        id: 'outro',
        title: 'Outro',
        caption: '',
        notes: ['D', 'A', 'Em', 'doubleBreak', 'G, A', 'doubleBreak', 'D', 'A', 'Em', 'break', 'G', 'Gm', 'D'],
        progression: 'D D D - U U D D D U break break D - D D U - d-highlight - D D U - break break D D D - U U D D D U break D - - - - - - - - -'
    }
]

const tabs = [
    {
        id: 'intro',
        title: 'Intro',
        tabs: [
`
E|----0--0---2------0--0-2-3-2----0--0--2--5--3--2--0-----------|
B|---3--3----------3--3----------3--3-------3--3--3--3----------|
G|--------------------------------------------------------------|
D|--------------------------------------------------------------|
A|--------------------------------------------------------------|
E|--------------------------------------------------------------|`,
`
E|----0--0---2------0--0-2-3-2----0--0--2--3/5---3---3/5---3----|
B|---3--3----------3--3----------3--3----------3---3-----3------|
G|--------------------------------------------------------------|
D|--------------------------------------------------------------|
A|--------------------------------------------------------------|
E|--------------------------------------------------------------|`
        ]
    },
    {
        id: 'firstRiff',
        title: 'Riff 1',
        tabs: [
`
E|---------|
B|---------|
G|-0-------|
D|---4-2-0-|
A|---------|
E|---------|`
        ]
    },
    {
        id: 'secondRiff',
        title: 'Riff 2',
        tabs: [
`
E|--------------------|
B|--------------------|
G|-0---0-2-3---3-5-7~-|
D|---0----------------|
A|--------------------|
E|--------------------|`
        ]
    },
    {
        id: 'solo',
        title: 'Solo | No capo',
        tabs: [
`
E|-------------------------------------------------------------|
B|-------------------------------------------------------------|
G|-9/10-10-10-10--9/10-10--9-----------------------------------|
D|----------------------------12---10---7/8-88-88-8-7-5/7------|
A|---------------------------------------------------------8---|
E|-------------------------------------------------------------|
`,
`  
E|-------------------------------------------------------------|
B|-------------------------------------------------------------|
G|---------------10----12-10-12b14-12-10-12~---12b14-12-10-12~-|
D|--------7-10-12----------------------------------------------|
A|--8-10-------------------------------------------------------|
E|-------------------------------------------------------------|
`,
`
E|-------------------------------------------------------------|
B|-------------------------------------------------------------|
G|----------------2b3~-----------------------------------------|
D|--------------3-----3--------3~------------------------------|
A|-----1---3-5----------3-1-0----------------------------------|
E|-3-5---------------------------------------------------------|
`,
`                                                  <b>Bb5</b>
E|-------------------------------------------------------------|
B|-------------------------------------------------------------|
G|--/5---3-----------------------------------------------------|
D|------------7---5~-------------------------5-7--8------------|
A|------------------------------------------------8------------|
E|------------------------------------------------6------------|
`
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
        id: 'firstChorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'firstChorus')
    },
    {
        id: 'instrumental',
        title: 'Instrumental',
        referenceProgression: progressions.find(progression => progression.id === 'instrumental'),
        onlyCipherColumns: true
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
        id: 'thirdChorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'thirdChorus')
    },
    {
        id: 'fourthChorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'fourthChorus')
    },
    {
        id: 'outro',
        title: 'Outro',
        referenceProgression: progressions.find(progression => progression.id === 'outro')
    }
]

let cipherLyrics = `
D                  A
He is sensible and so incredible
    Em                        G     <span class="badge badge-info-cipher rounded-pill">Riff 1</span>
And all my single friends are jealous
D                    A
He says everything I need to hear and it's like
Em                         G    <span class="badge badge-info-cipher rounded-pill">Riff 1</span>
I couldn't ask for anything better
D                       A
He opens up my door and I get into his car
   Em                             Gm    <span class="badge badge-info-cipher rounded-pill">Riff 2</span>
And he says you look beautiful tonight
           G    <span class="badge badge-info-cipher rounded-pill">Progression <i class="fa-solid fa-arrow-right-long"></i> Down</span>
And I feel perfectly fine
${ divider }
           D
But I miss screaming and fighting and kissing in the rain
         A
And it's 2am and I'm cursing your name
       Em
You're so in love that you act insane
    G                A
And that's the way I loved you
D
Breakin' down and coming undone
      A
It's a roller coaster kinda rush
     Em
And I never knew I could feel that much
    G              A        D
And that's the way I loved you
${ divider }
D A Em G
${ divider }
D
He respects my space
    A
And never makes me wait
    Em                       G
And he calls exactly when he says he will
D
He's close to my mother
A
Talks business with my father
     Em
He's charming and endearing
        G   <span class="badge badge-info-cipher rounded-pill">Progression <i class="fa-solid fa-arrow-right-long"></i> Down</span>
And I'm comfortable
${ divider }
           D
But I miss screaming and fighting and kissing in the rain
         A
And it's 2am and I'm cursing your name
       Em
You're so in love that you act insane
    G                A
And that's the way I loved you
D
Breakin' down and coming undone
      A
It's a roller coaster kinda rush
     Em
And I never knew I could feel that much
    G              A        D A Em G
And that's the way I loved you
${ divider }
D A Em G
${ divider }
Em                         G
He can't see the smile I'm faking
                   D
And my heart's not breaking
                       A
'Cause I'm not feeling anything at all
    Em
And you were wild and crazy
G                    D
Just so frustrating, intoxicating, complicated
A                            G      <span class="badge badge-info-cipher rounded-pill">Progression <i class="fa-solid fa-arrow-right-long"></i> Down</span>
Got away by some mistake and now
${ divider }
       D
I miss screaming and fighting and kissing in the rain
         A
And it's 2am and I'm cursing your name
    Em
I'm so in love that I acted insane
    G                A
And that's the way I loved you
${ divider }
D
Breakin' down and coming undone
      A
It's a roller coaster kinda rush
     Em
And I never knew I could feel that much
    G                A
And that's the way I loved you
${ divider }
D     A     Em
Woah, woah, oh-oh, oh
    G                A      D
And that's the way I loved you, oh
        A 
oh, oh, oh, oh
Oh, oh, oh, woah
Em
Never knew I could feel that much
    G                Gm     D
And that's the way I loved you
`

const lyrics = `
<b>[Verse 1]</b>
He is sensible and so incredible
And all my single friends are jealous
He says everything I need to hear
And it's like I couldn't ask for anything better
He opens up my door, and I get into his car
And he says, "You look beautiful tonight"
And I feel perfectly fine

<b>[Chorus]</b>
But I miss screaming and fighting and kissing in the rain
And it's 2AM and I'm cursing your name
You're so in love that you act insane
And that's the way I loved you
Breaking down and coming undone
It's a rollercoaster kind of rush
And I never knew I could feel that much
And that's the way I loved you

<b>[Verse 2]</b>
He respects my space
And never makes me wait
And he calls exactly when he says he will
He's close to my mother
Talks business with my father
He's charming and endearing
And I'm comfortable

<b>[Chorus]</b>
But I miss screaming and fighting and kissing in the rain
And it's 2AM and I'm cursing your name
You're so in love that you act insane
And that's the way I loved you
Breaking down and coming undone
It's a rollercoaster kind of rush
And I never knew I could feel that much
And that's the way I loved you

<b>[Bridge]</b>
He can't see the smile I'm faking
And my heart's not breaking
'Cause I'm not feeling anything at all
And you were wild and crazy
Just so frustrating
Intoxicating, complicated
Got away by some mistake, and now

<b>[Chorus]</b>
I miss screaming and fighting and kissing in the rain
It's 2AM and I'm cursing your name
So in love that I acted insane
And that's the way I loved you
Breaking down and coming undone
It's a rollercoaster kind of rush
And I never knew I could feel that much
And that's the way I loved you oh, oh

<b>[Outro]</b>
Woah, woah, oh-oh, oh
And that's the way I loved you, oh, oh, oh, oh
Oh, oh, oh, woah
Never knew I could feel that much
And that's the way I loved you
`
