import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import styles from "./styles";
import { Header } from "../common/index";

const Layout = props => {
  const {
    classes,
    children,
    toggleDrawer,
    showDrawer,
    shoppingCartProducts,
    removeShoppingCartProduct,
    clearAllShoppingCart,
    showHeader,
    logout,
    checkoutProducts
  } = props;
  const shoppingCartCount = shoppingCartProducts.length;
  const productsList = shoppingCartProducts.map((product, i) => {

    return (
      <ListItem key={product._id + i}>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={product.name} secondary={product.detail} />
        <ListItemSecondaryAction>
          <IconButton
            aria-label="Delete"
            onClick={() => removeShoppingCartProduct(product._id)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  });

  return (
    <section className={classes.section}>
      {showHeader ? <header>
        <Header
          logout={logout}
          showDrawer={showDrawer}
          toggleDrawer={toggleDrawer}
          shoppingCartCount={shoppingCartCount}
        />
      </header>: null}
      <main className={classes.main}>{children}</main>
      <footer className={classes.footer}></footer>
      <Drawer
        anchor="right"
        open={showDrawer}
        onClose={() => toggleDrawer(showDrawer)}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={() => toggleDrawer(showDrawer)}
          onKeyDown={() => toggleDrawer(showDrawer)}
        >
          <Typography
            className={classes.drawerTitle}
            variant="display1"
            gutterBottom
          >
            Shopping Cart
          </Typography>
          <List>{productsList}</List>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.btn}
            onClick={checkoutProducts}
          >
            Checkout
          </Button>
          <Button
            onClick={clearAllShoppingCart}
            className={classes.btn}
          >
            Clear Cart
          </Button>
        </div>
      </Drawer>
    </section>
  );
};

export default withStyles(styles)(Layout);
