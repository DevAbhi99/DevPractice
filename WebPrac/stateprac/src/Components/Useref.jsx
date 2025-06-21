import react from "react";
import { useReducer } from "react";


function Useref(){
    
let reducer=(state, action)=>{

    if(action.type==='inc'){
        return state+1;
    }

    if(action.type==='dec'){
        if(state>0){
        return state-1;
    }
    }


}

 const [counter, dispatch]=useReducer(reducer,0);


    return (
        <>

        <button onClick={()=>dispatch({type:'inc'})}>Increment</button><br/>
        <button onClick={()=>dispatch({type:'dec'})}>Decrement</button><br/><br/>
        <div>{counter}</div>
        </>
    )
}

export default Useref;