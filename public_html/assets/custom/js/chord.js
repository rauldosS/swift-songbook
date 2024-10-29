$(document).ready(function () {
    $("#mini-player").load("public_html/templates/base/mini-player.html")
    $("#toolbar").load("public_html/templates/base/toolbar.html")
})

// CHORDS
/*
 * chord.js
 *
 * Copyright (C) 2012 Aaron Spike [aaron@ekips.org]
 *
 * Based On:
 * Chord Image Generator
 * http://einaregilsson.com/2009/07/23/chord-image-generator/
 *
 * Copyright (C) 2009-2012 Einar Egilsson [einar@einaregilsson.com]
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var ChordJS = (function(){
    
    //Constants
    var NO_FINGER = '-';
    var THUMB = 'T';
    var INDEX_FINGER = '1';
    var MIDDLE_FINGER = '2';
    var RING_FINGER = '3';
    var LITTLE_FINGER = '4';
    var OPEN = 0;
    var MUTED = -1;
    var FRET_COUNT = 5;
    var FONT_NAME = "Arial";
    
    var ChordBoxImage = function(name, chord, fingers, size, stringNames) {

        //Fields
        var _ctx;
        var Pen = function(color, size) {
            return function(){
                _ctx.strokeStyle = color;
                _ctx.lineWidth = size;
                _ctx.lineCap = 'round';
            };
        };
        var Font = function(fname, size) {
            return function(){
                _ctx.font = size+"px "+fname;
                _ctx.textBaseline = 'top';
            };
        };
        var _graphics = (function(){
            var DrawLine = function(pen, x1, y1, x2, y2) {
                _ctx.beginPath();
                pen();
                _ctx.moveTo(x1, y1);
                _ctx.lineTo(x2, y2);
                _ctx.stroke();
            };
            var FillRectangle = function(color, x1, y1, x2, y2){
                _ctx.beginPath();
                _ctx.fillStyle = color;
                _ctx.rect(x1, y1, x2, y2);
                _ctx.fill();
            };
            var DrawCircle = function(pen, x1, y1, diameter) {
                var radius = diameter/2;
                _ctx.beginPath();
                pen();
                _ctx.arc(x1+radius, y1+radius, radius, 0, 2 * Math.PI, false);
                _ctx.stroke();
            };
            var FillCircle = function(color, x1, y1, diameter) {
                var radius = diameter/2;
                _ctx.beginPath();
                _ctx.fillStyle = color;
                _ctx.arc(x1+radius, y1+radius, radius, 0, 2 * Math.PI, false);
                _ctx.fill();
            };
            var MeasureString = function(text, font) {
                font();
                var metrics = _ctx.measureText(text);
                metrics.Width = metrics.width;
                metrics.Height = _ctx.measureText('M').width; // calculating the with of the letter 'M' a good approximation of the line height
                return metrics;
            };
            var DrawString = function(text, font, color, x, y) {
                font();
                _ctx.fillStyle = color;
                _ctx.fillText(text, x, y);
            };
            return {
                DrawLine: DrawLine,
                FillRectangle: FillRectangle,
                DrawCircle: DrawCircle,
                FillCircle: FillCircle,
                MeasureString: MeasureString,
                DrawString: DrawString,
            };
        })();

        var _size;
        var _chordPositions = [];
        var _fingers = [NO_FINGER, NO_FINGER, NO_FINGER,
                                                 NO_FINGER, NO_FINGER, NO_FINGER];
        
        var _stringNames = stringNames || 'EADGBe';
        var _chordName;
        var _error;

        var _fretWidth;
        var _lineWidth;
        var _boxWidth;
        var _boxHeight;

        var _imageWidth;
        var _imageHeight;
        var _xstart; //upper corner of the chordbox
        var _ystart;
        var _nutHeight;

        var _dotWidth;
        var _signWidth;
        var _signRadius;

            //Different font sizes
        var _fretFontSize;
        var _fingerFontSize;
        var _nameFontSize;
        var _superScriptFontSize;
        var _markerWidth;

        var _foregroundBrush = '#000';
        var _backgroundBrush = '#FFF';

        var _baseFret;
        
        var InitializeSizes = function() {
            _fretWidth = 4 * _size;
            _nutHeight = _fretWidth / 2;
            _lineWidth = Math.ceil(_size * 0.31);
            _dotWidth = Math.ceil(0.9 * _fretWidth);
            _markerWidth = 0.7 * _fretWidth;
            _boxWidth = 5 * _fretWidth + 6 * _lineWidth;
            _boxHeight = FRET_COUNT * (_fretWidth + _lineWidth) + _lineWidth;

            //Find out font sizes
            //TODO: calculate perc via CSS
            //FontFamily family = new FontFamily(FONT_NAME);
            //perc = family.GetCellAscent(FontStyle.Regular) / family.GetLineSpacing(FontStyle.Regular);
            var perc = 0.8;
            _fretFontSize = _fretWidth / perc;
            _fingerFontSize = _fretWidth * 0.8;
            _guitarStringFontSize = 'bold ' + (_fretWidth * 0.8);
            _nameFontSize = _fretWidth * 2 / perc;
            _superScriptFontSize = 0.7 * _nameFontSize;
            if (_size == 1) {
                _nameFontSize += 2;
                _fingerFontSize += 2;
                _fretFontSize += 2;
                _superScriptFontSize += 2;
            }

            _xstart = _fretWidth;
            _ystart = Math.round(0.2 * _superScriptFontSize + _nameFontSize + _nutHeight + 1.7 * _markerWidth);

            _imageWidth = (_boxWidth + 5 * _fretWidth);
            _imageHeight = (_boxHeight + _ystart + _fretWidth + _fretWidth);

            _signWidth = (_fretWidth * 0.75);
            _signRadius = _signWidth / 2;
        };
        
        var getWidth = function(){return _imageWidth;};
        var getHeight = function(){return _imageHeight;};

        var ParseSize = function(size) {
            _size = parseFloat(size);
            if (isNaN(_size)) {
                _size = 1;
            }
        };

        var ParseFingers = function(fingers) {
            fingers = String(fingers).toUpperCase()+'------';
            fingers = fingers.replace(/[^\-T1234]/g,'');
            _fingers = fingers.substr(0,6).split('');
        };

        var ParseChord = function(chord) {
            if (chord == null || typeof chord == 'undefined' || !chord.match(/[\dxX]{6}|((1|2)?[\dxX]-){5}(1|2)?[\dxX]/)) {
                _error = true;
            } else {
                var parts;
                if (chord.length > 6) {
                    parts = chord.split('-');
                } else {
                    parts = chord.split('');
                }
                var maxFret = 0;
                var minFret = Number.MAX_VALUE;
                for (var i = 0; i < 6; i++) {
                    if (parts[i].toUpperCase() == "X") {
                        _chordPositions[i] = MUTED;
                    } else {
                        _chordPositions[i] = parseInt(parts[i]);
                        maxFret = Math.max(maxFret, _chordPositions[i]);
                        if (_chordPositions[i] != 0) {
                            minFret = Math.min(minFret, _chordPositions[i]);
                        }
                    }
                }
                if (maxFret <= 5) {
                    _baseFret = 1;
                } else {
                    _baseFret = minFret;
                }
            }
        };
        
        
        var CreateImage = function(ctx,layout) {
            _ctx = ctx;
            _graphics.FillRectangle(_backgroundBrush, 0, 0, _imageWidth, _imageHeight);
            if (_error) {
                //Draw red x
                var errorPen = Pen('red', 3);
                _graphics.DrawLine(errorPen, 0, 0, _imageWidth, _imageHeight);
                _graphics.DrawLine(errorPen, 0, _imageHeight, _imageWidth, 0);
            } else {
                if (typeof layout === 'undefined' || layout === '1') {
                    DrawChordBox();
                    DrawBars();
                    DrawChordPositionsAndFingers();
                    DrawChordName();
                    DrawStringNames();
                } else if (layout === '2') {
                    DrawChordBox();
                    DrawChordPositions();
                    DrawBars();
                    DrawChordName();
                    DrawFingers();
                }
            }
        };
        
        var DrawChordBox = function() {
            var pen = Pen(_foregroundBrush, _lineWidth);
            var totalFretWidth = _fretWidth + _lineWidth;

            for (var i = 0; i <= FRET_COUNT; i++) {
                var y = _ystart + i * totalFretWidth;
                _graphics.DrawLine(pen, _xstart, y, _xstart + _boxWidth - _lineWidth, y);
            }

            for (i = 0; i < 6; i++) {
                var x = _xstart + (i * totalFretWidth);
                _graphics.DrawLine(pen, x, _ystart, x, _ystart + _boxHeight - _lineWidth);
            }

            if (_baseFret == 1) {
                //Need to draw the nut
                var nutHeight = _fretWidth / 2;
                _graphics.FillRectangle(_foregroundBrush, _xstart - _lineWidth / 2, _ystart - nutHeight, _boxWidth, nutHeight);
            }
        };
        
        var DrawBars = function() {
            var bars = {};
            var bar;
            for (var i = 0; i < 5; i++) {
                if (_chordPositions[i] != MUTED && _chordPositions[i] != OPEN && _fingers[i] != NO_FINGER && !bars.hasOwnProperty(_fingers[i])) {
                    bar = { 'Str':i, 'Pos':_chordPositions[i], 'Length':0, 'Finger':_fingers[i] };
                    for (var j = i + 1; j < 6; j++) {
                        if (_fingers[j] == bar['Finger'] && _chordPositions[j] == _chordPositions[i]) {
                            bar['Length'] = j - i;
                        }
                    }
                    if (bar['Length'] > 0) {
                        bars[bar['Finger']] = bar;
                    }
                }
            }

            //TODO: figure out why there are two pens here
            var pen = Pen(_foregroundBrush, _lineWidth * 3);
            var totalFretWidth = _fretWidth + _lineWidth;
            for (var b in bars) {
                if (bars.hasOwnProperty(b)){
                    bar = bars[b];
                    var xstart = _xstart + bar['Str'] * totalFretWidth;
                    var xend = xstart + bar['Length'] * totalFretWidth;
                    var y = _ystart + (bar['Pos'] - _baseFret + 1) * totalFretWidth - (totalFretWidth / 2);
                    pen = Pen(_foregroundBrush, _dotWidth / 2);
                    _graphics.DrawLine(pen, xstart, y, xend, y);
                }
            }
        };

        
        var DrawChordPositions = function() {
            var yoffset = _ystart - _fretWidth;
            var xoffset = _lineWidth / 2;
            var totalFretWidth = _fretWidth + _lineWidth;
            var xfirstString = _xstart + 0.5 * _lineWidth;
            for (var i = 0; i < _chordPositions.length; i++) {
                var absolutePos = _chordPositions[i];
                var relativePos = absolutePos - _baseFret + 1;

                var xpos = _xstart - (0.5 * _fretWidth) + (0.5 * _lineWidth) + (i * totalFretWidth);
                if (relativePos > 0) {
                    var ypos = relativePos * totalFretWidth + yoffset;
                    _graphics.FillCircle(_foregroundBrush, xpos, ypos, _dotWidth);
                } else if (absolutePos == OPEN) {
                    var pen = Pen(_foregroundBrush, _lineWidth);
                    var ypos = _ystart - _fretWidth;
                    var markerXpos = xpos + ((_dotWidth - _markerWidth) / 2);
                    if (_baseFret == 1) {
                        ypos -= _nutHeight;
                    }
                    _graphics.DrawCircle(pen, markerXpos, ypos, _markerWidth);
                } else if (absolutePos == MUTED) {
                    var pen = Pen(_foregroundBrush, _lineWidth * 1.5);
                    var ypos = _ystart - _fretWidth;
                    var markerXpos = xpos + ((_dotWidth - _markerWidth) / 2);
                    if (_baseFret == 1) {
                        ypos -= _nutHeight;
                    }
                    _graphics.DrawLine(pen, markerXpos, ypos, markerXpos + _markerWidth, ypos + _markerWidth);
                    _graphics.DrawLine(pen, markerXpos, ypos + _markerWidth, markerXpos + _markerWidth, ypos);
                }
            }
        };
        
        
        var DrawChordPositionsAndFingers = function() {
            var yoffset = _ystart - _fretWidth;
            var xoffset = _lineWidth / 2;
            var totalFretWidth = _fretWidth + _lineWidth;
            var xfirstString = _xstart + 0.5 * _lineWidth;
            var font = Font(FONT_NAME, _fingerFontSize);
            for (var i = 0; i < _chordPositions.length; i++) {
                var absolutePos = _chordPositions[i];
                var relativePos = absolutePos - _baseFret + 1;

                var xpos = _xstart - (0.5 * _fretWidth) + (0.5 * _lineWidth) + (i * totalFretWidth);
                if (relativePos > 0) {
                    var ypos = relativePos * totalFretWidth + yoffset;
                    _graphics.FillCircle(_foregroundBrush, xpos, ypos, _dotWidth);
                    var finger = _fingers[i];
                    if (finger != NO_FINGER) {
                        var charSize = _graphics.MeasureString(finger.toString(), font);
                        _graphics.DrawString(finger.toString(), font, _backgroundBrush, xpos - (0.5 * charSize.Width) + _dotWidth/2, ypos - (0.5 * charSize.Height) + _dotWidth/2);
                    }
                } else if (absolutePos == OPEN) {
                    var pen = Pen(_foregroundBrush, _lineWidth);
                    var ypos = _ystart - _fretWidth;
                    var markerXpos = xpos + ((_dotWidth - _markerWidth) / 2);
                    if (_baseFret == 1) {
                        ypos -= _nutHeight;
                    }
                    _graphics.DrawCircle(pen, markerXpos, ypos, _markerWidth);
                    var finger = _fingers[i];
                    if (finger != NO_FINGER) {
                        var charSize = _graphics.MeasureString(finger.toString(), font);
                        _graphics.DrawString(finger.toString(), font, _backgroundBrush, xpos - (0.5 * charSize.Width) + _dotWidth/2, ypos - (0.5 * charSize.Height) + _dotWidth/2);
                    }
                } else if (absolutePos == MUTED) {
                    var pen = Pen(_foregroundBrush, _lineWidth * 1.5);
                    var ypos = _ystart - _fretWidth;
                    var markerXpos = xpos + ((_dotWidth - _markerWidth) / 2);
                    if (_baseFret == 1) {
                        ypos -= _nutHeight;
                    }
                    _graphics.DrawLine(pen, markerXpos, ypos, markerXpos + _markerWidth, ypos + _markerWidth);
                    _graphics.DrawLine(pen, markerXpos, ypos + _markerWidth, markerXpos + _markerWidth, ypos);
                    var finger = _fingers[i];
                    if (finger != NO_FINGER) {
                        var charSize = _graphics.MeasureString(finger.toString(), font);
                        _graphics.DrawString(finger.toString(), font, _backgroundBrush, xpos - (0.5 * charSize.Width) + _dotWidth/2, ypos - (0.5 * charSize.Height) + _dotWidth/2);
                    }
                }
            }
        };
        
        
        var DrawFingers = function() {
            var xpos = _xstart + (0.5 * _lineWidth);
            var ypos = _ystart + _boxHeight;
            var font = Font(FONT_NAME, _fingerFontSize);
            for (var f=0; f<_fingers.length; f++) {
                var finger = _fingers[f];
                if (finger != NO_FINGER) {
                    var charSize = _graphics.MeasureString(finger.toString(), font);
                    _graphics.DrawString(finger.toString(), font, _foregroundBrush, xpos - (0.5 * charSize.Width), ypos - (0.5 * charSize.Height) + _dotWidth/2);
                }
                xpos += (_fretWidth + _lineWidth);
            }
        }
        
        
        var DrawStringNames = function() {
            var xpos = _xstart + (0.5 * _lineWidth);
            var ypos = _ystart + _boxHeight;
            var font = Font(FONT_NAME, _guitarStringFontSize);
            for (var s=0; s<6; s++) {
                var guitarString = _stringNames[s];
                var charSize = _graphics.MeasureString(guitarString, font);
                _graphics.DrawString(guitarString, font, _foregroundBrush, xpos - (0.5 * charSize.Width), ypos);
                xpos += (_fretWidth + _lineWidth);
            }
        };

        var DrawChordName = function() {

            var nameFont = Font(FONT_NAME, _nameFontSize);
            var superFont = Font(FONT_NAME, _superScriptFontSize);
            var name;
            var supers;
            if (_chordName.indexOf('_') == -1) {
                name = _chordName;
                supers = "";
            } else {
                var parts = _chordName.split('_');
                name = parts[0];
                supers = parts[1];
            }
            var stringSize = _graphics.MeasureString(name, nameFont);

            var xTextStart = _xstart;
            if (stringSize.Width < _boxWidth) {
                xTextStart = _xstart + ((_boxWidth - stringSize.Width) / 2);
            }
            _graphics.DrawString(name, nameFont, _foregroundBrush, xTextStart, 0.2 * _superScriptFontSize);
            if (supers != "") {
                _graphics.DrawString(supers, superFont, _foregroundBrush, xTextStart + 0.8 * stringSize.Width, 0);
            }

            if (_baseFret > 1) {
                var fretFont = Font(FONT_NAME, _fretFontSize);
                var offset = (_fretFontSize - _fretWidth) / 2;
                _graphics.DrawString(_baseFret + "fr", fretFont, _foregroundBrush, _xstart + _boxWidth + 0.4 * _fretWidth, _ystart - offset);
            }
        };
        
        //MAIN
        if (name == null || typeof name == 'undefined') {
            _chordName = "";
        } else {
            _chordName = name.replace(" ", "");
        }
        ParseChord(chord);
        ParseFingers(fingers);
        ParseSize(size);
        InitializeSizes();
        
        return {
            getWidth: getWidth,
            getHeight: getHeight,
            Draw: CreateImage
        };

    };  
    
    function GenerateChordHtml(name, positions, fingering, size, layout, stringNames) {
        if (positions.length != 6 || fingering.length != 6) {
            console.error('ChordJS cannot generate a chord diagram from invalid chord input! (Too many positions or fingers.');
            console.log('ChordJS will render an empty chord instead!');
            positions = 'xxxxxx';
            fingering = '------';
        }
        var chordObj = ChordBoxImage(name, positions, fingering, size, stringNames);
        var canvas = document.createElement('canvas');
        canvas.setAttribute('class', 'rendered-chord');
        canvas.setAttribute('width', chordObj.getWidth());
        canvas.setAttribute('height', chordObj.getHeight());
        var ctx = canvas.getContext('2d');
        chordObj.Draw(ctx,layout);
        return canvas;
    }
    
    //requires jQuery
    //example: <chord name="A" positions="X02220" fingers="--222-" size="7" ></chord>
    var ReplaceChordElements = function(baseEl) {
          baseEl = baseEl || 'body';

          var renderedChords = document.querySelector(baseEl).getElementsByClassName('rendered-chord')
          for(var i=0, l=renderedChords.length; i<l; ++i) {
              var elt = renderedChords[0];
              elt.remove();
          }
          var chords = document.getElementsByTagName('chord');
          for(var i=0; i<chords.length; ++i) {
            var elt = chords[i]
            var name = elt.getAttribute('name');
            var positions = elt.getAttribute('positions');
            var fingers = elt.getAttribute('fingers');
            var size = elt.getAttribute('size');
            if (elt.getAttribute('layout') === null) {
				var layout = elt.setAttribute('layout', '1');
			} else {
				var layout = elt.getAttribute('layout');
			}
            var stringNames = elt.getAttribute('strings');
            var canvas = GenerateChordHtml(name, positions, fingers, size, layout, stringNames);
            elt.parentNode.insertBefore(canvas, elt);
        };
    };
      
    return {
        chord: ChordBoxImage,
        replace: ReplaceChordElements,
        generate: GenerateChordHtml
    };

})();

var chords = ChordJS;

// CIPHER GENERATOR
/*
 *
 *
*/

// let blocked = undefined
// let versions = undefined

let progressionsHtml = {}
let tabsHtml = {}
let cipherLyricsPartsHtml = {}
let cipherLyricsColumnsPartsHtml = {}

let completeCipher = []
let completeCipherColumns = []
let suggestedBy = null

const divider = '======================================================='

let cipher = undefined

const cipherWrapper = $('#cipher-wrapper')
const cipherContent = $('#cipher-content')
const toolbar = $('#toolbar')
const miniPlayer = $('#mini-player')

const chordsHtml = {
    C: `<chord name="C" positions="x32010" fingers="-32-1-" size="2" ></chord>`,
    'C/E': `<chord name="C/E" positions="032010" fingers="-32-1-" size="2" ></chord>`,
    Cadd9: `<chord name="Cadd9" positions="x32033" fingers="-21-34" size="2" ></chord>`,
    D: `<chord name="D" positions="xx0232" fingers="---132" size="2" ></chord>`,
    Dsus4: `<chord name="Dsus4" positions="xx0233" fingers="---133" size="2" ></chord>`,
    E: `<chord name="E" positions="022100" fingers="-231--" size="2" ></chord>`,
    Em: `<chord name="Em" positions="022000" fingers="-23---" size="2" ></chord>`,
    F: `<chord name="F" positions="133211" fingers="134211" size="2" ></chord>`,
    'F#m': `<chord name="F#m" positions="244322" fingers="134211" size="2" ></chord>`,
    Fsus2: `<chord name="Fsus2" positions="xx3011" fingers="--3-11" size="2" ></chord>`,
    Fmaj7: `<chord name="Fmaj7" positions="xx3210" fingers="--321-" size="2" ></chord>`,
    G: `<chord name="G" positions="320033" fingers="21--34" size="2" ></chord>`,
    Gsus4: `<chord name="Gsus4" positions="300010" fingers="3---1-" size="2" ></chord>`,
    Gadd11: `<chord name="Gadd11" positions="320010" fingers="32--1-" size="2" ></chord>`,
    'G/B': `<chord name="G/B" positions="x20003" fingers="-1---2" size="2" ></chord>`,
    A: `<chord name="A" positions="x02220" fingers="--123-" size="2" ></chord>`,
    Am: `<chord name="Am" positions="x02210" fingers="--231-" size="2" ></chord>`,
    Am7: `<chord name="Am7" positions="x02010" fingers="--2-1-" size="2" ></chord>`,
    Bm: `<chord name="Bm" positions="x24432" fingers="-13421" size="2" ></chord>`,
    B7: `<chord name="B7" positions="x21202" fingers="-213-4" size="2" ></chord>`,
}

const progressionsType = {
    simple: '1 + 2 + 3 + 4 +',
    complex: '1 a + e 2 a + e 3 a + e 4 a + e'
}

const alertsHtml = {
    'pt-BR': {
        palmMute: '<span id="palm-mute-alert" class="badge animate__animated animate__flash animate__delay-1s animate__repeat-2 bg-light mb-3"><b class="palm-mute">Ritmo em laranja</b> deve ser tocado com palm mute</span>',
        repeatIntro: `
            <div class="alert d-flex align-items-center mb-3" role="alert">
                <i class="bi bi-arrow-clockwis me-2"></i>
                <div>
                    Repeat Intro
                </div>
            </div>
        `
    },
    'en-US': {
        palmMute: '<span id="palm-mute-alert" class="badge animate__animated animate__flash animate__delay-1s animate__repeat-2 bg-light mb-3"><b class="palm-mute">Orange strum</b> should be played with palm mute</span>',
        repeatIntro: `
            <div class="alert d-flex align-items-center mb-3" role="alert">
                <i class="bi bi-arrow-clockwis me-2"></i>
                <div>
                    Repeat Intro
                </div>
            </div>
        `
    }
}

loadMusic = (music, album) => {
    btnHome.css({ 'display': 'inline-block' })
    // cipherWrapper.show()
    // const music = musics[music_id]
    // cipherContent.empty()

    // hideContent()
    resertToolbar()
    // cipherContent.hide()

    // createAlbumCSS(album)
    // createCipherJS(album, music)

    loadCipher(music, album)

    // cipherContent.show()

    scrollTop()

    toolbar.show()
    miniPlayer.show()

    toolbar.show()
    miniPlayer.show()

    if ($(window).width() < 768 && $('#sidebar').width() > 250) {
        $('#sidebar').toggleClass('toggled')
    }
}


loadCompactMusic = (music, album) => {
    btnHome.css({ 'display': 'inline-block' })
    // cipherWrapper.show()
    // const music = musics[music_id]
    // cipherContent.empty()

    // hideContent()
    resertToolbar()
    // cipherContent.hide()

    // createAlbumCSS(album)
    // createCipherJS(album, music)

    loadCompactCipher(music, album)

    // cipherContent.show()

    scrollTop()

    toolbar.show()
    miniPlayer.show()

    toolbar.show()
    miniPlayer.show()

    if ($(window).width() < 768 && $('#sidebar').width() > 250) {
        $('#sidebar').toggleClass('toggled')
    }
}

// hideContent = () => {
//     $('#content').hide()
// }

hideCipherWrapper = () => {
    cipherWrapper.hide()
    toolbar.hide()
    // cipherContent.hide()
    miniPlayer.hide()
}

createAlbumCSS = (album) => {
    cipherContent.prepend(`<link href="public_html/assets/custom/css/albuns/${ album }.css" rel="stylesheet">`)
}

createCipherJS = (album, music) => {
    cipherContent.prepend(`<script src="public_html/assets/custom/js/albuns/${ album }/${ music }.js"></script>`)
}

createCipherCapoHTML = () => {
    if (capoFret) {
        if (language.code === 'pt-BR') {
            return capoFret ? language.cipher.capo[0] + capoFret + language.cipher.capo[1] : ''
        } else {
            return `Capo: <b>${ capoFret }` + (capoFret > 3 ? 'th' : language.cipher.capo[capoFret]) + '</b> fret'
        }
    } else {
        return ''
    }
}

createCipherHeaderHTML = (album) => {
    const capo = createCipherCapoHTML()
    cipherContent.append(
        `<div id="cipher-header" class="animate__animated animate__fadeIn">
            ${ basicCipher ? '<span class="badge bg-' + album + ' mb-3">' + language.cipher.basicCipher + '</span>' : '' }
            <h1 class="title">${ musicTitle }</h1>
            <span class="cipher-tone">${ language.cipher.tuning }: <b>${ tuning }</b> ${ chordShape ? '(' + language.cipher.chordShape + ' ' + chordShape + ')' : '' }</span>
            <span class="song-capo">
                ${ capo }
            </span>
            <iframe style="border-radius:12px" src="${ spotify }" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    `)
}

createChordsHTML = () => {
    cipherContent.append(
        `<div id="chords" class="bd-callout bd-callout-info text-black-50 fw-normal position-relative">
            <div>
            </div>
            <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-album">
                Chords
            </span>
        </div>`
    )
    chordsMusic.filter((c) => !c.includes('²')).forEach(chord => {
        cipherContent.find('#chords div').append(chordsHtml[chord])
    })
    ChordJS.replace()
}

createArrowsProgression = (baseProgression, changeChord = null, palmMute = false, blocking = false) => {
    let chordChange = false
    let chordChangeColor = false
    return baseProgression.split(' ').map((progression, i, {length}) => {
        if (progression === 'D') {
            return `<i class="fa-solid fa-arrow-down-long 
                ${ palmMute ? 'palm-mute' : '' } 
                ${ blocking ? 'blocking' : '' } 
                ${ chordChangeColor ? 'chordChange' : '' }"
                ${ chordChange ? 'note=" ' + changeChord + ' "' : ''}
            ></i> `
        }
        if (progression === 'd-highlight') {
            return `<b class="highlight"><i class="fa-solid fa-arrow-down-long 
                ${ palmMute ? 'palm-mute' : '' } 
                ${ blocking ? 'blocking' : '' } 
                ${ chordChangeColor ? 'chordChange' : '' }"
                ${ chordChange ? 'note=" ' + changeChord + ' "' : ''}
            ></i></b> `
        }
        if (progression === 'd-accented') {
            return `<i class="fa-solid fa-arrow-down-long border-bottom pb-1 border-2 border-secondary
                ${ palmMute ? 'palm-mute' : '' } 
                ${ blocking ? 'blocking' : '' } 
                ${ chordChangeColor ? 'chordChange' : '' }"
                ${ chordChange ? 'note=" ' + changeChord + ' "' : ''}
            ></i> `
        }
        chordChange = false
        if (progression === 'U') return `<i class="fa-solid fa-arrow-up-long 
            ${ palmMute ? 'palm-mute' : '' } 
            ${ blocking ? 'blocking' : '' } 
            ${ chordChangeColor ? 'chordChange' : '' }"
            ${ chordChange ? 'note=" ' + changeChord + ' "' : ''}
        ></i> `
        if (progression === 'u-highlight') return `<b class="highlight"><i class="fa-solid fa-arrow-up-long 
            ${ palmMute ? 'palm-mute' : '' } 
            ${ blocking ? 'blocking' : '' } 
            ${ chordChangeColor ? 'chordChange' : '' }"
            ${ chordChange ? 'note=" ' + changeChord + ' "' : ''}
        ></i></b> `
        if (progression === 'u-accented') {
            return `<i class="fa-solid fa-arrow-up-long border-bottom pb-1 border-2 border-secondary
                ${ palmMute ? 'palm-mute' : '' } 
                ${ blocking ? 'blocking' : '' } 
                ${ chordChangeColor ? 'chordChange' : '' }"
                ${ chordChange ? 'note=" ' + changeChord + ' "' : ''}
            ></i> `
        }
        if (progression === 'X') return '<i class="fa-solid fa-x"></i> '
        if (progression === '-') return `<span class="strum">${ progression }</span> `
        if (progression === 'break') return `<br>`
        if (progression === 'block') return '<i class="fa-solid fa-ban strum"></i> '
        chordChange = progression === 'chordChange'
        chordChangeColor = progression === 'chordChange'
        return ''
    }).join('')
}

createNotes = (notes) => {
    let chordChange = false

    return notes.map((note) => {
        if (note === 'doubleBreak') return `<br><br>| `
        if (note === 'break') return `<br>| `
        if (note === 'block') return '<i class="fa-solid fa-ban strum"></i> |'
        if (note === '...') return `<b>...</b>`
        if (note.includes('x')) return `<b class="color-red">${ note }</b>`
        if (note.includes(',')) {
            return note.split(',').map((n, i, {length}) => {
                if (chordChange) return `<b class="chordChange">${ n }</b> ${ i + 1 === length ? ' | ' : '' } `
                if (n === ' chordChange') {
                    chordChange = true
                    return ''
                } else chordChange = false
                return `<b>${ n }</b> ${ i + 1 === length ? ' | ' : '' } `
            }).join('')
        }
        if (chordsMusic.includes(note)) return `<b>${ note }</b> | `
        return `${ note } | `
    }).join('')
}

getMultipleProgressionsTable = (notes, progressions, marginNotes) => {
    let notesHTML = ''
    let progressionsHTML = ''

    Array(notes.length).fill(0).map((_, i) => {
        notesHTML = notesHTML.concat(`<th class="color-album" scope="col">${ notes[i] }</th>`)
        progressionsHTML = progressionsHTML.concat(`<td>${ createArrowsProgression(progressions[i]) }</td>`)
    })

    return `<table class="table table-bordered progression-table ${ marginNotes ? '' : 'mb-0' }">
        <thead>
            <tr>
                <th class="bg-album text-white" scope="col">CHORD</th>
                ${ notesHTML }
            </tr>
        </thead>
        <tbody>
            <tr>
                <th class="bg-album text-white" scope="row">STRUM</th>
                ${ progressionsHTML }
            </tr>
        </tbody>
    </table>`   
}

createRepeats = (progression, repeats) => {
    const count = (progression.match(/break/g) || []).length + 1

    let blocks = ''
    for (let line = 1; line <= count; line++) {
        const repeat_line = repeats.find(obj => {
            return obj.data.start === line
        })

        if (repeat_line) {
            blocks += `<div class="repeatChord">${ repeat_line.repeat } ${ new Array(repeat_line.data.size).fill('<br>').join('') }</div>`
            line += repeat_line.data.size - 1
        } else {
            blocks += `<div class="">Tay</div>`
        }
    }

    return `<div class="row repeatsChord text-white" style="width: 44px; line-height: 1.5rem;">
        ${ blocks }
    </div>`
}

createProgressionHTML = () => {
    progressions.forEach(progression => {
        // const multipleProgression = progression.notesMultipleProgression !== undefined
        const notes = progression.notes !== undefined ? createNotes(progression.notes) : ''
        const multipleProgressionTable = progression.notesMultipleProgression !== undefined ? getMultipleProgressionsTable(
            progression.notesMultipleProgression,
            progression.multipleProgression,
            progression.notes !== undefined
        ) : ''

        const arrowProgression = progression.progression !== undefined ? createArrowsProgression(
            progression.progression,
            progression.chordChange !== undefined ? progression.chordChange : null,
            progression.palmMute !== undefined,
            progression.blocking !== undefined
        ) : ''

        
        const repeat = progression.repeat !== undefined ? `<div class="repeatChord">
            ${ progression.repeat }
        </div>` : ''

        const repeats = progression.repeats !== undefined ? createRepeats(progression.progression, progression.repeats) : ''

        progressionsHtml[progression.id] = `
            <div id="progression-${ progression.id }" class="bd-callout bd-callout-info text-black-50 fw-normal position-relative progressions">
                ${ multipleProgressionTable }
                <div class="d-flex justify-content-between ps-1 pe-1">
                    <div>
                        <div>${ notes ? '|' : '' } ${ notes }</div>
                        <div>
                            <div class="">${ progression.caption }</div>
                        </div>
                    </div>
                    ${ repeats }
                    ${ repeat }
                    <div class="d-flex align-items-center text-start ms-auto">
                        <div class="fw-bold strumming">${ arrowProgression }</div>
                    </div>
                </div>
                <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-album">${ progression.title }</span>
            </div>
        `
    })
}

createTabsHTML = () => {
    tabs.forEach(data => {
        let callout = '<div class="bd-callout bd-callout-info fw-normal position-relative tabs">'

        data.tabs.forEach(tab => {
            callout = callout.concat(`<div class="tab">${ tab }</div>`)
        })

        callout = callout.concat(
            `<span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-album">${ data.title }</span>`,
            '</div>'
        )

        tabsHtml[data.id] = callout
    })
}

createCipherLyricsHTML = () => {
    const cipherLyricsList = cipherLyrics.split(divider)

    cipherParts.forEach((part, index) => {
        cipherLyricsColumnsPartsHtml[part.id] = part.ignoreTitle !== undefined ? `${ cipherLyricsList[index] }` : `
<a
    onclick="scrollToElement('#progression-${ part.referenceProgression.id }')"
    data-toggle="tooltip"
    data-bs-placement="right"
    data-bs-html="true"
    title="Progression <i class='fa-solid fa-arrow-right-long ms-2 me-2'></i> ${ part.referenceProgression.title }"
    class="title-part-cipher"
>[${ part.title }]</a>
            ${ cipherLyricsList[index] }`

        if (part.onlyCipherColumns) return

        cipherLyricsPartsHtml[part.id] = part.ignoreTitle !== undefined ? `<pre type="lyrics">
            ${ cipherLyricsList[index] }
            </pre>` : `<pre type="lyrics">
<a
    onclick="scrollToElement('#progression-${ part.referenceProgression.id }')"
    data-toggle="tooltip"
    data-bs-placement="right"
    data-bs-html="true"
    title="Progression <i class='fa-solid fa-arrow-right-long ms-2 me-2'></i> ${ part.referenceProgression.title }"
    class="title-part-cipher"
>[${ part.title }]</a>
            ${ cipherLyricsList[index] }
            </pre>`
    })
}

function replaceWholeChordsInLines() {
    const replacements_chords = chordsMusic.map(chord => {
        return { searchValue: chord, replaceValue: `<b>${ chord }</b>` }
    }).reverse()

    for (const replacement of replacements_chords) {
      const { searchValue, replaceValue } = replacement
      const regex = new RegExp(`\\b${searchValue}\\b`, 'g')
      cipherLyrics = cipherLyrics.replaceAll(regex, replaceValue)
    }

    return cipherLyrics
}

createChordColumns = () => {
    cipherContent.append(`<div id="cipher-columns" class="mt-3">
        <pre type="lyrics"></pre>
    </div>`)

    const cipherColumnsPre = $('#cipher-columns pre')

    completeCipherColumns.forEach(part => {
        cipherColumnsPre.append(`<div class="border-column pb-2 pt-2">${ part }</div>`)
    })
}

createLyrics = () => {
    cipherContent.append(`
        <div id="lyrics" class="mt-3">
            <pre type="only-lyrics">${ lyrics }</pre>
        </div>
    `)
}

updateShareLink = () => {
    $('#share-cipher').attr('data-clipboard-text', `https://taylorsongbook.com/song/${musicId}`)
}

loadCipher = (music, album) => {
    setLoading(true)
    createCipherHeaderHTML(album)
    createChordsHTML()

    createProgressionHTML()
    createTabsHTML()

    replaceWholeChordsInLines()

    createCipherLyricsHTML()

    partsCipher.forEach(part => {
        switch (part.type) {
            case 'progression':
                completeCipher.push(progressionsHtml[part.id])
                break
            case 'tabs':
                completeCipher.push(tabsHtml[part.id])
                break
            case 'cipherLyrics':
                completeCipher.push(cipherLyricsPartsHtml[part.id])
                completeCipherColumns.push(cipherLyricsColumnsPartsHtml[part.id])
                break
            case 'alert':
                completeCipher.push(alertsHtml[language.code][part.id])
                break
        }
    })

    cipherContent.append(`<div id="cipher"></div>`)
    cipher = $('#cipher')

    completeCipher.forEach(part => {
        cipher.append(part)
    })

    createChordColumns()
    createLyrics()
    updateShareLink()

    if (suggestedBy) {
        cipherContent.append('<div class="line"></div>')
        cipherContent.append(`<b>Suggested by: </b> ${ suggestedBy }`)
    }

    $('[data-toggle=tooltip]').tooltip({
        trigger : 'hover'
    })

    $('#mini-player iframe').attr('src', videoUrl)

    setLoading(false, 2500)
}

loadCompactCipher = () => {
    setLoading(true)

    createChordsHTML()
    createChordColumns()
    createLyrics()
    updateShareLink()

    $('[data-toggle=tooltip]').tooltip({
        trigger : 'hover'
    })

    $('#mini-player iframe').attr('src', videoUrl)

    setLoading(false, 2500)
}