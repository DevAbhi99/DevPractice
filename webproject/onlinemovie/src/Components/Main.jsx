import React, {useState, useEffect} from "react";
import './Main.css';
import Movies from "./Movies";

function Main(){

  const [res, setRes]=useState([]);

    const api_url='http://localhost:2500/users/movies';

    useEffect(()=>{
      fetch(api_url)
      .then(response=>response.json())
      .then(data=>setRes(data))
      .catch(error=>console.log(`Error ${error} occurred!`));
    }, []);

    return (
        <>
        <h1>Main</h1>

<div className="first_row">
{res.map(e=> (
    <>
     <Movies url={e.url} name={e.name}/>
    </>
))}
</div>
        </>
    )
}

export default Main;