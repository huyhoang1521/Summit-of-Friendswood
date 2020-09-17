import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import BackgroundImage from "../components/BackgroundImage";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

const mainFeaturedPost = {
  title: "Title of a featured post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Continue reading…",
};

export default function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.root} maxWidth={false}>
        <main>
          <BackgroundImage post={mainFeaturedPost} />
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </React.Fragment>
  );
}
