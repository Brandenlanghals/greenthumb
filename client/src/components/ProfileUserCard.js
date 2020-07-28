import React from "react";
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

export default function RecipeReviewCard() {
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

  

  //   let name = [{ firstName }, { lastName }];

  //   let avatarCreator = name.map(function () {
  //     for (i = 0; i <= name.length - 1; i++) {
  //       return name[i].charAt(i);
  //     }
  //   });

  //   console.log(avatarCreator.join(""));

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar className={classes.purple}>avatarCreator.join("")</Avatar>
          }
          action={
            <Link to={"/profile/edit"}>
              <IconButton aria-label="Edit" color="primary">
                <Edit />
              </IconButton>
            </Link>
          }
          title="Your name here" //"{firstName} + " " + {lastName}";
          subheader="Location"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Description: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Curabitur nec nunc consectetur, scelerisque nulla imperdiet,
            consectetur dolor. Fusce sed tristique magna, vel imperdiet risus.
            Curabitur mattis malesuada lectus. Quisque eleifend eros odio, a
            consectetur orci ornare ut. Vestibulum luctus vel libero quis
            ultrices. In finibus tincidunt volutpat.
          </Typography>
        </CardContent>
      </Card>
      
      <button 
      type="submit" onClick={handleOpen}
      fullWidth
      variant="contained"
      color="primary"
      clsssName={classes.submit}
      
      >
        Create Event
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Bulletin/>
      </Modal>
    </div>
  );
}
