"use client"
import React, { useState } from 'react';
import AudioRecorder from '../../components/audio';

export default function Page() {
    const [audioSrc, setAudioSrc] = useState('');

    const handleAudioUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setAudioSrc(URL.createObjectURL(file));
        }
    };
    return (
        <>
            <div className="page centered">
                <main className="pages">

                    <AudioRecorder />
                    <div className="page info">
                        <h2>Audio Recorder &amp; Editor</h2>
                        <p>This is a free online audio recorder app which records sound from microphone. It is available for mobile devices.</p>
                        <h4>
                            <svg aria-hidden="true" width="1em" height="1em" fill="currentColor" stroke="currentColor"></svg> Stereo
                        </h4>
                        <p>Stereo microphone gives a real stereo. Mono microphones can give mono or pseudo-stereo.</p>
                        <h4>
                            <svg aria-hidden="true" width="1em" height="1em" fill="currentColor" stroke="currentColor"></svg> Sound Effects &amp; Editor
                        </h4>
                        <p>After recording is done you can edit audio track - trim any fragment, adjust equalizer and sound reverb</p>
                        <h4>
                            <svg aria-hidden="true" width="1em" height="1em" fill="currentColor" stroke="currentColor"></svg>Privacy and Security Guaranteed
                        </h4>
                        <p>This is serverless app. Your files does not leave your device</p>
                    </div>
                </main>
            </div>
        </>
    );
}
