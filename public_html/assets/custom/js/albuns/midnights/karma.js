musicId = 'karma'
musicTitle = 'Karma'
tuning = 'G#/Ab Major'
chordShape = null
capoFret = '1'
spotify = 'https://open.spotify.com/embed/track/7KokYm8cMIXCsGVmUvKtqf?utm_source=generator'
chordsMusic = ['C', 'G', 'D', 'Bm', 'F#m', 'A']
videoUrl = 'https://www.youtube.com/embed/K6hwfI1J1dg'
palmMute = true

// https://www.youtube.com/watch?v=K6hwfI1J1dg&ab_channel=TunezbyLucz
// https://drive.google.com/file/d/1EjA6xIeeES1BCYpihfd5ZMk6Y5YoQIrx/view

partsCipher = [
    { type: 'progression',           id: 'firstVerse' },
    { type: 'cipherLyrics',          id: 'firstVerse' },
    { type: 'cipherLyrics',          id: 'preChorus' },

    { type: 'progression',           id: 'chorus' },
    { type: 'cipherLyrics',          id: 'chorus' },

    { type: 'progression',           id: 'secondVerse' },
    { type: 'cipherLyrics',          id: 'secondVerse' },
    { type: 'cipherLyrics',          id: 'secondPreChorus' },

    { type: 'progression',           id: 'chorus' },
    { type: 'cipherLyrics',          id: 'chorus' },
    
    { type: 'progression',           id: 'bridge' },
    { type: 'cipherLyrics',          id: 'bridge' },

    { type: 'progression',           id: 'postBridge' },
    { type: 'cipherLyrics',          id: 'postBridge' },

    { type: 'progression',           id: 'chorus' },
    { type: 'cipherLyrics',          id: 'chorus' },

    { type: 'progression',           id: 'outro' },
    { type: 'cipherLyrics',          id: 'outro' },
]

progressions = [
    {
        id: 'firstVerse',
        title: 'Verse | Pre-Chorus',
        caption: '',
        notes: ['D', 'C²', 'G'],
        progression: 'D - D - D - - U D U D - D - D U',
        palmMute: true
    },
    {
        id: 'chorus',
        title: 'Chorus',
        caption: '',
        notes: ['D', 'C²', 'G'],
        progression: 'D - D - D - - U D U D - D - D U'
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        caption: '',
        notes: ['D', 'break', 'D', 'C²', 'D'],
        progression: 'D - - - - - - - - - - - - D - D U break D - D - D - - U D U D - D - D U',
        palmMute: true
    },
    {
        id: 'secondChorus',
        title: 'Chorus',
        caption: '',
        notes: ['D', 'C²', 'G'],
        progression: 'D - D - D - - U D U D - D - D U'
    },
    {
        id: 'bridge',
        title: 'Bridge',
        caption: '',
        progressionCaption: '',
        notes: ['Bm', 'G', 'F#m', 'A²'],
        progression: 'D - D - D - - U D U D - D - D U',
    },
    {
        id: 'postBridge',
        title: 'Post Bridge',
        caption: '',
        progressionCaption: '',
        notes: ['D', 'C²', 'G'],
        progression: 'D - - - - - - - - - - - - - - -',
    },
    {
        id: 'outro',
        title: 'Outro',
        caption: '',
        progressionCaption: '',
        notes: ['D', 'C²', 'G'],
        progression: 'D - - - - - - - - - - - - - - -',
    }
]

tabs = []

cipherParts = [
    {
        id: 'firstVerse',
        title: 'Verse',
        referenceProgression: progressions.find(progression => progression.id === 'firstVerse')
    },
    {
        id: 'preChorus',
        title: 'Pre-Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'firstVerse')
    },
    {
        id: 'chorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'chorus')
    },
    {
        id: 'secondVerse',
        title: 'Verse 2',
        referenceProgression: progressions.find(progression => progression.id === 'secondVerse')
    },
    {
        id: 'secondPreChorus',
        title: 'Pre-Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'secondVerse')
    },
    {
        id: 'secondChorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'secondChorus')
    },
    {
        id: 'bridge',
        title: 'Bridge',
        referenceProgression: progressions.find(progression => progression.id === 'bridge')
    },
    {
        id: 'postBridge',
        title: 'Post-Bridge',
        referenceProgression: progressions.find(progression => progression.id === 'postBridge')
    },
    {
        id: 'chorus',
        title: 'Chorus',
        referenceProgression: progressions.find(progression => progression.id === 'chorus')
    },
    {
        id: 'outro',
        title: 'Outro',
        referenceProgression: progressions.find(progression => progression.id === 'outro')
    }
]

cipherLyrics = `
D
You're talking shit for the hell of it
C
Addicted to betrayal, but you're relevant
C                        G
You're terrified to look down
D
'Cause if you dare, you'll see the glare
C
Of everyone you burned just to get there
C                   G
It's coming back around
${ divider }
D                        C
And I keep my side of the street clean
C                        G
You wouldn't know what I mean
${ divider }
D                                         C
'Cause karma is my boyfriend,  Karma is a god
                                       C
Karma is the breeze in my hair on the weekend
                   G
Karma's a relaxing thought
                                     D
Aren't you envious that for you it's not?
                             C
Sweet like honey, karma is a cat
                                    C
Purring in my lap 'cause it loves me
                             G
Flexing like a goddamn acrobat
 
Me and karma vibe like that
${ divider }
D
Spider boy, king of thieves
C
Weave your little webs of opacity
C                    G
My pennies made your crown
D
Trick me once, trick me twice
C
Don't you know that cash ain't the only price?
C                   G
It's coming back around
${ divider }
D                        C
And I keep my side of the street clean
C                        G
You wouldn't know what I mean
${ divider }
D                                         C
'Cause karma is my boyfriend,  Karma is a god
                                       C
Karma is the breeze in my hair on the weekend
                   G
Karma's a relaxing thought
                                     D
Aren't you envious that for you it's not?
                             C
Sweet like honey, karma is a cat
                                    C
Purring in my lap 'cause it loves me
                             G
Flexing like a goddamn acrobat
 
Me and karma vibe like that
${ divider }
Bm                                  G
Ask me what I learned from all those years
                                   F#m
Ask me what I earned from all those tears
                             A                  A
Ask me why so many fade, but I'm still here
(I'm still here, I'm still here)
${ divider }
D                                         C
'Cause karma is the thunder Rattling your ground
                                    C
Karma's on your scent like a bounty hunter
                       G
Karma's gonna track you down
                          D
Step by step, from town to town
                               C
Sweet like justice, karma is a queen
                                  C
Karma takes all my friends to the summit
                         G
Karma is the guy on the screen
 
Coming straight home to me
${ divider }
D                                         C
'Cause karma is my boyfriend,  Karma is a god
                                       C
Karma is the breeze in my hair on the weekend
                   G
Karma's a relaxing thought
                                     D
Aren't you envious that for you it's not?
                             C
Sweet like honey, karma is a cat
                                    C
Purring in my lap 'cause it loves me
                             G
Flexing like a goddamn acrobat
 
Me and karma vibe like that
${ divider }
D            C
Karma is my boyfriend
            C
Karma is a god (Ah)
G        D
Uh-huh, mm
C
Karma's a relaxing thought
`

lyrics = `
<b>[Verse 1]</b>
You're talking shit for the hell of it
Addicted to betrayal, but you're relevant
You're terrified to look down
'Cause if you dare, you'll see the glare
Of everyone you burned just to get there
It's coming back around

<b>[Pre-Chorus]</b>
And I keep my side of the street clean
You wouldn't know what I mean

<b>[Chorus]</b>
'Cause karma is my boyfriend
Karma is a god
Karma is the breeze in my hair on the weekend
Karma's a relaxing thought
Aren't you envious that for you it's not?
Sweet like honey, karma is a cat
Purring in my lap 'cause it loves me
Flexing like a goddamn acrobat
Me and karma vibe like that

<b>[Verse 2]</b>
Spiderboy, king of thieves
Weave your little webs of opacity
My pennies made your crown
Trick me once, trick me twice
Don't you know that cash ain't the only price?
It's coming back around

<b>[Pre-Chorus]</b>
And I keep my side of the street clean
You wouldn't know what I mean

<b>[Chorus]</b>
'Cause karma is my boyfriend
Karma is a god
Karma is the breeze in my hair on the weekend
Karma's a relaxing thought
Aren't you envious that for you it's not?
Sweet like honey, karma is a cat
Purring in my lap 'cause it loves me
Flexing like a goddamn acrobat
Me and karma vibe like that

<b>[Bridge]</b>
Ask me what I learned from all those years
Ask me what I earned from all those tears
Ask me why so many fade, but I'm still here
(I'm still here, I'm still here)

<b>[Breakdown]</b>
'Cause karma is the thunder
Rattling your ground
Karma's on your scent like a bounty hunter
Karma's gonna track you down
Step by step, from town to town
Sweet like justice, karma is a queen
Karma takes all my friends to the summit
Karma is the guy on the screen
Coming straight home to me

<b>[Chorus]</b>
'Cause karma is my boyfriend (Karma is my boyfriend)
Karma is a god
Karma is the breeze in my hair on the weekend (Weekend)
Karma's a relaxing thought
Aren't you envious that for you it's not?
Sweet like honey, karma is a cat
Purring in my lap 'cause it loves me
Flexing like a goddamn acrobat
Me and karma vibe like that

<b>[Outro]</b>
Karma is my boyfriend
Karma is a god (Ah)
Uh-huh, mm
Karma's a relaxing thought
`
