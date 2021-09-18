import randomColor from 'randomcolor';
import React, { useState } from 'react';
import Colorinfo from './Colorinfo';

function Specificcolor() {
  const [color, setColor] = useState('');
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');
  const [display, setDisplay] = useState(false);
  return (
    <div className="Get-specific-color">
      <label className="formlabel" id="hue">
        Hue:
        <input
          className="forminput"
          placeholder="e.g. 'blue'"
          value={hue}
          onChange={(event) => setHue(event.currentTarget.value)}
        />
      </label>

      <label className="formlabel" id="luminosity">
        Luminosity:
        <input
          className="forminput"
          placeholder="e.g. 'dark'"
          value={luminosity}
          onChange={(event) => setLuminosity(event.currentTarget.value)}
        />
      </label>
      <button
        className="specificButton"
        onClick={() => {
          setColor(randomColor({ luminosity: `${luminosity}`, hue: `${hue}` }));
          setDisplay(true);
        }}
      >
        Generate color
      </button>
      {display && <Colorinfo newcolor={color} />}
    </div>
  );
}

export default Specificcolor;
