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
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        maxWidth="md"
        spacing={2}
        alignItems="center"
        justify="center"
      >
        <Grid item xs={12} md={9}>
          <Typography
            variant="h4"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            About
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
