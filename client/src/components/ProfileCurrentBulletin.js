import React, { useState, useEffect } from "react";
import api from "../utils/api";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

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
    backgroundColor: "white",
  };
  return (
    <div className="">
      <h1>Current Events</h1>
      {eventState.map((eachEvent) => (
        <Card key={eventState._id}>
          <CardContent>
            <h1>{eachEvent.eventName}</h1>
            <p>{eachEvent.eventDetails}</p>
            {eachEvent.eventDate}
            <button
              onClick={() => {
                handleSubmit(eachEvent._id);
              }}
            >
              Join
            </button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
export default CurrentBulletin;
