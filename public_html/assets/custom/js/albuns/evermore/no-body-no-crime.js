const musicId = 'no-body-no-crime'
const albumId = 'evermore'
const musicTitle = 'No Body, No Crime (feat. HAIM)'
const tuning = 'Bb'
const chordShape = ''
const capoFret = '3'
const spotify = 'https://open.spotify.com/embed/track/6uwfVkaOM1mcMkFmSn35ix?utm_source=generator'
const chordsMusic = ['Am', 'G', 'C', 'Em', 'D', 'Bm', 'B7']
const videoUrl = 'https://www.youtube.com/embed/C8FasuLzIAA'
const basicCipher = false

const partsCipher = [
    { type: 'progression',      id: 'intro' },
    { type: 'cipherLyrics',     id: 'intro' },
    
    { type: 'progression',      id: 'instrumental' },
    { type: 'cipherLyrics',     id: 'instrumental' },

    { type: 'progression',      id: 'firstVerse' },
    { type: 'cipherLyrics',     id: 'firstVerse' },

    { type: 'progression',      id: 'firstChorus' },
    { type: 'cipherLyrics',     id: 'firstChorus' },

    { type: 'progression',      id: 'firstPostChorus' },
    { type: 'cipherLyrics',     id: 'firstPostChorus' },

    { type: 'progression',      id: 'secondVerse' },
    { type: 'cipherLyrics',     id: 'secondVerse' },

    { type: 'progression',      id: 'secondChorus' },
    { type: 'cipherLyrics',     id: 'secondChorus' },

    { type: 'progression',      id: 'secondPostChorus' },
    { type: 'cipherLyrics',     id: 'secondPostChorus' },

    { type: 'progression',      id: 'bridge' },
    { type: 'cipherLyrics',     id: 'bridge' },

    { type: 'progression',      id: 'lastChorus' },
    { type: 'cipherLyrics',     id: 'lastChorus' },
]

const progressions = [
    {
        id: 'intro',
        title: 'Intro',
        caption: '',
        notes: ['Em', 'Em'],
        progression: 'D - - - - - - - - - - - - - - -',
    },
    {
        id: 'instrumental',
        title: 'Instrumental',
        caption: '',
        notes: ['Em, C', 'D, Am', 'x2'],
        progression: 'D - D - D - D U d-highlight U D - D - D U',
    },
    {
        id: 'firstVerse',
        title: 'Verse 1',
        caption: '',
        notes: [
            'Em, C', 'D, Am', 'break',
            'Em, C', 'break',
            'D, Am',
            'doubleBreak',
            'Em, G', 'D, Am', 'break',
            'Em, G', 'break',
            'D'
        ],
        progression: `
            D - D - D - D U d-highlight U D - D - D U break 
            break 
            D - D - D - D U d-highlight - - - - U D U break 
            break 
            D - D - D - D U d-highlight U D - D - D U break 
            break 
            D - - - - - - - - - D U - U D U`,
    },
    {
        id: 'firstChorus',
        title: 'Chorus',
        caption: '',
        notes: [
            'Em, Am', 'C, D', 'x2', 'break',
            'Em, Am', 'G, D', 'break',
            'Em, Am', 'break',
            'D'
        ],
        progression: `
            D - D - D - D U d-highlight U D - D - D U break 
            break 
            break 
            D - - - - - - - - - D U - U D U`,
    },
    {
        id: 'firstPostChorus',
        title: 'Post-Chorus',
        caption: '',
        notes: ['Em, C', 'D, Am', 'x2'],
        progression: `D - D - D - D U d-highlight U D - D - D U`,
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        caption: '',
        notes: [
            'Em, C', 'D, Am', 'break',
            'Em, C', 'break',
            'D, Am',
            'doubleBreak',
            'Em, G', 'D, Am', 'break',
            'Em, G', 'break',
            'D'
        ],
        progression: `
            D - D - D - D U d-highlight U D - D - D U break 
            break 
            D - D - D - D U d-highlight - - - - U D U break 
            break 
            D - D - D - D U d-highlight U D - D - D U break 
            break 
            D - - - - - - - - - D U - U D U`,
    },
    {
        id: 'secondChorus',
        title: 'Chorus',
        caption: '',
        notes: [
            'Em, Am', 'C, D', 'x2', 'break',
            'Em, Am', 'G, D', 'break',
            'Em, Am', 'break',
            'D'
        ],
        progression: `
            D - D - D - D U d-highlight U D - D - D U break 
            break 
            break 
            D - - - - - - - - - D U - U D U`,
    },
    {
        id: 'secondPostChorus',
        title: 'Post-Chorus',
        caption: '',
        notes: ['Em, C', 'D, Am', 'break', 'Em, C', 'break', 'D'],
        progression: `D - D - D - D U d-highlight U D - D - D U break break D - - - - - - - - - - - D U D U`,
    },
    {
        id: 'bridge',
        title: 'Bridge',
        caption: '',
        notes: [
            'Am', 'break',
            'Em',
            'doubleBreak',
            'Bm', 'break',
            'Em', 'break',
            'Am',
            'doubleBreak',
            'B7'
        ],
        progression: `
            D - - - D - - U - U D - - U D U break 
            D - - - D - - U - U D - D U D U break 
            break 
            D - - - D - - U - U D - - U D U break 
            D - - - D - - U - U D - D U D U break 
            D - - - D - - U - U D - - U D U break 
            break 
            D - D - D - D - D - - - - - - - 
        `,
        repeats: [
            { repeat: 'x2', data: { start: 1, size: 2 } },
        ]
    },
    {
        id: 'lastChorus',
        title: 'Chorus',
        caption: '',
        notes: [
            'Em, Am', 'C, D', 'x2', 'break',
            'Em, Am',
            'doubleBreak', 
            'G, D',
            'doubleBreak', 
            'Em, Am', 'C, D', 'x2', 'break',
            'Em, Am', 
            'doubleBreak',
            'D'
        ],
        progression: `
            D - - - - - - - d-highlight - - - - - - - break 
            break 
            break 
            D - - - - - - - d-highlight - - - D - D U break 
            break 
            D - D - D - D U d-highlight U D - D - D U break
            break 
            D - - - - - - - - - - - - - - -`,
    },
]

const tabs = []

const cipherParts = [
    {
        id: 'intro',
        title: 'Intro',
        referenceProgression: progressions.find(progression => progression.id === 'intro')
    },
    {
        id: 'instrumental',
        title: 'Instrumental',
        referenceProgression: progressions.find(progression => progression.id === 'instrumental'),
        onlyCipherColumns: true
    },
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
        id: 'firstPostChorus',
        title: 'Post-Chorus',
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
        title: 'Post-Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'secondPostChorus')
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
    },
]

let cipherLyrics = `
    Em
He did it
    Em
He did it
${ divider } 
Em   C    D    Am   Em   C    D    Am
${ divider } 
Em            C
  Este's a friend of mine
    D                               Am                    Em
We meet up every Tuesday night for dinner and a glass of wine
             C
Este's been losin' sleep
     D                                  Am                  Em
Her husband's actin' different, and it smells like infidelity
                          G                   D
She says, "That ain't my merlot on his mouth
               Am                        Em
That ain't my jewellery on our joint account"
           G            D
No, there ain't no doubt
                              D
I think I'm gonna call him out
${ divider }
        Em             Am            C          D       Em
She says, "I think he did it, but I just can't prove it"
            Am            C           D      Em
I think he did it, but I just can't prove it
            Am            G           D      Em
I think he did it, but I just can't prove it
        Am
No, no body, no crime
    D                                   Em
But I ain't lettin' up until the day I die
${ divider }
   C    D    Am
No, no
            Em
I think he did it
   C    D      Am
No, no      he did it
${ divider }
Em      C            D
  Este wasn't there Tuesday night at Olive Garden
Am                Em
At her job or anywhere
                C
He reports his missing wife
      D
And I noticed when I passed his house
    Am                            Em
His truck has got some brand new tyres
         G               D
And his mistress moved in
           Am                   Em
Sleeps in Este's bed and everything
           G            D
No, there ain't no doubt
                               D
Somebody's gotta catch him out, 'cause
${ divider }
Em            Am            C           D      Em
  I think he did it, but I just can't prove it
            Am            C           D      Em
I think he did it, but I just can't prove it
            Am            G           D      Em
I think he did it, but I just can't prove it
        Am
No, no body, no crime
    D                                   Em
But I ain't lettin' up until the day I die
${ divider }
   C    D    Am
No, no
            Em
I think he did it
   C    D
No, no     he did it
${ divider }
Am                                           Em
  Good thing my daddy made me get a boating licence when I was fifteen
Am
  And I've cleaned enough houses
          Em
To know how to cover up a scene
Bm                                   Em
  Good thing Este's sister's gonna swear she was with me (She was with me, dude)
Am                                        B7
  Good thing his mistress took out a big life insurance policy
${ divider }
Em                Am               C          D      Em
  They think she did it, but they just can't prove it
                Am               C          D      Em
They think she did it, but they just can't prove it
              Am              G           D     Em
She thinks I did it, but she just can't prove it
        Am
No, no body, no crime
   C                           D     Em
I wasn't lettin' up until the day he
        Am
No, no body, no crime
   C                           D     Em
I wasn't lettin' up until the day he
        Am
No, no body, no crime
   D                           N.C.
I wasn't lettin' up until the day he died
`

const lyrics = `
<b>[Intro: HAIM]</b>
He did it
He did it

<b>[Verse 1: Taylor Swift]</b>
Este's a friend of mine
We meet up every Tuesday night for dinner and a glass of wine
Este's been losin' sleep
Her husband's actin' different, and it smells like infidelity
She says, "That ain't my Merlot on his mouth
That ain't my jewelry on our joint account"
No, there ain't no doubt
I think I'm gonna call him out

<b>[Chorus: Taylor Swift & HAIM]</b>
She says, "I think he did it, but I just can't prove it"
I think he did it, but I just can't prove it
I think he did it, but I just can't prove it
No, no body, no crime
But I ain't lettin' up until the day I die

<b>[Post-Chorus: HAIM]</b>
No, no
I think he did it
No, no
He did it
<b>[Verse 2: Taylor Swift]</b>
Este wasn't there Tuesday night at Olive Garden
At her job or anywhere
He reports his missing wife
And I noticed when I passed his house
His truck has got some brand new tires
And his mistress moved in
Sleeps in Este's bed and everything
No, there ain't no doubt
Somebody's gotta catch him out, 'cause

<b>[Chorus: Taylor Swift & HAIM]</b>
I think he did it, but I just can't prove it (He did it)
I think he did it, but I just can't prove it (He did it)
I think he did it, but I just can't prove it
No, no body, no crime
But I ain't lettin' up until the day I die

<b>[Post-Chorus: HAIM & Taylor Swift]</b>
No, no
I think he did it
No, no
He did it

<b>[Bridge: Taylor Swift & Danielle Haim]</b>
Good thing my daddy made me get a boating license when I was fifteen
And I've cleaned enough houses to know how to cover up a scene
Good thing Este's sister's gonna swear she was with me
(She was with me, dude)
Good thing his mistress took out a big life insurance policy
<b>[Chorus: Taylor Swift]</b>
They think she did it, but they just can't prove it
They think she did it, but they just can't prove it
She thinks I did it, but she just can't prove it

<b>[Outro: Taylor Swift & HAIM]</b>
No, no body, no crime
I wasn't lettin' up until the day he
No, no body, no crime
I wasn't lettin' up until the day he
No, no body, no crime
I wasn't lettin' up until the day he died
`
