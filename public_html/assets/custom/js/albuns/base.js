musicId = 'red'
musicTitle = 'Read'
tuning = 'E'
capoFret = '4'
spotify = 'https://open.spotify.com/embed/track/4yBEU0askBZzE2XEVdEwmx?utm_source=generator'
chordsMusic = ['F', 'Am', 'G', 'C', 'G/B', 'C/E']
videoUrl = 'https://www.youtube.com/embed/Zlot0i3Zykw'

partsCipher = [
    { type: 'progression',      id: 'intro' },
    { type: 'tabs',             id: 'intro' },

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
        title: 'Main Progression | Intro 2x',
        caption: 'INTRO/VERSE',
        notes: ['D', 'A', 'Em', 'G'],
        progression: 'D - - - D - - - U U D - U D U -'
    },
    {
        id: 'solo',
        title: 'Solo 2x',
        caption: 'INTRO/VERSE',
        notes: ['Em', 'G', 'D', 'A'],
        progression: 'D - - - D - - - U U D - U D U -'
    },
    {
        id: 'bridge',
        title: 'Bridge 2x',
        caption: '2nd time from Em just tap down',
        notes: ['Cadd9', 'D', 'Em', 'D', 'G', 'A'],
        progression: 'L S - - L S - - L S - - L S - -'
    }
]

tabs = [
    {
        id: 'intro',
        title: 'Intro',
        tabs: [
            `E|----0--0---2-------0--0-2-3-2---0--0--2-5-3-2-0---|
            B|---3--3----------3--3----------3--3---------------|
            G|--------------------------------------------------|
            D|--------------------------------------------------|
            A|--------------------------------------------------|
            E|--------------------------------------------------|`,
            `E|----0--0---2-------0--0-2-3-2---0--0--2-5-3-5-3---|
            B|---3--3----------3--3----------3--3---------------|
            G|--------------------------------------------------|
            D|--------------------------------------------------|
            A|--------------------------------------------------|
            E|--------------------------------------------------|`
        ]
    },
    {
        id: 'solo',
        title: 'Solo',
        tabs: [
            `E|------------------------------------------------------|
            B|-5h6-6-6-6--6-6-6p5-5-3-------------------------------|
            G|------------------------3h5-3h5-5-3v------------------|
            D|-------------------------------------5/7-3------------|
            A|------------------------------------------------------|
            E|------------------------------------------------------|`,
            `E|------------------------------------------------------|
            B|--------------6-8p6-8b10r8p6-8v-8b10r8p6-9v-----------|
            G|----------5-7-----------------------------------------|
            D|-3--3/5-7---------------------------------------------|
            A|------------------------------------------------------|
            E|--------------------------------------------13/-------|`,
            `E|------------------------------------------------------|
            B|------------------------------------------------------|
            G|-----------------2b3r2-------------3/5-3-2-0--0-2-3v--|
            D|-----------0-3v--------3-------3v---------------------|
            A|---0-1v--3---------------3-1-0------------------------|
            E|-3----------------------------------------------------|`
        ]
    }
]

cipherParts = [
    {
        id: 'firstVerse',
        title: 'Verse 1',
        ignoreTitle: false
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        ignoreTitle: false
    },
    {
        id: 'firstChorus',
        title: 'Chorus',
        ignoreTitle: false
    },
    {
        id: 'secondChorus',
        title: 'Chorus',
        ignoreTitle: false
    },
    {
        id: 'thirdVerse',
        title: 'Verse 3',
        ignoreTitle: false
    },
    {
        id: 'bridge',
        title: 'Bridge',
        ignoreTitle: false
    },
    {
        id: 'outro',
        title: 'Outro',
        ignoreTitle: false
    },
    {
        id: 'instrumental',
        title: 'Instrumental',
        ignoreTitle: false
    },
]

cipherLyrics = `
${ divider }
`

lyrics = `

`
