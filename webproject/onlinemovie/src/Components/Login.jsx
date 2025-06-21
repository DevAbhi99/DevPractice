import React, {useState} from "react";
import { FaFacebookSquare } from "react-icons/fa";
import './Login.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function Login(){

const api_url='http://localhost:2500/users/login';   
const [email, setEmail]=useState('');
const [password, setPassword]=useState('');
const navigate=useNavigate();

let handleLogin=(e)=>{
e.preventDefault();

const userData={email, password};

axios.post(api_url, userData)
.then(response=>{
    if(response.status===200){
        navigate('/netflix');
    }
})
.catch(error=>console.log(`Error ${error} occurred!`));

}

    return (
        <>
 <div className="main_sign">
    <div className="signin_main">
        <div className="first_row"><h2 id="sign_in_text">Sign In</h2></div>
        <div className="second_row"><input type='text' className="email" placeholder="Email or phone number" onChange={(e)=>setEmail(e.target.value)}></input></div>
        <div className="third_row"><input type='password' className="passw"  placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input></div>
       <div className="fourth_row"><button className="Signin" onClick={handleLogin}>Sign In</button></div>
       <div className="fifth_row">
        <div className="remember">
            <span><input type='checkbox'></input></span>
            <span>Remember me</span>
        </div>
        <div className="needhelp">
           <span>Need help?</span>
        </div>
       </div>
       <div className="sixth_row">
        <span id='fblogo'><FaFacebookSquare id="flogo"/></span>
        <span id="fblogin_text">Login with Facebook</span>
       </div>
       <div className="seventh_row">
        <div>New to Netflix? <a href='http://localhost:3000/signup'><button id="signnow">Sign up now</button></a></div>
       </div>
       <div className="eight_row">This page is protected by Google reCaptcha to <br/>
       ensure you are not a bot. <span id='learnmore'>Learn more</span>
       </div>
    </div>
 </div>
        </>
    )
}

export default Login;