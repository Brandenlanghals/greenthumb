import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Edit from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import Bulletin from "./ProfileCreateBulletin";
import Modal from "@material-ui/core/Modal";
import api from "../utils/api";
import { useHistory } from "react-router-dom";
import { setISODay } from "date-fns";

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

  useEffect(() => {
    setId(sessionStorage.getItem("userId"));
    api.getUser(sessionStorage.getItem("userId")).then((res) => {
      console.log(res);
      if (res) {
        sessionStorage.setItem("userData", JSON.stringify(res.data));
        sessionStorage.setItem("userFirstName", res.data.firstname);
        sessionStorage.setItem("userLastName", res.data.lastname);
        sessionStorage.setItem("userCity", res.data.city);
        sessionStorage.setItem("userProvidence", res.data.state);
        sessionStorage.setItem("userDescription", res.data.description);
        sessionStorage.setItem("userId", res.data._id);
        setFirstName(
          sessionStorage.getItem("userFirstName", res.data.firstname)
        );
        setLastName(sessionStorage.getItem("userLastName", res.data.lastname));
        setCity(sessionStorage.getItem("userCity", res.data.city));
        setProvince(sessionStorage.getItem("userProvidence", res.data.state));
        setDescription(
          sessionStorage.getItem("userDescription", res.data.description)
        );
      }
    });
  }, []);

  const [id, setId] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [description, setDescription] = useState();
  const [city, setCity] = useState();
  const [province, setProvince] = useState();

  let history = useHistory();

  // let firstInital = sessionStorage.getItem("userFirstName");
  // let secondInitial = sessionStorage.getItem("userLastName");
  // let name = [firstInital, secondInitial];
  // let avatarCreator = name.map(function (letter) {
  //   return letter.charAt(0);
  // });

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          // avatar={
          //   // <Avatar className={classes.purple}>{avatarCreator.join("")}</Avatar>
          // }
          action={
            <Link
              onClick={(res) => {
                history.push({
                  pathname: "/user/profile/edit",
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
