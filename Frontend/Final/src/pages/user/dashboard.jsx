import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import FigureExample from '../../components/Figure';
import PieActiveArc from '../../components/PieChart';
import '../../assets/css/magicscroll.css';
import '../../components/magicscroll';
import Slide from '../../components/Slider';
import { getUserDashboardById, getAllUserDashboards } from './../../../src/services/axios';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { Button } from '@mui/material';
import EditProfileModal from '../../components/EditProfile';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const [userDashboards, setUserDashboards] = useState([]);
  const [user, setUser] = useState(null);
  const [openEditProfileModal, setOpenEditProfileModal] = useState(false);

  const handleOpenEditProfileModal = () => {
     setOpenEditProfileModal(true);
  };
 

  const handleCloseEditProfileModal = () => {
    setOpenEditProfileModal(false);
   };
   
   const token = localStorage.getItem("token");
   
   useEffect(() => {
    const fetchData = async () => {
       try {
         const headers = {
           Authorization: `Bearer ${token}`,
           "Content-Type": "application/json",
         };
         const response = await getAllUserDashboards(headers);
         setUserDashboards(response);
         setUser(response[0]);
       } catch (error) {
         console.error("Failed to fetch user dashboards:", error);
       }
    };
   
    fetchData();
   }, []);


  const handleEditProfile = async (updatedUserData) => {
    try {
      const userId = localStorage.getItem("tokens");
      const token = localStorage.getItem("token");
      const response = await axios.put(`http://localhost:8080/api/user-dashboards/${userId}`, updatedUserData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }
      });
      setUser(response.data); // Update the user state with the new data
    } catch (error) {
      console.error("Failed to update user profile:", error);
    }
   };
   
   const handleDeleteProfileImage = async () => {
    try {
      const userId = localStorage.getItem("tokens");
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:8080/api/user-dashboards/${userId}/image`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }
      });
      setUser({ ...user, image: null }); // Remove the image from the user state
    } catch (error) {
      console.error("Failed to delete profile image:", error);
    }
   };
  return (
    <div>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color='secondary'
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
        >
        <Toolbar />
        <Button onClick={handleOpenEditProfileModal}>Edit Profile</Button>
        {/* The EditProfileModal component */}
        <EditProfileModal
          open={openEditProfileModal}
          handleClose={handleCloseEditProfileModal}
          user={user}
          onSubmit={handleEditProfile}
          onDeleteImage={handleDeleteProfileImage}
        />
        <Divider />
        <List>
          {['Basic Information', 'Enrolled Courses', 'Suggestion/Requests', 'Overall Ranking'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Typography><h5 className='ddd'>Challenges Participated:-</h5></Typography>
    <Slide/>

      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
        <Toolbar />
        <FigureExample/>
        <Divider />
       <div>
        <PieActiveArc/>
       </div>
      </Box>
    </Box>
        </div>
  );
}
