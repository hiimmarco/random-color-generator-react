import './App.css';
import colorWheelLogo from './colorwheel.png';
import Randomcolor from './Randomcolor';
import Specificcolor from './Specificcolor';

// Create component for random color generation without hue and luminosity

// Create component for color generation with hue and luminosity

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
      <Randomcolor />
      <p className="dividerText">––– or get a specific color –––</p>
      <Specificcolor />
    </main>
  );
}

export default App;
