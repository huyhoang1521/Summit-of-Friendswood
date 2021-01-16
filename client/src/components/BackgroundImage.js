import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    elevation: 0,
    borderRadius: 0,
    [theme.breakpoints.up("md")]: {
      height: "45vw",
    },
    [theme.breakpoints.only("sm")]: {
      height: "60vw",
    },
    [theme.breakpoints.only("xs")]: {
      height: "75vw",
    },
    //height: "100%",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,

    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  content: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function BackgroundImage(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper
      className={classes.root}
      style={{ backgroundImage: `url(${post.image})`, aspectRatio: 3 / 2 }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src={post.image}
          alt={post.imageText}
        />
      }
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={4}>
          <div className={classes.content}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {post.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.description}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

BackgroundImage.propTypes = {
  post: PropTypes.object,
};
