import React, { useState, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import Profile from "../components/ProfileUserCard";
import Bulletin from "../components/ProfileCreateBulletin";
import CurrentBulletin from "../components/ProfileCurrentBulletin";
import PastBulletin from "../components/ProfilePastBulletin";
import api from "../utils/api";

function MainProfile() {
  var style = {
    backgroundColor: "#2283D3",
    height: 1000,
    postion:"center"
  };
  useEffect(function(){
    api.getUser().then(function(data){
      console.log(data);
    })
  }
  )
  // const [id, setId] = useState()
  // setId("what id is")

  return (
    <div style={style}>
       <Grid container spacing={4}>
      <Grid item xs>
        <Profile />
      </Grid>
      <Grid item xs>
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
export default MainProfile;