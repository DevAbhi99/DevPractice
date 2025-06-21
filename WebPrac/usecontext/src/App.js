import { createContext, useState } from 'react';
import './App.css';
import ChildA from './Components/ChildA';


const UserContext=createContext();



function App() {

  const [data, setData]=useState({name:'Karan'});


//passing data

  return (
    <>
<UserContext.Provider value={data}>
  <ChildA/>
</UserContext.Provider>

  

    </>

  );
}

export default App;
export {UserContext};
