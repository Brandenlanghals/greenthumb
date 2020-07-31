import React, { useState, useEffect, setState } from "react";
import Grid from "@material-ui/core/Grid";
import Profile from "../components/ProfileUserCard";
import CurrentBulletin from "../components/ProfileCurrentBulletin";
import Navbar from "../components/Navbar";
import axios from "axios";
import api from "../utils/api";

function MainProfile() {
  var style = {
    backgroundColor: "#A9CEE3",
    height: 1000,
    postion: "center",
  };

  return (
    <div style={style}>
      <Navbar />
      <Grid container spacing={4}>
        <Grid item xs>
          <Profile />
        </Grid>
        <Grid item xs>
          <div>
            <CurrentBulletin />
          </div>
        </Grid>
        <Grid item xs>
          {/* <PastBulletin /> */}
        </Grid>
      </Grid>
    </div>
  );
}
export default MainProfile;
