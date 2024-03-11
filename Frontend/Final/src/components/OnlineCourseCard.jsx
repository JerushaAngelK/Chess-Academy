import { useEffect, useState } from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography, Snackbar } from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import { BookOnline, Close, MoreVert } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';
import axios from 'axios';
// import  {ChessPieceIcon}  from '../assets/images/chess-piece-svgrepo-com.svg';

const OnlineCourseCard = ({ course }) => {
    const [expanded, setExpanded] = useState(false);
    const [enroll, setEnroll] = useState(() => {
        // Initialize enroll state from localStorage if available, otherwise use the course prop
        const storedEnroll = localStorage.getItem(`enroll-${course.id}`);
        return storedEnroll !== null ? JSON.parse(storedEnroll) : course.enroll;
    });

    useEffect(() => {
        // Update localStorage whenever enroll state changes
        localStorage.setItem(`enroll-${course.id}`, JSON.stringify(enroll));
    }, [enroll]);


    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    
    const handleFavoriteClick = async () => {
        setEnroll(!enroll);
        try {
            const response = await axios.put(`http://localhost:8080/api/online-courses/${course.id}`, {
                enroll: !enroll,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                }
            });
            console.log("Enroll status updated successfully:", response.data);
            setOpenSnackbar(true); 
        } catch (error) {
            console.error('Error updating enroll status:', error);
            setEnroll(enroll); 
        }
    };

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    return (
        <Card sx={{ maxWidth: 345}}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        <BookOnline/>
                        {/* <SvgIcon> */}
                            {/* <ChessPieceIcon/>  */}
                            {/* </SvgIcon>  */}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert/>
                    </IconButton>
                }
                title={course.title}
                subheader={course.time}
            />
            <CardMedia
                component="img"
                height="194"
                image={course.image}
                alt={course.title}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {course.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={handleFavoriteClick}>
                    <FavoriteIcon  color={enroll ? "success" : "inherit"}/>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton
                    aria-expanded={expanded}
                    onClick={handleExpandClick}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph fontStyle={'italic'}>Outcome:</Typography>
                    <Typography paragraph>
                        {course.outcome}
                    </Typography>
                </CardContent>
            </Collapse>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                message="Enroll status updated successfully!"
                action={
                    <IconButton size="small" color="inherit" onClick={handleSnackbarClose}>
                        <Close fontSize="small" />
                    </IconButton>
                }
            />
        </Card>
    );
}

OnlineCourseCard.propTypes = {
    course: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        outcome: PropTypes.string.isRequired,
    }).isRequired,
};

export default OnlineCourseCard;
