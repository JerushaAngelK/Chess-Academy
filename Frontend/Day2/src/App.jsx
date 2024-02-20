// import React from 'react';
import { Switch } from '@mui/material';
import Login from '../src/pages/auth/Login';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Nav';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Login />
        {/* <Navbar/> */}
        {/* <Switch> */}

        {/* <Routes>
          <Route exact path="/" component={Login}></Route>
          <Route path="/home" component={Login}></Route>
        </Routes> */}
        {/* </Switch> */}
      </Router>
   </>
  );
}

export default App;
