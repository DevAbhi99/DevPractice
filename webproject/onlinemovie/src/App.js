
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Main from './Components/Main';

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/netflix' element={<Main/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
