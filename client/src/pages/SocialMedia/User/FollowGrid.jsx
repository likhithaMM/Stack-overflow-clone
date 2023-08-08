import React from "react";
import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

export default function FollowGrid(props) {
  return (
    <div
      style={{
        paddingTop: "2px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        background: "#ffffff",
      }}
    >
      <Grid container spacing={2}>
        {props.people.map((person, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Link to={"/SocialMedia/User/" + person._id}>
              <Avatar
                alt={person.name}
                src={
                  process.env.REACT_APP_NODE_JS + "posts/photo/" + person._id
                }
                style={{
                  width: "60%",
                  height: "60%",
                  margin: "auto",
                }}
              />
              <Typography
                style={{
                  textAlign: "center",
                  marginTop: 10,
                }}
              >
                {person.name}
              </Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

FollowGrid.propTypes = {
  people: PropTypes.array.isRequired,
};
