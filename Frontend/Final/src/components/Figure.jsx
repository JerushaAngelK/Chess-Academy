import Figure from 'react-bootstrap/Figure';
import Mink from '../assets/images/Mink1.jpg';
import '../assets/css/figure.css';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import FigureImage from 'react-bootstrap/FigureImage'
import FigureCaption from 'react-bootstrap/FigureCaption'
import { Button, Divider } from '@mui/material';
import EditProfileModal from './EditProfile';
import { useEffect, useState } from 'react';
import axios from 'axios';
function FigureExample() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

// Inside your FigureExample component
const [userData, setUserData] = useState(null);

useEffect(() => {
  const fetchUserData = async () => {
     try {
       const userId = localStorage.getItem("tokens");
       const token = localStorage.getItem("token");
       const response = await axios.get(`http://localhost:8080/api/user-dashboards/${userId}`, {
         headers: {
           Authorization: `Bearer ${token}`,
           "Content-Type": "application/json",
         }
       });
       setUserData(response.data);
     } catch (error) {
       console.error('Error fetching user data:', error);
     }
  };
 
  fetchUserData();
 }, []);



  return (
    <div className='figure-container'>
      <div className='parta'>
    <Figure>
      <Figure.Image className='figure-image'
        width={171}
        height={180}
        alt="150x150"
        src={Mink}
        />
       <Button onClick={handleOpen} variant='contained' color='primary' className='red-button' shape='round' style={{backgroundColor:'rosybrown'}}>
        <EditRoundedIcon/>
        </Button> 
        <EditProfileModal open={open} handleClose={handleClose}/>
      <Figure.Caption>
        <h3>Ms.Lascrea Mink
        </h3>
      </Figure.Caption>
    </Figure>
        </div>
        <div className='partb'>
          <h3>Country: 🎌</h3>
          <h3>Age:22</h3>
          <h3>Title:Beginner</h3>
          <h3>About Me</h3>
          <p>
          "A lifelong chess enthusiast with a deep appreciation for the strategic depth and intellectual challenge that the game offers."
          </p>
        </div>
        </div>
  );
}

export default FigureExample;
// import { useState, useEffect } from 'react';
// import { Button } from '@mui/material';
// import EditRoundedIcon from '@mui/icons-material/EditRounded';
// import EditProfileModal from './EditProfile'; 
// import axios from 'axios';

// function FigureExample() {
//   const [open, setOpen] = useState(false);
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const userId = localStorage.getItem("tokens");
//         const token = localStorage.getItem("token");
//         const response = await axios.get(`http://localhost:8080/api/user-dashboards/${userId}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           }
//         });
//         setUserData(response.data);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, []);

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div className='figure-container'>
//       <div className='parta'>
//         <figure>
//           <img className='figure-image' width={171} height={180} alt="Profile" src={userData?.image} />
//           <Button onClick={handleOpen} className='edit-profile-icon'>
//             <EditRoundedIcon />
//           </Button>
//           <EditProfileModal open={open} handleClose={handleClose} user={userData} />
//           <figcaption>
//             <h3>{userData?.name}</h3>
//           </figcaption>
//         </figure>
//       </div>
//       <div className='partb'>
//         <h3>Country: {userData?.country}</h3>
//         <h3>Age: {userData?.age}</h3>
//         <h3>Title: {userData?.title}</h3>
//         <h3>About Me</h3>
//         <p>{userData?.aboutMe}</p>
//       </div>
//     </div>
//   );
// }

// export default FigureExample;
