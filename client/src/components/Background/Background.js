  
import React from "react";
import "./style.css";

function Background(props) {
  return (
    <div className="background text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default Background;