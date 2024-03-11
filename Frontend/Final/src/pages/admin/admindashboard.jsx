// // import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import FigureExample from '../../components/Figure';
// import PieActiveArc from '../../components/PieChart';
// import '../../assets/css/magicscroll.css';
// import '../../components/magicscroll';
// import Slide from '../../components/Slider';
// import { BookTwoTone, ContactEmergency, Person2, SchoolRounded } from '@mui/icons-material';

// const drawerWidth = 240;

// export default function AdminPermanentDrawerLeft() {
//   return (
//     <div>
//       <head>

// <script src="../../components/magicscroll.js"></script>
//       </head>
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         color='secondary'
//         sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
//         >
//         <Toolbar>
//           <Typography variant="h6" noWrap component="div">
//             Dashboard
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//           },
//         }}
//         variant="permanent"
//         anchor="left"
//         >
//         <Toolbar />
//         <Divider />
//         <List>
//           {['Basic Information', 'Insitutions', 'Courses', 'Students'].map((text, index) => (
            
//                   <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   <ContactEmergency/>
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//             //        <ListItem key={text} disablePadding>
//             //   <ListItemButton>
//             //     <ListItemIcon>
//             //       <ContactEmergency/>
//             //     </ListItemIcon>
//             //   </ListItemButton>
//             //     <ListItemText primary={text} />
//             //   <ListItemButton>
//             //     <ListItemIcon>
//             //       <SchoolRounded/>
//             //     </ListItemIcon>
//             //   </ListItemButton>
//             // </ListItem> 
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {['Contests', 'Rankings', 'Reports'].map((text, index) => (
//             <ListItem key={text} disablePadding>
//             <ListItemButton>
//             <ListItemIcon>
//             {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//             </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <Box
//         component="main"
//         sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
//         >
//         <Toolbar />
//         <FigureExample/>
//         <Divider />
//        <div>
//         <PieActiveArc/>
//        </div>
//       </Box>
//     </Box>
//         </div>
//   );
// }
import * as React from 'react';
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
import AdminProfile from '../../components/AdminProfile';
import StudentList from '../../components/StudentList';
import LessonScheduler from '../../components/LessonScheduler';
import ProgressTracker from '../../components/ProgressTracker';
import OnlinePlay from '../../components/OnlinePlay';
import Resources from '../../components/Resources';
import Announcements from '../../components/Announcements';
import Messaging from '../../components/Messages';

const drawerWidth =  240;

const AdminDashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color='secondary'
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink:  0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {['Admin Profile', 'Student Management', 'Lesson Scheduling', 'Progress Tracking', 'Online Play', 'Resources', 'Announcements', 'Messaging'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index %  2 ===  0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow:  1, bgcolor: 'background.default', p:  3 }}
      >
        <Toolbar />
        <AdminProfile />
        {/* <Divider /> */}
        {/* <StudentList /> */}
        <Divider />
        <LessonScheduler />
        <Divider />
        <ProgressTracker />
        <Divider />
        <OnlinePlay />
        <Divider />
        <Resources />
        <Divider />
        <Announcements />
        <Divider />
        <Messaging />
      </Box>
    </Box>
  );
};

export default AdminDashboard;