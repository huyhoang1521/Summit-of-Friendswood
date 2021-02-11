import React from "react";
import Grid from "@material-ui/core/Grid";
import GalleryImage from "../components/GalleryImage";

// TODO - add fade animation when loading images

const tileData = [
  {
    image: "/assets/1.jpg",
    link: "/lease",
    size: 8,
  },
  {
    image: "/assets/2.jpg",
    link: "/lease",
    size: 4,
  },
  {
    image: "/assets/3.jpg",
    link: "/lease",
    size: 4,
  },
  {
    image: "/assets/7.jpg",
    link: "/lease",
    size: 4,
  },
  {
    image: "/assets/5.jpg",
    link: "/lease",
    size: 4,
  },
  {
    image: "/assets/4.jpg",
    link: "/lease",
    size: 6,
  },

  {
    image: "/assets/6.jpg",
    link: "/lease",
    size: 6,
  },
];
function Gallery() {
  const [hover, sethover] = React.useState(false);

  return (
    <div
      style={{
        overflow: "hidden",
      }}
    >
      <Grid container spacing={2}>
        {tileData.map((post) => (
          <GalleryImage
            key={post.title}
            post={post}
            onMouseOver={() => sethover(true)}
            onMouseOut={() => sethover(false)}
            hover={hover}
          />
        ))}
      </Grid>
    </div>
  );
}

export default Gallery;
