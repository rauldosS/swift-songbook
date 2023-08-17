const musicId = 'speak-now'
const albumId = 'speak-now'
const musicTitle = 'Speak Now'
const tuning = 'G'
const chordShape = ''
const capoFret = ''
const spotify = 'https://open.spotify.com/embed/track/5xXqyjLicvEpch72qEryFT?utm_source=generatorhttps://open.spotify.com/embed/track/1qrpoAMXodY6895hGKoUpA?utm_source=generator'
const chordsMusic = ['G', 'D', 'Am', 'C', 'Em']
const videoUrl = 'https://www.youtube.com/embed/kDAwzXBlqcw'
const basicCipher = false

const partsCipher = [
    { type: 'progression',      id: 'intro' },

    { type: 'progression',      id: 'firstVerse' },
    { type: 'cipherLyrics',     id: 'firstVerse' },

    { type: 'progression',      id: 'firstPreChorus' },
    { type: 'cipherLyrics',     id: 'firstPreChorus' },

    { type: 'progression',      id: 'firstChorus' },
    { type: 'cipherLyrics',     id: 'firstChorus' },

    { type: 'progression',      id: 'firstInstrumental' },
    { type: 'tabs',             id: 'firstInstrumental' },

    { type: 'progression',      id: 'secondVerse' },
    { type: 'cipherLyrics',     id: 'secondVerse' },

    { type: 'progression',      id: 'secondPreChorus' },
    { type: 'cipherLyrics',     id: 'secondPreChorus' },

    { type: 'progression',      id: 'secondChorus' },
    { type: 'cipherLyrics',     id: 'secondChorus' },

    { type: 'progression',      id: 'solo' },
    { type: 'tabs',             id: 'solo' },

    { type: 'progression',      id: 'bridge' },

    { type: 'cipherLyrics',     id: 'firstBridge' },
    { type: 'tabs',             id: 'bridge' },
    { type: 'progression',      id: 'secondBridge' },
    { type: 'cipherLyrics',     id: 'secondBridge' },

    { type: 'progression',      id: 'thirdVerse' },
    { type: 'cipherLyrics',     id: 'thirdVerse' },

    { type: 'progression',      id: 'lastChorus' },
    { type: 'cipherLyrics',     id: 'lastChorus' },
]

const progressions = [
    {
        id: 'intro',
        title: 'Intro',
        caption: '',
        notes: ['G', 'G'],
        progression: 'D - X D - - X -',
    },
    {
        id: 'firstVerse',
        title: 'Verse 1',
        caption: '',
        notes: ['G', 'D', 'Am', 'C', 'break', 'G', 'D', 'Am', 'break', 'C', 'break', 'G', 'D', 'Am', 'C', 'x2'],
        progression: 'D - X D - - X - break break D - - - - X X - break D - X D - - X - ',
    },
    {
        id: 'firstPreChorus',
        title: 'Pre-Chorus',
        caption: '',
        notes: ['Am', 'C', 'G', 'D', 'break', 'Am', 'C', 'D', 'D'],
        progression: 'D - X D - - X -',
    },
    {
        id: 'firstChorus',
        title: 'Chorus',
        caption: '',
        notes: ['G', 'D', 'Am', 'C', 'x2'],
        progression: 'D - D U - U D U'
    },
    {
        id: 'firstInstrumental',
        title: 'Instrumental',
        caption: '',
        notes: ['G', 'D', 'Am', 'C'],
        progression: 'D - D U - U D U',
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        caption: '',
        notes: ['G', 'D', 'Am', 'C', 'x2'],
        progression: 'D - X D - - X -',
    },
    {
        id: 'secondPreChorus',
        title: 'Pre-Chorus',
        caption: '',
        notes: ['Am', 'C', 'G', 'D', 'break', 'Am', 'C', 'D', 'D'],
        progression: 'D - X D - - X -',
    },
    {
        id: 'secondChorus',
        title: 'Chorus',
        caption: '',
        notes: ['G', 'D', 'Am', 'C', 'break', 'G', 'D', 'Am', 'break', 'C', 'break', 'G', 'D', 'Am', 'C', 'x2'],
        progression: 'D - D U - U D U break break D - D U D - D - break D - D U - U D U'
    },
    {
        id: 'solo',
        title: 'Solo',
        caption: '',
        notes: ['G', 'D', 'Am', 'C', 'x2'],
        progression: 'D - D U - U D U'
    },
    {
        id: 'bridge',
        title: 'Bridge',
        caption: '',
        notes: ['Em', 'C', 'G', 'break', 'D', 'break', 'Am', 'C', 'G', 'break', 'D'],
        progression: 'D - - - - - - break D - - - - U D U break D - D U - U D U break D - - - - - -',
    },
    {
        id: 'thirdVerse',
        title: 'Verse 3',
        caption: '',
        notes: ['G', 'D', 'Am', 'C', 'break', 'G', 'D', 'Am', 'break', 'C'],
        progression: 'D - X D - - D U break D - X D - - D U break D D D D D - D -',
    },
    {
        id: 'lastChorus',
        title: 'Chorus',
        caption: '',
        notes: ['G', 'D', 'Am', 'C', 'break', 'G', 'D', 'Am', 'break', 'C', 'break', 'G', 'D', 'Am', 'C', 'break', 'G', 'D', 'Am', 'break', 'C', 'break', 'G'],
        progression: 'D - D U - U D U break break D - D U D - D - break D - D U - U D U break break D - D - D - D - break D - - - - - - -',
    }
]

const tabs = [
    {
        id: 'firstInstrumental',
        title: 'Instrumental',
        tabs: [
            `
E|---------------------------------------------|
B|---------------------------------------------|
G|---------------------------------------------|
D|---------7h9-7-----7-9-10--9-----------------|
A|-2-3--5-----------------------10\\5-2-3-2-3-2-|
E|---------------------------------------------|`
        ]
    },
    {
        id: 'bridge',
        title: 'bridge',
        tabs: [
            `
   Am            C             G             D
E|----X------X-|----X------X-|-3--X-3----X-|-2--------|
B|-1--X-1----X-|-1--X-1----X-|-3--X-3----X-|-3--------|
G|-2--X-2----X-|-0--X-0----X-|----X------X-|----------|
D|----X------X-|----X------X-|----X------X-|-0--------|
A|-0--X-0----X-|-3--X-3----X-|----X------X-|----------|
E|----X------X-|----X------X-|-3--X-3----X-|----------|`
        ]
    },
    {
        id: 'solo',
        title: 'Solo',
        tabs: [
`
E|------------------------------------------|
B|------------------------------------------|
G|----------------------------------5-4-----|
D|---------7h9-7-----7-9-10--9--5-------5---|
A|-2-3--5-------------------------5-------5-|
E|------------------------------------------|`, 
`
E|--------------------------------------------|
B|--------------------------------------------|
G|----------------------------------5-4-----5-|
D|---------7h9-7-----7-9-10--9--5-------5---5-|
A|-2-3--5-------------------------5-------5/7-|
E|--------------------------------------------|`
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
        referenceProgression: progressions.find(progression => progression.id === 'solo')
    },
    {
        id: 'firstBridge',
        title: 'Bridge',
        referenceProgression: progressions.find(progression => progression.id === 'bridge')
    },
    {
        id: 'secondBridge',
        title: 'Bridge',
        referenceProgression: progressions.find(progression => progression.id === 'bridge')
    },
    {
        id: 'thirdVerse',
        title: 'Verse 3',
        referenceProgression: progressions.find(progression => progression.id === 'thirdVerse')
    },
    {
        id: 'lastChorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'lastChorus')
    }
]

let cipherLyrics = `
G                    D
I am not the kind of girl
              Am
Who should be rudely barging in
     C           D
On a white veil occasion
    G                       D
But you are not the kind of boy
              Am                    C
Who should be marrying the wrong girl

G                       D
I sneak in and see your friends
        Am
And her snotty little family
    C            D
All dressed in pastel
    G                   D
And she is yelling at a bridesmaid
          Am
Somewhere back inside a room
          C     D
Wearing a gown shaped like a pastry
${ divider }
Am      C      G
Thi--is i---is surely not
                          D
What you thought it would be
Am   C                  D
E|---| i  lose myself in a daydream
D
Where I stand and say
${ divider }
G               D
Don't say "yes" run away now
Am
I'll meet you when you're out
       C         C             G
Of the church at the back door
              D
Don't wait or say a single vow
Am
You need to hear me out
         <span class="badge badge-info-cipher rounded-pill"><span class="text-white">C</span> <i class="fa-solid fa-arrow-right-long"></i> Tap down</span>
And they said "speak no-ow"
${ divider }
G                   D
Fond gestures are exchanged
        Am
And the organ starts to play a song
     C              D
That sounds like a death march
    G                     D
And I am hiding in the curtains
              Am
It seems that I was uninvited
        C.     C
By your lovely bride-to-be
${ divider }
  Am      C
She|---e floats down the aisle
       G            D
Like a pageant queen
    Am   C
But I--I kno--ow
    D
You wish it was me
    <span class="badge badge-info-cipher rounded-pill"><span class="text-white">D</span> <i class="fa-solid fa-arrow-right-long"></i> Tap down</span>  
You wish it was me, don't you?
${ divider }
G               D
Don't say "yes" run away now
Am
I'll meet you when you're out
       C              D   G
Of the church at the back door
              D
Don't wait or say a single vow
Am
You need to hear me out
         C
And they said "speak no-ow"
                D
Don't say "yes" run away now
Am
I'll meet you when you're out
       C             D    G
Of the church at the back door
              D
Don't wait or say a single vow
Am
Your time is running out
         C
And they said "speak no-ow"
${ divider }
  D    Am    C    G
Ohooho laaaahhoh
D                    Am       C
Oooh(Say you see me now)ooohooh
${ divider }
Am                      C
I hear the preacher say speak now
              G           D    D
Or forever ho-old yo-ur pe-e-e-eace
Am
There's the silence, there's my last chance
C
I stand up with shaky hands
    G       D
All eyes on me
${ divider }
Am                    C
Horrified looks from everyone in the room
    G                   D -once
But I'm only lookin' at you
${ divider }
G                    D
I am not the kind of girl
              Am
Who should be rudely barging in
     C     D
On a white veil occasion
    G                       D
But you are not the kind of boy
              Am                     C
Who should be marrying the wrong girl
${ divider }
 G                 D
So don't say "yes" run away now
Am
I'll meet you when you're out
       C             D      G
Of the church at the back door
              D
Don't wait or say a single vow
Am
You need to hear me out
  C                 G
They said "speak no-ow"
                  D
And you say "let's run away now
     Am
I'll meet you when I'm out
      C          D   G
Of my tux at the back door
        D
Baby, I didn't say my vows
   Am
So glad you were around
          C              G
When they said "speak no-ow"
`

const lyrics = `
<b>[Verse 1]</b>
I am not the kind of girl
Who should be rudely bargin' in on a white veil occasion
But you are not the kind of boy
Who should be marrying the wrong girl
I sneak in and see your friends
And her snotty little family all dressed in pastel
And she is yelling at a bridesmaid
Somewhere back inside a room
Wearin' a gown shaped like a pastry

<b>[Pre-Chorus]</b>
This is surely not what you thought it would be
I lose myself in a daydream
Where I stand and say

<b>[Chorus]</b>
Don't say yes, run away now
I'll meet you when you're out
Of the church, at the back door
Don't wait or say a single vow
You need to hear me out
And they said, "Speak now"

<b>[Verse 2]</b>
Fond gestures are exchanged
And the organ starts to play a song that sounds like a death march
And I am hiding in the curtains
It seems that I was uninvited by your lovely bride-to-be

<b>[Pre-Chorus]</b>
She floats down the aisle like a pageant queen
But I know you wish it was me
You wish it was me, don't you?

<b>[Chorus]</b>
Don't say yes, run away now
I'll meet you when you're out
Of the church, at the back door
Don't wait or say a single vow
You need to hear me out
And they said, "Speak now"
Don't say yes, run away now (Run away now)
I'll meet you when you're out
Of the church, at the back door
Don't wait or say a single vow (Say a single vow)
Your time is running out
And they said, "Speak now"

<b>[Post-Chorus]</b>
Ooh (Run away now), la
Ooh (Say a single vow), ooh

<b>[Bridge]</b>
I hear the preacher say
"Speak now or forever hold your peace"
There's the silence, there's my last chance
I stand up with shaky hands, all eyes on me
Horrified looks from everyone in the room
But I'm only lookin' at you

<b>[Verse 3]</b>
I am not the kind of girl
Who should be rudely bargin' in on a white veil occasion
But you are not the kind of boy
Who should be marrying the wrong girl, haha

<b>[Chorus]</b>
So, don't say yes, run away now
I'll meet you when you're out
Of the church, at the back door
Don't wait or say a single vow
You need to hear me out
They said, "Speak now"
And you say, "Let's run away now (Run away now)
I'll meet you when I'm out
Of my tux, at the back door
Baby, I didn't say my vows (Say a single vow)
So glad you were around
When they said, 'Speak now'"
`
