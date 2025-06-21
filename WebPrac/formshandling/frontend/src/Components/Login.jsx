import react, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';
import axios from "axios";

const Login=()=>{

const [email, setEmail]=useState('');
const [password, setPassword]=useState('');
const navigate=useNavigate();
const api_url='http://localhost:2500/api/login';

let handleLogin=(e)=>{

    e.preventDefault();

    const userData={email, password};

axios.post(api_url, userData)
.then(response=>{
    if(response.status===200){
navigate('/main');
    }
    })
.catch(error=>console.log(`Could not login due to error ${error}`));

}

    return (
   <div className="login_main">
            <div><input type='text' placeholder="email" onChange={(e)=>setEmail(e.target.value)}/></div>
            <div><input type='password' placeholder="password" onChange={(e)=>setPassword(e.target.value)}/></div>
            <div className="login_btns"><button onClick={handleLogin}>Login</button></div>
        </div>
    )
}

export default Login;