import react, {useState, useEffect} from "react";
import './Signup.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup=()=>{

const navigate=useNavigate();
const api_url='http://localhost:2500/api/signup';
const [name, setName]=useState('');
const [email, setEmail]=useState('');
const [password, setPassword]=useState('');


let handlesignup=(e)=>{

    e.preventDefault();

    const userData={name, email, password};

    axios.post(api_url, userData)
    .then(response=>navigate('/main',{ state: { email } }))
    .catch(error=> console.log(`Could not send data due to error ${error}`));
    

}

    return (
        <div className="signup_main">
            <div><input type='text' placeholder="name" onChange={(e)=>setName(e.target.value)} /></div>
            <div><input type='text' placeholder="email" onChange={(e)=>setEmail(e.target.value)}/></div>
            <div><input type='password' placeholder="password" onChange={(e)=>setPassword(e.target.value)}/></div>
            <div className="signup_btns"><button onClick={handlesignup}>Signup</button></div>
        </div>
    )
}

export default Signup;