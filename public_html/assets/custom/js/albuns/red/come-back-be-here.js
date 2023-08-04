const musicId = 'come-back-be-here'
const musicTitle = 'Come Back... Be Here'
const tuning = 'E'
const chordShape = null
const capoFret = '2'
const spotify = 'https://open.spotify.com/embed/track/4pNApnaUWAL2J4KO2eqokq?utm_source=generator'
const chordsMusic = ['D', 'A', 'Bm', 'G']
const videoUrl = 'https://www.youtube.com/embed/hHWOAUjnmjQ'
const basicCipher = true

const partsCipher = [
    { type: 'progression',      id: 'intro' },

    { type: 'progression',      id: 'main' },
    { type: 'cipherLyrics',     id: 'firstVerse' },

    { type: 'cipherLyrics',     id: 'preChorus' },

    { type: 'cipherLyrics',     id: 'chorus' },

    { type: 'cipherLyrics',     id: 'secondVerse' },

    { type: 'cipherLyrics',     id: 'bridge' },

    { type: 'cipherLyrics',     id: 'secondPreChorus' },

    { type: 'cipherLyrics',     id: 'secondChorus' },

    { type: 'cipherLyrics',     id: 'lastChorus' },
]

const progressions = [
    {
        id: 'intro',
        title: 'Intro',
        caption: '',
        notes: ['D', 'D'],
        progressionCaption: '',
        progression: 'D - - - D - U D U D U - D - D U'
    },
    {
        id: 'main',
        title: 'Main Progression',
        caption: '',
        notes: ['D', 'A', 'Bm', 'G'],
        progressionCaption: '',
        progression: 'D - - - D - D U D U D - D - D U'
    }
]

const tabs = []

const cipherParts = [
    {
        id: 'firstVerse',
        title: 'Verse 1',
        referenceProgression: progressions.find(progression => progression.id === 'intro')
    },
    {
        id: 'preChorus',
        title: 'Pre-chorus',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'chorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'bridge',
        title: 'Bridge',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'secondPreChorus',
        title: 'Pre-chorus',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'secondChorus',
        title: 'Last Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    },
    {
        id: 'lastChorus',
        title: 'Last Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'main')
    }
]

let cipherLyrics = `
    D
You said it in a simple way
A
4am the second day
    Bm                                G
How strange that I don't know you at all
 
   D
We stumble through the long goodbye
A
One last kiss then catch your flight
Bm                              G
Right when I was just about to fall
${ divider }
         A
I told myself don't get attached
          Bm
But in my mind I play it back
         G               A
Spinning faster than the plane that took you
${ divider }
D                                  A
  This is when the feeling sinks in
                                Bm
I don't wanna miss you like this
                  G
Come back, be here, come back, be here
D                                 A
  I guess you're in New York today
                               Bm
I don't wanna need you this way
                   G
Come back, be here, come back, be here
${ divider }
    D
The delicate beginning rush
    A
The feeling you can know so much
Bm                          G
Without knowing anything at all
    D
And now that I can put this down
   A
If I had known what I know now
  Bm                               G
I never would have played so nonchalant
${ divider }
     A
Taxi cabs and busy streets
           Bm
They never bring you back to me
        G                 A
I can't help but wish you took me with you
${ divider }
D                                  A
  This is when the feeling sinks in
                                Bm
I don't wanna miss you like this
                  G
Come back, be here, come back, be here
D                               A
  I guess you're in London today
                                   Bm
And I don't wanna need you this way
                  G
Come back, be here, come back, be here

D      A  Bm     G
Aaaahhh   Aaaahhh 
${ divider }
G                     Bm                    A
  This is falling in love in the cruelest way
G                      Bm              A
  This is falling for you when you are worlds away
Bm           A        G
  In New York, be here, but you're in
Bm      A                G                   A
  London and I break down cause it's not fair
                  D N.C.
That you're not around
${ divider }
                                 A*
This is when the feeling sinks in
                                 Bm*
I don't wanna miss you like this
                   G*
Come back, be here, come back, be here
D                                 A
  I guess you're in New York today
                               Bm
I don't wanna need you this way
                   G
Come back, be here, come back, be here

D       A
Ahh ohh, I don't want to miss you like this
Bm  G
Ahh ohh

D                  A  Bm              G
 Come back, be here,    come back, be here
`

const lyrics = `
<b>[Verse 1]</b>
You said it in a simple way
4 a.m., the second day
How strange that I don't know you at all
Stumbled through the long goodbye
One last kiss, then catch your flight
Right when I was just about to fall

<b>[Pre-Chorus]</b>
I told myself, "Don't get attached"
But in my mind, I play it back
Spinning faster than the plane that took you

<b>[Chorus]</b>
And this is when the feeling sinks in
I don't wanna miss you like this
Come back, be here
Come back, be here
I guess you're in New York today
I don't wanna need you this way
Come back, be here
Come back, be here

<b>[Verse 2]</b>
The delicate beginning rush
The feeling you can know so much
Without knowing anything at all
And now that I can put this down
If I had known what I know now
I never would've played so nonchalant
<b>[Pre-Chorus]</b>
Taxi cabs and busy streets
That never bring you back to me
I can't help but wish you took me with you

<b>[Chorus]</b>
And this is when the feeling sinks in
I don't wanna miss you like this
Come back, be here
Come back, be here
I guess you're in London today
And I don't wanna need you this way
Come back, be here
Come back, be here

<b>[Post-Chorus]</b>
Oh, oh
Oh, oh
Oh, oh

<b>[Bridge]</b>
This is falling in love in the cruelest way
This is falling for you when you are worlds away

<b>[Breakdown]</b>
In New York, be here
But you're in London, and I break down
'Cause it's not fair that you're not around
<b>[Chorus]</b>
This is when the feeling sinks in
I don't wanna miss you like this
Come back, be here
Come back, be here
I guess you're in New York today
And I don't wanna need you this way
Come back, be here
Come back, be here

<b>[Post-Chorus]</b>
Oh, oh, I don't wanna miss you like this
Oh, oh

<b>[Outro]</b>
Come back, be here
Come back, be here
`
