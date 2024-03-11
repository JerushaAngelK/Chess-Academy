import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { BookOnline } from '@mui/icons-material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Card2() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <BookOnline/>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Tactical Patterns"
        subheader="1 hour 53 minutes"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://media.istockphoto.com/id/1367004603/photo/chess-pieces-on-the-wood-stair-by-ranking.jpg?b=1&s=612x612&w=0&k=20&c=fNcpbPbVQIgcuq_3Eoy0GQKXrDdb6SqMgHO90cduwa4="
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        An intermediate-level course focusing on recognizing and applying common tactical motifs such as pins, forks, and skewers.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph fontStyle={'italic'}>Outcome:</Typography>
          <Typography paragraph>
          By the end of the course, students will have honed their tactical skills, developed a keen eye for tactical opportunities, and gained the confidence to unleash devastating tactical blows in their own games. Whether your goal is to outwit opponents in casual games or succeed in competitive play, this course will equip you with the tactical acumen needed to excel on the chessboard.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
