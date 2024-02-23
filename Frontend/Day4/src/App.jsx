// import React from 'react';
import { Switch } from '@mui/material';
import Login from '../src/pages/auth/Login';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Nav';
import PermanentDrawerLeft from './pages/user/dashboard';
import Register from './pages/auth/Register';
import Home from './pages/user/home';
import Card1 from './components/Card1';
import OCourses from './pages/user/onlinecourses';
import AdminHome from './pages/admin/adminhome';
import AdminPermanentDrawerLeft from './pages/admin/admindashboard';
import StudentDatabase from './pages/admin/studentdatabase.';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/signup" element={<Register/>}></Route>
          <Route path="/dashboard" element={<PermanentDrawerLeft/>}></Route>
          <Route path="/admindashboard" element={<AdminPermanentDrawerLeft/>}></Route>
          <Route path="/ocourses" element={<OCourses/>}></Route>
          <Route path="/adminhome" element={<AdminHome/>}></Route>
          <Route path="/studentdb" element={<StudentDatabase/>}></Route>
        </Routes>
      </Router>
   </>
  );
}

export default App;
