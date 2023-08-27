const musicId = 'shake-it-off'
const albumId = '1989'
const musicTitle = 'Shake It Off'
const tuning = 'G'
const chordShape = ''
const capoFret = ''
const spotify = 'https://open.spotify.com/embed/track/0cqRj7pUJDkTCEsJkx8snD?utm_source=generator'
const chordsMusic = ['Am', 'C', 'G']
const videoUrl = 'https://www.youtube.com/embed/aYWW8gkp58k'
const basicCipher = false

// https://drive.google.com/file/d/1inOMJWh99M8Gk7z1ZZGAMtLoJbftyEC9/view

const partsCipher = [
    { type: 'alert',            id: 'palmMute' },

    { type: 'progression',      id: 'intro' },
    { type: 'cipherLyrics',     id: 'intro' },

    { type: 'progression',      id: 'firstVerse' },
    { type: 'cipherLyrics',     id: 'firstVerse' },

    { type: 'progression',      id: 'firstPreChorus' },
    { type: 'cipherLyrics',     id: 'firstPreChorus' },

    { type: 'progression',      id: 'firstChorus' },
    { type: 'cipherLyrics',     id: 'firstChorus' },

    { type: 'progression',      id: 'secondVerse' },
    { type: 'cipherLyrics',     id: 'secondVerse' },

    { type: 'progression',      id: 'secondPreChorus' },
    { type: 'cipherLyrics',     id: 'secondPreChorus' },

    { type: 'progression',      id: 'secondChorus' },
    { type: 'cipherLyrics',     id: 'secondChorus' },

    { type: 'progression',      id: 'postChorus' },
    { type: 'cipherLyrics',     id: 'postChorus' },

    { type: 'progression',      id: 'interlude' },
    { type: 'cipherLyrics',     id: 'interlude' },

    { type: 'progression',      id: 'bridge' },
    { type: 'cipherLyrics',     id: 'bridge' },

    { type: 'progression',      id: 'lastChorus' },
    { type: 'cipherLyrics',     id: 'lastChorus' },

    { type: 'progression',      id: 'lastPostChorus' },
    { type: 'cipherLyrics',     id: 'lastPostChorus' },

    { type: 'progression',      id: 'outro' },
    { type: 'cipherLyrics',     id: 'outro' },
]

const progressions = [
    {
        id: 'intro',
        title: 'Intro',
        caption: '',
        notes: ['N.C.', 'N.C.'],
        progression: 'D - D - D U D U - U D - D U D U'
    },
    {
        id: 'firstVerse',
        title: 'Verse 1',
        caption: '',
        notes: ['Am', 'C', 'G', 'G', 'x2'],
        progression: 'D - D - D U D U - U D - D U D U',
        palmMute: true
    },
    {
        id: 'firstPreChorus',
        title: 'Pre-Chorus 1',
        caption: '',
        notes: ['Am', 'C', 'G', 'G'],
        progression: 'D - D - D U D U - U D - D U D U',
        palmMute: true
    },
    {
        id: 'firstChorus',
        title: 'Chorus 1',
        caption: '',
        notes: ['Am', 'C', 'G', 'G', 'x2'],
        progression: 'D - D - D U D U - U D - D U D U',
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        caption: '',
        notes: ['Am', 'C', 'G', 'G', 'x2'],
        progression: 'D - D - D U D U - U D - D U D U',
        palmMute: true
    },
    {
        id: 'secondPreChorus',
        title: 'Pre-Chorus 2',
        caption: '',
        notes: ['Am', 'C', 'G', 'break', 'G'],
        progression: 'D - D - D U D U - U D - D U D U break D - - - - - - - - D - D - U D U',
        palmMute: true
    },
    {
        id: 'secondChorus',
        title: 'Chorus 2',
        caption: '',
        notes: ['Am', 'C', 'G', 'G', 'x2'],
        progression: 'D - D - D U D U - U D - D U D U',
    },
    {
        id: 'postChorus',
        title: 'Post-Chorus 2',
        caption: '',
        notes: ['Am', 'C', 'G', 'G', 'x2'],
        progression: 'D - D - D U D U - U D - D U D U',
    },
    {
        id: 'interlude',
        title: 'Interlude',
        caption: '',
        notes: ['Am', 'C', 'G', 'G'],
        progression: 'D - D - D U D U - U D - D U D U',
    },
    {
        id: 'bridge',
        title: 'Bridge',
        caption: '',
        notes: ['N.C.', 'N.C.', 'N.C.', 'break', 'N.C.'],
        progression: 'D - D - D U D U - U D - D U D U break D - D - D U D U d-accented - - u-accented - - d-accented -',
    },
    {
        id: 'lastChorus',
        title: 'Chorus 3',
        caption: '',
        notes: ['Am', 'C', 'G', 'G', 'x2'],
        progression: 'D - D - D U D U - U D - D U D U',
    },
    {
        id: 'lastPostChorus',
        title: 'Post-Chorus 3',
        caption: '',
        notes: ['Am', 'C', 'G', 'G', 'x2'],
        progression: 'D - D - D U D U - U D - D U D U',
    },
    {
        id: 'outro',
        title: 'Outro',
        caption: '',
        notes: ['Am'],
        progression: 'D - - - - - - - - - - - - - - -',
    },
]

const tabs = []

const cipherParts = [
    {
        id: 'intro',
        title: 'Intro',
        referenceProgression: progressions.find(progression => progression.id === 'intro'),
        onlyCipherColumns: true
    },
    {
        id: 'firstVerse',
        title: 'Verse 1',
        referenceProgression: progressions.find(progression => progression.id === 'firstVerse')
    },
    {
        id: 'firstPreChorus',
        title: 'Pre-Chorus 1',
        referenceProgression: progressions.find(progression => progression.id === 'firstPreChorus')
    },
    {
        id: 'firstChorus',
        title: 'Chorus 1',
        referenceProgression: progressions.find(progression => progression.id === 'firstChorus')
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        referenceProgression: progressions.find(progression => progression.id === 'secondVerse')
    },
    {
        id: 'secondPreChorus',
        title: 'Pre-Chorus 2',
        referenceProgression: progressions.find(progression => progression.id === 'secondPreChorus')
    },
    {
        id: 'secondChorus',
        title: 'Chorus 2',
        referenceProgression: progressions.find(progression => progression.id === 'secondChorus')
    },
    {
        id: 'postChorus',
        title: 'Post-Chorus 2',
        referenceProgression: progressions.find(progression => progression.id === 'postChorus')
    },
    {
        id: 'interlude',
        title: 'Interlude',
        referenceProgression: progressions.find(progression => progression.id === 'interlude')
    },
    {
        id: 'Bridge',
        title: 'Bridge',
        referenceProgression: progressions.find(progression => progression.id === 'bridge')
    },
    {
        id: 'lastChorus',
        title: 'Chorus 3',
        referenceProgression: progressions.find(progression => progression.id === 'lastChorus')
    },
    {
        id: 'lastPostChorus',
        title: 'Post-Chorus 3',
        referenceProgression: progressions.find(progression => progression.id === 'lastPostChorus')
    },
    {
        id: 'outro',
        title: 'outro',
        referenceProgression: progressions.find(progression => progression.id === 'outro')
    }
]

let cipherLyrics = `
N.C. N.C.
${ divider }
               Am                        C
I stay out too late, got nothin' in my brain
                   G
That's what people say, mm-mm, that's what people say, mm-mm
                 Am                                    C
I go on too many dates (Haha), but I can't make them stay
                             G
At least, that's what people say, mm-mm, that's what people say, mm-mm
${ divider }
            Am                               C
But I keep cruisin', can't stop, won't stop movin'
                      G
It's like I got this music in my mind sayin' “It's gonna be alright”
${ divider }
            Am
'Cause the players gonna play, play, play, play, play
         C
And the haters gonna hate, hate, hate, hate, hate
       G
Baby, I'm just gonna shake, shake, shake, shake, shake, I shake it off, I shake it off
      Am
Heartbreakers gonna break, break, break, break, break
         C
And the fakers gonna fake, fake, fake, fake, fake
       G
Baby, I'm just gonna shake, shake, shake, shake, shake. I shake it off, I shake it off
${ divider }
                Am                        C
I never miss a beat, I'm lightnin' on my feet
                            G
And that's what they don't see, mm-mm, that's what they don't see, mm-mm
                  Am
I'm dancin' on my own (Dancin' on my own)
                         C
I make the moves up as I go (Moves up as I go)
                            G
And that's what they don't know, mm-mm, that's what they don't know, mm-mm
${ divider }
Am                               C
But I keep cruisin', can't stop, won't stop movin'
                      G
It's like I got this music in my mind sayin' “It's gonna be alright”
${ divider }
            Am
'Cause the players gonna play, play, play, play, play
         C
And the haters gonna hate, hate, hate, hate, hate
       G
Baby, I'm just gonna shake, shake, shake, shake, shake, I shake it off, I shake it off
      Am
Heartbreakers gonna break, break, break, break, break
         C
And the fakers gonna fake, fake, fake, fake, fake
       G
Baby, I'm just gonna shake, shake, shake, shake, shake. I shake it off, I shake it off
${ divider }
   Am                                     C
I shake it off, I shake it off, I, I, I shake it off, I shake it off
          G
I, I, I shake it off, I shake it off, I, I, I shake it off, I shake it off
${ divider }
Am                                   C
   Hey, hey, hey, just think, while you've been gettin' down and out about the liars
                       G
And the dirty, dirty cheats of the world, you could've been gettin' down

To this sick beat
${ divider }
<b>N.C. for whole bridge</b>
My ex-man brought his new girlfriend
            N.C.
She's like, “Oh my God”, but I'm just gonna shake
            N.C.
And to the fella over there with the hella good hair
            N.C.
Won't you come on over, baby? We can shake, shake, shake

Yeah, oh-oh, oh
${ divider }
            Am
'Cause the players gonna play, play, play, play, play
         C
And the haters gonna hate, hate, hate, hate, hate
       G
Baby, I'm just gonna shake, shake, shake, shake, shake, I shake it off, I shake it off
      Am
Heartbreakers gonna break, break, break, break, break
         C
And the fakers gonna fake, fake, fake, fake, fake
       G
Baby, I'm just gonna shake, shake, shake, shake, shake. I shake it off, I shake it off
${ divider }
   Am                                     C
I shake it off, I shake it off, I, I, I shake it off, I shake it off
          G
I, I, I shake it off, I shake it off, I, I, I shake it off, I shake it off
   Am                                     C
I shake it off, I shake it off, I, I, I shake it off, I shake it off
          G
I, I, I shake it off, I shake it off, I, I, I shake it off, I shake it off
${ divider }
Am
`

const lyrics = `
<b>[Verse 1]</b>
I stay out too late
Got nothin' in my brain
That's what people say, mm-mm
That's what people say, mm-mm
I go on too many dates (Haha)
But I can't make them stay
At least, that's what people say, mm-mm
That's what people say, mm-mm

<b>[Pre-Chorus]</b>
But I keep cruisin'
Can't stop, won't stop movin'
It's like I got this music in my mind
Sayin', "It's gonna be alright"

<b>[Chorus]</b>
'Cause the players gonna play, play, play, play, play
And the haters gonna hate, hate, hate, hate, hate
Baby, I'm just gonna shake, shake, shake, shake, shake
I shake it off, I shake it off
Heartbreakers gonna break, break, break, break, break
And the fakers gonna fake, fake, fake, fake, fake
Baby, I'm just gonna shake, shake, shake, shake, shake
I shake it off, I shake it off

<b>[Verse 2]</b>
I never miss a beat
I'm lightnin' on my feet
And that's what they don't see, mm-mm
That's what they don't see, mm-mm
I'm dancin' on my own (Dancin' on my own)
I make the moves up as I go (Moves up as I go)
And that's what they don't know, mm-mm
That's what they don't know, mm-mm

<b>[Pre-Chorus]</b>
But I keep cruisin'
Can't stop, won't stop groovin'
It's like I got this music in my mind
Sayin', "It's gonna be alright"

<b>[Chorus]</b>
'Cause the players gonna play, play, play, play, play
And the haters gonna hate, hate, hate, hate, hate
Baby, I'm just gonna shake, shake, shake, shake, shake
I shake it off, I shake it off
Heartbreakers gonna break, break, break, break, break
And the fakers gonna fake, fake, fake, fake, fake
Baby, I'm just gonna shake, shake, shake, shake, shake
I shake it off, I shake it off

<b>[Post-Chorus]</b>
I shake it off, I shake it off
I, I, I shake it off, I shake it off
I, I, I shake it off, I shake it off
I, I, I shake it off, I shake it off

<b>[Interlude]</b>
Hey, hey, hey
Just think, while you've been gettin' down and out about the liars
And the dirty, dirty cheats of the world
You could've been gettin' down
To this sick beat

<b>[Bridge]</b>
My ex-man brought his new girlfriend
She's like, "Oh my God," but I'm just gonna shake
And to the fella over there with the hella good hair
Won't you come on over, baby?
We can shake, shake, shake
Yeah, oh-oh, oh

<b>[Chorus]</b>
'Cause the players gonna play, play, play, play, play
And the haters gonna hate, hate, hate, hate, hate (Haters gonna hate)
Baby, I'm just gonna shake, shake, shake, shake, shake
I shake it off, I shake it off (Ha)
Heartbreakers gonna break, break, break, break, break (Mmm)
And the fakers gonna fake, fake, fake, fake, fake (They fake and fake and fake)
Baby, I'm just gonna shake, shake, shake, shake, shake
I shake it off, I shake it off (I, I)

<b>[Post-Chorus]</b>
I shake it off, I shake it off
I, I, I shake it off, I shake it off
I, I, I shake it off, I shake it off
I, I, I shake it off (Yeah), I shake it off
I shake it off, I shake it off
I, I, I shake it off, I shake it off (You got to)
I, I, I shake it off, I shake it off
I, I, I shake it off, I shake it off
`
