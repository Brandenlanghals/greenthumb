import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Api from "../utils/api";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function EditProfile() {
  const classes = useStyles();

  const handleSubmit = (e) => {
    Api.editUser({
      avatar: Image,
      firstName: firstName,
      lastName: lastName,
      about: about,
      password: password,
    });
  };

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [about, setAbout] = useState();
  const [password, setPassword] = useState();

  return (
    <Card className={classes.card}>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <Typography variant="h6" className={classes.title}>
            Edit Profile
          </Typography>
          <br />
          <TextField
            id="name"
            label="firstName"
            className={classes.textField}
            margin="normal"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <TextField
            id="name"
            label="lastName"
            className={classes.textField}
            margin="normal"
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <TextField
            id="multiline-flexible"
            label="about"
            multiline
            rows="2"
            className={classes.textField}
            margin="normal"
            onChange={(e) => setAbout(e.target.value)}
          />
          <br />
          <TextField
            id="password"
            type="password"
            label="Change Password"
            className={classes.textField}
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
          />
        </CardContent>
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            className={classes.submit}
          >
            Submit
          </Button>
        </CardActions>
      </form>
    </Card>
  );
}
