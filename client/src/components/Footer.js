import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Grid from "@material-ui/core/Grid";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        KCTY LLC
      </Link>{" "}
      {new Date().getFullYear()}
  
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
  typography: {
    //marginLeft: "10px",
    paddingBottom:5
  },
  title: {
    //marginLeft: "5px",
    fontWeight:700
  },
  
  icon: {
marginRight:"5px",
width: 16,
    height: 16,
  },
  grid: {
    marginBottom: theme.spacing(8),
    
  },
  about: {
paddingRight:75
  },
  contact: {
    paddingBottom:5
  }
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid
        container
        className={classes.grid}
        spacing={0}
        alignItems="flex-start"
        justify="center"
        style={{
    overflow: 'hidden'
  }}
      >
        <Grid item lg={5} className={classes.about}>
        
          
            <Typography
              variant="subtitle1"
              gutterBottom
              align="left"
              className={classes.title}
            >
              About
            </Typography>
            <Typography variant="body2" color="textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
                      </Typography>
         
          </Grid>
        <Grid item lg={2}>
         
            <Typography
              variant="subtitle1"
              gutterBottom
              align="left"
              className={classes.title}
             
            >
              Pages
            </Typography>
         
            <Typography
              variant="body2"
              gutterBottom
              align="left"
              className={classes.typography}
              color="textSecondary"
            >
              Home
            </Typography>
         
           
            <Typography
              variant="body2"
              gutterBottom
              align="left"
              className={classes.typography}
              color="textSecondary"
            >
              Lease
            </Typography>
        
            <Typography
              variant="body2"
              gutterBottom
              align="left"
              className={classes.typography}
              color="textSecondary"
            >
              About
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              align="left"
              className={classes.typography}
              color="textSecondary"
            >
              Contact
            </Typography>
        

          </Grid>
          <Grid item lg={2}>
          
            <Typography
              variant="subtitle1"
              gutterBottom
              align="left"
              className={classes.title}
            >
              Resources
            </Typography>
         
            <Typography
              variant="body2"
              gutterBottom
              align="left"
              className={classes.typography}
              color="textSecondary"
            >
              Tour
            </Typography>
        
            <Typography
              variant="body2"
              gutterBottom
              align="left"
              className={classes.typography}
              color="textSecondary"
            >
              About
            </Typography>
         
            <Typography
              variant="body2"
              gutterBottom
              align="left"
              className={classes.typography}
              color="textSecondary"
            >
              Contact
            </Typography>
        

          </Grid>
          <Grid item lg={3}>
          <Box
          
            style={{
              display: "flex",
              alignItems: "left",
              paddingBottom: 1
            }}
          >
            <Typography
              variant="subtitle1"
              gutterBottom
              align="left"
              className={classes.title}
            >
              Contact
            </Typography>
          </Box>
          <Box
          className={classes.contact}
            style={{
              display: "flex",
              alignItems: "center",
              
            }}
          >
            <PhoneIcon className={classes.icon} color="textSecondary"/>
            <Typography
              variant="body2"
              gutterBottom
              align="left"
              className={classes.typography}
              color="textSecondary"
            >
              281-332-1832
            </Typography>
          </Box>
          <Box
          className={classes.contact}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <EmailIcon className={classes.icon} color="textSecondary"/>
            <Typography
              variant="body2"
              gutterBottom
              align="left"
              className={classes.typography}
              color="textSecondary"
            >
              summit-of-friendswood@gmail.com
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <LocationOnIcon className={classes.icon} color="textSecondary"/>
            <Typography
              variant="body2"
              gutterBottom
              align="left"
              className={classes.typography}
              color="textSecondary"
            >
              3526 E FM 528 Friendswood TX, 77546
            </Typography>
          </Box>

          </Grid>
          </Grid>
        
                  
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
