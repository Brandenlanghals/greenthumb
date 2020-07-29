import React, { useState } from "react";
import api from "../utils/api";
import EventCalendar from "./EventCalendar"
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField,
} from "@material-ui/core";

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
  const [EventName, setEventName] = useState();
  const [Address, setAddress] = useState();
  const [EventDetails, setEventDetails] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    api.createEvent({
      eventName: EventName,
      location: Address,
      eventDetails: EventDetails,
      
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
                  onChange={(e) => setAddress(e.target.value)}
                />
              </FormControl>
            </div>
            <br>
            </br>
            <div className="container">
              <div className="row">
                <div className="col-sm">
                  <div className="col-sm">
                    <FormControl>
                    <TextField id="outlined-basic" label="Event Details" variant="outlined"
                        onChange={(e) => setEventDetails(e.target.value)}
                      />
                    </FormControl>
                  </div>
                </div>
                <div>
                  {/* this piece is not working correctly with error msg in inspect */}
                  <EventCalendar/>
              
                </div>
                <div style={align} className="col-sm">
                  <Button onClick={handleSubmit} style={buttonStyle} variant="contained">
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

