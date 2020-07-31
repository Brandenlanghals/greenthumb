import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Edit from "@material-ui/icons/Edit";
import { Redirect, Link } from "react-router-dom";
import Bulletin from "./ProfileCreateBulletin";
import Modal from "@material-ui/core/Modal";
import Api from "../utils/api";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#A9CEE3",
    align: "right",
  },
}));

//work on this tomorrow
// let name = [{ firstName }, { lastName }];

// let avatarCreator = name.map(function () {
//   for (i = 0; i <= name.length - 1; i++) {
//     return name[i].charAt(i);
//   }
// });
//avatarCreator.join("")

// console.log(avatarCreator.join(""));

export default function Profile() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
    console.log(location.state.userData);
    setFirstName(location.state.userData.firstname);
    setLastName(location.state.userData.lastname);
    setCity(location.state.userData.city);
    setProvince(location.state.userData.state);
    setDescription(location.state.userData.description);
  }, [location]);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [description, setDescription] = useState();
  const [city, setCity] = useState();
  const [province, setProvince] = useState();
  let history = useHistory();

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={<Avatar className={classes.purple}>GT</Avatar>}
          action={
            <Link
              onClick={(res) => {
                history.push({
                  pathname: "/user/profile/edit",
                  state: { userData: res.data },
                });
              }}
            >
              <IconButton aria-label="Edit" color="primary">
                <Edit />
              </IconButton>
            </Link>
          }
          title={firstName + " " + lastName}
          subheader={city + ", " + province}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </Card>

      <button
        type="submit"
        onClick={handleOpen}
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Create Event
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Bulletin></Bulletin>
      </Modal>
    </div>
  );
}
