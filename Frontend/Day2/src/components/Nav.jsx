import { Link } from 'react-router-dom'
// import './Nav.css';
import  Button  from '@mui/material/Button';
import PersistentDrawerLeft from '../components/Drawer';
const Navbar = () => {
    return (
        <div className="container-fluid">
                    <PersistentDrawerLeft/>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                               <Button className='x'variant='contained' color='success' ><Link to="/home">BACK</Link></Button> 
                            <Button className='y' variant='contained' color='info'><Link  to="/addProduct">ADD</Link></Button>
                    </div>
                </div>
    )
}

export default Navbar;
