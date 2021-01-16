import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

// TODO - add fade animation when loading images
const useStyles = makeStyles((theme) => ({
  root: {
    //display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    //marginTop: theme.spacing(6),
  },
  gridList: {
    height: "auto",
    justifyContent: "left",
  },
}));

const tileData = [
  {
    img: "/assets/1.jpg",
    title: "Image",
    cols: 4,
  },
  {
    img: "/assets/2.jpg",
    title: "Image",
    cols: 2,
  },
  {
    img: "/assets/3.jpg",
    title: "Image",
    cols: 2,
  },
  {
    img: "/assets/7.jpg",
    title: "Image",
    cols: 2,
  },
  {
    img: "/assets/5.jpg",
    title: "Image",
    cols: 2,
  },
  {
    img: "/assets/4.jpg",
    title: "Image",
    cols: 3,
  },

  {
    img: "/assets/6.jpg",
    title: "Image",
    cols: 3,
  },
];

const Gallery = (props) => {
  const classes = useStyles();

  function getCols(screenWidth, cols) {
    if (isWidthUp("md", screenWidth)) {
      return cols;
    }

    if (isWidthUp("sm", screenWidth)) {
      return 3;
    }

    return 6;
  }

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={500}
        spacing={15}
        className={classes.gridList}
        cols={6}
        style={{ overflow: "hidden" }}
      >
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={getCols(props.width, tile.cols)}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default withWidth()(Gallery);
