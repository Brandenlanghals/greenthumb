import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { CardActions } from '@material-ui/core';
import { Paper } from '@material-ui/core';

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


const useStyles = makeStyles((theme) => ({
  image: {
    backgroundImage: "url(https://i.ibb.co/2hnf6xz/cuyahogariverlogo.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    // backgroundPosition: "center",
    width: '100vw',
    height: '100vh'
  },
  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Raleway, Arial',
    align: 'center'
  },
  root: {
    justifyContent: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(35),
  },
  typography: {
    fontFamily: 'Raleway, Arial',
    align: 'center',
    color: 'black'
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <div className={classes.image}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <form className={classes.form}>
        <Typography className={classes.typography} variant="h5" color="textSecondary" component="p">
            Green Thumb is a place for people to connect and make the world a better place. You can create events in your community, connect with people, & beautify your city. Sign up today and make your community a better place to be.
        </Typography>
        <CardActions classes={{root: classes.root}}>
        <Button color="blue" href="/signin" variant="contained" >Sign In</Button>
        <Box mt={2}></Box>
        <Button href="/signup" variant="contained">Create An Account</Button>
        </CardActions>
        </form>
      </div>
      
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </div>
  );
}