import React from "react";
import Profile from "../components/userCard";
import Bulletin from "../components/bulletin";
import PastEvents from "../components/pastEvents";

function mainProfile() {
  return (
    <div>
      <Profile />
      <Bulletin />
      <PastEvents />
    </div>
  );
}

export default mainProfile;
