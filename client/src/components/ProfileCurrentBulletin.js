import React, { useState, useEffect } from "react";
import api from "../utils/api";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from '@material-ui/core/CardActions';
import CardContent from "@material-ui/core/CardContent";
// import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import {
  InputLabel,
  Input,
  Button,
  TextField,
} from "@material-ui/core";

function CurrentBulletin() {
  const [eventState, setEventState] = useState([]);

  function handleSubmit(e) {
    api.joinEvent(e);
  }

  useEffect(() => {
    const events = [];
    api.getEvent().then((res) => {
      console.log(res.data);
      setEventState(res.data);
    });
  }, []);

  var style = {
    backgroundColor: "#379683",
  };
  return (
    <div style={style}>
      {eventState.map((eachEvent) => (
        <Card>
          <CardContent>
            <div>
            <h1>{eachEvent.eventName}</h1>
            <InputLabel htmlFor="my-input">Location</InputLabel>
            <p>{eachEvent.eventLocation}</p>
            <InputLabel htmlFor="my-input">Details</InputLabel>
            <p>{eachEvent.eventDetails}</p>
            <InputLabel htmlFor="my-input">When?</InputLabel>
            {eachEvent.eventDate}
            <p>{eachEvent._id}</p>
            </div>
          </CardContent>
          <button onClick={handleSubmit(eachEvent._id)}>Join</button>
        </Card>
      ))}
    </div>
  );
}
export default CurrentBulletin;
