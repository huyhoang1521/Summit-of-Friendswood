import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import ImagePopup from "./ImagePopup";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    height: 500,
    position: "relative",
    textDecoration: "none",
    backgroundImage: "/assets/android.png",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
}));

export default function GalleryImage(props) {
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);
  const { post } = props;

  return (
    <Grid item xs={12} sm={6} md={post.size}>
      <ImagePopup
        open={openPopup}
        setOpen={setOpenPopup}
        post={post}
      ></ImagePopup>
      <CardActionArea component="a" href="#" disableRipple>
        <Card
          className={classes.card}
          square={true}
          component={Link}
          style={{ backgroundImage: `url(${post.image})` }}
          onClick={() => {
            setOpenPopup(true);
          }}
        >
          <div className={classes.cardDetails}>
            <CardContent>
              {/* Increase the priority of the hero background image */}
              {
                <img
                  style={{ display: "none" }}
                  src={post.image}
                  alt={post.imageText}
                />
              }
            </CardContent>
          </div>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

GalleryImage.propTypes = {
  post: PropTypes.object,
};
