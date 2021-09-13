import randomColor from 'randomcolor';
import { useState } from 'react';
// import './App.css';
import colorWheelLogo from './colorwheel.png';

function Randomcolor() {
  const [color, setColor] = useState('#fff');
  return (
    <div className="Get-random-color">
      <button onClick={() => setColor(randomColor())}>
        generate random color
      </button>
      <p>
        Hex-code of your color: <span>{color}</span>
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <a href="..">Marco Bogner</a>
            </li>
          </ul>
        </nav>
        <img src={colorWheelLogo} alt="Color Wheel Logo" />
        <p>Welcome to</p>
        <h1>awesome color generator</h1>
      </header>
      <Randomcolor></Randomcolor>
    </div>
  );
}

export default App;
