import React from "react";
import Profile from "../components/UserCard";
import Bulletin from "../components/Bulletin";
import PastEvents from "../components/PastEvents";

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
