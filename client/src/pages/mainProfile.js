import React from "react";
import Profile from "../components/ProfileUserCard";
import Bulletin from "../components/ProfileCreateBulletin";
import CurrentBulletin from "../components/ProfileCurrentBulletin";
import PastBulletin from "../components/ProfilePastBulletin";

function mainProfile() {
  return (
    <div>
      <Profile />
      <Bulletin />
      <CurrentBulletin />
      <PastBulletin />
    </div>
  );
}

export default mainProfile;
