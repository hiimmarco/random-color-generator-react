import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';
import colorWheelLogo from './colorwheel.png';

// Create component for random color generation without hue and luminosity

function Randomcolor() {
  // const [show, setShow] = useState(false);
  const [color, setColor] = useState('no color generated');
  return (
    <div className="Get-random-color">
      <button className="randomButton" onClick={() => setColor(randomColor())}>
        Generate random color
      </button>
      <div classname="hideandshowrandom">
        <p className="hexLine">
          Hex-code of your color: <span className="hexCode">{color}</span>
        </p>
        <p className="example">See your color in action:</p>
        <div
          className="colorBox"
          style={{
            backgroundColor: `${color}`,
            borderColor: `${color}`,
            color: `${color}`,
          }}
        >
          no color generated
        </div>
      </div>
    </div>
  );
}

// Create component for color generation with hue and luminosity

function Specificcolor() {
  const [color, setColor] = useState('');
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');
  return (
    <div className="Get-specific-color">
      <label className="formlabel" id="hue">
        Hue:
        <input
          className="forminput"
          value={hue}
          onChange={(event) => setHue(event.currentTarget.value)}
        />
      </label>

      <label className="formlabel" id="luminosity">
        Luminosity:
        <input
          className="forminput"
          value={luminosity}
          onChange={(event) => setLuminosity(event.currentTarget.value)}
        />
      </label>
      <button
        className="specificButton"
        onClick={() =>
          setColor(randomColor({ luminosity: `${luminosity}`, hue: `${hue}` }))
        }
      >
        Generate color
      </button>
      <p className="hexLine">
        Hex-code of your color: <span className="hexCode">{color}</span>
      </p>
      <p className="example">See your color in action:</p>
      <div
        className="colorBox"
        style={{
          backgroundColor: `${color}`,
          borderColor: `${color}`,
          color: `${color}`,
        }}
      >
        no color generated
      </div>
    </div>
  );
}

// Create main app

function App() {
  return (
    <main className="App">
      <header className="App-header">
        <img
          className="headerImage"
          src={colorWheelLogo}
          alt="Color Wheel Logo"
        />
        <p className="dividerHeadline">Welcome to</p>
        <h1>Awesome Color Generator</h1>
      </header>
      <Randomcolor></Randomcolor>
      <p className="dividerText">––– or get a specific color –––</p>
      <Specificcolor></Specificcolor>
    </main>
  );
}

export default App;
