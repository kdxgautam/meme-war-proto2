import React from "react";
import "../App.css";
import '../styles/progressbar.css'

const ProgressBar = ({red,blue}) => {
  return (
    <div className="progressbar"  style={{color:'white', fontSize:'1.8rem'}}>
      <div className="user1Bar" style={{ width: `${red}%` , textAlign:'left',}}>{red}%</div>
      <div className="user2Bar" style={{ width: `${blue}%`, textAlign:'right' }}>{blue}%</div>
    </div>
    
    
  );
};

export default ProgressBar;
