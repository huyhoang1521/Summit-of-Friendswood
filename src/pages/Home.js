import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import BackgroundImage from "../components/BackgroundImage";
import Footer from "../components/Footer";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import Divider from '@material-ui/core/Divider';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ApartmentIcon from '@material-ui/icons/Apartment';
import BuildIcon from '@material-ui/icons/Build';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import VideocamIcon from '@material-ui/icons/Videocam';
import GroupIcon from '@material-ui/icons/Group';
import MailIcon from '@material-ui/icons/Mail';
import StoreIcon from '@material-ui/icons/Store';

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
    marginBottom: theme.spacing(3),
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
    paddingLeft: 300,
    paddingRight: 300,
  },
  backgroundImage: {
    marginBottom: theme.spacing(15),
  },
  grid: {
    marginBottom: theme.spacing(15),
  },
  gridItems: {
    padding: '40px'
  },
  gridItemsFeature: {
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 60,
  },
  gridItemsFeatureBottom: {
    padding: 60
  },
  features: {
    maxWidth: '75%',
    align: 'center',
    justify: 'center'
  },
  icon: {
    marginBottom: theme.spacing(2),
  },
  iconFeature: {
    width: 55,
    height: 55,
  }
}));

const imageText = {
  title: "Title of a featured post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
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
    overflow: 'hidden'
  }}
      >
        <Grid item lg={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm container className={classes.grid}>
              <Grid item xs={3} className={classes.gridItems} container direction="column" spacing={2} align="center">
                <Grid item>
                  <Typography gutterBottom variant="subtitle1" color="textSecondary">
                    Introduction
                      </Typography>
                  <Typography
                    variant="h5"
                    gutterBottom
                  >
                    CLEAN DESIGN
                      </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </Typography>

                </Grid>
                <Divider orientation="vertical" flexItem />
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={3} className={classes.gridItems} container direction="column" spacing={2} align="center">
                <Grid item>
                  <ApartmentIcon className={classes.icon} fontSize="large" />
                  <Typography variant="body2" color="textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </Typography>
                </Grid>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={3} className={classes.gridItems} container direction="column" spacing={2} align="center">
                <Grid item>
                  <BuildIcon className={classes.icon} fontSize="large" />
                  <Typography variant="body2" color="textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </Typography>
                </Grid>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={3} className={classes.gridItems} container direction="column" spacing={2} align="center">
                <Grid item>
                  <AccessAlarmIcon className={classes.icon} fontSize="large" />
                  <Typography variant="body2" color="textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          className={classes.features}
          spacing={0}
          alignItems="center"
          justify="center"
        >
          <Grid item xs={12} sm={12}>
            <Typography
              variant="h5"
              align="center"
              className={classes.typographyFeatures}
            >
              Lorem ipsum dolor sit amet
          </Typography>
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
          <Grid item xs={12} sm={3} className={classes.gridItemsFeature} align="center">
            <MailIcon className={classes.iconFeature}>
            </MailIcon>
            <Typography
              variant="body2"
              gutterBottom
              align="center"
              className={classes.typography}
            >
              Mailboxes
          </Typography>
          </Grid>
          <Grid item xs={12} sm={3} className={classes.gridItemsFeature} align="center">
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
          <Grid item xs={12} sm={3} className={classes.gridItemsFeature} align="center">
            <EmojiTransportationIcon className={classes.iconFeature}>
            </EmojiTransportationIcon>
            <Typography
              variant="body2"
              gutterBottom
              align="center"
              className={classes.typography}
            >
              Convenient Location on FM 528
          </Typography>

          </Grid>
          <Grid item xs={12} sm={3} className={classes.gridItemsFeature} align="center">
            <AnnouncementIcon className={classes.iconFeature}>
            </AnnouncementIcon>
            <Typography
              variant="body2"
              gutterBottom
              align="center"
              className={classes.typography}
            >
              Reliable Building Maintenance
          </Typography>
          </Grid>
          <Grid item xs={12} sm={3} className={classes.gridItemsFeatureBottom} align="center">
            <GroupIcon className={classes.iconFeature}>
            </GroupIcon>
            <Typography
              variant="body2"
              gutterBottom
              align="center"
              className={classes.typography}
            >
              Groups
          </Typography>
          </Grid>
          <Grid item xs={12} sm={3} className={classes.gridItemsFeatureBottom} align="center">
            <VideocamIcon className={classes.iconFeature}>
            </VideocamIcon>
            <Typography
              variant="body2"
              gutterBottom
              align="center"
              className={classes.typography}
            >
              24/7 Video Surveillance
          </Typography>
          </Grid>
          <Grid item xs={12} sm={3} className={classes.gridItemsFeatureBottom} align="center">
            <FastfoodIcon className={classes.iconFeature}>
            </FastfoodIcon>
            <Typography
              variant="body2"
              gutterBottom
              align="center"
              className={classes.typography}
            >
              Food Options Nearby
          </Typography>
          </Grid>
          <Grid item xs={12} sm={3} className={classes.gridItemsFeatureBottom} align="center">
            <ContactPhoneIcon className={classes.iconFeature}>
            </ContactPhoneIcon>
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
      <Footer />
    </React.Fragment>
  );
}
