import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import EventCalendar from "./EventCalendar"
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import api from "../utils/api";
import CardActions from '@material-ui/core/CardActions';
import {
  Link,
  InputLabel,
  Input,
  Button,
  TextField,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

//Styling here
var style = {
  backgroundColor: "#659DBD",
  borderStyle: "solid",
  padding: 20,
  paddingTop: 10,
  paddingBottom: 10,
};
var buttonStyle = {
  backgroundColor: "#41EF70",
  align: "right",
};
var headerStyle = {
  textAlign: "center",
};
var input = {
  backgroundColor: "white",
  
};

export default function Bulletin() {
  const [eventName, setEventName] = useState();
  const [eventLocation, setEventLocation] = useState();
  const [eventDetails, setEventDetails] = useState();
  // const [startTime, setStartTime] = useState();
  // const [eventDate, setEventDate] = useState();

  const [eventDate, setSelectedDate] = React.useState(new Date(Date()));
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [startTime, setSelectedTime] = React.useState(new Date(Date()));
  const handleTimeChange = (date) => {
    setSelectedTime(date);
  };

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  let history = useHistory();

  const handleSubmit = (e) => {
    api
      .createEvent({
        eventName: eventName,
        eventLocation: eventLocation,
        eventDetails: eventDetails,
        startTime: startTime,
        eventDate: eventDate,

      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={style}>
        <h1 style={headerStyle}>Create Event</h1>
        <div className="container">
          <div className="row">
          <CardActions style={{justifyContent: 'center'}}>
            <div className="col-sm">
                <InputLabel htmlFor="my-input">Event Name</InputLabel>
                <Input
                  id="my-input"
                  style={input}
                  variant="filled"
                  aria-describedby="my-helper-text"
                  onChange={(e) => setEventName(e.target.value)}
                />
            </div>
            </CardActions>
            <CardActions style={{justifyContent: 'center'}}>
            <div className="col-sm">
                <InputLabel htmlFor="my-input">Location</InputLabel>
                <Input
                  id="my-input"
                  style={input}
                  aria-describedby="my-helper-text"
                  onChange={(e) => setEventLocation(e.target.value)}
                />
            </div>
            </CardActions>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
              <CardActions style={{justifyContent: 'center'}}>
              <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  format="MM/dd/yyyy"
                  value={eventDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
                <CardActions style={{justifyContent: 'center'}}></CardActions>
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Time picker"
                  value={startTime}
                  onChange={handleTimeChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                />
                </CardActions>
              </Grid>
            </MuiPickersUtilsProvider>
            <br></br>
            <div className="container">
              <div className="row">
                <div className="col-sm">
                  <div className="col-sm">
                    <CardActions style={{justifyContent: 'center'}}>
                      <TextField
                        id="full-width-text-field"
                        label="Tell us about your event"
                        width= "auto"
                        style={input}
                        variant="filled"
                        onChange={(e) => setEventDetails(e.target.value)}
                      />
                      </CardActions>
                  </div>
                </div>
                <div></div>
                <div className="col-sm">
                <CardActions style={{justifyContent: 'center'}}>
                  <Link to={"/user/profile"}>
                  <Button
                    href="/user/profile"
                    type="submit"
                    onClick={handleSubmit}
                    style={buttonStyle}
                    variant="contained"
                    onSubmit={handleClose}
                  >
                    Submit
                  </Button>
                  </Link>
                  </CardActions>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
