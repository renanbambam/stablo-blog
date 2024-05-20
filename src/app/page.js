"use client"

import React from 'react';
import Image from "next/image";


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
                <a>Como funciona</a>
              </li>
              <li data-v-5be5b9a0="">
                <a
                  data-v-5be5b9a0=""
                  href="https://www.patreon.com/vocalremover"
                  target="_blank"
                >
                  Doar
                </a>
              </li>
            </menu>
          </div>
          <h1>Isolar instrumentos de uma música</h1>
          <h3>Divida a música em partes separadas com algoritmos AI-Powered</h3>

          <img
            style={{minHeight: 100 + "%"}}
            alt="Removedor Vocal e Isolamento"
            src="https://vocalremover.org/img/remover/player_en.png"
          />
          <input
            style={{ display: 'none' }}
            ref={fileInputRef}
            id="fileInput"
            type="file"
            accept=".wav,.mp3,.aac,.ogg,.wma,.flac,.alac,.aiff,audio/*"
          />
          <button className="upload" onClick={onButtonClick}>Selecionar arquivo</button>
        </div>
        <div className="page info">
          <h2>Separador de música alimentado por IA</h2>
          <p>
            Este aplicativo permite separar a música em fluxos individuais, como
            vocal, baixo, percussão, e permite reequilibrar seus volumes
            individuais. Esta é a maneira mais simples de obter multifaixas de
            qualquer música.
            <br />
            <br />
            Depois de escolher uma música, a inteligência artificial irá separar
            a música em hastes: vocais, baixo, bateria, outros. O processamento
            geralmente leva cerca de 1 minuto.
          </p>
        </div>
      </>
    );
}