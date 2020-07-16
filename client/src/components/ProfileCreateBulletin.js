import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Checkbox,
} from "@material-ui/core";

function Bulletin() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <FormControl>
              <InputLabel htmlFor="my-input">Address</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">
                We'll never share your email.
              </FormHelperText>
            </FormControl>
          </div>
          <div class="col-sm">
            <FormControl>
              <InputLabel htmlFor="my-input"> Start Time</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">
                We'll never share your email.
              </FormHelperText>
            </FormControl>
          </div>
          <FormControl>
            <InputLabel htmlFor="my-input">End Time</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">
              We'll never share your email.
            </FormHelperText>
          </FormControl>
          <div class="container">
            <div class="row">
              <div class="col-sm">
                <div></div>
              </div>
              <div class="col-sm">
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
              <div class="col-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Bulletin;
