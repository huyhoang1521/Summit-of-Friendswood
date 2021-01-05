import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    justifyContent: "center",
    display: "flex",
  },
  grid: {
    width: "65%",
    verticalAlign: "top",
  },
  verticalPic: {
    position: "relative",
    elevation: 0,
    borderRadius: 0,
    marginTop: "8px",
    //marginBottom: "20px",
    [theme.breakpoints.up("md")]: {
      height: "30vw",
    },
    [theme.breakpoints.only("sm")]: {
      height: "40vw",
    },
    [theme.breakpoints.only("xs")]: {
      height: "50vw",
    },
    width: "100%",
  },
  pic: {
    position: "relative",
    elevation: 0,
    borderRadius: 0,
    marginBottom: "24px",
    [theme.breakpoints.up("md")]: {
      height: "40vw",
    },
    [theme.breakpoints.only("sm")]: {
      height: "50vw",
    },
    [theme.breakpoints.only("xs")]: {
      height: "60vw",
    },
    width: "100%",
  },
  firstTypography: {
    lineHeight: 2,
    marginBottom: "60px",
  },
  typography: {
    lineHeight: 2,
    marginBottom: "45px",
  },
  title: {
    marginBottom: "30px",
  },
  halfTypography: {
    lineHeight: 2,
    paddingLeft: "40px",
    paddingRight: "40px",
    //paddingLeft: "10px"
  },
}));

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
        <Grid item xs={12} sm={12} gutterBottom>
          <Typography variant="h5" align="left" className={classes.title}>
            <Box fontWeight="fontWeightBold">Lorem ipsum dolor sit amet</Box>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} gutterBottom>
          <Typography
            variant="body1"
            align="left"
            className={classes.firstTypography}
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
            officia deserunt mollit anim id est.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} gutterBottom>
          <Typography variant="h5" align="left" className={classes.title}>
            <Box fontWeight="fontWeightBold">Lorem ipsum dolor sit amet</Box>
          </Typography>
        </Grid>
        <Grid item xs={5} sm={5} gutterBottom style={{ verticalAlign: "top" }}>
          <img
            className={classes.verticalPic}
            src={"/assets/office_building.jpg"}
            alt={"office_building"}
          />
        </Grid>

        <Grid
          item
          xs={7}
          sm={7}
          gutterBottom
          className={classes.halfTypography}
        >
          <Typography
            variant="body1"
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
            incididunt ut labore et dolore magna aliqua.
          </Typography>

          <Typography
            variant="body1"
            align="left"
            className={classes.typography}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} gutterBottom>
          <Typography variant="h5" align="left" className={classes.title}>
            <Box fontWeight="fontWeightBold">Lorem ipsum dolor sit amet</Box>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} gutterBottom>
          <Typography
            variant="body1"
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
        <Grid item xs={12} sm={12} gutterBottom>
          <img
            className={classes.pic}
            src={"/assets/3d.jpg"}
            alt={"office_building"}
          />
        </Grid>
        <Grid item xs={12} sm={12} gutterBottom>
          <img
            className={classes.pic}
            src={"/assets/3d-side.jpg"}
            alt={"office_building"}
          />
        </Grid>
      </Grid>
    </div>
  );
}
