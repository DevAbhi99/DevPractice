import react from "react";
import './Movies.css';

function Movies(props){

  

    return (
        <>
 <div className="card_main">
    <div className=""><img id="img_id" src={props.url}/></div>
    <div>{props.name}</div>
 </div>

        </>
    )
}

export default Movies;