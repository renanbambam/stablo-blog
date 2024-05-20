"use client"

import React from 'react';

export default function Page() {

    const fileInputRef = React.useRef();

    const onButtonClick = () => {
        // aciona o clique no input do arquivo
        fileInputRef.current.click();
    };

    return (
        <div className="page centered">
            <div className="top-menu">
                <menu></menu>
            </div>
            <h1>Audio Joiner</h1>
            <h3>
                Join multiple audio tracks into one. Choose audio files you want to
                merge
            </h3>

            <input
                style={{ display: 'none' }}
                ref={fileInputRef}
                type="file"
                accept=".wav,.mp3,.aac,.ogg,.wma,.flac,.alac,.aiff,audio/*"
            />
            <button className="upload" onClick={onButtonClick}>Browse my files</button>
        </div>
    );
}
