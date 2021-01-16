import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";

import BackgroundImage from "../components/BackgroundImage";

const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: theme.spacing(8),
    justifyContent: "center",
    display: "flex",
  },
  grid: {
    verticalAlign: "top",
  },
  verticalPic: {
    position: "relative",
    elevation: 0,
    borderRadius: 0,
    marginTop: "8px",
    marginBottom: theme.spacing(7),
    width: "100%",
    aspectRatio: 1,
  },
  divider: {
    marginBottom: theme.spacing(7),
  },
  typography: {
    lineHeight: 2,
    marginBottom: "45px",
  },
  title: {
    marginBottom: "30px",
  },
  gridItem: {
    [theme.breakpoints.only("xs")]: {
      paddingLeft: "24px",
      paddingRight: "24px",
    },
  },
  halfTypography: {
    lineHeight: 2,
    marginBottom: theme.spacing(7),
    [theme.breakpoints.up("md")]: {
      paddingLeft: "40px",
      paddingRight: "40px",
    },
    [theme.breakpoints.only("xs")]: {
      paddingLeft: "24px",
      paddingRight: "24px",
    },
  },
  BackgroundImage: {
    marginBottom: theme.spacing(4),
  },
}));

const image = {
  image: "https://source.unsplash.com/random",
};

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        className={classes.grid}
        alignItems="flex-start"
        container
        spacing={0}
        justify="center"
      >
        <Grid
          item
          xs={12}
          sm={12}
          gutterBottom
          className={classes.BackgroundImage}
        >
          <BackgroundImage post={image} />
        </Grid>
        <Grid item xs={12} sm={8} gutterBottom className={classes.gridItem}>
          <Typography variant="h6" align="left" className={classes.title}>
            <Box fontWeight="fontWeightBold">Lorem ipsum dolor sit amet</Box>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} gutterBottom className={classes.gridItem}>
          <Typography
            variant="body2"
            align="left"
            className={classes.typography}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <Divider className={classes.divider} />
        </Grid>
        <Grid item xs={12} sm={8} gutterBottom className={classes.gridItem}>
          <Typography variant="h6" align="left" className={classes.title}>
            <Box fontWeight="fontWeightBold">Lorem ipsum dolor sit amet</Box>
          </Typography>
        </Grid>
        <Grid container xs={12} sm={8} gutterBottom>
          <Grid item xs={12} md={6} gutterBottom>
            <img
              className={classes.verticalPic}
              style={{
                aspectRatio: 1 / 1,
              }}
              src={"/assets/photo-building.jpg"}
              alt={"office_building"}
            />
          </Grid>
          <Grid
            item
            md={6}
            gutterBottom
            align="left"
            className={classes.halfTypography}
          >
            <Typography
              variant="body2"
              align="left"
              className={classes.typography}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Typography
              variant="body2"
              align="left"
              className={classes.typography}
            >
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Divider className={classes.divider} />
          </Grid>
        </Grid>

        <Grid item xs={12} sm={8} gutterBottom className={classes.gridItem}>
          <Typography variant="h6" align="left" className={classes.title}>
            <Box fontWeight="fontWeightBold">Lorem ipsum dolor sit amet</Box>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} className={classes.gridItem}>
          <Typography
            variant="body2"
            align="left"
            className={classes.typography}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          gutterBottom
          className={classes.BackgroundImage}
        >
          <BackgroundImage post={image} />
        </Grid>
        <Grid item xs={12} sm={12}>
          <BackgroundImage post={image} />
        </Grid>
      </Grid>
    </div>
  );
}
