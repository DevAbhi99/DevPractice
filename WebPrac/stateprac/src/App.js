import './App.css';
import { useState,useRef, useEffect } from 'react';
import Useref from './Components/Useref';
import Useeffect from './Components/Useeffect';

function App() {



//declaration of useState
const [counter, setCounter]=useState(0);

const [output, setOutput]=useState(0);

useEffect(()=>{
  //console.log('hey');
  alert('hey');
},[output]);

//declaration of useRef
const inp1=useRef('');

const inp2=useRef('');

const res=useRef('');

//function declaration
let add=()=>{
  
  setCounter(counter+1);

}

let sub=()=>{
if(counter>0){
  setCounter(counter-1);
}
}

let calc=()=>{
  let x=parseInt(inp1.current.value);
  let y=parseInt(inp2.current.value);
 res.current.value=x+y;
}

let reset=()=>{
  inp1.current.value='';
  inp2.current.value='';
  res.current.value='';
  setOutput(0);
}

let message=()=>{
  setOutput('hey');
}




  return (
    <>
<div>{counter}</div>
    <button onClick={add}>add</button><br/>
    <button onClick={sub}>sub</button><br/><br/>

    <input type='text' ref={inp1}/><br/>
    <input type='text' ref={inp2}/><br/>
    <div><input type='text' ref={res}/></div>
    <button onClick={calc}>Add</button>
    <button onClick={reset}>Reset</button><br/><br/><br/>
    <button onClick={message}>Hey</button><br/><br/>
    <div>{output}</div>
    <br/><br/><br/><br/><br/><br/>
    <Useref/><br/><br/><br/><br/>
    <Useeffect/>

    </>
  );
}

export default App;
