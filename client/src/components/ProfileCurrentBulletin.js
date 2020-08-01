import React, { useState, useEffect } from "react";
import api from "../utils/api";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { InputLabel } from "@material-ui/core";

function CurrentBulletin() {
  const [eventState, setEventState] = useState([]);
  const [user, setUser] = useState();

  function handleSubmit(id) {
    api.joinEvent({ users: user, id: id });
  }

  useEffect(() => {
    api.getEvent().then((res) => {
      setEventState(res.data);
    });
    setUser(sessionStorage.getItem("userId"));
  }, []);

  var style = {
    backgroundColor: "#379683",
  };
  return (
    <div style={style}>
      {eventState.map((eachEvent) => (
        <Card key={eventState._id}>
          <CardContent>
            <div>
              <h1>{eachEvent.eventName}</h1>
              <InputLabel htmlFor="my-input">Location</InputLabel>
              <p>{eachEvent.eventLocation}</p>
              <InputLabel htmlFor="my-input">Details</InputLabel>
              <p>{eachEvent.eventDetails}</p>
              <InputLabel htmlFor="my-input">When?</InputLabel>
              {eachEvent.eventDate}
              {/* <button
                onClick={() => {
                  handleSubmit(eachEvent._id);
                }}
              >
                Join
              </button> */}
              <p>{eachEvent._id}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
export default CurrentBulletin;
