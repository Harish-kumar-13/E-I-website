import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import floor_1_pic from './floor_images/firstFloor.jpeg'
import floor_2_pic from './floor_images/secondFloor.jpeg'
import floor_3_pic from './floor_images/thirdFloor.jpeg'
import floor_0_pic from './floor_images/groundFloor.jpeg'

import floor_data from './floor_data';


const Floor = (props) => {
    let redirecter = useNavigate();
    const floor = floor_data[props.floor];
    const buttons = floor['buttons'].map((btn,idx) =>
        <button 
            style={{left:btn.position[0],top:btn.position[1]}}
            className='btn' key={idx} onClick={() => {
                if (btn.redirect_url.includes('pdf')) {
                    console.log("got here")
                    javascript:window.open(btn.redirect_url)
                } 
                else return redirecter(btn.redirect_url);
            }}>{btn.name}</button>
    );

    console.log(floor['buttons']);

    return (
        <div className='floor-image'>
            <img src={floor.image_url} />
            { buttons }
        </div>
    )
}


export default function Indoor() {
    const [floor,setfloor] = useState(0);

    function findFloor(floorNumber)
    {
        if(floorNumber == 1)
        {
            return "floor1";
        }
        else if(floorNumber == 2)
        {
            return "floor2";
        }
        else if(floorNumber == 3)
        {
            return "floor3";
        }
        else
        {
            return "floor0";
        }
    }


  return (
   <>
    <div className='indoor'>
        <div className='indoorButtons'>
            <div className='indButton'>
             <button className='indButtonLink'  onClick={()=>setfloor(0)}>Ground Floor</button>
            </div>
            <div className='indButton'>
                <button className='indButtonLink'  onClick={()=>setfloor(1)}>First Floor</button>
            </div>
            <div className='indButton' >
                <button className='indButtonLink'  onClick={()=>setfloor(2)}>Second Floor</button>
            </div>
            <div className='indButton'>
                <button className='indButtonLink' onClick={()=>setfloor(3)}>Third Floor</button>
            </div>
        </div>

        {/* <div className={findFloor(floor)}> */}
            {/* for image background */}
        {/* </div> */}

        <Floor floor={floor}/>
    </div>
    
   </>
  )
}
