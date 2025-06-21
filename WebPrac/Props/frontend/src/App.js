import './App.css';
import { useEffect, useState } from 'react';
import Card from './Components/Card';

function App() {

const api_url='http://localhost:2500/users/getusers';

const [res,setRes]=useState([]);

useEffect(()=>{
fetch(api_url)
.then(response=> response.json())
.then(data=>setRes(data))
.catch(error=>console.log(`Could not fetch due to error ${error}`))

},[]);

  return (
    <>
<div className='main_cards'>
{
  res.map(e=>(
    <Card id={e.id} name={e.name} age={e.age}/>
  ))
}
</div>
    </>
  );
}

export default App;
