import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';
import colorWheelLogo from './colorwheel.png';

function Randomcolor() {
  const [color, setColor] = useState('');
  return (
    <div className="Get-random-color">
      <button className="randomButton" onClick={() => setColor(randomColor())}>
        generate random color
      </button>
      <p className="hexLine">
        Hex-code of your color: <span className="hexCode">{color}</span>
      </p>
      <p className="example">Example:</p>
      <div className="colorBox"></div>
    </div>
  );
}

function Specificcolor() {
  const [color, setColor] = useState('');
  return (
    <div className="Get-specific-color">
      <form className="colorform">
        <label className="formlabel" id="hue">
          Hue:
          <input className="forminput" type="text" name="hue" />
        </label>

        <label className="formlabel" id="lightness">
          Lightness:
          <input className="forminput" type="text" name="lightness" />
        </label>
        <button className="specificButton">generate color</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <main className="App">
      <header className="App-header">
        <nav className="topnav">
          <ul>
            <li>
              <a href="..">Marco Bogner</a>
            </li>
          </ul>
        </nav>
        <img
          className="headerImage"
          src={colorWheelLogo}
          alt="Color Wheel Logo"
        />
        <p className="dividerHeadline">Welcome to</p>
        <h1>awesome color generator</h1>
      </header>
      <Randomcolor></Randomcolor>
      <p className="dividerText">or get a specific color</p>
      <Specificcolor></Specificcolor>
    </main>
  );
}

export default App;
