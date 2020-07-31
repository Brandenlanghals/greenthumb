import React, { useState, useEffect } from "react";
import OutlinedCard from "./card";
import api from "../utils/api";

function CurrentBulletin() {
  //const [eventState, setEventState] = useState([]);
  useEffect(() => {
    const events = [];
    api.getEvent().then((res) => {
      const events = [];
      console.log(res.data);
      for (let i = 0; i < 10; i++) {
        events.push({
          //eventName: res.data.eventName,
          //location: res.data.location,
          date: res.data.date,
          //startTime: res.data.startTime,
          //eventDetails: res.data.eventDetails,
        });
      }
    });
    console.log(events);
  }, []);

  var style = {
    backgroundColor: "white",
  };
  return (
    <div>
      <div style={style}>
        <OutlinedCard />
      </div>
      <div style={style}>
        <OutlinedCard />
      </div>
      <div style={style}>
        <OutlinedCard />
      </div>
      <div style={style}>
        <OutlinedCard />
      </div>
    </div>
  );
}
export default CurrentBulletin;
