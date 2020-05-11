import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <Link to="/about-us">
          <Button>About us</Button>
        </Link>
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
