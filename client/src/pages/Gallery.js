import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Footer from "../components/Footer";

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
    justifyContent: "center",
    alignItems: "center",
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

export default function Gallery() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={500}
        maxWidth="md"
        spacing={15}
        className={classes.gridList}
        cols={6}
        style={{ overflow: "hidden" }}
      >
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
      <Footer/>
    </div>
  );
}
