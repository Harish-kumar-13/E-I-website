import React from "react";
import video from './video/video.mp4';
import { Outlet, Link, Redirect } from "react-router-dom";



const Main = () => {
return (
<>
<div className="App-header">
    <div className="overlay" >
    <h1 className="animate header">WELCOME TO MIT</h1>
    <video autoPlay loop muted
     width="620"
     height="340">
      <source src={video} type="video/mp4"/>
    </video>
    <p className="paragraph">Madras Institute of Technology (MIT) is an engineering institute located in Chromepet, Chennai, India. It is one of the four autonomous constituent colleges of Anna University.
     It was established in 1949 by Chinnaswami Rajam as the first self-financing engineering institute in the country and later merged with Anna University. The institute gave India new areas of specialization such as aeronautical engineering, automobile engineering, electronics engineering and instrumentation technology. MIT was the first self-financing institute opened in India.</p> 
    <div className="welcomeButton">
     < Link to="/home" className= "welcomeButtonLink" > HOME</Link>
    </div>
  </div>
</div>
<Outlet />
</>
   
);
};

export default Main;
