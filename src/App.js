import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';
import colorWheelLogo from './colorwheel.png';

function Randomcolor() {
  const [color, setColor] = useState('');
  return (
    <div className="Get-random-color">
      <button onClick={() => setColor(randomColor())}>
        generate random color
      </button>
      <p>
        Hex-code of your color: <span>{color}</span>
      </p>
      <p>Example:</p>
      <div className="colorBox"></div>
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
      <p>or get a specific color</p>
    </main>
  );
}

export default App;
