import React from "react";
import video from './video/video.mp4';
import { Outlet, Link, Redirect } from "react-router-dom";



const Main = () => {
return (
<>
<div className="App-header">
    <div className="overlay" >
    <h1 className="animate header">WELCOME TO EIE</h1>
    <video autoPlay loop muted
     width="620"
     height="340">
      <source src={video} type="video/mp4"/>
    </video>
    <p className="paragraph">  The Department  of Instrumentation Engineering MIT Campus Anna University was established in the year of 1949. The Instrumentation Engineering Department offers Electronics and Instrumentation Engineering at UG level, Instrumentation Engineering at PG level, and Ph.D. / MS (by research) for both regular and Part-time scholars. The core strength of the Instrumentation Engineering Department MIT Campus, Anna University is Process Control & Instrumentation.</p> 
  <div className="links">
  <div className="welcomeButton">
     < Link to="/home" className= "welcomeButtonLink" > LABORATORY</Link>
    </div>3.2
    
    <div className="welcomeButton">
    <Link to="/indoor" className= "welcomeButtonLink" >INDOOR MAP</Link>

    </div>
    <div className="welcomeButton">
     {/* <Link to="/chatbot" className = "welcomeButtonLink">CHAT BOT</Link> */}
      <a className="welcomeButtonLink" href="https://bot.dialogflow.com/537811eb-4ff5-4959-a57f-d23c0d18eb69">CHAT BOT</a>
      </div>
  </div>

  </div>
</div>
<Outlet />
</>
   
);
};

export default Main;
