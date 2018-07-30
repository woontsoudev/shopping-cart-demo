import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";

import styles from "./styles";

const Header = props => {
  const {
    classes,
    toggleDrawer,
    showDrawer,
    shoppingCartCount,
    logout
  } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Shopping Cart Demo
          </Typography>
          <Button color="inherit" onClick={logout}>Logout</Button>
          <IconButton
            onClick={() => toggleDrawer(showDrawer)}
            color="inherit"
            aria-label="Add to shopping cart"
          >
            <Badge
              badgeContent={shoppingCartCount || 0}
              classes={{ badge: classes.badge }}
            >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Header);
