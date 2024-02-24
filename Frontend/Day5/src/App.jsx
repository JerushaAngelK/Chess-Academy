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
import StudentDatabase from './pages/admin/studentdatabase';
import Lazy from './components/LazyLoading';
import React, { Suspense } from 'react';

function App() {

  const LazyLoadedHome = React.lazy(() => import("../src/pages/user/home"));
  const LazyLoadedStudentDB = React.lazy(() => import("./pages/admin/studentdatabase"));
  
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/home" element={
           <Suspense fallback={<Lazy />}>
           <LazyLoadedHome />
         </Suspense>}/>
          <Route exact path="/" element={<Login/>}></Route>
          {/* <Route path="/home" element={<Home/>}></Route> */}
          <Route path="/signup" element={<Register/>}></Route>
          <Route path="/dashboard" element={<PermanentDrawerLeft/>}></Route>
          <Route path="/admindashboard" element={<AdminPermanentDrawerLeft/>}></Route>
          <Route path="/ocourses" element={<OCourses/>}></Route>
          <Route path="/adminhome" element={<AdminHome/>}></Route>
          <Route path="/studentdb" element={
          <Suspense fallback={<Lazy/>}>
            <LazyLoadedStudentDB/>
            </Suspense>}></Route>
        </Routes>
      </Router>
   </>
  );
}

export default App;
