const musicId = 'no-body-no-crime'
const albumId = 'evermore'
const musicTitle = 'Champagne Problems'
const tuning = 'C'
const chordShape = ''
const capoFret = ''
const spotify = 'https://open.spotify.com/embed/track/1gcyHQpBQ1lfXGdhZmWrHP?utm_source=generator'
const chordsMusic = ['C', 'G', 'Am', 'F']
const videoUrl = 'https://www.youtube.com/embed/8LuYoj4g7Kg'
const basicCipher = false

const partsCipher = [
    { type: 'tabs',             id: 'main' },

    { type: 'progression',      id: 'main' },
    { type: 'cipherLyrics',     id: 'intro' },

    { type: 'cipherLyrics',     id: 'firstVerse' },

    { type: 'cipherLyrics',     id: 'firstChorus' },

    { type: 'cipherLyrics',     id: 'firstInterlude' },

    { type: 'cipherLyrics',     id: 'secondVerse' },

    { type: 'cipherLyrics',     id: 'secondChorus' },

    { type: 'cipherLyrics',     id: 'secondInterlude' },

    { type: 'cipherLyrics',     id: 'bridge' },

    { type: 'cipherLyrics',     id: 'lastChorus' },

    { type: 'cipherLyrics',     id: 'outro' },
]

const progressions = [
    {
        id: 'main',
        title: 'Main Progression',
        caption: '',
        notes: ['C', 'G', 'Am', 'F'],
        progression: '',
    },
]

const tabs = [
    {
        id: 'main',
        title: 'Main Tab',
        tabs: [`
    <b>C</b>                            <b>G</b>
e|---------------------------------------------------------|
B|----1------1------1------1-------0------0------0------0--|
G|----0------0------0------0-------0------0------0------0--|
D|----2------2------2------2-------0------0------0------0--|
A|--3------3------3------3---------------------------------|
E|-------------------------------3------3------3------3----|`,
`
    <b>Am</b>                           <b>F</b>
e|---------------------------------------------------------|
B|----1------1------1------1-------1------1------1------1--|
G|----0------0------0------0-------2------2------2------2--|
D|----2------2------2------2-------3------3------3------3--|
A|--0------0------0------0---------------------------------|
E|-------------------------------1------1------1------1----|`
]}
]

const cipherParts = [
    {
        id: 'intro',
        title: 'Intro',
        referenceProgression: progressions.find(progression => progression.id === 'main'),
        onlyCipherColumns: true
    },
    {
        id: 'firstVerse',
        title: 'Verse 1',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'firstChorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'firstInterlude',
        title: 'interlude',
        referenceProgression: progressions.find(progression => progression.id === 'main'),
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'secondChorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'secondInterlude',
        title: 'interlude',
        referenceProgression: progressions.find(progression => progression.id === 'main'),
    },
    {
        id: 'bridge',
        title: 'Bridge',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'lastChorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'outro',
        title: 'Outro',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
]

let cipherLyrics = `
C G Am F x2
${ divider }
C                                  G
  You booked the night train for a reason
             Am                F
So you could sit there in this hurt
C                           G
  Bustling crowds or silent sleepers
       Am                F
You're not sure which is worse
${ divider }
         C                               G
Because I dropped your hand while dancing
                           Am
Left you out there standing
 
Crestfallen on the landing
F
Champagne problems
C                               G
  Your mom's ring in your pocket
                         Am
My picture in your wallet
 
Your heart was glass, I dropped it
F
Champagne problems
${ divider }
C G Am F
${ divider }
C                            G
  You told your family for a reason
    Am               F
You couldn't keep it in
C                                 G
  Your sister splashed out on the bottle
    Am             F
Now no one's celebrating
${ divider }
C                             G
  Dom Pérignon, you brought it
                             Am
No crowd of friends applauded
 
Your hometown skeptics called it
F
Champagne problems
C                                    G
  You had a speech, you're speechless
                                Am
Love slipped beyond your reaches
 
And I couldn't give a reason
F
Champagne problems
${ divider }
C G Am F x2
${ divider }
C                                 G
  Your Midas touch on the Chevy door
                                  Am
November flush and your flannel cure
 
"This dorm was once a madhouse"
  F
I made a joke, "Well, it's made for me"
   C                        G
How evergreen, our group of friends
                                  Am
Don't think we'll say that word again
                                   F
And soon they'll have the nerve to deck the halls
 
That we once walked through
C
One for the money, two for the show
  G
I never was ready so I watch you go
    Am
Sometimes you just don't know the answer
     F
'Til someone's on their knees and asks you
     C
"She would've made such a lovely bride
       G
What a shame she's fucked in the head," they said
    Am
But you'll find the real thing instead
       F
She'll patch up your tapestry that I shred
${ divider }
C                                 G
  And hold your hand while dancing
                        Am
Never leave you standing
                          F
Crestfallen on the landing
 
With champagne problems
C                               G
  Your mom's ring in your pocket
                          Am
Her picture in your wallet
 
You won't remember all my
F
Champagne problems
${ divider }
C G Am
       You won't remember all my
F
Champagne problems

C G Am F
`

const lyrics = `
<b>
</b>
You booked the night train for a reason
So you could sit there in this hurt
Bustling crowds or silent sleepers
You're not sure which is worse

<b>
</b>
Because I dropped your hand while dancing
Left you out there standing
Crestfallen on the landing
Champagne problems
Your mom's ring in your pocket
My picture in your wallet
Your heart was glass, I dropped it
Champagne problems

<b>
</b>
You told your family for a reason
You couldn't keep it in
Your sister splashed out on the bottle
Now no one's celebrating

<b>
</b>
Dom Pérignon, you brought it
No crowd of friends applauded
Your hometown skeptics called it
Champagne problems
You had a speech, you're speechless
Love slipped beyond your reaches
And I couldn't give a reason
Champagne problems

<b>
</b>
Your Midas touch on the Chevy door
November flush and your flannel cure
"This dorm was once a madhouse"
I made a joke, "Well, it's made for me"
How evergreen, our group of friends
Don't think we'll say that word again
And soon they'll have the nerve to deck the halls
That we once walked through
One for the money, two for the show
I never was ready so I watch you go
Sometimes you just don't know the answer
'Til someone's on their knees and asks you
"She would've made such a lovely bride
What a shame she's fucked in the head," they said
But you'll find the real thing instead
She'll patch up your tapestry that I shred

<b>
</b>
And hold your hand while dancing
Never leave you standing
Crestfallen on the landing
With champagne problems
Your mom's ring in your pocket
Her picture in your wallet
You won't remember all my
Champagne problems
[Outro]
You won't remember all my
Champagne problems
`
