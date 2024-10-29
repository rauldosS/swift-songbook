const musicId = 'right-where-you-left-me'
const albumId = 'evermore'
const musicTitle = 'Right Where You Left Me'
const tuning = 'Gm'
const chordShape = ''
const capoFret = '3'
const spotify = 'https://open.spotify.com/embed/track/3zwMVvkBe2qIKDObWgXw4N?utm_source=generator'
const chordsMusic = ['G', 'D', 'Em', 'Bm', 'C', 'Am']
const videoUrl = 'https://www.youtube.com/embed/hSeBjkMc5OA'
const basicCipher = false

// https://drive.google.com/file/d/1Pfc2yNKmnGR5seAKfWZqc7cEtHA4b6Gh/view

const partsCipher = [
    { type: 'alert',            id: 'palmMute' },

    { type: 'progression',      id: 'firstVerse' },
    { type: 'cipherLyrics',     id: 'firstVerse' },

    { type: 'progression',      id: 'firstPreChorus' },
    { type: 'cipherLyrics',     id: 'firstPreChorus' },

    { type: 'progression',      id: 'firstChorus' },
    { type: 'cipherLyrics',     id: 'firstChorus' },

    { type: 'progression',      id: 'instrumental' },
    { type: 'cipherLyrics',     id: 'instrumental' },

    { type: 'progression',      id: 'bridge' },
    { type: 'cipherLyrics',     id: 'bridge' },

    { type: 'progression',      id: 'secondVerse' },
    { type: 'cipherLyrics',     id: 'secondVerse' },

    { type: 'progression',      id: 'secondPreChorus' },
    { type: 'cipherLyrics',     id: 'secondPreChorus' },

    { type: 'progression',      id: 'secondChorus' },
    { type: 'cipherLyrics',     id: 'secondChorus' },

    { type: 'progression',      id: 'lastChorus' },
    { type: 'cipherLyrics',     id: 'lastChorus' },
]

const progressions = [
    {
        id: 'firstVerse',
        title: 'Verse 1',
        caption: '',
        notes: ['D²', 'Em²', 'C²', 'G, D', 'x2'],
        progression: 'D - D U - U D U',
    },
    {
        id: 'firstPreChorus',
        title: 'Pre-Chorus',
        caption: '',
        notes: [
            'D²', 'Em²', 'C²', 'G, D', 'x2', 'break',
            'Am²', 'G, D', 'x2'
        ],
        progression: 'D - D U - U D U',
    },
    {
        id: 'firstChorus',
        title: 'Chorus',
        caption: '',
        notes: ['D²', 'Em²', 'C²', 'G, D', 'x2'],
        progression: 'D - D U - U D U',
    },
    {
        id: 'instrumental',
        title: 'Instrumental',
        caption: '',
        notes: ['Am²', 'G, D', 'x2'],
        progression: 'D - D U - U D U',
    },
    {
        id: 'bridge',
        title: 'Bridge',
        caption: '',
        notes: ['Bm²', 'C²', 'D²', 'C, G', 'x2'],
        progression: 'D - D U - U D U',
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        caption: '',
        notes: [
            'D²', 'Em²', 'C²', 'G, D', 'break',
            'D²', 'Em²', 'C²', 'G, D'
        ],
        progression: `
            D - - - - - - - break 
            D - D U - U D U 
        `,
        palmMute: true
    },
    {
        id: 'secondPreChorus',
        title: 'Pre-Chorus',
        caption: '',
        notes: [
            'D²', 'Em²', 'C²', 'G, D', 'break',
            'Am²', 'G, D', 'x4'
        ],
        progression: 'D - D U - U D U',
    },
    {
        id: 'secondChorus',
        title: 'Chorus',
        caption: '',
        notes: ['D²', 'Em²', 'C²', 'G, D', 'x2'],
        progression: 'D - D U - U D U',
        palmMute: true
    },
]

const tabs = []

const cipherParts = [
    {
        id: 'firstVerse',
        title: 'Verse 1',
        referenceProgression: progressions.find(progression => progression.id === 'firstVerse')
    },
    {
        id: 'firstPreChorus',
        title: 'Post-Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'firstPreChorus')
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
        id: 'bridge',
        title: 'Bridge',
        referenceProgression: progressions.find(progression => progression.id === 'bridge')
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        referenceProgression: progressions.find(progression => progression.id === 'secondVerse')
    },
    {
        id: 'secondPreChorus',
        title: 'Post-Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'secondPreChorus')
    },
    {
        id: 'secondChorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'secondChorus')
    },
]

let cipherLyrics = `
D
Friends break up, friends get married
Em
Strangers get born, strangers get buried
C
Trends change, rumors fly through new skies
    G                   D
But I'm right where you left me
D
Matches burn after the other
Em
Pages turn and stick to each other
C
Wages earned and lessons learned
       G                   D
But I, I'm right where you left me
${ divider }
D                            Em
Help, I'm still at the restaurant
                            C
Still sitting in a corner I haunt
 
Cross-legged in the dim light
G                             D
They say, "What a sad sight", I
  D                               Em
I swear you could hear a hair pin drop
                             C
Right when I felt the moment stop
 
Glass shattered on the white cloth
G                   D
Everybody moved on, I
 
Am
I stayed there
                     G
Dust collected on my pinned-up hair
D                   Am
They expected me to find somewhere
                        G
Some perspective, but I sat and stared
D           <span class="badge badge-info-cipher rounded-pill"><span class="text-white">D</span> <i class="fa-solid fa-arrow-right-long"></i> Start next strumming</span>
Right where you left me
${ divider }
    Em                  C
You left me no, oh, you left me no
    G                        D
You left me no choice but to stay here forever
                 Em                  C
You left me, you left me no, oh, you left me no
    G                        D
You left me no choice but to stay here forever
${ divider }
Am G D x2
${ divider }
Bm                                         C
  Did you ever hear about the girl who got frozen?
 
Time went on for everybody else
          D                                            C
She won't know it, she's still twenty-three inside her fantasy
              G
How it was supposed to be
Bm                                           C
  Did you hear about the girl who lives in delusion?
                                             D
Breakups happen every day, you don't have to lose it
                                    C
She's still twenty-three inside her fantasy
    G                 <span class="badge badge-info-cipher rounded-pill"><span class="text-white">D</span> <i class="fa-solid fa-arrow-right-long"></i> Start next strumming</span>
And you're sitting in front of me
${ divider }
             Em                                C
At the restaurant when I was still the one you want
                              G                          D
Cross-legged in the dim light everything was just right, I
D                        Em
I could feel the mascara run
                             C
You told me that you met someone
 
Glass shattered on the white cloth
G               D
Everybody moved on
${ divider }
D                            Em
Help, I'm still at the restaurant
                            C
Still sitting in a corner I haunt
 
Cross-legged in the dim light
G                             D
They say, "What a sad sight", I

Am
I stayed there
                     G
Dust collected on my pinned-up hair
D                       Am
I'm sure that you got a wife out there
                            G
Kids and Christmas, but I'm unaware
          D             Am
Cause I'm right where I cause no harm
 
Mind my business
       G
If our love died young
  D
I can't bear witness
         Am
And it's been so long
                          G
But if you ever think you got it wrong
    D
I'm right where
<span class="badge badge-info-cipher rounded-pill"><span class="text-white">D</span> <i class="fa-solid fa-arrow-right-long"></i> Start next strumming</span>
You left me
${ divider }
    Em                  C
You left me no, oh, you left me no
    G                        D
You left me no choice but to stay here forever
                 Em                  C
You left me, you left me no, oh, you left me no
    G                        D
You left me no choice but to stay here forever
`

const lyrics = `
<b>[Verse 1]</b>
Friends break up, friends get married
Strangers get born, strangers get buried
Trends change, rumors fly through new skies
But I'm right where you left me
Matches burn after the other
Pages turn and stick to each other
Wages earned and lessons learned
But I, I'm right where you left me

<b>[Pre-Chorus]</b>
Help, I'm still at the restaurant
Still sitting in a corner I haunt
Cross-legged in the dim light
They say, "What a sad sight," I
I swear you could hear a hair pin drop
Right when I felt the moment stop
Glass shattered on the white cloth
Everybody moved on, I, I stayed there
Dust collected on my pinned-up hair
They expected me to find somewhere
Some perspective, but I sat and stared right where

<b>[Chorus]</b>
You left me, you left me no, oh, you left me no
You left me no choice but to stay here forever
You left me, you left me no, oh, you left me no
You left me no choice but to stay here forever

<b>[Bridge]</b>
Did you ever hear about the girl who got frozen?
Time went on for everybody else, she won't know it
She's still twenty-three inside her fantasy
How it was supposed to be
Did you hear about the girl who lives in delusion?
Breakups happen every day, you don't have to lose it
She's still twenty-three inside her fantasy
And you're sitting in front of me

<b>[Pre-Chorus]</b>
At the restaurant
When I was still the one you want
Cross-legged in the dim light
Everything was just right, I
I could feel the mascara run
You told me that you met someone
Glass shattered on the white cloth
Everybody moved on
Help, I'm still at the restaurant
Still sitting in a corner I haunt
Cross-legged in the dim light
They say, "What a sad sight," I, I stayed there
Dust collected on my pinned-up hair
I'm sure that you got a wife out there
Kids and Christmas, but I'm unaware 'cause I'm right where
I cause no harm, mind my business
If our love died young, I can't bear witness, and it's been so long
If you ever think you got it wrong, I'm right where

<b>[Chorus]</b>
You left me, you left me no, oh, you left me no
You left me no choice but to stay here forever
You left me, you left me no, oh, you left me no
You left me no choice but to stay here forever
`
