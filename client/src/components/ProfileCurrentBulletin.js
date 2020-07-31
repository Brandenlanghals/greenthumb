import React, { useState, useEffect } from "react";
import api from "../utils/api";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from '@material-ui/core/CardActions';
import CardContent from "@material-ui/core/CardContent";
// import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";

function CurrentBulletin() {
  const [eventState, setEventState] = useState([]);

  useEffect(() => {
    const events = [];
    api.getEvent().then((res) => {
      console.log(res.data);
      setEventState(res.data);
    });
  }, []);

  var style = {
    backgroundColor: "white",
  };
  return (
    <div className="">
      {eventState.map((eachEvent) => (
        <Card>
          <CardContent>
            {eachEvent.eventDate}
            {eachEvent.eventName}
            {eachEvent.eventDetails}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
export default CurrentBulletin;
