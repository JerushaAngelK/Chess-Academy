// import React from 'react';
import Login from '../src/pages/auth/Login';
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  // const [count, setCount] = useState(0)

  return (
    // <>
      <Router>
        <Switch>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </Router>
    // </>
  );
}

export default App;
