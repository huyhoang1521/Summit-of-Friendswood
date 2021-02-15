import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import MapStyles from "../mapStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    //marginTop: theme.spacing(8),
  },
  connect: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(3),
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
  },
  typography: {
    marginBottom: theme.spacing(3),
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
  },
  typographyLast: {
    marginBottom: theme.spacing(10),
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
  },
  title: {
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
  },
}));

export default function Contact() {
  const classes = useStyles();

  const libraries = ["places"];
  const mapContainerStyle = {
    width: "100vw",
    height: "90vh",
  };
  const center = {
    lat: 29.52199,
    lng: -95.16867,
  };
  const options = {
    styles: MapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div className={classes.root}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        options={options}
      >
        <Marker
          key={"marker"}
          position={{ lat: 29.52199, lng: -95.16867 }}
        ></Marker>
      </GoogleMap>
      <Grid container width="75%" alignItems="center" justify="center">
        <Grid item xs={9}>
          <Typography
            variant="h5"
            gutterBottom
            align="left"
            className={classes.connect}
          >
            Connect with us:
          </Typography>
          <Typography variant="body1" align="left" className={classes.title}>
            Email us at:
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            summit-of-friendswood@gmail.com
          </Typography>
          <Typography variant="body1" align="left" className={classes.title}>
            You can also reach us by phone:
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            281-332-1832
          </Typography>
          <Typography variant="body1" align="left" className={classes.title}>
            We are located at:
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            align="left"
            className={classes.typographyLast}
          >
            3526 E FM 528 Friendswood TX, 77546
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
