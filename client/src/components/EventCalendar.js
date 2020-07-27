import 'date-fns';
import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import api from "../utils/api";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

function EventCalendar() {
  const [startDate, setStartDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const [startTime, setStartTime] =useState();
  const handleSubmit = (e) => {
    api.createEvent({
      startDate: startDate,
      startTime: startTime,
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={setStartDate}
          onChange={handleSubmit}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={setStartTime}
          onChange={handleSubmit}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
  }
}

export default EventCalendar;