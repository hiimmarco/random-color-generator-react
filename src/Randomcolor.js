import randomColor from 'randomcolor';
import React, { useState } from 'react';
import Colorinfo from './Colorinfo';

function Randomcolor() {
  // const [show, setShow] = useState(false);
  const [color, setColor] = useState('no color generated');
  const [display, setDisplay] = useState(false);
  return (
    <div className="Get-random-color">
      <button
        className="randomButton"
        onClick={() => {
          setColor(randomColor());
          setDisplay(true);
        }}
      >
        Generate random color
      </button>
      {display && <Colorinfo newcolor={color} />}
    </div>
  );
}

export default Randomcolor;
