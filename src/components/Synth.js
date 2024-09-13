import React, { useEffect, useState } from 'react';
import * as Tone from 'tone';

import synth from "./synth.css";

const Synth = () => {
    const [synth, setSynth] = useState(null);

    useEffect(() => {
        const newSynth = new Tone.Synth().toDestination();
        setSynth(newSynth);
    }, []);

    const playNote = (note) => {
        synth?.triggerAttackRelease(note, '8n');
    };

    return (
        <div class="piano-container">
            <div class="piano-container">
    <button class="key white" onClick={() => playNote('C4')} data-note="C">C4</button>
    <button class="key black" onClick={() => playNote('C#4')} data-note="C#">
        <span class="note-name">C#</span>
    </button>
    <button class="key white" onClick={() => playNote('D4')} data-note="D">D4</button>
    <button class="key black" onClick={() => playNote('D#4')} data-note="D#">
        <span class="note-name">D#</span>
    </button>
    <button class="key white" onClick={() => playNote('E4')} data-note="E">E4</button>
    <button class="key white" onClick={() => playNote('F4')} data-note="F">F4</button>
    <button class="key black" onClick={() => playNote('F#4')} data-note="F#">
        <span class="note-name">F#</span>
    </button>
    <button class="key white" onClick={() => playNote('G4')} data-note="G">G4</button>
    <button class="key black" onClick={() => playNote('G#4')} data-note="G#">
        <span class="note-name">G#</span>
    </button>
    <button class="key white" onClick={() => playNote('A4')} data-note="A">A4</button>
    <button class="key black" onClick={() => playNote('A#4')} data-note="A#">
        <span class="note-name">A#</span>
    </button>
    <button class="key white" onClick={() => playNote('B4')} data-note="B">B4</button>
    <button class="key white" onClick={() => playNote('C5')} data-note="C">C5</button>
    <button class="key black" onClick={() => playNote('C#5')} data-note="C#">
        <span class="note-name">C#</span>
    </button>
    <button class="key white" onClick={() => playNote('D5')} data-note="D">D5</button>
    <button class="key black" onClick={() => playNote('D#5')} data-note="D#">
        <span class="note-name">D#</span>
    </button>
    <button class="key white" onClick={() => playNote('E5')} data-note="E">E5</button>
</div>
        </div>

      

    );
};

export default Synth;