import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import api from "../utils/api";

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

  let history = useHistory();

  const handleSubmit = (e) => {
    api.editUser({
      firstname: firstName,
      lastname: lastName,
      city: city,
      state: providence,
      description: description,
      password: password,
      id: id,
    });
    history.push({
      pathname: "/user/profile/",
    });
  };

  useEffect(() => {
    setId(sessionStorage.getItem("userId"));
  });

  const [id, setId] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [city, setCity] = useState();
  const [providence, setProvidence] = useState();
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
            label="city"
            className={classes.textField}
            margin="normal"
            onChange={(e) => setCity(e.target.value)}
          />
          <br />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="state"
            className={classes.textField}
            margin="normal"
            onChange={(e) => setProvidence(e.target.value)}
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
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </CardActions>
      </form>
    </Card>
  );
}
