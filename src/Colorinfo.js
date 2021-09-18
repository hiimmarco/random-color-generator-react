import React from 'react';

function Colorinfo(props) {
  const newStyle = {
    backgroundColor: props.newcolor,
    borderColor: props.newcolor,
    color: props.newcolor,
  };

  return (
    <div classname="hideandshowrandom">
      <p className="hexLine">
        Hex-code of your color:
        <span className="hexCode"> {props.newcolor}</span>
      </p>
      <p className="example">See your color in action:</p>
      <div className="colorBox" style={newStyle}>
        no color generated
      </div>
    </div>
  );
}

export default Colorinfo;
