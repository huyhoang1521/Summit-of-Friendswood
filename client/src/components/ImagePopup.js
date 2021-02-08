import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Fade from "@material-ui/core/Fade";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "transparent",
  },

  paper: {
    backgroundColor: "transparent",
    boxShadow: "none",
    overflow: "hidden",
  },
  backDrop: {
    background: "rgba(255,255,255,0.2)",
  },
  image: {
    /*height: "100%",
    width: "100%",
    position: "center",
    paddingLeft: theme.spacing(20),
    paddingRight: theme.spacing(20),
    paddingBottom: theme.spacing(20),
    elevation: 0,
    borderRadius: 0,
    aspectRatio: 1,*/
    //maxWidth: "500vh",
    maxHeight: "80vh",
    //minWidth: "100px",
    //minHeight: "100px",
    //height: "auto",
    width: "100%",
    objectFit: "cover",
    position: "center",
    align: "center",
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
  },
  appBar: {
    position: "relative",
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  dialog: {
    backgroundColor: "transparent",
  },
  button: {
    color: "#FFFFFF",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />;
});

export default function ImagePopup(props) {
  const classes = useStyles();
  const { open, setOpen, post } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            background: "rgba(40,40,40,.5)",
            boxShadow: "none",
          },
        }}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              className={classes.button}
              edge="start"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Container alignItems="center">
          <img
            className={classes.image}
            src={post.image}
            alt={post.imageText}
          />
        </Container>
      </Dialog>
    </React.Fragment>
  );
}

ImagePopup.propTypes = {
  post: PropTypes.object,
};
