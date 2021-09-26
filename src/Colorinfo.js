import React from 'react';

function Colorinfo(props) {
  const newStyle = {
    backgroundColor: props.newcolor,
  };

  return (
    <div classname="hideandshowrandom">
      <p className="hexLine">
        Hex-code of your color:
        <span className="hexCode"> {props.newcolor}</span>
      </p>
      <p className="example">See your color in action:</p>
      <div className="colorBox" style={newStyle} />
    </div>
  );
}

export default Colorinfo;
