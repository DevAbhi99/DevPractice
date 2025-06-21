import React from "react";
import './Main.css';
import Dayview from "./Dayview";
import Nightview from "./Nightview";
import { useState } from "react";


let Main=()=>{

const [isVisible,setVisible]=useState(true);

let day=()=>{
    setVisible(true);
}

let night=()=>{
    setVisible(false);
}
    return (
        <>
         <div className='main'>

<div className='main_btn'>
  <button id="day_btn" onClick={day}>day</button>
  <button id="night_btn" onClick={night}>Night</button>
</div>
    
    <div className='main_view'>
        {
            isVisible ?(
<span className='d_view'><Dayview/></span>
            ):(
     <span className='n_view'><Nightview/></span>       
        )

        }
    </div>
  </div>
        
        </>
    )


}

export default Main;