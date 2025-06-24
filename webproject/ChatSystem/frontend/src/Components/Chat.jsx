import react, {useState, useEffect} from "react";
import './Chat.css';
import { IoSend } from "react-icons/io5";
import axios from 'axios';

let Chat=()=>{
    
    const url1='http://localhost:2500/user/sendMessage';
    const url2='http://localhost:2500/user/getMessage';
    const [message, setMessage]=useState('');
    const [display, setDisplay]=useState([]);

    const getMessage=()=>{
axios.get(url2)
.then(response=>setDisplay(response.data))
.catch(error=>console.log(`Error occurred due to error ${error}`));

}

useEffect(()=>{
    getMessage();
    }, []);


let handleMessage=()=>{

     const userData={message};

    if(message===''){
        alert('message is empty!');
    }
    else{
        axios.post(url1, userData)
        .then(response=> {console.log('Data sent');
            getMessage();
        })
        .catch(error=>console.log(`Data could not be sent due to error ${error}`))

    }

    
}


    return (
        <>
       <div className="heading_chat">Welcome</div>

       <div className="chat_main">
         <div className="chat_display">{display.map((item, index)=>(
            <>
            <div className="message_view" key={index}>{item.message}</div>
            </>
         ))}</div>
         <div className="chat_inp"><span id="msg_inp"><input type="text" id="msg_txtbx" placeholder="Enter your message..." onChange={(e)=>setMessage(e.target.value)}/></span><button id="send_logo" onClick={handleMessage}><IoSend/></button></div>

       </div>
        
        </>
    )
}

export default Chat;