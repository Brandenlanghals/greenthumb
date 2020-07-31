import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Api from "../utils/api";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 500,
    margin: "auto",
    textAlign: "center",
    border: "double",
  },
  submit: {
    margin: "auto",
  },
}));

export default function EditProfile() {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    console.log(location.pathname);
    console.log(location.state.userData);
  }, [location]);

  const handleSubmit = (e) => {
    Api.editUser({
      firstName: firstName,
      lastName: lastName,
      description: description,
      password: password,
    });
  };

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [description, setDescription] = useState();
  const [password, setPassword] = useState();

  return (
    <Card className={classes.card}>
      <form onSubmit={handleSubmit} className={classes.root}>
        <CardContent>
          <Typography variant="h6" className={classes.title}>
            Edit Profile
          </Typography>
          <br />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="firstName"
            className={classes.textField}
            margin="normal"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="lastName"
            className={classes.textField}
            margin="normal"
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Short Description"
            className={classes.textField}
            multiline
            rows="10"
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <TextField
            id="outlined-basic"
            variant="outlined"
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
