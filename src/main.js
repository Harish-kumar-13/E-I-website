import React from "react";
import video from './video/video.mp4';
import { Outlet, Link, Redirect } from "react-router-dom";



const Main = () => {
return (
<>
<div className="App-header">
    <div className="overlay" >
    <video autoPlay loop muted
    style={{
      position: 'absolute',
      width: "100%",
      height: "100%",
      objectFit:"cover",         
    }}>
      <source src={video} type="video/mp4"/>
    </video>
    < Link to="/home" className= "welcomeButton" > HOME</Link>

    <h1 className="header">WELCOME TO MIT</h1>
    <p className="paragraph">Madras Institute of Technology (MIT) is an engineering institute located in Chromepet, Chennai, India. It is one of the four autonomous constituent colleges of Anna University.
     It was established in 1949 by Chinnaswami Rajam as the first self-financing engineering institute in the country and later merged with Anna University. The institute gave India new areas of specialization such as aeronautical engineering, automobile engineering, electronics engineering and instrumentation technology. MIT was the first self-financing institute opened in India.</p> 
    
  </div>
</div>
<Outlet />
</>
   
);
};

export default Main;
