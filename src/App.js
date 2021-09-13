// import './App.css';
import colorWheelLogo from './colorwheel.png';

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
    </div>
  );
}

function Randomcolor() {
  return (
    <div className="Randomcolor">
      <p>Hello World!</p>
    </div>
  );
}

export default App;
