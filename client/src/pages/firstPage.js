import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="GreenThumbLogo"
          height="140"
          image="../../images/Screen Shot 2020-07-14 at 9.28.26 PM.png"
          title="Green Thumb"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Green Thumb
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Green Thumb is a place for people to connect and make the world a better place. Create events, connect with people, beautify your city. Sign up today and make your community a better place to be.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href="/signIn" size="medium" color="primary">
          Login
        </Button>
        <Button href="/signUp" size="medium" color="primary">
          Sign Up
        </Button>
      </CardActions>
    </Card>
  );
}