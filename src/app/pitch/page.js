"use client"

import React from 'react';
import { CiLock } from "react-icons/ci";

export default function Page() {

    const fileInputRef = React.useRef();

    const onButtonClick = () => {
        // aciona o clique no input do arquivo
        fileInputRef.current.click();
    };

    return (
        <>
            <div class="page centered">
                <div class="top-menu">
                    <menu>
                        <li><a>How it works</a></li>
                    </menu>
                </div>
                <h1>Audio Speed and Pitch Changer</h1>
                <h3>Changes pitch and tempo of the song by adjusting musical key and bpm sliders</h3>

                <input style={{ display: 'none' }}
                    ref={fileInputRef} hidden="" type="file" accept=".wav,.mp3,.aac,.ogg,.wma,.flac,.alac,.aiff,audio/*" />
                <button class="upload" onClick={onButtonClick}>Browse my files</button>
            </div>
            <div class="page info">
                <h2>Free Online Pitch Shifter</h2>
                <p>
                    This app changes the song pitch and/or playback speed using one of the best pitch shifting algorithms. The musical key, scale, and bpm will be automatically detected. <br />
                    <br />
                    You can easily transpose music to a different key and change the tempo by adjusting the pitch shifter key and bpm sliders.
                </p>
                <h4 data-v-5776c847="">Features</h4>
                <div data-v-5776c847="" class="p">
                    <ul>
                        <li>Analyzes music and finds musical key, scale and bpm</li>
                        <li>Changes audio pitch</li>
                        <li>Speed up or slow down music playback speed</li>
                    </ul>
                </div>
                <h4>
                    <CiLock aria-hidden="true" width="1em" height="1em" fill="currentColor" stroke="currentColor" />Privacy and Security Guaranteed
                </h4>
                <p>This is serverless app. Your files does not leave your device</p>

            </div>

        </>
    );
}
