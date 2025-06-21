import './App.css';
import { useState } from 'react';

function App() {

const [data, setData]=useState('');

  let clickhandle=()=>{
  alert('I am clicked!');
  }

  let mouseOver=()=>{
    alert('Mouse hovered');
  }

let handleChange=(e)=>{
setData(e.target.value);
if(e.target.value.charAt(0)=='K'){
  alert('bad request');
}

}


let handleSubmit=(e)=>{
e.preventDefault(); //prevents default behaviour of the form like preventing refreshing the page or submitting data to the backend server

alert('Form submitted!');
}

  return (
<>
<p onMouseOver={mouseOver}>I am a paragraph</p><br/><br/>
<button onClick={clickhandle}>click me</button><br/><br/>
<input type='text' onChange={handleChange}/><br/><br/>
<div>{data}</div><br/><br/>
<button onSubmit={handleSubmit}>Submit</button>
</>
  );
}

export default App;
