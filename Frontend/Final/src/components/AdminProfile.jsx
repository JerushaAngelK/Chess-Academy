import React from 'react';
import Lazy from './LazyLoading';
import { Avatar, Box, IconButton, Typography } from '@mui/material';
import { Edit } from '@mui/icons-material';
import AdminEditProfileModal from '../components/AdminEditProfile';

const AdminProfile = ({ adminProfile }) => {
//   if (!adminProfile) {
//     return <div><Lazy /></div>;
//   }
// const AdminProfile = {
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     institution: 'Chess Academy A',
//     location: 'New York',
//     profilePicture: 'https://example.com/path/to/profile/photo.jpg',
//   };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
      <Avatar alt="M" src={'../assets/images/uk.jpg'} sx={{ width:  100, height:  100 }} />
        <IconButton >
        <Edit onClick={<AdminEditProfileModal/>}/>
      </IconButton>
      <Typography variant="h5">Admin</Typography>
      <Typography variant="subtitle1">minkchessacademy@gmail.com</Typography>
      <Typography variant="body1">Mink Chess Academy</Typography>
      {/* <Typography variant="body1">{adminProfile.location}</Typography> */}
    </Box>
  );
};

export default AdminProfile;