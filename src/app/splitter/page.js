"use client"

import React from 'react';

import Image from 'next/image'

export default function Page() {

    const fileInputRef = React.useRef();

    const onButtonClick = () => {
        // aciona o clique no input do arquivo
        fileInputRef.current.click();
    };


    return (
        <>
            <div className="page centered">
                <div className="top-menu">
                    <menu>
                        <li>
                            <a>How it works</a>
                        </li>
                        <li data-v-5be5b9a0="">
                            <a
                                data-v-5be5b9a0=""
                                href="https://www.patreon.com/vocalremover"
                                target="_blank"
                            >
                                Donate
                            </a>
                        </li>
                        <div data-v-5be5b9a0="" className="choose-model">
                            <select data-v-5be5b9a0="">
                                <option data-v-5be5b9a0="" value="2">
                                    default
                                </option>

                                <option data-v-5be5b9a0="" value="4">
                                    with guitar
                                </option>
                            </select>
                        </div>
                    </menu>
                </div>
                <h1>Splitter AI</h1>
                <h3>Split music into separated parts with AI-Powered algorithms</h3>
                <img
                    style={{ maxHeight: 100 + "%" }}
                    alt="Vocal Remover and Isolation"
                    src="https://vocalremover.org/img/splitter/player_en.png"
                />
                <input
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                    hidden=""
                    type="file"
                    accept=".wav,.mp3,.aac,.ogg,.wma,.flac,.alac,.aiff,audio/*"
                />
                <button className="upload" onClick={onButtonClick}>Browse my files</button>
            </div>
            <div className="page info">
                <h2>AI-Powered Music Separator</h2>
                <p>
                    This app allows to separate music into an individual streams such as
                    vocal, bass, percussion, and lets you rebalance their individual
                    volumes. This is the simplest way to get multitracks from any song.
                    <br />
                    <br />
                    Once you choose a song, artificial intelligence will separate music
                    into stems: vocals, bass, drums, others. Processing usually takes
                    about 1 minute.
                </p>
            </div>
        </>
    );
}
