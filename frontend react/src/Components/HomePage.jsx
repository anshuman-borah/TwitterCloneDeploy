import React from "react";
import { Grid } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import HomeSection from "./Home/MiddlePart/HomeSection";
import RightPart from "./RightPart/RightPart";
import Profile from "./Profile/Profile";
import TwitDetail from "./Home/MiddlePart/TwitDetail/TwitDetail";
import Explore from "./Home/MiddlePart/Explore";
import Notifications from "./Home/MiddlePart/Notifications";
import Messages from "./Home/MiddlePart/Messages";
import Lists from "./Home/MiddlePart/Lists";
import Communities from "./Home/MiddlePart/Communities";

const HomePage = () => {
  return (
    <Grid container className="px-5 lg:px-36 justify-between">
      <Grid item xs={0} lg={2.5} className="hidden lg:block w-full relative">
        <Navigation />
      </Grid>
      <Grid
        item
        xs={12}
        lg={6}
        className="px-5 lg:px-9 border-l border-r border-gray-700 min-h-screen"
      >
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/home" element={<HomeSection />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/twit/:id" element={<TwitDetail />} />
        </Routes>
      </Grid>
      <Grid item xs={0} lg={3} className="hidden lg:block w-full relative">
        <RightPart />
      </Grid>
    </Grid>
  );
};

export default HomePage;
