musicId = 'fearless'
musicTitle = 'Fearless'
tuning = 'F'
chordShape = 'D'
capoFret = '3'
spotify = 'https://open.spotify.com/embed/track/77sMIMlNaSURUAXq5coCxE?utm_source=generator&theme=1'
chordsMusic = ['D', 'A', 'Em', 'G', 'Cadd9']
videoUrl = 'https://www.youtube.com/embed/D8fuCW9-vOc'

partsCipher = [
    { type: 'progression',      id: 'intro' },
    { type: 'tabs',             id: 'intro' },

    { type: 'progression',      id: 'main' },
    { type: 'cipherLyrics',     id: 'firstVerse' },

    { type: 'cipherLyrics',     id: 'secondVerse' },
    { type: 'cipherLyrics',     id: 'firstChorus' },

    { type: 'cipherLyrics',     id: 'instrumental' },

    { type: 'cipherLyrics',     id: 'thirdVerse' },

    { type: 'cipherLyrics',     id: 'secondChorus' },

    { type: 'progression',      id: 'solo' },
    { type: 'tabs',             id: 'solo' },

    { type: 'progression',      id: 'bridge' },
    { type: 'cipherLyrics',     id: 'bridge' },

    { type: 'cipherLyrics',     id: 'secondChorus' },
    { type: 'cipherLyrics',     id: 'secondChorus' },

    { type: 'cipherLyrics',     id: 'outro' },
]

progressions = [
    {
        id: 'intro',
        title: 'Intro',
        caption: '',
        notes: ['D', 'A', 'Em', 'G'],
        progression: 'D D - U U D - U D U x2'
    },
    {
        id: 'main',
        title: 'Main Progression',
        caption: '',
        notes: ['D', 'A', 'Em', 'G'],
        progression: 'D D - U U D - U D U'
    },
    {
        id: 'solo',
        title: 'Solo',
        caption: 'INTRO/VERSE',
        notes: ['Em', 'G', 'D', 'A'],
        progression: 'D D - U U D - U D U x2'
    },
    {
        id: 'bridge',
        title: 'Bridge',
        caption: '2nd time from Em just tap down',
        notes: ['Cadd9', 'D', 'Em, D, G, A'],
        progression: 'D block D block D block D block'
    }
]

tabs = [
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
        id: 'solo',
        title: 'Solo | No capo',
        tabs: [
`
E|-------------------------------------------------------------|
B|-------------------------------------------------------------|
G|-9/10-10-10--10-9/10-9---------------------------------------|
D|-----------------------12---10---7/8-8--8-8-8-8-7-5/7--------|
A|------------------------------------------------------8------|
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

cipherParts = [
    {
        id: 'firstVerse',
        title: 'Verse 1',
        referenceProgression: progressions.find(progression => progression.id === 'intro')
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'firstChorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'secondChorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'thirdVerse',
        title: 'Verse 3',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'bridge',
        title: 'Bridge',
        referenceProgression: progressions.find(progression => progression.id === 'bridge')
    },
    {
        id: 'outro',
        title: 'Outro',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'instrumental',
        title: 'Instrumental',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
]

cipherLyrics = `
D
  There's something 'bout the way
A                                 Em
  The street looks when it's just rained
                       G
There's a glow off the pavement
               D
Walk me to the car
                     A                      Em
And you know I wanna ask you to dance right there
                     G                                      <span class="badge badge-info-cipher rounded-pill">Progression <i class="fa-solid fa-arrow-right-long"></i> Down</span>
In the middle of the parking lot
 
     D A    Em  G                                           <span class="badge badge-info-cipher rounded-pill"><i class="fa-solid fa-rotate-right"></i> Repeat first tab intro</span>
Yeah     Oh yeah
${ divider }
D
  We're drivin' down the road
A                 Em
  I wonder if you know
                   G
I'm trying so hard not to get caught up now
D
  But you're just so cool
A                           Em
Run your hands through your hair
                G         A                                 <span class="badge badge-info-cipher rounded-pill">Progression <i class="fa-solid fa-arrow-right-long"></i> DDDD</span>
Absent-mindedly making me want you
${ divider }
D                      A                   Em
  And I don't know how it gets better than this
                             G           A                  <span class="badge badge-info-cipher rounded-pill">Progression <i class="fa-solid fa-arrow-right-long"></i> DD UD</span>
You take my hand and drag me head first, fearless
D                      A                Em
  And I don't know why but with you I'd dance
                 G           A                              <span class="badge badge-info-cipher rounded-pill">Progression <i class="fa-solid fa-arrow-right-long"></i> DD UD</span>
In a storm in my best dress, fearless
${ divider }
D                        A                   Em
  'Cause I don't know how it gets better than this
                             G           A                  <span class="badge badge-info-cipher rounded-pill">Progression <i class="fa-solid fa-arrow-right-long"></i> strum *cut *strum *cut</span>
You take my hand and drag me head first, fearless
D                      A                Em                  <span class="badge badge-info-cipher rounded-pill">Main Progression</span>
  And I don't know why but with you I'd dance
                 G           A                              <span class="badge badge-info-cipher rounded-pill">Progression <i class="fa-solid fa-arrow-right-long"></i> DD UD</span>
In a storm in my best dress, fearless
${ divider }
D                   A                   Em
  So baby drive slow till we run out of road
                  G
In this one horse town
                   D
I wanna stay right here 
                      A                      Em
in this passenger seat you put your eyes on me
                   G            A                             <span class="badge badge-info-cipher rounded-pill">Progression <i class="fa-solid fa-arrow-right-long"></i> strum *cut *strum *cut</span>
In this moment now capture it remember it
${ divider }
Cadd9                       D
 Well, you stood there with me in the doorway
    Em                D          G       A
My hands shake and I'm not usually this way but
Cadd9                      D
  You pull me in and I'm a little more brave
        Em               D                G       A           <span class="badge badge-info-cipher rounded-pill">Progression <i class="fa-solid fa-arrow-right-long"></i> Down</span>
It's a first kiss, it's flawless, really something
          D   A                                               <span class="badge badge-info-cipher rounded-pill">Main Progression</span>
It's fearless
Em     G
Ohh..  yeah
${ divider }
D    A
 Oh, oh
        Em   G 
 Oh-oh, yeah
${ divider }
D A Em G            <span class="badge badge-info-cipher rounded-pill"><i class="fa-solid fa-rotate-right"></i> Repeat second tab intro</span>
`

lyrics = `
[Verse 1]
There's something 'bout the way
The street looks when it's just rained
There's a glow off the pavement, you walk me to the car
And you know I wanna ask you to dance right there
In the middle of the parking lot, yeah
Oh, yeah

[Verse 2]
We're driving down the road, I wonder if you know
I'm trying so hard not to get caught up now
But you're just so cool, run your hands through your hair
Absent-mindedly making me want you

[Chorus]
And I don't know how it gets better than this
You take my hand and drag me head first, fearless
And I don't know why but with you I'd dance
In a storm in my best dress, fеarless

[Verse 3]
So, baby, drive slow 'til we run out of road in this onе-horse town
I wanna stay right here, in this passenger's seat
You put your eyes on me
In this moment now, capture it, remember it

[Chorus]
'Cause I don't know how it gets better than this
You take my hand and drag me head first, fearless
And I don't know why but with you I'd dance
In a storm in my best dress, fearless
Oh, oh

[Bridge]
Well, you stood there with me in the doorway
My hands shake, I'm not usually this way but
You pull me in and I'm a little more brave
It's the first kiss, it's flawless, really something
It's fearless
Oh, yeah

[Chorus]
'Cause I don't know how it gets better than this
You take my hand and drag me head first, fearless
And I don't know why but with you I'd dance
In a storm in my best dress, fearless
'Cause I don't know how it gets better than this
You take my hand and drag me head first, fearless
And I don't know why but with you I'd dance
In a storm in my best dress, fearless

[Outro]
Oh, oh
Oh-oh, yeah
`
