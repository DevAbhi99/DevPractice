import react from "react";
import { useState, useEffect } from "react";

function Useeffect(){

const [res,setRes]=useState([]);

const api_url='http://localhost:2500/api/users';

useEffect(()=>{
fetch(api_url)
.then(response=>response.json())
.then(data=>setRes(data))
.catch(error=>console.log(`Couldnot fetch due to error ${error}`));

}
, []);

    return (
    <>
    <div>
        {res.map(e=>(
            <h2>{e.id}, {e.name}, {e.age}</h2>
        ))}
    </div>
    </>)
}

export default Useeffect;