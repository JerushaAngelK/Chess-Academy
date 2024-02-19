import '../../assets/css/login.css'
import { Button, TextField } from '@mui/material';
const Login = () => {
  return (
    <div className="login-container">
      <h1 className="logo">Mink Chess Academy</h1>
       <TextField label="Username" />
      <TextField label="Password" type="password" />
      <Button variant="contained" color="primary">
        Login
      </Button>
      <p className="quote"> Chess is the gymnasium of the mind. </p>
    </div>
  );
};

export default Login;
