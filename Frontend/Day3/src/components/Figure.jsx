import Figure from 'react-bootstrap/Figure';
import Mink from '../assets/images/Mink1.jpg';
import '../assets/css/figure.css';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import FigureImage from 'react-bootstrap/FigureImage'
import FigureCaption from 'react-bootstrap/FigureCaption'
import { Button, Divider } from '@mui/material';
import EditProfileModal from './EditProfile';
import { useState } from 'react';
function FigureExample() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          {/* <p>
          "Offering personalized chess coaching services to players of all ages and skill levels, with a focus on improving tactical acumen and strategic planning."
          </p> */}
        </div>
        </div>
  );
}

export default FigureExample;