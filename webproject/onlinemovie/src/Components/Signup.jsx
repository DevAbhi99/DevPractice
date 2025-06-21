import React, {useState} from "react";
import './Signup.css';
import { MdEmail } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";
import { MdLock } from "react-icons/md";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

function Signup(){

const api_url='http://localhost:2500/users/signup';

const navigate=useNavigate();
const [username, setUsername]=useState('');
const [email, setEmail]=useState('');
const [password, setPassword]=useState('');

let handleSignup=(e)=>{

  e.preventDefault();

    const userData={username, email, password};

    axios.post(api_url, userData)
    .then(response=>
      {
        if(response.status===200){
            navigate('/netflix');
        }
      })
    .catch(error=>console.log(`${error} occurred!`));

}


    return (
        <>
  <div className="main_signup">
     <div className="signup_main">
        <div className="s_first_row">Watch 100+ movies, <br/> Join us now </div>
        <div className="s_second_row"><span id='account_logo'><RiAccountCircleLine/></span><span><input type='text' id='signup_username' placeholder='Username' onChange={(e)=>setUsername(e.target.value)}></input></span></div>
        <div className="s_third_row"><span id='email_logo'><MdEmail/></span><span><input type='text' id='signup_email' placeholder="Email" onChange={(e)=>setEmail(e.target.value)}></input></span></div>
        <div className="s_fourth_row"><span id='pwd_logo'><MdLock/></span><span><input type='password' id='signup_pwd' placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input></span></div>
        <div className="s_fifth_row"><button id='s_signup_btn' onClick={handleSignup}>Sign up</button></div>
        <div className="s_sixth_row"><a href='http://localhost:3000/login'><button id='already_signup'>Already have an account?</button></a></div>
     </div>

  </div>
        </>
    )
}

export default Signup;