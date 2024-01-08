const musicId = 'you-belong-with-me'
const albumId = 'fearless'
const musicTitle = 'You Belong With Me'
const tuning = 'F#'
const chordShape = 'D'
const capoFret = '4'
const spotify = 'https://open.spotify.com/embed/track/1qrpoAMXodY6895hGKoUpA?utm_source=generator'
const chordsMusic = ['D', 'A', 'Em', 'G', 'D²', 'A²', 'Em²', 'G²']
const videoUrl = 'https://www.youtube.com/embed/EgM8mDXrecs'
const basicCipher = false

const partsCipher = [
    { type: 'alert',            id: 'palmMute' },

    { type: 'tabs',             id: 'intro' },
    { type: 'progression',      id: 'intro' },

    { type: 'progression',      id: 'firstVerse' },
    { type: 'cipherLyrics',     id: 'firstVerse' },

    { type: 'progression',      id: 'firstPreChorus' },
    { type: 'cipherLyrics',     id: 'firstPreChorus' },

    { type: 'progression',      id: 'firstChorus' },
    { type: 'cipherLyrics',     id: 'firstChorus' },

    { type: 'progression',      id: 'instrumental' },
    { type: 'cipherLyrics',     id: 'instrumental' },

    { type: 'progression',      id: 'secondVerse' },
    { type: 'cipherLyrics',     id: 'secondVerse' },

    { type: 'progression',      id: 'secondPreChorus' },
    { type: 'cipherLyrics',     id: 'secondPreChorus' },

    { type: 'progression',      id: 'secondChorus' },
    { type: 'cipherLyrics',     id: 'secondChorus' },

    { type: 'progression',      id: 'solo' },
    { type: 'cipherLyrics',     id: 'solo' },
    { type: 'tabs',             id: 'solo' },

    { type: 'progression',      id: 'bridge' },
    { type: 'cipherLyrics',     id: 'bridge' },

    { type: 'progression',      id: 'lastChorus' },
    { type: 'cipherLyrics',     id: 'lastChorus' },

    { type: 'progression',      id: 'outro' },
    { type: 'cipherLyrics',     id: 'outro' }
]

const progressions = [
    {
        id: 'intro',
        title: 'Intro',
        caption: 'ACCENTED STRUMS UNDERLINED',
        notes: ['D²', 'D²'],
        progression: 'd-accented D D d-accented D D d-accented D',
        palmMute: true
    },
    {
        id: 'firstVerse',
        title: 'Verse 1',
        caption: '',
        notes: ['D²', 'A²', 'Em²', 'G²', 'x2'],
        progression: 'd-accented D D d-accented D D d-accented D',
        palmMute: true
    },
    {
        id: 'firstPreChorus',
        title: 'Pre-Chorus',
        caption: '',
        notes: ['Em, G', 'D, A', 'Em, G', 'doubleBreak', 'A'],
        progression: 'd-accented D D d-accented D D d-accented D break break D - - - - - - -',
        palmMute: true
    },
    {
        id: 'firstChorus',
        title: 'Chorus',
        caption: '',
        notes: ['D²', 'A²', 'Em²', 'break', 'G'],
        progression: 'D - D U - U D U break D - - - - - - -'
    },
    {
        id: 'instrumental',
        title: 'Instrumental',
        caption: '',
        notes: ['D²'],
        progression: 'd-accented D D d-accented D D d-accented D',
        palmMute: true
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        caption: '',
        notes: ['D²', 'A²', 'Em²', 'G²'],
        progression: 'd-accented D D d-accented D D d-accented D',
        palmMute: true
    },
    {
        id: 'secondPreChorus',
        title: 'Pre-Chorus',
        caption: '',
        notes: ['Em, G', 'D, A', 'Em, G', 'doubleBreak', 'A'],
        progression: 'd-accented D D d-accented D D d-accented D break break D - - - - - - -', 
        palmMute: true
    },
    {
        id: 'secondChorus',
        title: 'Chorus',
        caption: '',
        notes: ['D²', 'A²', 'Em²', 'G²'],
        progression: 'D - D U - U D U'
    },
    {
        id: 'solo',
        title: 'Solo',
        caption: '',
        notes: ['D²', 'A²', 'Em²', 'G²'],
        progression: 'D - D U - U D U'
    },
    {
        id: 'bridge',
        title: 'Bridge',
        caption: '',
        notes: ['Em, G', 'D, A', 'x2'],
        progression: 'd-accented D D d-accented D D d-accented D',
        palmMute: true
    },
    {
        id: 'lastChorus',
        title: 'Chorus',
        caption: '',
        notes: ['D²', 'A²', 'doubleBreak', 'Em²', 'break', 'G', 'break', 'G', 'doubleBreak', 'D²', 'A²', 'Em²', 'G', 'break', 'G'],
        progression: 'd-accented D D d-accented D D d-accented D break break D - - - - - - - break G D - D U - U D U break D D D D D D D D break break D - D U - U D U break D D D D D D D D',
    },
    {
        id: 'outro',
        title: 'Outro',
        caption: '',
        notes: ['D²', 'A²', 'Em²', 'G²', 'break', 'D'],
        progression: 'D - D U - U D U break D - - - - - - -',
    },
]

const tabs = [
    {
        id: 'intro',
        title: 'Intro',
        tabs: [
`
E|-----------------------------------|
B|-----------------------------------|
G|-----2-2---2-2---0-0---0---0-------| 2x
D|-2/4-----4-----4-----4---4---4-2-0-| 
A|-----------------------------------|
E|-----------------------------------|
`,
        ]
    },
    {
        id: 'solo',
        title: 'Solo | No capo',
        tabs: [
`
1st guitar
E|-----------------------------|
B|-7-7-7-9-9-9--11-------------|
G|-4-4-4-6-6-6--8----8-9-8-6---| 2x
D|---------------------------9-|
A|-----------------------------|
E|-----------------------------|`
,`
2nd guitar
E|-----------------------------|
B|-7-X-X-9-7-9-11--------------|
G|-------------------8-9-8-6---| 2x
D|---------------------------9-|
A|-----------------------------|
E|-----------------------------|
`,`
E|---------------------9^---------------------------|
B|-----------9--11-12--------11-12-11---------------|
G|------------------------------------11------------|
D|------8-9------------------------------11-9-8--9~-|
A|-9-11---------------------------------------------|
E|--------------------------------------------------|
`,
        ]
    }
]

const cipherParts = [
    {
        id: 'intro',
        title: 'Intro',
        referenceProgression: progressions.find(progression => progression.id === 'intro')
    },
    {
        id: 'firstVerse',
        title: 'Verse 1',
        referenceProgression: progressions.find(progression => progression.id === 'firstVerse')
    },
    {
        id: 'firstPreChorus',
        title: 'Pre-Chorus',
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
        id: 'secondVerse',
        title: 'Verse 2',
        referenceProgression: progressions.find(progression => progression.id === 'secondVerse')
    },
    {
        id: 'secondPreChorus',
        title: 'Pre-Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'secondPreChorus')
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
        id: 'lastChorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'lastChorus')
    },
    {
        id: 'outro',
        title: 'Outro',
        referenceProgression: progressions.find(progression => progression.id === 'outro')
    },
]

let cipherLyrics = `
D
${ divider }
D                                                    A
  You're on the phone with your girlfriend, she's upset
                                          Em
She's going off about something that you said
                                      G
Cause she doesn't get your humor like I do
D                                       A
I'm in the room it's a typical Tuesday night
                                                Em
I'm listening to the kind of music she doesn't like
                                      G
And she'll never know your story like I do
${ divider }
      Em                    G
But she wears short skirts, I wear T-shirts
  D                     A
She's cheer captain and I'm on the bleachers
  Em                             G
Dreaming about the day when you wake up and find
                 <span class="badge badge-info-cipher rounded-pill"><span class="text-white">A</span> <i class="fa-solid fa-arrow-right-long"></i> Down</span>
That what you're

Looking for has been here the whole time
${ divider }
              D
If you could see that I'm the one who understands you
 A                                     Em
Been here all along, so why can't you see?
                 <span class="badge badge-info-cipher rounded-pill"><span class="text-white">G</span> <i class="fa-solid fa-arrow-right-long"></i> Down</span>
You belong with me, you belong with me
${ divider }
D²
${ divider }
D                                                A
 Walkin' the streets with you and your worn out jeans
                                               Em
I can't help thinking this is how it ought to be
                                         G
Laughing on a park bench, thinking to myself

Hey isn't this easy

     D                                                 A
And you've got a smile that could light up this whole town
                                                    Em
I haven't seen it in a while since she brought you down

You say you're fine, I know you better then that
G
  Hey whatcha doing with a girl like that
${ divider }
  Em                  G
She wears high heels, I wear sneakers
  D                    A
Shes cheer captain and I'm on the bleachers
  Em                             G
Dreaming about the day when you wake up and find
                 A
That what you're

Looking for has been here the whole time
${ divider }
              D
If you could see that I'm the one who understands you
 A                                     Em
Been here all along, so why can't you see?
                 G                   
You belong with me, you belong with me

  D
Standing by and waiting at your back door
A                                        Em
All this time how could you not know, baby
                 G
You belong with me, you belong with me
${ divider }
D  A  Em  G 
${ divider }
                    Em
Oh I remember you drivin' to my house
        G
In the middle of the night
        D
I'm the one who makes you laugh
           A
When you know you're about to cry
        Em
And I know your favorite songs
         G
And you tell me about your dreams
          D
Think I know where you belong
          <span class="badge badge-info-cipher rounded-pill"><span class="text-white">A</span> <i class="fa-solid fa-arrow-right-long"></i> Down</span>
Think I know it's with me
${ divider }
           D
Can't you see that I'm the one who understands you
 A                                     Em
Been here all along, so why can't you see?
                 G
You belong with me
D
Standing by and waiting at your back door
A                                        Em
All this time how could you not know, baby
                 G                   
You belong with me, you belong with me
${ divider }
                 D
You belong with me
                               Em
Have you ever thought just maybe
                 G                   D
You belong with me, you belong with me
`

const lyrics = `
<b>[Verse 1]</b>
You're on the phone with your girlfriend, she's upset
She's going off about something that you said
'Cause she doesn't get your humor like I do
I'm in my room, it's a typical Tuesday night
I'm listening to the kind of music she doesn't like
And she'll never know your story like I do

<b>[Pre-Chorus]</b>
'Cause she wears short skirts, I wear T-shirts
She's Cheer Captain and I'm on the bleachers
Dreaming 'bout the day when you wake up and find
That what you're looking for has been here the whole time

<b>[Chorus]</b>
If you could see that I'm the one who understands you
Been here all along, so why can't you see?
You belong with me, you belong with me

<b>[Verse 2]</b>
Walking the streets with you and your worn-out jeans
I can't help thinking this is how it ought to be
Laughing on a park bench, thinking to myself
Hey, isn't this easy?
And you've got a smile that could light up this whole town
I haven't seen it in a while since she brought you down
You say you're fine, I know you better than that
Hey, whatcha doing with a girl like that?
<b>[Pre-Chorus]</b>
She wears high heels, I wear sneakers
She's Cheer Captain and I'm on the bleachers
Dreaming about the day when you wake up and find
That what you're looking for has been here the whole time

<b>[Chorus]</b>
If you could see that I'm the one who understands you
Been here all along, so why can't you see?
You belong with me
Standing by and waiting at your back door
All this time how could you not know, baby?
You belong with me, you belong with me

<b>[Bridge]</b>
Oh, I remember you driving to my house
In the middle of the night
I'm the one who makes you laugh
When you know you're 'bout to cry
I know your favorite songs
And you tell me 'bout your dreams
Think I know where you belong
Think I know it's with me

<b>[Chorus]</b>
Can't you see that I'm the one who understands you?
Been here all along, so why can't you see?
You belong with me
Standing by and waiting at your back door
All this time how could you not know, baby?
You belong with me, you belong with me
<b>[Outro]</b>
You belong with me
Have you ever thought just maybe
You belong with me?
You belong with me
`
