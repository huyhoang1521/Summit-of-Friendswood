import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

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
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
