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
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar />}
        action={
          <Link to={"/profile/edit/"}>
            <IconButton aria-label="Edit" color="primary">
              <Edit />
            </IconButton>
          </Link>
        }
        title="Your Name Here"
        subheader="Location"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur nec nunc consectetur, scelerisque nulla imperdiet,
          consectetur dolor. Fusce sed tristique magna, vel imperdiet risus.
          Curabitur mattis malesuada lectus. Quisque eleifend eros odio, a
          consectetur orci ornare ut. Vestibulum luctus vel libero quis
          ultrices. In finibus tincidunt volutpat. Curabitur sit amet imperdiet
          diam, a sagittis massa. Donec sodales at massa a mollis. Proin
          blandit, massa quis commodo elementum, lacus erat dignissim turpis, at
          pharetra arcu mi at ligula. Aenean turpis odio, vulputate sit amet
          ante non, aliquam convallis urna. Pellentesque aliquam augue non velit
          finibus fringilla. Nunc ultricies varius facilisis. Integer nec turpis
          et felis cursus malesuada eu cursus ipsum. Quisque dictum justo arcu,
          non tempor nunc laoreet vitae. Duis lacinia, lacus eget porta
          tincidunt, neque dolor euismod elit, at egestas eros magna et magna.
        </Typography>
      </CardContent>
    </Card>
  );
}
