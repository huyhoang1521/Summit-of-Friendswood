import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    elevation: 0,
    //backgroundColor: "transparent",
  },
  typography: {
    fontSize: "24px",
  },
  image: {
    width: 200,
    height: 200,
  },
  button: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "100%",
  },
  infoButton: {
    borderRadius: 0,
    fontSize: "14px",
    paddingLeft: "24px",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingRight: "24px",
    backgroundColor: "#000000",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.8)",
    },
  },
  unit: {
    marginLeft: "40px",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function Lease() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <Grid
          className={classes.contain}
          container
          gutterBottom
          spacing="3"
          alignItems="center"
          justify="center"
        >
          <Grid item lg={12}>
            <Paper className={classes.paper} spacing={2}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img
                      className={classes.img}
                      alt="complex"
                      src="/assets/layout1.jpg"
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs={4} container direction="column" spacing={2}>
                    <Grid item xs className={classes.unit}>
                      <Typography gutterBottom variant="subtitle1">
                        Unit
                      </Typography>
                      <Typography
                        className={classes.typography}
                        variant="body2"
                        gutterBottom
                      >
                        #1000
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        764 Sq. Ft.
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={4} container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Monthly
                      </Typography>
                      <Typography
                        className={classes.typography}
                        variant="body2"
                        gutterBottom
                      >
                        $1000
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Floor
                      </Typography>
                      <Typography
                        className={classes.typography}
                        variant="body2"
                        gutterBottom
                      >
                        1st Floor
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item className={classes.button}>
                    <Button
                      size="large"
                      square={true}
                      disableRipple
                      className={classes.infoButton}
                    >
                      More Info
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item lg={12}>
            <Paper className={classes.paper} spacing={2}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img
                      className={classes.img}
                      alt="complex"
                      src="/assets/layout1.jpg"
                    />
                  </ButtonBase>
                </Grid>

                <Grid item xs={12} sm container>
                  <Grid item xs={4} container direction="column" spacing={2}>
                    <Grid item xs className={classes.unit}>
                      <Typography gutterBottom variant="subtitle1">
                        Unit
                      </Typography>
                      <Typography
                        className={classes.typography}
                        variant="body2"
                        gutterBottom
                      >
                        #2000
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        764 Sq. Ft.
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={4} container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Monthly
                      </Typography>
                      <Typography
                        className={classes.typography}
                        variant="body2"
                        gutterBottom
                      >
                        $1000
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Floor
                      </Typography>
                      <Typography
                        className={classes.typography}
                        variant="body2"
                        gutterBottom
                      >
                        1st Floor
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item className={classes.button}>
                    <Button
                      size="large"
                      square={true}
                      disableRipple
                      className={classes.infoButton}
                    >
                      More Info
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item lg={12}>
            <Paper className={classes.paper} spacing={2}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img
                      className={classes.img}
                      alt="complex"
                      src="/assets/layout1.jpg"
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs={4} container direction="column" spacing={2}>
                    <Grid item xs className={classes.unit}>
                      <Typography gutterBottom variant="subtitle1">
                        Unit
                      </Typography>
                      <Typography
                        className={classes.typography}
                        variant="body2"
                        gutterBottom
                      >
                        #3000
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        764 Sq. Ft.
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={4} container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Monthly
                      </Typography>
                      <Typography
                        className={classes.typography}
                        variant="body2"
                        gutterBottom
                      >
                        $1000
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Floor
                      </Typography>
                      <Typography
                        className={classes.typography}
                        variant="body2"
                        gutterBottom
                      >
                        2nd Floor
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item className={classes.button}>
                    <Button
                      size="large"
                      square={true}
                      disableRipple
                      className={classes.infoButton}
                    >
                      More Info
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
