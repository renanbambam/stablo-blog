export default function Page() {
  return (
    <>
      <div className="page centered">
        <div className="top-menu">
          <menu>
            <li>
              <a>How it works</a>
            </li>
            <li data-v-ef923019="">
              <a data-v-ef923019="" href="/tap-tempo" className="">
                Tap tempo
              </a>
            </li>
          </menu>
        </div>
        <h1>Song Key and BPM Finder</h1>
        <h3>Analyzes music and finds Key, Scale and BPM for any song</h3>

        <input
          hidden=""
          type="file"
          accept=".wav,.mp3,.aac,.ogg,.wma,.flac,.alac,.aiff,audio/*"
        />
        <button className="upload">Browse my files</button>
      </div>
      <div className="page info">
        <h2>How to find Key &amp; BPM</h2>
        <p>
          This app analyzes music and estimates pitch and tempo [e.g. A♭ major,
          120 bpm]. You can upload multiple files at once. Processing time takes
          a few seconds.
        </p>
        <h4 data-v-ef923019="">Change Key &amp; BPM</h4>
        <p data-v-ef923019="">
          Using <a href="./pitch">Pitch Shifter</a> tool you can transpose song
          to a different key and tempo.
        </p>
        <h4 data-v-ef923019="">Tap tempo</h4>
        <p data-v-ef923019="">
          <a href="./tap-tempo">Tap tempo</a> tool allows you to calculate tempo
          beats per minute by tapping space key to the rhythm or beat.
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
