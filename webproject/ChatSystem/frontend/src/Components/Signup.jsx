import react, {useState, useEffect} from "react";
import './Signup.css';
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import {useNavigate} from 'react-router-dom';
import axios from "axios";

let Signup=()=>{

    const api_url='http://localhost:2500/user/signup';
  const navigate=useNavigate();  
  const [username, setUsername]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');

let handleSignup=()=>{

  const userData={username, email, password};

    if(username===''||email===''||password===''){
        alert('Field is empty');
    }
 
     axios.post(api_url, userData)
     .then(response=>{
        navigate('/chat');
     })
     .catch(error=>console.log(`Could not send data to backend due to error ${error}`));
 
}



    return (
        <>
        <div className="signup_main">
            <div className="signup_title">Signup</div>
            <div className="username"><span id="user_logo"><FaRegUser/></span><span><input type="text" id="user" placeholder="Enter your username" onChange={(e)=>setUsername(e.target.value)}/></span></div>
            <div className="email"><span id="email_logo"><MdOutlineEmail/></span><span><input type="text" id="emailid" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/></span></div>
            <div className="password"><span id="pwd_logo"><IoMdLock/></span><span><input type="text" id="pwd" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/></span></div>
            <div className="signup_btn"><button id="btnsignup" onClick={handleSignup}>Signup</button></div>
        </div>
        
        </>
    )
}

export default Signup;