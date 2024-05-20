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
            <h1>Recording Voice Over a Song</h1>
            <h3>
                Sing &amp; record, tune voice and save complete song. Choose karaoke
                track you want to sing with
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