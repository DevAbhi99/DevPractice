import react, {useState} from "react";
import './Login.css';
import { MdOutlineEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

let Login=()=>{

const navigate=useNavigate();
const api_url='http://localhost:2500/user/login';    
const [email, setEmail]=useState('');
const [password, setPassword]=useState('');

let handleLogin=()=>{

const userData={email, password};

if(email===''||password===''){
    alert('field is empty!');
}
else{
    axios.post(api_url, userData)
    .then(Response=>{
        if(Response.status===200){
         navigate('/main')
        }
    })
    .catch(error=>console.log(`Could not log in due to error ${error}`));
}

}

    return (
        <>
        <div className="login_main">
            <div className="signup_title">Login</div>
            <div className="email"><span id="email_logo"><MdOutlineEmail/></span><span><input type="text" id="emailid" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/></span></div>
            <div className="password"><span id="pwd_logo"><IoMdLock/></span><span><input type="text" id="pwd" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/></span></div>
            <div className="signup_btn"><button id="btnsignup" onClick={handleLogin}>Login</button></div>
        </div>
        
        </>
    )
}

export default Login;