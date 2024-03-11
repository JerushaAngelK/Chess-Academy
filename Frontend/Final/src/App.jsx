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
import OnlineCourses from './pages/user/onlinecourses';
import AdminHome from './pages/admin/adminhome';
import AdminPermanentDrawerLeft from './pages/admin/admindashboard';
import StudentDatabase from './pages/admin/studentdatabase';
import Lazy from './components/LazyLoading';
import React, { Suspense } from 'react';
import IndianCities from './components/IndianCities';
import Home2 from './pages/admin/home2';
import OnlineCoursess from './pages/admin/assignCourses';
import EnhancedTable from './pages/user/offlinecourses';
import Pay from './pages/user/payment';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ReportsPage from './pages/user/report';

const theme = createTheme({
  palette: {
     mode: 'light',
     primary: {
       main: '#FFA07A', // Light golden brown
     },
     secondary: {
       main: '#FFD700', // Gold
     },
  },
 });

function App() {

  const LazyLoadedHome = React.lazy(() => import("../src/pages/user/home"));
  const LazyLoadedStudentDB = React.lazy(() => import("./pages/admin/studentdatabase"));
  
  return (
    <>
    <ThemeProvider theme={theme}>

      <Router>
        <Routes>
          <Route exact path="/home" element={
            <Suspense fallback={<Lazy />}>
           <LazyLoadedHome />
         </Suspense>}/>
          <Route exact path="/" element={<Login/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Register/>}></Route>
          <Route path="/dashboard" element={<PermanentDrawerLeft/>}></Route>
          <Route path="/admindashboard" element={<AdminPermanentDrawerLeft/>}></Route>
          <Route path="/ocourses" element={<OnlineCourses/>}></Route>
          <Route path="/ofcourses" element={<EnhancedTable/>}></Route>
          <Route path="/payment" element={<Pay/>}></Route>
          <Route path="/assignCourses" element={<OnlineCoursess/>}></Route>
          <Route path="/home1" element={<AdminHome/>}></Route>
          <Route path="/report" element={<ReportsPage/>}></Route>
          <Route path="/studentdb" element={
            <Suspense fallback={<Lazy/>}>
            <LazyLoadedStudentDB/>
            </Suspense>}></Route>
            <Route path="/indian-cities" element={<IndianCities/>} />
        </Routes>
      </Router>
            </ThemeProvider>
   </>
  );
}

export default App;
