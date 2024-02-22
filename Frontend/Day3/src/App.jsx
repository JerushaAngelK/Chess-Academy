// import React from 'react';
import { Switch } from '@mui/material';
import Login from '../src/pages/auth/Login';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Nav';
import PermanentDrawerLeft from './pages/user/dashboard';
import Register from './pages/auth/Register';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route path="/home" element={<Navbar/>}></Route>
          <Route path="/signup" element={<Register/>}></Route>
          <Route path="/dashboard" element={<PermanentDrawerLeft/>}></Route>
        </Routes>
      </Router>
   </>
  );
}

export default App;
