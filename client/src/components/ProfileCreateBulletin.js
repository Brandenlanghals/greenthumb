import React, { useState } from "react";
import Api from "../utils/api";
import EventCalendar from "./EventCalendar"
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Checkbox,
  FormControlLabel,
  Button,
  TextField,
} from "@material-ui/core";

function Bulletin() {
  var style = {
    backgroundColor: "white",
    borderStyle: "solid",
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
  };
  var buttonStyle = {
    backgroundColor: "blue",
    align: "right",
  };
  var headerStyle = {
    textAlign: "center",
  };
  var align = {
    position: "right",
  };
  var input = {
    padding: 10,
    paddingLeft: 0.5,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    Api.createEvent({
      Address: Address,
      StartTime: StartTime,
      EndTime: EndTime,
      Date: Date,
    });
  };
  const [eventName, setEventName] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [Address, setAddress] = useState();
  const [StartTime, setStartTime] = useState();
  const [EndTime, setEndTime] = useState();
  const [eventDetails, setEventDetails] = useState();
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
                <InputLabel htmlFor="my-input">Address</InputLabel>
                <Input
                  id="my-input"
                  aria-describedby="my-helper-text"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </FormControl>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-sm">
                  <div className="col-sm">
                    <FormControl>
                      <InputLabel htmlFor="my-input">Event Details</InputLabel>
                      <TextField
                        id="my-input"
                        aria-describedby="my-helper-text"
                        onChange={(e) => setEventDetails(e.target.value)}
                      />
                    </FormControl>
                  </div>
                  <div>
                  <EventCalendar/>
                  </div>
                </div>
                {/* <div className="col-sm">
                <Checkbox
                  value="false"
                  inputProps={{ "aria-label": "Checkbox A" }}
                />
                <Checkbox
                  value="true"
                  inputProps={{ "aria-label": "Checkbox B" }}
                />
                <FormControl>
                  <InputLabel htmlFor="my-input">Granted City Approval</InputLabel>
                </FormControl>
              </div> */}
                <div style={align} className="col-sm">
                  <Button style={buttonStyle} type="submit">
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
export default Bulletin;
