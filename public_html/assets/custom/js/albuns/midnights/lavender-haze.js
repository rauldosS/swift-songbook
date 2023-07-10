musicId = 'lavender-haze'
musicTitle = 'Lavender Haze'
tuning = 'Bb Major'
chordShape = null
capoFret = '3'
spotify = 'https://open.spotify.com/embed/track/5jQI2r1RdgtuT8S3iG8zFC?utm_source=generator'
chordsMusic = ['C', 'Am', 'D']
videoUrl = 'https://www.youtube.com/embed/JxM_bJP8G-s'
palmMute = true

// https://drive.google.com/file/d/11_H5JxJ_ZZDxE6QCcwehXQSD2278ErEF/view
// https://www.youtube.com/watch?v=JxM_bJP8G-s&ab_channel=TunezbyLucz

partsCipher = [
    { type: 'alert',                 id: 'palmMute' },

    { type: 'progression',           id: 'intro' },
    { type: 'cipherLyrics',          id: 'intro' },

    { type: 'progression',           id: 'verse' },
    { type: 'cipherLyrics',          id: 'firstVerse' },

    { type: 'progression',           id: 'firstPreChorus' },
    { type: 'cipherLyrics',          id: 'firstPreChorus' },

    { type: 'progression',           id: 'noChords' },
    { type: 'progression',           id: 'chorus' },
    { type: 'cipherLyrics',          id: 'chorus' },

    { type: 'progression',           id: 'instrumental' },
    { type: 'cipherLyrics',          id: 'instrumental' },

    { type: 'progression',           id: 'secondVerse' },
    { type: 'cipherLyrics',          id: 'secondVerse' },

    { type: 'progression',           id: 'secondPreChorus' },
    { type: 'cipherLyrics',          id: 'secondPreChorus' },

    { type: 'progression',           id: 'noChords' },
    { type: 'progression',           id: 'chorus' },
    { type: 'cipherLyrics',          id: 'chorus' },

    { type: 'progression',           id: 'instrumental' },
    { type: 'cipherLyrics',          id: 'instrumental' },

    { type: 'progression',           id: 'bridge' },
    { type: 'cipherLyrics',          id: 'bridge' },

    { type: 'progression',           id: 'noChords' },
    
    { type: 'progression',           id: 'lastChorus' },
    { type: 'cipherLyrics',          id: 'chorus' },

    { type: 'progression',           id: 'outro' },
    { type: 'cipherLyrics',          id: 'outro' },
]

progressions = [
    {
        id: 'intro',
        title: 'Intro',
        caption: '',
        progressionCaption: '',
        notes: ['C', 'D', 'Am²'],
        progression: 'D - - - D - - - D - - - D - - -',
        palmMute: true
    },
    {
        id: 'instrumental',
        title: 'Instrumental',
        caption: '',
        progressionCaption: '',
        notes: ['C', 'D', 'Am²'],
        progression: 'D - - - D - - - D - - - D - - -',
        palmMute: true
    },
    {
        id: 'firstPreChorus',
        title: 'Pre-Chorus',
        caption: '',
        progressionCaption: '',
        notes: ['C', 'D', 'Am²'],
        progression: 'D - - - D - - - D - - - D - - -',
        palmMute: true
    },
    {
        id: 'secondPreChorus',
        title: 'Pre-Chorus',
        caption: '',
        progressionCaption: '',
        notes: ['C', 'D', 'Am²'],
        progression: 'D - - - D - - - D - - - D - - -',
        palmMute: true
    },
    {
        id: 'bridge',
        title: 'Bridge',
        caption: '',
        progressionCaption: '',
        notes: ['C', 'D', 'Am²'],
        progression: 'D - - - D - - - D - - - D - - -',
        palmMute: true
    },
    {
        id: 'verse',
        title: 'Verse',
        caption: '',
        progressionCaption: '',
        notes: ['C', 'D', 'Am²'],
        progression: 'D - D - D - - U - U D - D - D U',
        palmMute: true
    },
    {
        id: 'secondVerse',
        title: 'Verse',
        caption: 'Just the first time',
        progressionCaption: '',
        notes: ['C', 'break', 'D', 'Am²'],
        progression: 'D - - - - - - - - - - - D - D U break D - D - D - - U - U D - D - D U',
        palmMute: true
    },
    {
        id: 'chorus',
        title: 'Chorus',
        caption: '',
        progressionCaption: '',
        notes: ['C', 'D', 'Am²'],
        progression: 'D - D - D - - U - U D - D - D U',
    },
    {
        id: 'noChords',
        title: 'No Chords',
        caption: 'Play blocking the strings',
        progressionCaption: '',
        notes: ['block'],
        progression: 'D U - U D - D U - U D - D U D U',
        blocking: true
    },
    {
        id: 'lastChorus',
        title: 'Chorus',
        caption: '',
        progressionCaption: '',
        notes: ['C', 'D', 'Am²'],
        progression: 'D - D - D - - U - U D - D - D U',
    },
    {
        id: 'outro',
        title: 'Outro',
        caption: '',
        progressionCaption: '',
        notes: ['C', 'D', 'Am²'],
        progression: 'D - - - D - - - D - - - D - - -',
        palmMute: true
    },
]

tabs = []

cipherParts = [
    {
        id: 'intro',
        title: 'Intro',
        ignoreTitle: false,
        referenceProgression: progressions.find(progression => progression.id === 'intro')
    },
    {
        id: 'firstVerse',
        title: 'Verse 1',
        ignoreTitle: false,
        referenceProgression: progressions.find(progression => progression.id === 'verse')
    },
    {
        id: 'firstPreChorus',
        title: 'Pre-Chorus',
        ignoreTitle: false,
        referenceProgression: progressions.find(progression => progression.id === 'firstPreChorus')
    },
    {
        id: 'chorus',
        title: 'Chorus',
        ignoreTitle: false,
        referenceProgression: progressions.find(progression => progression.id === 'chorus')
    },
    {
        id: 'instrumental',
        title: 'Instrumental',
        ignoreTitle: false,
        referenceProgression: progressions.find(progression => progression.id === 'instrumental')
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        ignoreTitle: false,
        referenceProgression: progressions.find(progression => progression.id === 'secondVerse')
    },
    {
        id: 'secondPreChorus',
        title: 'Pre-Chorus',
        ignoreTitle: false,
        referenceProgression: progressions.find(progression => progression.id === 'secondPreChorus')
    },
    {
        id: 'chorus',
        title: 'Chorus',
        ignoreTitle: false,
        referenceProgression: progressions.find(progression => progression.id === 'chorus')
    },
    {
        id: 'bridge',
        title: 'Bridge',
        ignoreTitle: false,
        referenceProgression: progressions.find(progression => progression.id === 'bridge')
    },
    {
        id: 'chorus',
        title: 'Chorus',
        ignoreTitle: false,
        referenceProgression: progressions.find(progression => progression.id === 'lastChorus')
    },
    {
        id: 'outro',
        title: 'Outro',
        ignoreTitle: false,
        referenceProgression: progressions.find(progression => progression.id === 'outro')
    },
]

cipherLyrics = `
C    D                 Am   Am 
        Meet me at midnight
${ divider }
C                               D
Staring at the ceiling with you
                           Am
Oh, you don't ever say too much
    C                         D
And you don't really read into
           Am
My melancholia
${ divider }
C                                    D
 I've been under scrutiny (Yeah, oh, yeah)
                                      Am
You handled it beautifully (Yeah, oh, yeah)
                                      <span class="badge badge-info-cipher rounded-pill"><i class="fa-solid fa-ban strum"></i> No Chords Strumming</span>
All this shit is new to me (Yeah, oh, yeah)
${ divider }
C
 I feel
    D
The lavender haze creepin' up on me
Am
  Surreal
 
I'm damned if I do give a damn what people say
C
 No deal
    D
The 1950s shit they want for me
Am
  I just wanna stay in that lavender haze
${ divider }
C D Am²
${ divider }
C                                      D
All they keep asking me (All they keep asking me)
                        Am
Is if I'm gonna be your bride
    C                                     D
The only kinda girl they see (Only kinda girl they see)
                    Am
Is a one-night or a wife
${ divider }
C                              D
 I find it dizzying (Yeah, oh, yeah)
                                          Am
They're bringin' up my history (Yeah, oh, yeah)
                                        <span class="badge badge-info-cipher rounded-pill"><i class="fa-solid fa-ban strum"></i> No Chords Strumming</span>
But you ain't even listening (Yeah, oh, yeah)
${ divider }
C
 I feel
    D
The lavender haze creepin' up on me
Am
  Surreal
 
I'm damned if I do give a damn what people say
C
 No deal
    D
The 1950s shit they want for me
Am
  I just wanna stay in that lavender haze
${ divider }
C
Talk your talk and go viral
D
I just need this love spiral
Am
Get it off your chest
Am
Get it off my desk (Off my desk)
C
Talk your talk and go viral
D
I just need this love spiral
Am
Get it off your chest
<span class="badge badge-info-cipher rounded-pill"><i class="fa-solid fa-ban strum"></i> No Chords Strumming</span>
Get it off my desk
${ divider }
C
 I feel  (I feel)
    D
The lavender haze creepin' up on me
Am
  Surreal
 
I'm damned if I do give a damn what people say
C
 No deal (No deal)
    D
The 1950s shit they want for me
Am                                    C         <span class="badge badge-info-cipher rounded-pill"><span class="text-white">C</span> <i class="fa-solid fa-arrow-right-long"></i> Start outro strumming</span>
  I just wanna stay in that lavender haze
${ divider }
Am
Get it off your chest
Am                 C
Get it off my desk
             D
The lavender haze
             Am
I just wanna stay
             Am                    C
I just wanna stay in that lavender haze
`

lyrics = `
<b>[Intro]</b>
Meet me at midnight

<b>[Verse 1]</b>
Staring at the ceiling with you
Oh, you don't ever say too much
And you don't really read into
My melancholia

<b>[Pre-Chorus]</b>
I been under scrutiny (Yeah, oh, yeah)
You handle it beautifully (Yeah, oh, yeah)
All this shit is new to me (Yeah, oh, yeah)

<b>[Chorus]</b>
I feel
The lavender haze creeping up on me
Surreal
I'm damned if I do give a damn what people say
No deal
The 1950s shit they want from me
I just wanna stay in that lavender haze

<b>[Verse 2]</b>
All they keep asking me (All they keep asking me)
Is if I'm gonna be your bride
The only kinda girl they see (Only kinda girl they see)
Is a one-night or a wife
<b>[Pre-Chorus]</b>
I find it dizzying (Yeah, oh, yeah)
They're bringing up my history (Yeah, oh, yeah)
But you weren't even listening (Yeah, oh, yeah)

<b>[Chorus]</b>
I feel
The lavender haze creepin' up on me
Surreal
I'm damned if I do give a damn what people say
No deal
The 1950s shit they want from me
I just wanna stay in that lavender haze

<b>[Post-Chorus]</b>
That lavender haze

<b>[Bridge]</b>
Talk your talk and go viral
I just need this love spiral
Get it off your chest
Get it off my desk (Get it off my desk)
Talk your talk and go viral
I just need this love spiral
Get it off your chest
Get it off my desk
<b>[Chorus]</b>
I feel (I feel)
The lavender haze creeping up on me
Surreal
I'm damned if I do give a damn what people say
No deal (No deal)
The 1950s shit they want from me
I just wanna stay in that lavender haze

<b>[Outro]</b>
Get it off your chest
Get it off my desk
That lavender haze
I just wanna stay
I just wanna stay in that lavender haze
`
