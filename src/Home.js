import React from 'react';
import { Outlet, Link,  useNavigate } from "react-router-dom";


export default function Home() {

    const history = useNavigate();

    function routeChange(t) {
        console.log("Hello") 
      let path = `/` + t; 
      history(path);
    }
     
  return (
    <>
    <div className="background-image">
    <h1>LABORATORIES</h1>
    <div className="Building-buttons-div">
    <button className="Building-buttons"onClick={() => routeChange("flowLab")} >FLOW LABORATORY</button>
    <button className="Building-buttons"onClick={() => routeChange("machineLab")} >ADVANCED MACHINE AND DRIVE LABORATORY</button>
    <button className="Building-buttons"onClick={() => routeChange("processLab")} >CONTROL SYSTEM LABORATORY</button>
    <button className="Building-buttons"onClick={() => routeChange("controlLab")} >PROCESS CONTROL LABORATORY</button>
    <button className="Building-buttons"onClick={() => routeChange("automationLab")} >INDUSTRIAL AUTOMATION LABORATORY</button>
    <button className="Building-buttons"onClick={() => routeChange("embeddedLab")} >EMBEDDED SYSTEM LABORATORY</button>
    <button className="Building-buttons"onClick={() => routeChange("iiLab")} >INDUSTRIAL INSTRUMENTATION LABORATORY</button>
    <button className="Building-buttons"onClick={() => routeChange("transLab")} >TRANSDUCER AND MEASUREMENTS LABORATORY</button>
    <button className="Building-buttons"onClick={() => routeChange("electronicsLab")} >ELECTRONICS LABORATORY</button>
    </div>

    </div>
    
   
    </>
  )
}
