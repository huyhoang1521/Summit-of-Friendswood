import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import BackgroundImage from "../components/BackgroundImage";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import Divider from "@material-ui/core/Divider";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import ApartmentIcon from "@material-ui/icons/Apartment";
import BuildIcon from "@material-ui/icons/Build";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import VideocamIcon from "@material-ui/icons/Videocam";
import GroupIcon from "@material-ui/icons/Group";
import MailIcon from "@material-ui/icons/Mail";
import StoreIcon from "@material-ui/icons/Store";
import Hidden from "@material-ui/core/Hidden";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  typography: {
    marginBottom: theme.spacing(3),
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
  },
  typographyFeatures: {
    marginBottom: theme.spacing(2),
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
  },
  typographySub: {
    marginBottom: theme.spacing(7),
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
  },
  backgroundImage: {
    [theme.breakpoints.between("sm", "md")]: {
      marginBottom: theme.spacing(8),
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom: theme.spacing(15),
    },
  },
  grid: {
    marginBottom: theme.spacing(15),
  },
  squareTypography: {
    lineHeight: 1.5,
    marginBottom: theme.spacing(4),
  },
  gridSquare: {
    marginBottom: theme.spacing(15),
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      padding: "20px",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "60%",
      padding: "40px",
    },
  },
  squareText: {
    marginBottom: theme.spacing(15),

    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "40%",
    },

    paddingLeft: "50px",
    paddingRight: "50px",
  },
  box: {
    [theme.breakpoints.only("xs")]: {
      height: "48vh",
    },
    [theme.breakpoints.only("sm")]: {
      height: "45vh",
    },
    [theme.breakpoints.up("md")]: {
      height: "28vh",
    },
  },
  gridItems: {
    padding: "40px",
  },
  gridItemsSquare: {
    [theme.breakpoints.up("md")]: {
      padding: "20px",
    },
  },
  squareAboutTypography: {
    paddingTop: "20px",
    paddingLeft: "20px",
  },
  squareAboutTypographySmall: {
    paddingLeft: "20px",
  },
  gridItemsFeature: {
    [theme.breakpoints.only("xs")]: {
      margin: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 60,
      paddingRight: 60,
    },
  },
  gridItemsFeatureBottom: {
    [theme.breakpoints.only("xs")]: {
      margin: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      padding: 60,
    },
  },
  features: {
    maxWidth: "75%",
    align: "center",
    justify: "center",
  },
  icon: {
    marginBottom: theme.spacing(2),
  },
  iconFeature: {
    width: 55,
    height: 55,
  },
  paper: {
    paddingLeft: 15,
    paddingRight: 15,
  },
}));

const imageText = {
  title: "Find Your Space",
  description:
    "Providing professional office space for all of your business needs. Conveniently located on FM 528 in Friendswood Texas.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
};

export default function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.root} maxWidth={false}>
        <main className={classes.backgroundImage}>
          <BackgroundImage post={imageText} />
        </main>
      </Container>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{
          overflow: "hidden",
        }}
      >
        <Grid item>
          <Grid container spacing={2}>
            <Grid item container className={classes.grid}>
              <Grid
                item
                xs={12}
                sm={6}
                m={6}
                lg={3}
                xl={3}
                className={classes.gridItems}
                container
                direction="column"
                spacing={2}
                align="center"
              >
                <Grid item>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    color="textSecondary"
                  >
                    Features
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    Office Lease
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                </Grid>
                <Hidden only="xs">
                  <Divider orientation="vertical" flexItem />
                </Hidden>
              </Grid>
              <Hidden only="xs">
                <Divider orientation="vertical" flexItem />
              </Hidden>
              <Grid
                item
                xs={12}
                sm={6}
                m={6}
                lg={3}
                xl={3}
                className={classes.gridItems}
                container
                direction="column"
                spacing={2}
                align="center"
              >
                <Grid item>
                  <ApartmentIcon className={classes.icon} fontSize="large" />
                  <Typography variant="body2" color="textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                </Grid>
              </Grid>
              <Hidden mdDown>
                <Divider orientation="vertical" flexItem />
              </Hidden>
              <Grid
                item
                xs={12}
                sm={6}
                m={6}
                lg={3}
                xl={3}
                className={classes.gridItems}
                container
                direction="column"
                spacing={2}
                align="center"
              >
                <Grid item>
                  <BuildIcon className={classes.icon} fontSize="large" />
                  <Typography variant="body2" color="textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                </Grid>
              </Grid>
              <Hidden only="xs">
                <Divider orientation="vertical" flexItem />
              </Hidden>
              <Grid
                item
                xs={12}
                sm={6}
                m={6}
                lg={3}
                xl={3}
                className={classes.gridItems}
                container
                direction="column"
                spacing={2}
                align="center"
              >
                <Grid item>
                  <AccessAlarmIcon className={classes.icon} fontSize="large" />
                  <Typography variant="body2" color="textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={0} className={classes.squareText}>
          <Grid
            item
            xl={12}
            container
            direction="column"
            spacing={0}
            align="Left"
          >
            <Typography variant="h5" gutterBottom>
              About
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              className={classes.squareTypography}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              className={classes.squareTypography}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={4} className={classes.gridSquare}>
          <Grid
            item
            xs={12}
            sm={6}
            m={6}
            lg={4}
            xl={4}
            className={classes.gridItemsSquare}
            container
            direction="column"
            align="left"
          >
            <Grid item>
              <Box className={classes.box} bgcolor="grey.200" mx={0.5}>
                <Typography
                  variant="h4"
                  className={classes.squareAboutTypography}
                >
                  2
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.squareAboutTypographySmall}
                  gutterBottom
                >
                  Floors
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            m={6}
            lg={4}
            xl={4}
            className={classes.gridItemsSquare}
            container
            direction="column"
            spacing={0}
            align="left"
          >
            <Grid item>
              <Box className={classes.box} bgcolor="grey.200" mx={0.5}>
                <Typography
                  variant="h4"
                  className={classes.squareAboutTypography}
                >
                  1000
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.squareAboutTypographySmall}
                  gutterBottom
                >
                  Square Feet
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            m={6}
            lg={4}
            xl={4}
            className={classes.gridItemsSquare}
            container
            direction="column"
            spacing={0}
            align="left"
          >
            <Grid item>
              <Box className={classes.box} bgcolor="grey.200" mx={0.5}>
                <Typography
                  variant="h4"
                  className={classes.squareAboutTypography}
                >
                  10
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.squareAboutTypographySmall}
                  gutterBottom
                >
                  Rooms
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            m={6}
            lg={4}
            xl={4}
            className={classes.gridItemsSquare}
            container
            direction="column"
            spacing={0}
            align="left"
          >
            <Grid item>
              <Box className={classes.box} bgcolor="grey.200" mx={0.5}>
                <Typography
                  variant="h4"
                  className={classes.squareAboutTypography}
                >
                  2
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.squareAboutTypographySmall}
                  gutterBottom
                >
                  Bathrooms
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            m={6}
            lg={4}
            xl={4}
            className={classes.gridItemsSquare}
            container
            direction="column"
            spacing={0}
            align="left"
          >
            <Grid item>
              <Box className={classes.box} bgcolor="grey.200" mx={0.5}>
                <Typography
                  variant="h4"
                  className={classes.squareAboutTypography}
                >
                  $2000
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.squareAboutTypographySmall}
                  gutterBottom
                >
                  Rates start at
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            m={6}
            lg={4}
            xl={4}
            className={classes.gridItemsSquare}
            container
            direction="column"
            spacing={0}
            align="left"
          >
            <Grid item>
              <Box className={classes.box} bgcolor="grey.200" mx={0.5}>
                <Typography
                  variant="h4"
                  className={classes.squareAboutTypography}
                >
                  2016
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.squareAboutTypographySmall}
                  gutterBottom
                >
                  Year Built
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          className={classes.features}
          spacing={0}
          align="center"
          alignItems="center"
          justify="center"
        >
          <Grid item xs={12} sm={12}>
            <Typography variant="h5" className={classes.typographyFeatures}>
              Other Key eatures
            </Typography>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="body2"
                color="textSecondary"
                gutterBottom
                align="center"
                className={classes.typographySub}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            className={classes.gridItemsFeature}
            align="center"
          >
            <MailIcon className={classes.iconFeature}></MailIcon>
            <Typography
              variant="body2"
              gutterBottom
              align="center"
              className={classes.typography}
            >
              Mailboxes
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            className={classes.gridItemsFeature}
            align="center"
          >
            <StoreIcon className={classes.iconFeature}></StoreIcon>
            <Typography
              variant="body2"
              gutterBottom
              align="center"
              className={classes.typography}
            >
              Store
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            className={classes.gridItemsFeature}
            align="center"
          >
            <EmojiTransportationIcon
              className={classes.iconFeature}
            ></EmojiTransportationIcon>
            <Typography
              variant="body2"
              gutterBottom
              align="center"
              className={classes.typography}
            >
              Convenient Location on FM 528
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            className={classes.gridItemsFeature}
            align="center"
          >
            <AnnouncementIcon
              className={classes.iconFeature}
            ></AnnouncementIcon>
            <Typography
              variant="body2"
              gutterBottom
              align="center"
              className={classes.typography}
            >
              Reliable Building Maintenance
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            className={classes.gridItemsFeatureBottom}
            align="center"
          >
            <GroupIcon className={classes.iconFeature}></GroupIcon>
            <Typography
              variant="body2"
              gutterBottom
              align="center"
              className={classes.typography}
            >
              Groups
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            className={classes.gridItemsFeatureBottom}
            align="center"
          >
            <VideocamIcon className={classes.iconFeature}></VideocamIcon>
            <Typography
              variant="body2"
              gutterBottom
              align="center"
              className={classes.typography}
            >
              24/7 Video Surveillance
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            className={classes.gridItemsFeatureBottom}
            align="center"
          >
            <FastfoodIcon className={classes.iconFeature}></FastfoodIcon>
            <Typography
              variant="body2"
              gutterBottom
              align="center"
              className={classes.typography}
            >
              Food Options Nearby
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            className={classes.gridItemsFeatureBottom}
            align="center"
          >
            <ContactPhoneIcon
              className={classes.iconFeature}
            ></ContactPhoneIcon>
            <Typography
              variant="body2"
              gutterBottom
              align="center"
              className={classes.typography}
            >
              Phone
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
