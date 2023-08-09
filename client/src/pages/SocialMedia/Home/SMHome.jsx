import React, { useEffect } from "react";
import LeftSidebar from "../../../components/LefSidebar/LeftSidebar";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import "./SMHome.css";
import NewsFeed from "../Post/NewsFeed";
import FindPeople from "../User/FindPeople";

const SMHome = () => {
  const profile = localStorage.getItem("Profile");
  // console.log("MAINN");
  // console.log(profile);
  const navigate = useNavigate();
  useEffect(() => {
    if (!profile) {
      navigate("/Auth");
    }
  }, [navigate, profile]);

  return (
    <div className="Smhome-container-1">
      <LeftSidebar />
      {profile && (
        <div className="Smhome-container-2">
          <Grid container spacing={1}>
            <Grid item xs={10} sm={7}>
              <NewsFeed />
            </Grid>
            <Grid item xs={10} sm={5}>
              <FindPeople />
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default SMHome;
