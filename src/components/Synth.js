import React, { useEffect, useState } from 'react';
import * as Tone from 'tone';

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
        <div>
            <button onClick={() => playNote('C4')}>C4</button>
            <button onClick={() => playNote('D4')}>D4</button>
            <button onClick={() => playNote('E4')}>E4</button>
            <button onClick={() => playNote('F4')}>F4</button>
            <button onClick={() => playNote('G4')}>G4</button>
            <button onClick={() => playNote('A4')}>A4</button>
            <button onClick={() => playNote('B4')}>B4</button>
        </div>
    );
};

export default Synth;