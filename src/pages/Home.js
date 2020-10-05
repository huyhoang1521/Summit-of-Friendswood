import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import BackgroundImage from "../components/BackgroundImage";
import Footer from "../components/Footer";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  typography: {
    marginBottom: theme.spacing(3),
    fontFamily: `"Work Sans", "Open Sans", "Arial", sans-serif`,
  },
}));

const imageText = {
  title: "Title of a featured post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
};

export default function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.root} maxWidth={false}>
        <main>
          <BackgroundImage post={imageText} />
        </main>
      </Container>
      <Grid
        container
        maxWidth="md"
        spacing={0}
        alignItems="center"
        justify="center"
      >
        <Grid item xs={12} md={9}>
          <Typography
            variant="body1"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
            aliquet lectus proin nibh nisl condimentum id venenatis. Elementum
            tempus egestas sed sed risus pretium quam vulputate dignissim.
            Cursus in hac habitasse platea dictumst quisque sagittis. Tempus
            quam pellentesque nec nam aliquam sem et tortor consequat. Elementum
            curabitur vitae nunc sed velit. Cras tincidunt lobortis feugiat
            vivamus. Ut morbi tincidunt augue interdum velit. Sit amet porttitor
            eget dolor morbi non. Habitant morbi tristique senectus et netus et
            malesuada. Est velit egestas dui id ornare arcu. Donec enim diam
            vulputate ut pharetra sit amet. Morbi tincidunt augue interdum velit
            euismod in. Volutpat sed cras ornare arcu dui vivamus arcu.
            Tincidunt lobortis feugiat vivamus at augue eget. Tortor at risus
            viverra adipiscing at in tellus integer. Augue interdum velit
            euismod in pellentesque massa placerat. Sodales ut etiam sit amet.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            Tempor id eu nisl nunc. Sit amet nisl suscipit adipiscing bibendum
            est ultricies integer quis. Id consectetur purus ut faucibus
            pulvinar elementum. Faucibus et molestie ac feugiat sed lectus.
            Tincidunt id aliquet risus feugiat in ante metus dictum at. Molestie
            nunc non blandit massa enim nec. Diam donec adipiscing tristique
            risus nec feugiat in. Purus sit amet luctus venenatis. Egestas purus
            viverra accumsan in nisl nisi. Pharetra sit amet aliquam id diam
            maecenas ultricies mi. Pretium vulputate sapien nec sagittis aliquam
            malesuada bibendum arcu. Aenean vel elit scelerisque mauris. Dictum
            sit amet justo donec enim diam vulputate ut. Neque egestas congue
            quisque egestas diam in. Quam lacus suspendisse faucibus interdum
            posuere lorem ipsum dolor sit.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            align="left"
            className={classes.typography}
          >
            Enim facilisis gravida neque convallis a. Et leo duis ut diam quam
            nulla porttitor massa. In metus vulputate eu scelerisque felis
            imperdiet proin fermentum. Nisi vitae suscipit tellus mauris a diam
            maecenas sed enim. Ultrices tincidunt arcu non sodales neque
            sodales. Nulla aliquet porttitor lacus luctus accumsan tortor
            posuere. Ac turpis egestas integer eget aliquet nibh praesent.
            Aliquet porttitor lacus luctus accumsan. Sit amet luctus venenatis
            lectus magna fringilla urna. Ullamcorper sit amet risus nullam.
            Faucibus ornare suspendisse sed nisi lacus sed viverra tellus.
            Libero enim sed faucibus turpis in eu mi. Quis imperdiet massa
            tincidunt nunc pulvinar sapien et ligula. Sed viverra ipsum nunc
            aliquet bibendum enim. Gravida neque convallis a cras semper.
          </Typography>
        </Grid>
      </Grid>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </React.Fragment>
  );
}
