import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
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

  return (
    <div className={classes.root}>
      <Grid container width="75%" alignItems="center" justify="center">
        <Grid item xs={9}>
          <Typography
            variant="h5"
            gutterBottom
            align="left"
            className={classes.typography}
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
