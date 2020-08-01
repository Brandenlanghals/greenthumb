import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import "../styles.css";
import Background from "../components/Background/Background";

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="">
          Green Thumb
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
//Links for avatars at bottom of page
const faces = [
  "http://i.pravatar.cc/300?img=1",
  "http://i.pravatar.cc/300?img=2",
  "http://i.pravatar.cc/300?img=3",
  "http://i.pravatar.cc/300?img=4"
];

//Background color
// document.body.style = 'background: #A9CEE3';

//All styling
const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 800,
    margin: "auto",
    transition: "0.3s",
    border: "10px",
    boxShadow: "0 10px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(9)
    }
  },
  media: {
    paddingTop: "75%"
  },
  content: {
    textAlign: "center",
    
  },
  button: {
    backgroundColor: "#A9CEE3"
    
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  },
  typography: {
        fontFamily: 'Raleway, Arial',
        color: 'black',
        padding: [10]
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      
    }
  }
}));
//This is the card/page contents
function FirstPage() {
  const classes = useStyles();


  return (
    <div className="FirstPage">
      <Background backgroundImage="https://images.unsplash.com/photo-1489644484856-f3ddc0adc923?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80">
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={
            "https://i.ibb.co/2hnf6xz/cuyahogariverlogocopy.jpg"
          }
        />
        <CardContent className={classes.content}>
          <Typography variant="h5"
            gutterBottom
          >
            Green Thumb - Small Actions equal BIG Thumbprints.
          </Typography>
          <Typography className={classes.typography}
            variant="body1"
          >
            Green Thumb is where people connect to make the world a better place. Create or join events, and beautify your community 
            by organizing clean-ups, planting trees, flowers, or simply gathering for a good cause. 
            To get started today sign-in or create an account below.
          </Typography>
          <Box mt={2}></Box>
          <Grid item xs={12}>
          <Button className={classes.button} href="/signin" variant="contained" >Sign In</Button>
          </Grid>
          <Box mt={2}></Box>
          <Grid item xs={12}>
          <Button className={classes.button} href="/signup" variant="contained">Create An Account</Button>
          </Grid>
          <Box mt={2}></Box>
          {faces.map(face => (
            <Avatar className={classes.avatar} key={face} src={face} />
          ))}
        </CardContent>
        <Box mt={1}>
        <Copyright />
        </Box>
      </Card>
      </Background>
    </div>
  );
}

export default FirstPage;