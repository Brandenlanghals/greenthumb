import React from "react";
import Grid from "@material-ui/core/Grid";
import Profile from "../components/ProfileUserCard";
import Bulletin from "../components/ProfileCreateBulletin";
import CurrentBulletin from "../components/ProfileCurrentBulletin";
import PastBulletin from "../components/ProfilePastBulletin";


function mainProfile() {
  return (
    <Grid container spacing={3}>
      <Grid item xs>
        <Profile />
      </Grid>
      <Grid item xs>
        <Bulletin />
        <CurrentBulletin />
      </Grid>
      <Grid item xs>
        <PastBulletin />
      </Grid>
    </Grid>
  );
}

export default mainProfile;
