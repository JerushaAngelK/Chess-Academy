import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import SecurityIcon from '@mui/icons-material/Security';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { useSelector } from 'react-redux';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import { AutoStories, Domain, Groups2, Logout, Report, School } from '@mui/icons-material';
import { useState } from 'react';

const drawerWidth = 340;

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   }),
// );

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '30ch',
      },
    },
  }));
  

export default function AdminPersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  // const user = useSelector((state) => state.user);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}><Link to='/admindashboard'>

      
        Dashboard
      </Link>
        {/* </Typography> */}
        </MenuItem>
      <MenuItem onClick={handleMenuClose}><Link to='/adminsettings'>Settings</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}><Link to='/'>LogOut</Link></MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={10} color="error">
            <NotificationsIcon />
            {/* <FlagCircleIcon/> */}
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          >
             {/* <Stack direction="row" spacing={2}> */}
{/* <Typography {user.userName}/> */}
          <AccountCircle />
          {/* <Avatar>H</Avatar> */}
             {/* </Stack> */}
      {/* <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
      <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar> */}
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
    
  );
  
  return (
    <div className='draw'>

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar style={{backgroundColor:"#A67B5B"}}position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mink Chess Academy
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              />
          </Search>
          <Typography style={{color:"whitesmoke"}}>Welcome
          {/* {user.userName} */}
          !</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              >
              <Link to='/noti' className='see' > 
                <NotificationsIcon/>
                </Link>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              >
                {/* <Typography>Hello,{user.userName}<span></span></Typography> */}
              <AccountCircle />
              {/* <Avatar>H</Avatar> */}
                {/* <Avatar sx={{ bgcolor: grey }}>LM</Avatar> */}
            </IconButton>
            {/* <ToggleColorMode/> */}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
              >
              <MoreIcon />
            </IconButton>
                {/* </Link> */}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor:"#A67B5B",
          },
        }}
        // label="Hello"
        variant="persistent"
        anchor="left"
        open={open}
        >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
  <ListItem disablePadding>
    <ListItemButton>
      <ListItemIcon>
        <p>
          <Link to='/manageins'><Domain/></Link>
        </p>
      </ListItemIcon>
      <Link to='/manageins'>  <ListItemText primary='Manage Insitutions' /></Link>
    </ListItemButton>
  </ListItem>

  <ListItem disablePadding>
    <ListItemButton>
      <ListItemIcon>
        <p>
          <Link to='/assigncourses'><School/></Link>
        </p>
      </ListItemIcon>
      <Link to='/assignCourses'> <ListItemText primary='Assign Courses' /></Link>
    </ListItemButton>
  </ListItem>

  <ListItem disablePadding>
    <ListItemButton>
      <ListItemIcon>
        <p>
          <Groups2/>
        </p>
      </ListItemIcon>
      <Link to='/studentdb'> <ListItemText primary='Student Database' /></Link>
    </ListItemButton>
  </ListItem>

        <Divider />
  <ListItem disablePadding>
    <ListItemButton>
      <ListItemIcon>
        <p>
          <Link to='/login'><Logout/></Link>
        </p>
      </ListItemIcon>
      <Link to='/login'>  <ListItemText primary='Logout' /></Link>
    </ListItemButton>
  </ListItem>
</List>
        {/* <List>
  <ListItem disablePadding>
    <ListItemButton>
      <ListItemIcon>
        <p><Link to='/smart'><AddHomeWorkIcon/></Link></p>
      </ListItemIcon>
      <Link to='/smart'> <ListItemText primary='Smart home integration' /></Link>
    </ListItemButton>
  </ListItem>

  <ListItem disablePadding>
    <ListItemButton>
      <ListItemIcon>
        <p><Link to='/energy'><EnergySavingsLeafIcon/></Link></p>
      </ListItemIcon>
      <Link to='/energy'> <ListItemText primary='Energy consumption monitoring' /></Link>
    </ListItemButton>
  </ListItem>

  <ListItem disablePadding>
    <ListItemButton>
      <ListItemIcon>
        <p><Link to='/security'><SecurityIcon/></Link></p>
      </ListItemIcon>
      <Link to='/security'>  <ListItemText primary='Home security and surveillance' /></Link>
    </ListItemButton>
  </ListItem>

  <ListItem disablePadding>
    <ListItemButton>
      <ListItemIcon>
        <p><Link to='/progress'><LocalAtmIcon/></Link></p>
      </ListItemIcon>
      <Link to='/progress'> <ListItemText primary='Budgeting and expense tracking' /></Link>
    </ListItemButton>
  </ListItem>
</List> */}

        
      </Drawer>
        <DrawerHeader />
  
      {renderMobileMenu}
      {renderMenu}
    </Box>
    <br />
        </div>
  );
}
