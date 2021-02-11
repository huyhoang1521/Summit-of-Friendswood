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
            <Box fontWeight="fontWeightBold">A New Beginning</Box>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} gutterBottom className={classes.gridItem}>
          <Typography
            variant="body2"
            align="left"
            className={classes.typography}
          >
            The Summit of Friendswood was first restored in 2016 from an older
            building. The original building was built in 1978. The process to
            restore it was major, taking 2 years to complete. Today, the
            building contains all new walls, bathrooms, and doors. Many things
            from the original building can still be seen today.
          </Typography>
          <Divider className={classes.divider} />
        </Grid>
        <Grid item xs={12} sm={8} gutterBottom className={classes.gridItem}>
          <Typography variant="h6" align="left" className={classes.title}>
            <Box fontWeight="fontWeightBold">Family Owned and Operated</Box>
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
              Founder Khanh Hoang first saw the building in 2015 and saw an
              opportunity to turn it around. Knowing nothing about restoring
              buildings, he quickly learned the process. He then started his own
              company, KCTY, with the help of his sister, Yen Nguyen, and
              brother in law, Tuan Nguyen. Together, they manage and operate the
              building and provide assistence to all tenents.
            </Typography>
            <Typography
              variant="body2"
              align="left"
              className={classes.typography}
            >
              As a small family run operation, we are dedicated to supporting
              our tenents and providing our assistence to any problems they may
              have. We will work with your business to help you suceed and
              provide any help we can.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Divider className={classes.divider} />
          </Grid>
        </Grid>

        <Grid item xs={12} sm={8} gutterBottom className={classes.gridItem}>
          <Typography variant="h6" align="left" className={classes.title}>
            <Box fontWeight="fontWeightBold">
              Dedicated to Providing Quality Office Space
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} className={classes.gridItem}>
          <Typography
            variant="body2"
            align="left"
            className={classes.typography}
          >
            At the Summit of Friendswood, we are dedicated to providing quality
            office space to your business. As a newly renovated building, we
            ensure that you will be getting a quality space for you business. In
            addition, we aim to provide the best customer service and address
            any concerns you may have. With a great location and affordable
            rates, the Summit of Friendswood is the perfect place for your
            business.
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
