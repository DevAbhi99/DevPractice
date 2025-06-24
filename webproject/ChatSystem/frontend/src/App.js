import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Chat from './Components/Chat';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/chat" element={<Chat/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
