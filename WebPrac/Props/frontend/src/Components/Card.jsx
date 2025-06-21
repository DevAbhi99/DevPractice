import react from "react";
import './Card.css';

let Card=(props)=>{

    return (
        <>
<div className="card_main">
    <div>id: {props.id}</div>
    <div>name: {props.name}</div>
    <div>age: {props.age}</div>
</div>
        </>
    )

}

export default Card;