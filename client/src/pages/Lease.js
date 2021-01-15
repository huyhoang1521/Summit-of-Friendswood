import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import ScrollDialog from "../components/ScrollDialog";

// TODO - add light box (image click)
// make header have a little more padding
// maybe add a header image like the home page. have it say lease over it
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    margin: 0,
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    //elevation: 0,
    //backgroundColor: "transparent",
  },
  typography: {
    fontSize: "24px",
  },
  image: {
    width: 200,
    height: 200,
  },
  imageTest: {
    maxWidth: "100%",
    maxHeight: "100%",
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
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    [theme.breakpoints.up("sm")]: {
      marginRight: "40px",
    },
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

export default function Lease() {
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <Container maxWidth="lg" className={classes.root}>
      <ScrollDialog open={openPopup} setOpen={setOpenPopup}></ScrollDialog>

      <Grid
        className={classes.contain}
        container
        spacing={3}
        alignItems="center"
        justify="center"
      >
        <Grid item lg={12}>
          <Paper className={classes.paper} spacing={2}>
            <Grid container spacing={2}>
              <Grid item lg={2} md={4} sm={6} xs={12}>
                <ButtonBase className={classes.imageTest}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src="/assets/layout1.jpg"
                  />
                </ButtonBase>
              </Grid>
              <Grid item lg={10} md={8} sm={6} xs={12} container>
                <Grid
                  item
                  lg={3}
                  md={3}
                  sm={6}
                  xs={4}
                  container
                  direction="column"
                  spacing={2}
                >
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

                <Grid
                  item
                  lg={3}
                  md={3}
                  sm={6}
                  xs={4}
                  container
                  direction="column"
                  align="left"
                  spacing={2}
                >
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
                <Grid
                  item
                  container
                  direction="column"
                  spacing={2}
                  align="left"
                  lg={4}
                  md={4}
                  sm={6}
                  xs={4}
                >
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
                <Grid item lg={2} md={2} sm={6} xs={12} align="center">
                  <Button
                    size="large"
                    square="true"
                    disableRipple
                    className={classes.infoButton}
                    onClick={() => {
                      setOpenPopup(true);
                    }}
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
              <Grid item lg={2} md={4} sm={6} xs={12}>
                <ButtonBase className={classes.imageTest}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src="/assets/layout1.jpg"
                  />
                </ButtonBase>
              </Grid>
              <Grid item lg={10} md={8} sm={6} xs={12} container>
                <Grid
                  item
                  lg={3}
                  md={3}
                  sm={6}
                  xs={4}
                  container
                  direction="column"
                  spacing={2}
                >
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

                <Grid
                  item
                  lg={3}
                  md={3}
                  sm={6}
                  xs={4}
                  container
                  direction="column"
                  align="left"
                  spacing={2}
                >
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
                <Grid
                  item
                  container
                  direction="column"
                  spacing={2}
                  align="left"
                  lg={4}
                  md={4}
                  sm={6}
                  xs={4}
                >
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
                <Grid item lg={2} md={2} sm={6} xs={12} align="center">
                  <Button
                    size="large"
                    square="true"
                    disableRipple
                    className={classes.infoButton}
                    onClick={() => {
                      setOpenPopup(true);
                    }}
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
              <Grid item lg={2} md={4} sm={6} xs={12}>
                <ButtonBase className={classes.imageTest}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src="/assets/layout1.jpg"
                  />
                </ButtonBase>
              </Grid>
              <Grid item lg={10} md={8} sm={6} xs={12} container>
                <Grid
                  item
                  lg={3}
                  md={3}
                  sm={6}
                  xs={4}
                  container
                  direction="column"
                  spacing={2}
                >
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

                <Grid
                  item
                  lg={3}
                  md={3}
                  sm={6}
                  xs={4}
                  container
                  direction="column"
                  align="left"
                  spacing={2}
                >
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
                <Grid
                  item
                  container
                  direction="column"
                  spacing={2}
                  align="left"
                  lg={4}
                  md={4}
                  sm={6}
                  xs={4}
                >
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
                <Grid item lg={2} md={2} sm={6} xs={12} align="center">
                  <Button
                    size="large"
                    square="true"
                    disableRipple
                    className={classes.infoButton}
                    onClick={() => {
                      setOpenPopup(true);
                    }}
                  >
                    More Info
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
