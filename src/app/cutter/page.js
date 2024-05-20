"use client"

import React from 'react';

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
            <li data-v-da06829f="">
              <a data-v-da06829f="" href="/joiner" className="">
                Joiner
              </a>
            </li>
          </menu>
        </div>
        <h1>Audio Cutter</h1>
        <h3>Free editor to trim and cut any audio file online</h3>

        <input
          style={{ display: 'none' }}
          ref={fileInputRef}
          type="file"
          accept=".wav,.mp3,.aac,.ogg,.wma,.flac,.alac,.aiff,audio/*"
        />
        <button className="upload" onClick={onButtonClick}>Browse my files</button>
      </div>
      <div className="page info">
        <h2>How to cut audio</h2>
        <p>
          This app can be used to trim and/or cut audio tracks, remove an audio
          fragments. Fade in and fade out your music easily to make the audio
          harmoniously.
          <br />
          <br />
          It fast and easy to use. You can save the audio file in any format
          (codec parameters are configured)
          <br />
          <br />
          It works directly in the browser, no needs to install any software, is
          available for mobile devices.
        </p>
        <h4>
          <svg
            aria-hidden="true"
            width="1em"
            height="1em"
            fill="currentColor"
            stroke="currentColor"
          >
          </svg>
          Privacy and Security Guaranteed
        </h4>
        <p>This is serverless app. Your files does not leave your device</p>
      </div>
    </>
  );
}
