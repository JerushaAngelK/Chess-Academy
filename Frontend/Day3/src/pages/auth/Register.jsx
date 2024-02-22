// import { useState }  from "react";
// import Button from '@mui/material/Button';
// import LoginIcon from '@mui/icons-material/Login';
// import { Link } from "react-router-dom";
// import Box from '@mui/material/Box';
// import FormControl from '@mui/material/FormControl';
// import FormHelperText  from "@mui/material/FormHelperText";
// import '../../assets/css/signup.css';
// import EmailIcon from '@mui/icons-material/Email';
// import FilledInput from '@mui/material/FilledInput';
// import { AccountCircle } from '@mui/icons-material';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import {IconButton } from '@mui/material';
// import FormGroup from "@mui/material/FormGroup";
// import { useNavigate } from 'react-router-dom';
// // import '../../assets/css/login.css';
// import InputAdornment from '@mui/material/InputAdornment';
// import axios from 'axios';


// export default function Register(){

//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [userType, setUserType] = useState('');
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});


//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     e.preventDefault();
//   }


//   const handleSubmit = async (event) => {
//    event.preventDefault();
//     // console.log(formData);
//     try{
//      const response=await axios.post(
//     'http://localhost:8080/api/v1/auth/register',
//     {
//      userName:userName,
//      password:password,
//      email:email,
//      userType:userType
//    }
//      );
//     navigate("/Login");
//      alert("Signed up a new account successfully.Please Login");}
//     catch(error){
//     alert(error.message);
//      }
//     };

//   const [showPassword, setShowPassword] = useState(false);

//   const handleClickShowPassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };
 

//     return(
//         <div className='twox'>
//          <form onSubmit={handleSubmit}>
//         <div className='firstx'>
//         <h1 className='secondx' style={{fontSize:38}}>Mink Chess Academy</h1>
//         {/* <h1 className='second' style={{fontSize:38}}>Elan Banking</h1> */}
//           <h3 className='fifthx'>Join Us</h3>
// <FormGroup sx={{padding: 1, borderRadius: 1, border: '1px solid', borderColor: 'primary.main'}}>
// <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" type='email'>
// <label className='signinlx' htmlFor="email" label="User Identity">Email:</label>
//       <FilledInput
//         id="outlined-adornment-email"
//         type="email"
//         endAdornment={<InputAdornment position="end"> <EmailIcon /></InputAdornment>}
//         aria-describedby="outlined-weight-helper-email"
//         inputProps={{
//             'aria-label': 'email',
//         }}
//         onChange={e => setEmail(e.target.value)}

//         label="Email"
//         required
//         name={email}
//         value={email}
//         />
//         {errors.email && touched.email?<p>
//           {errors.email}
//         </p>:null}
//       <FormHelperText id="outlined-weight-helper-email"></FormHelperText>
//     </FormControl>
//     <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" required>
//         <label className='signinlx' htmlFor="password" >Password:</label>
//           <FilledInput
          
//             id="outlined-adornment-password"
//             type={showPassword ? 'text' : 'password'}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                   edge="end"
//                 >
//                   {showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//             }
//             onChange={e => setPassword(e.target.value)}

//             label="Password"
//             required
//             name={password}
//             value={password}
//           />
// {errors.password && touched.password?<p>
//           {errors.password}
//         </p>:null}
//         </FormControl>
//     {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" required>
//     <label className='signinlx' HtmlFor="name">User Name:</label>
//       <FilledInput
//         id="outlined-adornment-weight"
//         endAdornment={<InputAdornment position="end" > <AccountCircle /></InputAdornment>}
//         aria-describedby="outlined-weight-helper-text"
//         inputProps={{
//           'aria-label': 'weight',
//         }}
//         onChange={e => setUserName(e.target.value)}

//         required
//         label="Username"
//         name={userName}
//         value={userName}
//         />
//         {errors.userName && touched.userName?<p>
//           {errors.userName}
//         </p>:null}
//       <FormHelperText id="outlined-weight-helper-text"></FormHelperText>
//       </FormControl> */}
    
//         <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>

      
//     </Box>


//         </FormGroup> 
//      {/* <label className='sigininlx' htmlFor="text" >Worker/Owner:</label> */}
//      <br/>
//       {/* <TextField required id="outlined-basic" label="" variant="outlined"sx={{scale:"1"}} 
//       onChange={e => setUserType(e.target.value)}
//       name={userType}
//       value={userType}
// /> */}
// {errors.userType && touched.userType?<p>
//           {errors.userType}
//         </p>:null}
//       <FormHelperText id="outlined-weight-helper-text"></FormHelperText>
//     <br/>
//         <Button type="submit" onChange={handleChange} variant="contained" endIcon={<LoginIcon />}>
//           <Link to="/login" className='login'>Register</Link>
//       </Button>
//     </div>
//     </form>
//       </div>
// )
// }
import * as React from 'react';
import { useState } from "react";
import { Google } from "@mui/icons-material";
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormHelperText from "@mui/material/FormHelperText";
import '../../assets/css/signup.css';
import EmailIcon from '@mui/icons-material/Email';
import FilledInput from '@mui/material/FilledInput';
import { AccountCircle } from '@mui/icons-material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { IconButton, MenuItem, Select } from '@mui/material';
import FormGroup from "@mui/material/FormGroup";
import { useNavigate } from 'react-router-dom';
import InputAdornment from '@mui/material/InputAdornment';
import axios from 'axios';
import { GitHub } from "@mui/icons-material";
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function Register() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('');
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
  }

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
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8080/api/v1/auth/register',
        {
          userName: userName,
          password: password,
          email: email,
          userType: userType
        }
      );
      navigate("/Login");
      alert("Signed up a new account successfully. Please Login");
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

    <div className='firstx'>
      <form onSubmit={handleSubmit}>
          <h1 className='secondx'>Mink Chess Academy</h1>
        <div className='secondxx'>
          <h3 className='fifthx'>Join Us</h3>
          <FormGroup sx={{ padding:  1, borderRadius:  1, border: '1px solid', borderColor: 'primary.main' }}>
            <FormControl sx={{ m:  0.9, width: '25ch' }} variant="outlined" type='email'>
              <label className='sigininlx' htmlFor="email" label="User Identity">Email:</label>
              <FilledInput
                id="outlined-adornment-email"
                type="email"
                endAdornment={<InputAdornment position="end"> <EmailIcon /></InputAdornment>}
                aria-describedby="outlined-weight-helper-email"
                inputProps={{
                    'aria-label': 'email',
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
            <FormControl sx={{ m:  0.9, width: '25ch' }} variant="outlined" required>
              <label className='sigininlx' htmlFor="reenter-password" >Reenter Password:</label>
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
                onChange={e => setPassword(e.target.value)}
                label="Reenter Password"
                required
                name={password}
                value={password}
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
                <MenuItem value={"admin"}>Admin</MenuItem>
                <MenuItem value={"student"}>Student</MenuItem>
              </Select>
              {errors.userType && touched.userType ? <p>
                {errors.userType}
              </p> : null}
            </FormControl>
            <div className="social-signup">
              {/* <IconButton className="social-button google-icon" onClick={handleGoogleSignup}>
                <Google/>
                </IconButton>
                <IconButton className="social-button github-icon" onClick={handleGithubSignup}>
                <GitHub/>
            </IconButton> */}
               <div className="social-signup">
    {/* <GoogleLogin
      clientId="YOUR_GOOGLE_CLIENT_ID"
      buttonText="Sign up with Google"
      onSuccess={handleGoogleSignup}
      onFailure={handleGoogleSignup}
      cookiePolicy={'single_host_origin'}
    /> */}
    
<Google
onSuccess={(credentialResponse) => {
    console.log(credentialResponse);
}}
onError={() => {
    console.log('Login Failed');
}}
/>
    {/* <GithubLogin
      clientId="YOUR_GITHUB_CLIENT_ID"
      redirectUri="http://localhost:3000/login"
      onSuccess={handleGithubSignup}
      onFailure={handleGithubSignup}
    /> */}
            </div>
            <Button type="submit" onChange={handleChange} variant="contained" endIcon={<LoginIcon />}>
              <Link to="/login" className='login'>Register</Link>
                   </Button>
                   </div>
                   </FormGroup>
     </div>
     </form>
       </div>
    </GoogleOAuthProvider>
 );
 }