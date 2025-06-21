import React from "react";
import { useState } from "react";
import Login from "./Login";
import Logout from "./Logout";


let Handle=()=>{
   
const [condition, setCondition]=useState(1);

  let setLogin=()=>{
    setCondition(true);
  }

  let setLogout=()=>{
    setCondition(false);
  }

  if(condition===true){
    return (
      <Logout/>
    )
  }
  else if(condition===false){
  return (
    <Login/>
  )
  }
  else{
   return (
    <>
    <button onClick={setLogin}>login</button>
    <button onClick={setLogout}>logout</button>
   </>
   )
  }
  

  
}

export default Handle;
