import React  ,{ useState } from "react";
import DatePicker from 'react-date-picker';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Checkbox,
  FormControlLabel,
  Button
} from "@material-ui/core";
function Bulletin() {
var style = {
  backgroundColor: "white",
  borderStyle:"solid",
  padding: 20,
  paddingTop: 10,
  paddingBottom: 10
};
var buttonStyle ={
  backgroundColor:"blue",
  align: "right"
}
var headerStyle={
  textAlign: "center"
}
 var align ={
   position: "right"
 }
 var input={
   padding: 10,
   paddingLeft: .5
 }
 const [date,setDate] = useState(Date);
  return (
    <form>
      <div style={style}
    >
      <h1 style={headerStyle}>Create Event</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <FormControl>
              <InputLabel htmlFor="my-input">Address</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
          </div>
          <div className="col-sm">
            <FormControl>
              <InputLabel htmlFor="my-input"> Start Time</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
          </div>
          <FormControl>
            <InputLabel htmlFor="my-input">End Time</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
          <div className="container">
            <div className="row">
              <div className="col-sm">
              <div>
              <div
              style={input}>
            <InputLabel htmlFor="my-input">Date</InputLabel>
        <DatePicker
        onCalendarOpen={date}
        onClickDay={() => setDate(new Date)}
        />
      </div>
      </div>
              </div>
              <div className="col-sm">
                <Checkbox
                  value="false"
                  inputProps={{ "aria-label": "Checkbox A" }}
                />
                <Checkbox
                  value="true"
                  inputProps={{ "aria-label": "Checkbox B" }}
                />
                <FormControl>
                  <InputLabel htmlFor="my-input">City Approval</InputLabel>
                </FormControl>
              </div>
              <div style={align} className="col-sm">
                <Button style={buttonStyle} type="submit">Submit</Button>
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