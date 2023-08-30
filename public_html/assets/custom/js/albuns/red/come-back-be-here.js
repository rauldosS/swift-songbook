const musicId = 'come-back-be-here'
const musicTitle = 'Come Back... Be Here'
const tuning = 'F'
const chordShape = null
const capoFret = ''
const spotify = 'https://open.spotify.com/embed/track/4pNApnaUWAL2J4KO2eqokq?utm_source=generator'
const chordsMusic = ['E', 'B', 'C#m', 'A']
const videoUrl = 'https://www.youtube.com/embed/hHWOAUjnmjQ'
const basicCipher = false

const partsCipher = [
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

    { type: 'progression',      id: 'postChorus' },
    { type: 'cipherLyrics',     id: 'postChorus' },

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
        notes: ['E', 'E'],
        progressionCaption: '',
        progression: 'D - - - D - U D U D U - D - D U'
    },
    {
        id: 'firstVerse',
        title: 'Verse 1',
        caption: '',
        notes: ['E', 'B', 'C#m', 'A', 'x2'],
        progressionCaption: '',
        progression: 'D - - - D - D U D U D - D - D U'
    },
    {
        id: 'firstPreChorus',
        title: 'Pre-Chorus',
        caption: '',
        notes: ['B', 'C#m', 'A', 'break', 'B', 'No Chords'],
        progressionCaption: 'Play blocking the green strings',
        progression: 'D - - - D - D U D U D - D - D U break D - D - D - D - D - D - d-highlight u-highlight d-highlight u-highlight'
    },
    {
        id: 'firstChorus',
        title: 'Chorus',
        caption: '',
        notes: ['E', 'B', 'C#m', 'A'],
        progressionCaption: '',
        progression: 'D - - - D - D U D U D - D - D U'
    },
    {
        id: 'instrumental',
        title: 'Instrumental',
        caption: '',
        notes: ['E', 'E'],
        progressionCaption: '',
        progression: 'D - - - D - D U D U D - D - D U'
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        caption: '',
        notes: ['E', 'B', 'C#m', 'A', 'x2'],
        progressionCaption: '',
        progression: 'D - - - D - D U D U D - D - D U'
    },
    {
        id: 'secondPreChorus',
        title: 'Pre-Chorus',
        caption: '',
        notes: ['B', 'C#m', 'A', 'break', 'B', 'No Chords'],
        progressionCaption: 'Play blocking the green strings',
        progression: 'D - - - D - D U D U D - D - D U break D - D - D - D - D - D - d-highlight u-highlight d-highlight u-highlight'
    },
    {
        id: 'secondChorus',
        title: 'Chorus',
        caption: '',
        notes: ['E', 'B', 'C#m', 'A'],
        progressionCaption: '',
        progression: 'D - - - D - D U D U D - D - D U'
    },
    {
        id: 'postChorus',
        title: 'Post-Chorus',
        caption: '',
        notes: ['E', 'B', 'C#m', 'A'],
        progressionCaption: '',
        progression: 'D - - - D - D U D U D - D - D U'
    },
    {
        id: 'bridge',
        title: 'Gridge',
        caption: '',
        notes: ['C#m', 'B', 'x2', 'doubleBreak', 'C#m', 'B', 'break', 'A', 'doubleBreak', 'C#m', 'B', 'break', 'A',],
        progressionCaption: '',
        progression: 'D - - - D - D U D U D - D - D U break break D - D - D - D - d-highlight - D - D - D - break D - D - D - D - D - D - D - D - break break D - D - D - D - d-highlight - D - D - D - break D - D - D - D - D - D - D - D -'
    },
    {
        id: 'lastChorus',
        title: 'Chorus',
        caption: '',
        notes: ['E', 'B', 'C#m', 'A', 'x4'],
        progressionCaption: '',
        progression: 'D - - - D - D U D U D - D - D U'
    }
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
        title: 'Pre-chorus',
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
        title: 'Pre-chorus',
        referenceProgression: progressions.find(progression => progression.id === 'secondPreChorus')
    },
    {
        id: 'secondChorus',
        title: 'Last-Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'secondChorus')
    },
    {
        id: 'postChorus',
        title: 'Post-Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'postChorus')
    },
    {
        id: 'bridge',
        title: 'Bridge',
        referenceProgression: progressions.find(progression => progression.id === 'bridge')
    },
    {
        id: 'lastChorus',
        title: 'Last Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'lastChorus')
    }
]

let cipherLyrics = `
E
${ divider }
E
You said it in a simple way
B
4am the second day
    C#m                                 A
How strange that I don't know you at all

   E
We stumble through the long goodbye
B
One last kiss then catch your flight
C#m                                A
Right when I was just about to fall
${ divider }
         B
I told myself don't get attached
          C#m
But in my mind I play it back
         A               B                  
Spinning faster than the plane that took you
${ divider }
E                                 B
  This is when the feeling sinks in
                             C#m
I don't wanna miss you like this
                A                   E
Come back, be here, come back, be here
                                B
I guess you're in New York today
                             Bm
I don't wanna need you this way
                A            
Come back, be here, come back, be here
${ divider }
E E
${ divider }
The delicate beginning rush
    B
The feeling you can know so much
C#m                          A
Without knowing anything at all
    E
And now that I can put this down
   B
If I had known what I know now
  C#m                               A
I never would have played so nonchalance
${ divider }
     B
Taxi cabs and busy streets
           C#m
They never bring you back to me
        A                 B               E
I can't help but wish you took me with you
${ divider }
E                                 B
  This is when the feeling sinks in
                             C#m
I don't wanna miss you like this
                A                   E
Come back, be here, come back, be here
                              B
I guess you're in London today
                                 C#m
And I don't wanna need you this way
                A                  
Come back, be here, come back, be here
${ divider }
E
  Ah, ah, oh, oh
B  
  Ah, ah, oh, oh
C#m       A
  Ah, ah, oh, oh
${ divider }
C#m                                      B
This is falling in love in the cruelest way
C#m                                   B         C#m
This is falling for you when you are worlds away
         B        A                C#m
In New York, be here, but you're in
      B                A
London and I break down cause it's not fair
                 <span class="badge badge-info-cipher rounded-pill"><span class="text-white">E</span> <i class="fa-solid fa-arrow-right-long"></i> Start next strumming</span>
That you're not around
${ divider }
E                                 B
  This is when the feeling sinks in
                             C#m
I don't wanna miss you like this
                A                   E
Come back, be here, come back, be here
                                B
I guess you're in New York today
                             C#m
I don't wanna need you this way
                A                   E
Come back, be here, come back, be here
    B                                     C#m
Ahh ohh, I don't want to miss you like this
    A
Ahh ohh
E                A   C#m               A
 Come back, be here,  come back, be here
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
