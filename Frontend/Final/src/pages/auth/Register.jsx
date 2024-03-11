// import * as React from 'react';
import { useState } from "react";
import { Google } from "@mui/icons-material";
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from "react-router-dom";
import FormControl from '@mui/material/FormControl';
import FormHelperText from "@mui/material/FormHelperText";
import '../../assets/css/signup.css';
import EmailIcon from '@mui/icons-material/Email';
import FilledInput from '@mui/material/FilledInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box, IconButton, MenuItem, Select } from '@mui/material';
import FormGroup from "@mui/material/FormGroup";
import { useNavigate } from 'react-router-dom';
import InputAdornment from '@mui/material/InputAdornment';
import axios from 'axios';
import { GitHub } from "@mui/icons-material";
import { GoogleOAuthProvider } from '@react-oauth/google';
import HorizontalScrollingItems from '../../components/HorizontalScroll';

export default function Register() {
  const [repwd, setRePwd] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('');
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   e.preventDefault();
  // }

  const handleGoogleSignup = (response) => {
    // Handle Google signup logic here
    // You can access the user's information from the response object
    console.log(response);
  };
  
  const handleGithubSignup = (response) => {
    // Handle GitHub signup logic here
    // You can access the user's information from the response object
    console.log(response);
  };


 const [user, setUser] = useState({
   email: '',
    repwd: '',
    password: '',
    roles: 'USER' // Default role
 });

 const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
 };



  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
     await axios.post(
        'http://localhost:8080/api/new',
        {
          email: email,
          password: password,
          repwd: repwd,
          roles: userType
        }
      );
      alert("Signed up a new account successfully. Please Login");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <GoogleOAuthProvider clientId="<your_client_id>">
        <div className='secondx'>
       <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className='form1'>
        <Box sx={{ width: '50%', padding:   2 }}>
      <form onSubmit={handleSubmit}>
          {/* <h1 className='secondx'>Mink Chess Academy</h1> */}
          <h3 className='fifthx'>Join Us</h3>
          <FormGroup sx={{ padding:  1, borderRadius:  1, border: '0px solid', borderColor: 'primary.main' }}>
            <div className='form-columns'>
                <div className='form-column'>


            <FormControl sx={{ m:  0.9, width: '25ch' }} variant="outlined" type='email'>
              <label className='sigininlx' htmlFor="email" label="User Identity">Email:</label>
              <FilledInput
                id="outlined-adornment-email"
                type="email"
                endAdornment={<InputAdornment position="end"> <EmailIcon /></InputAdornment>}
                aria-describedby="outlined-weight-helper-email"
                inputProps={{
                  'aria-label': 'email',
                  style: { color: 'black' }
                }}
                onChange={e => setEmail(e.target.value)}
                label="Email"
                required
                name={email}
                value={email}
                />
              {errors.email && touched.email ? <p>
                {errors.email}
              </p> : null}
              <FormHelperText id="outlined-weight-helper-email"></FormHelperText>
            </FormControl>
            <FormControl sx={{ m: 0.9, width: '25ch' }} variant="outlined" required>
              <label className='sigininlx' htmlFor="password" >Password:</label>
              <FilledInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                inputProps={{
                  style: { color: 'black' } // Set the text color to black
               }}
                onChange={e => setPassword(e.target.value)}
                label="Password"
                required
                name={password}
                value={password}
                />
              {errors.password && touched.password ? <p>
                {errors.password}
              </p> : null}
            </FormControl>
                </div>
                <div className='form-column'>

            <FormControl sx={{ m:  0.9, width: '25ch' }} variant="outlined" required>
              <label className='sigininlx' htmlFor="reenter-password" >Re-Enter Password:</label>
              <FilledInput
                id="outlined-adornment-reenter-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                inputProps={{
                  style: { color: 'black' }
               }}
                onChange={e => setRePwd(e.target.value)}
                label="Reenter Password"
                required
                name={repwd}
                value={repwd}
                />
              {errors.password && touched.password ? <p>
                {errors.password}
              </p> : null}
            </FormControl>
            <FormControl sx={{ m:  0.9, width: '25ch' }} variant="outlined" required>
              <label className='sigininlx' htmlFor="userType" >Choose Registration Type:</label>
              <Select
                id="outlined-select-userType"
                label="User Type"
                value={userType}
                onChange={e => setUserType(e.target.value)}
                required
                >
                <MenuItem value={"ADMIN"}>Admin</MenuItem>
                <MenuItem value={"USER"}>User</MenuItem>
              </Select>
              {errors.userType && touched.userType ? <p>
                {errors.userType}
              </p> : null}
            </FormControl>
                    </div>
                    </div>
            <div className="social-signup">
              <IconButton className="social-button google-icon" onClick={handleGoogleSignup}>
                <Google/>
                </IconButton>
                <IconButton className="social-button github-icon" onClick={handleGithubSignup}>
                <GitHub/>
            </IconButton>
               <div className="social-signup">
    {/* <GoogleLogin
      clientId="YOUR_GOOGLE_CLIENT_ID"
      buttonText="Sign up with Google"
      onSuccess={handleGoogleSignup}
      onFailure={handleGoogleSignup}
      cookiePolicy={'single_host_origin'}
    /> */}
    
{/* <Google
onSuccess={(credentialResponse) => {
  console.log(credentialResponse);
}}
onError={() => {
  console.log('Login Failed');
}}
/> */}
    {/* <GithubLogin
      clientId="YOUR_GITHUB_CLIENT_ID"
      redirectUri="http://localhost:3000/login"
      onSuccess={handleGithubSignup}
      onFailure={handleGithubSignup}
    /> */}
            </div>
            <Button type="submit" onChange={handleChange} variant="contained" endIcon={<LoginIcon />}>
              <Link className='login' onSubmit={handleSubmit}>Register</Link>
                   </Button>
                   </div>
                   </FormGroup>
     </form>
     </Box>
     </div>
     <Box sx={{ width: '-50%', padding:   2 }}>
    <HorizontalScrollingItems/>
    </Box>
        </Box>
        {/* <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <Button component={Link} to="/login" variant="contained" endIcon={<LoginIcon />}>
            Register
          </Button>
        </Box> */}
     </div>
    </GoogleOAuthProvider>
 );
 }