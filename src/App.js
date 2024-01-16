import UserImg from "./components/UserImg";
import "./App.css";
import ProgressBar from "./components/ProgressBar";
import UserMeme from "./components/UserMeme";
import { useState } from "react";

function App() {

  const [redwidth, setRedwidth] = useState(50)
  const [bluewidth, setBluewidth] = useState(50)

  const changeScore = (team) => {
    if (team === 'red'){
      if(redwidth === 100 || bluewidth === 100){return}
      const tempRedwidth = redwidth + 5;
      const tempBluewidth = bluewidth - 5;
      
      setRedwidth(tempRedwidth)
      setBluewidth(tempBluewidth)

    }else if (team === 'blue'){
      if(redwidth === 100 || bluewidth === 100){return};
      const tempRedwidth = redwidth - 5;
      const tempBluewidth = bluewidth + 5;
      
      setRedwidth(tempRedwidth)
      setBluewidth(tempBluewidth)
    
    }  

  }
  
  return (
    <div className="container">
      <div className="bg" />

      <div className="userbar">
        <UserImg />
        <ProgressBar red = {redwidth} blue = {bluewidth}/>
        <UserImg />

        <div className="heading">
          <p style={{color:'white', fontSize:'1.1rem'}}>TOPIC</p>
          <p style={{color:'white', fontSize:'2.5rem',marginTop:'20px',transform:"translate(-15px)",fontWeight:'700'}}>Cats</p>
        </div>
      </div>
      
      <div className="memebox">
        <div className="meme_container">
          <UserMeme />

          <button className="btn" style={{backgroundColor:"red"}} onClick={() => changeScore('red')} >Red</button>
        </div>

        <div className="meme_container">
          <UserMeme />
          <button className="btn" style={{backgroundColor:"blue"}} onClick={() => changeScore('blue')}>Blue</button>
        </div>
      </div>

    </div>
  );
}

export default App;
