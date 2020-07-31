import React, { useState, useEffect, setState } from "react";
import Grid from "@material-ui/core/Grid";
import Profile from "../components/ProfileUserCard";
import Bulletin from "../components/ProfileCreateBulletin";
import CurrentBulletin from "../components/ProfileCurrentBulletin";
import Navbar from "../components/Navbar"
import api from "../utils/api";
import Background from "../components/Background/Background";
function MainProfile() {
  var style = {
    backgroundColor: "#A9CEE3",
    height: 1000,
    postion: "center",
  };
  const [id, setId] = useState();

  function handleSubmit() {
    api.test();
  }

  // = axios.get(`/api/users/${params.id}`)
  //       .then(({ data: user }) => {
  //        console.log('user', user);

  //         this.setState({ userId });
  //       });

  // useEffect(function () {
  //   axios.get("/user/profile").then((response) => {
  //     console.log(response.data);
  //   });
  // }, []);

  // const [id, setId] = useState()
  // setId("what id is")

  return (
    <div style={style}>
      <Background backgroundImage="https://images.unsplash.com/photo-1489644484856-f3ddc0adc923?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80">
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
      </Background>
    </div>
  );
}
export default MainProfile;
