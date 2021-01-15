import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarLink: {
    padding: theme.spacing(1),
    marginLeft: theme.spacing(2),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Toolbar>
        <Link
          color="inherit"
          noWrap
          key={title}
          variant="body2"
          href="/"
          style={{ textDecoration: "none" }}
          className={classes.title}
        >
          <Typography
            component="h2"
            variant="h5"
            key={title}
            color="inherit"
            align="left"
            style={{ textDecoration: "none" }}
            noWrap
            className={classes.toolbarTitle}
          >
            {title}
          </Typography>
        </Link>
        <Hidden smUp>
          <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {sections.map((section) => (
              <Link
                color="inherit"
                noWrap
                key={section.title}
                variant="body2"
                href={section.url}
                style={{ textDecoration: "none" }}
                className={classes.toolbarLink}
              >
                {section.title}
              </Link>
            ))}
          </Menu>
        </Hidden>
        <Hidden only={"xs"}>
          {sections.map((section) => (
            <Link
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              href={section.url}
              style={{ textDecoration: "none" }}
              className={classes.toolbarLink}
            >
              {section.title}
            </Link>
          ))}
        </Hidden>
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
