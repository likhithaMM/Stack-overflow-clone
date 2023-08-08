import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import { getUsersList } from'../../../api/index'; // Update the import path
import { teal } from "@mui/material/colors";
import LeftSidebar from "../../../components/LefSidebar/LeftSidebar"; // Update the import path

export default function SMUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    getUsersList(signal)
      .then((data) => {
        if (data && data.error) {
          console.log(data.error);
        } else {
          setUsers(data);
        }
      })
      .catch((error) => {
        console.log("Error fetching users:", error);
      });

    return function cleanup() {
      abortController.abort();
    };
  }, []);

  return (
    <div className="Smhome-container-1">
      <LeftSidebar />
      <div className="Smhome-container-2">
        <Paper
          style={{
            padding: "50px 10px",
            margin: "15px",
          }}
          elevation={4}
        >
          <Typography
            variant="h6"
            style={{
              margin: "4px 0 2px",
              color: teal["700"],
            }}
          >
            All Users
          </Typography>
          <List dense>
            {users.map((item, i) => (
              <Link to={"/SocialMedia/User/" + item._id} key={i}>
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item.name} />
                  <ListItemSecondaryAction>
                    <IconButton>
                      <ArrowForwardIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </Link>
            ))}
          </List>
        </Paper>
      </div>
    </div>
  );
}
