import React from 'react';
import { Outlet, Link,  useNavigate } from "react-router-dom";


export default function Home() {

    const history = useNavigate();

    const transLabrouteChange = () =>{
        console.log("Hello") 
      let path = `/transLab`; 
      history(path);
    }
     
  return (
    <>
    <div className="background-image">
    <h1>LABORATORIES</h1>
    <div className="Building-buttons-div">
    <button className="Building-buttons">FLOW LABORATORY</button>
    <button className="Building-buttons">ADVANCED MACHINE AND DRIVE LABORATORY</button>
    <button className="Building-buttons">CONTROL SYSTEM LABORATORY</button>
    <button className="Building-buttons">PROCESS CONTROL LABORATORY</button>
    <button className="Building-buttons">INDUSTRIAL AUTOMATION LABORATORY</button>
    <button className="Building-buttons">EMBEDDED SYSTEM LABORATORY</button>
    <button className="Building-buttons">INDUSTRIAL INSTRUMENTATION LABORATORY</button>
    <button className="Building-buttons" onClick={transLabrouteChange} >TRANSDUCER AND MEASUREMENTS LABORATORY</button>
    <button className="Building-buttons">ELECTRONICS LABORATORY-1</button>
    <button className="Building-buttons">ELECTRONICS  LABORATORY-2</button>
    <button className="Building-buttons">PROJECT LABORATORY</button>
    </div>

    </div>
    
   
    </>
  )
}
