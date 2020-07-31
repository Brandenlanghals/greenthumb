import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import EventCalendar from "./EventCalendar"
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import api from "../utils/api";
import {
  FormControl,
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

var style = {
  backgroundColor: "white",
  borderStyle: "solid",
  padding: 20,
  paddingTop: 10,
  paddingBottom: 10,
};
var buttonStyle = {
  backgroundColor: "#A9CEE3",
  align: "right",
};
var headerStyle = {
  textAlign: "center",
};
var align = {
  position: "right",
};

export default function Bulletin() {
  const [eventName, setEventName] = useState();
  const [eventlocation, setEventLocation] = useState();
  const [eventDetails, setEventDetails] = useState();
  const [startTime, setStartTime] = useState();
  const [eventDate, setEventDate] = useState();

  const [selectedDate, setSelectedDate] = React.useState(new Date(Date()));
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .createEvent({
        eventName: eventName,
        eventlocation: eventlocation,
        eventDetails: eventDetails,
        startTime: startTime,
        eventDate: eventDate,
      })
      .then((res) => {
        console.log(res.data);
        history.push("/user/profile");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={style}>
        <h1 style={headerStyle}>Create Event</h1>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <FormControl>
                <InputLabel htmlFor="my-input">Event Name</InputLabel>
                <Input
                  id="my-input"
                  aria-describedby="my-helper-text"
                  onChange={(e) => setEventName(e.target.value)}
                />
              </FormControl>
            </div>
            <div className="col-sm">
              <FormControl>
                <InputLabel htmlFor="my-input">Location</InputLabel>
                <Input
                  id="my-input"
                  aria-describedby="my-helper-text"
                  onChange={(e) => setEventLocation(e.target.value)}
                />
              </FormControl>
            </div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  format="MM/dd/yyyy"
                  value={selectedDate}
                  // onChange={(e) => setEventDate(e.target.value)}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Time picker"
                  // onChange={(e) => setStartTime(e.target.value)}
                  KeyboardButtonProps={{
                    "aria-label": "change time",
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
            <br></br>
            <div className="container">
              <div className="row">
                <div className="col-sm">
                  <div className="col-sm">
                    <FormControl>
                      <TextField
                        id="outlined-basic"
                        label="Event Details"
                        variant="outlined"
                        onChange={(e) => setEventDetails(e.target.value)}
                      />
                    </FormControl>
                  </div>
                </div>
                <div></div>
                <div style={align} className="col-sm">
                  <Button
                    onClick={handleSubmit}
                    style={buttonStyle}
                    variant="contained"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
