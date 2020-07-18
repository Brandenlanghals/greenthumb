import React from "react";
import Grid from "@material-ui/core/Grid";
import Profile from "../components/ProfileUserCard";
import Bulletin from "../components/ProfileCreateBulletin";
import CurrentBulletin from "../components/ProfileCurrentBulletin";
import PastBulletin from "../components/ProfilePastBulletin";


function mainProfile() {
  var style = {
    backgroundColor: "#2283D3",
    height: 1000,
    postion:"center"
  };
  return (
    <div style={style}>
       <Grid container spacing={4}>
      <Grid item xs>
        <Profile />
      </Grid>
      <Grid item xs>
        <Bulletin />
        <div>
        <CurrentBulletin />
        </div>
      </Grid>
      <Grid item xs >
        <PastBulletin  />
      </Grid>
    </Grid>
    </div>
  );
}
export default mainProfile;