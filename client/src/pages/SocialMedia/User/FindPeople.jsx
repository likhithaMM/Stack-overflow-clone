import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { findPeople, followUser } from "./../../../api/index"; // Replace './path-to-your-api-file' with the correct path to your API file.
import auth from "./../../../api/auth-helper";
import Snackbar from "@mui/material/Snackbar";
import ViewIcon from "@mui/icons-material/Visibility";
import { orange, teal } from "@mui/material/colors";

export default function FindPeople() {
  const [values, setValues] = useState({
    users: [{
      "_id": {
        "$oid": "63992621ae6c4476c4084eb7"
      },
      "name": "admin",
      "email": "admin@gmail.com",
      "password": "$2a$12$1UDXs6N7zcCPHIry9xbYjuF67uFmFc/L7JfHFoKAqy2lNP8qBC9Ay",
      "tags": [],
      "joinedOn": {
        "$date": {
          "$numberLong": "1670981153108"
        }
      },
      "__v": 0,
      "noOfQuestions": 1,
      "planOpted": "Free",
      "planOptedOn": {
        "$date": {
          "$numberLong": "1670981153108"
        }
      }
    },{
      "_id": {
        "$oid": "63992d7c8f0c5c00aa8a50f0"
      },
      "name": "Mahii",
      "email": "20sdfaidts011@fmial.cmo",
      "password": "$2a$12$JOTTaYT1egUK0dGn8JPzqO6Tx6u/uvZQhcTVoMvyed5zNi3GBqeBG",
      "tags": [],
      "joinedOn": {
        "$date": {
          "$numberLong": "1670983036570"
        }
      },
      "__v": 0,
      "noOfQuestions": 1,
      "planOpted": "Free",
      "planOptedOn": {
        "$date": {
          "$numberLong": "1670983036570"
        }
      }
    },{
      "_id": {
        "$oid": "63a0828290f1fcdc0e4be1b6"
      },
      "name": "Sindhura",
      "email": "namas@gmail.com",
      "password": "$2a$12$45L6BkYLTpPXf7nkthSWBus.KOImcNfksyZfjg2cM3WDlCYMplnqa",
      "tags": [
        "goodies bad"
      ],
      "joinedOn": {
        "$date": {
          "$numberLong": "1671463554383"
        }
      },
      "__v": 0,
      "about": "I am full stack web dev..",
      "noOfQuestions": 1,
      "planOpted": "Free",
      "planOptedOn": {
        "$date": {
          "$numberLong": "1671463554383"
        }
      }
    },{
      "_id": {
        "$oid": "63a25332bde2b7d05486a9c3"
      },
      "name": "Siri",
      "email": "siri@gmmial.com",
      "password": "$2a$12$Dx1YOz8XIJH1LlIAhi26c.7OAj7rA9w58g3PJd8fBVtyHZ2tBYcR6",
      "tags": [],
      "joinedOn": {
        "$date": {
          "$numberLong": "1671582514062"
        }
      },
      "__v": 0,
      "noOfQuestions": 1,
      "planOpted": "Free",
      "planOptedOn": {
        "$date": {
          "$numberLong": "1671582514062"
        }
      }
    },{
      "_id": {
        "$oid": "63a4b818485f1ec3a98c8bb0"
      },
      "name": "Vennu",
      "email": "vennela@gmail.com",
      "password": "$2a$12$r3kboBQe0ybD0gV85F0Ndem7AVRqWDWKQ2fHSmuGVUxCYctW2LtCW",
      "tags": [],
      "joinedOn": {
        "$date": {
          "$numberLong": "1671739416166"
        }
      },
      "__v": 0,
      "noOfQuestions": 1,
      "planOpted": "Free",
      "planOptedOn": {
        "$date": {
          "$numberLong": "1671739416166"
        }
      }
    },{
      "_id": {
        "$oid": "63a4c5894782f17ba719be4f"
      },
      "name": "Sri Devi",
      "email": "Devi@gmail.com",
      "password": "$2a$12$i5tKnfm/tDFoe.0fhPCabeq9EfbfwEfNn6nqI/wsbKKTxZhJ1BaQa",
      "about": "as fasdcvxzcvbs dhrydsdgasf",
      "tags": [
        "sadf asdf s bhweyw gbd ghdfg hsdfgs"
      ],
      "joinedOn": {
        "$date": {
          "$numberLong": "1671742857908"
        }
      },
      "__v": 0,
      "noOfQuestions": 1,
      "planOpted": "Free",
      "planOptedOn": {
        "$date": {
          "$numberLong": "1671742857908"
        }
      }
    },{
      "_id": {
        "$oid": "63a909f186ad80f871e4f801"
      },
      "name": "Laya",
      "email": "laya@gmail.com",
      "password": "$2a$12$8z3q4PmSQl/BlHGEh/RsNe.JpHK0N2yhsr5ijvPKrIYeUsf/TojFi",
      "about": "",
      "tags": [],
      "joinedOn": {
        "$date": {
          "$numberLong": "1672022513346"
        }
      },
      "__v": 0,
      "noOfQuestions": 1,
      "planOpted": "Free",
      "planOptedOn": {
        "$date": {
          "$numberLong": "1672022513346"
        }
      }
    },{
      "_id": {
        "$oid": "63a90b1086ad80f871e4f83c"
      },
      "name": "Hasitha",
      "email": "hasitha@gmail.com",
      "password": "$2a$12$6EzFNQrN8LVm8MYDjZ2AieJCBBie1m6vR/wqoz1YUvZwPkojCh3gq",
      "about": "",
      "tags": [],
      "joinedOn": {
        "$date": {
          "$numberLong": "1672022800546"
        }
      },
      "__v": 0,
      "noOfQuestions": 1,
      "planOpted": "Free",
      "planOptedOn": {
        "$date": {
          "$numberLong": "1672022800546"
        }
      }
    },{
      "_id": {
        "$oid": "63ac0b13b2ac7a9b253def5d"
      },
      "name": "Siva",
      "email": "sivakanth@gmail.com",
      "password": "$2a$12$VFSPyWBbo8sAXFuRIn7G5ObI1kyUt32HHYZy3KBulojpqN0TcaTSa",
      "about": "",
      "tags": [],
      "joinedOn": {
        "$date": {
          "$numberLong": "1672219411946"
        }
      },
      "__v": 0,
      "noOfQuestions": 1,
      "planOpted": "Free",
      "planOptedOn": {
        "$date": {
          "$numberLong": "1672219411946"
        }
      }
    },{
      "_id": {
        "$oid": "63ac0c82d2266ebdb00bf726"
      },
      "name": "Rajeswari",
      "email": "rajeswari@gmail.com",
      "password": "$2a$12$1fN9FWppUJEQsNplHzVUjOhQv5hJrZ1nADHcnoUjKUGh9VJBoqcIu",
      "about": "",
      "tags": [],
      "joinedOn": {
        "$date": {
          "$numberLong": "1672219778106"
        }
      },
      "__v": 0,
      "noOfQuestions": 1,
      "planOpted": "Free",
      "planOptedOn": {
        "$date": {
          "$numberLong": "1672219778106"
        }
      }
    },{
      "_id": {
        "$oid": "63add39c30c2e793cf893b13"
      },
      "name": "Vaishu",
      "email": "vaishu123@gmail.com",
      "password": "$2a$12$kZF.V7EXgzwV4SaTdlR6s.fGA21xPyWX1rokm0ykHc1d9l/Cbo.lG",
      "about": "",
      "tags": [],
      "joinedOn": {
        "$date": {
          "$numberLong": "1672336284954"
        }
      },
      "__v": 0,
      "noOfQuestions": 4,
      "planOpted": "Silver",
      "planOptedOn": {
        "$date": {
          "$numberLong": "1673211896988"
        }
      }
    }],
    open: false,
    followMessage: "",
  });

  useEffect(() => {
    const jwt = auth.isAuthenticated();

    const fetchUsers = async () => {
      try {
        const response = await findPeople({
          userId: jwt.user._id,
        });
        console.log(response); 
        if (response && response.data) {
          setValues({ ...values, users: response.data });
        } else {
          console.log("Error fetching users");
        }
      } catch (error) {
        console.log("Error fetching users", error);
      }
    };

    fetchUsers();
  }, []);

  const clickFollow = async (user, index) => {
    const jwt = auth.isAuthenticated();
    try {
      const response = await followUser(jwt.user._id, user._id);
      if (response && response.data) {
        let toFollow = values.users.slice();
        toFollow.splice(index, 1);
        setValues({
          ...values,
          users: toFollow,
          open: true,
          followMessage: `Following ${user.name}!`,
        });
      } else {
        console.log("Error following user");
      }
    } catch (error) {
      console.log("Error following user", error);
    }
  };

  const handleRequestClose = (event, reason) => {
    setValues({ ...values, open: false });
  };

  return (
    <div>
      <Paper
        style={{
          padding: "1px",
          margin: 0,
        }}
        elevation={4}
      >
        <Typography
          type="title"
          style={{
            margin: "1px 1px 1px 1px",
            color: teal["700"],
            fontSize: "1em",
          }}
        >
          Who to follow
        </Typography>
        <List>
          {values.users.map((item, i) => (
            <span key={i}>
              <ListItem>
                <ListItemAvatar
                  style={{
                    marginRight: "1px",
                  }}
                >
                  <Avatar src={`${process.env.REACT_APP_API_URL}/users/photo/${item._id}`} />
                </ListItemAvatar>
                <ListItemText primary={item.name} />
                <ListItemSecondaryAction
                  style={{
                    right: "1px",
                  }}
                >
                  <Link to={"/SocialMedia/users/" + item._id}>
                    <IconButton
                      variant="contained"
                      color="secondary"
                      style={{
                        verticalAlign: "middle",
                      }}
                    >
                      <ViewIcon />
                    </IconButton>
                  </Link>
                  <Button
                    aria-label="Follow"
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      clickFollow(item, i);
                    }}
                  >
                    Follow
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
            </span>
          ))}
        </List>
      </Paper>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={values.open}
        onClose={handleRequestClose}
        autoHideDuration={6000}
        message={
          <span
            style={{
              color: orange["700"],
            }}
          >
            {values.followMessage}
          </span>
        }
      />
    </div>
  );
}
