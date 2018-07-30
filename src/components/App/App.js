import React, { Component } from "react";
import { Route, Redirect, BrowserRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import styles from "./styles";
import { autoLoginAction } from "../../reducers/auth/actions/index";
import {
  removeProductAction,
  clearAllAction,
  checkoutAction
} from "../../reducers/shoppingCart/actions/index";

import {
  Layout,
  HomePage,
  LoginPage,
  PrivateRoute
} from "../index";

class App extends Component {
  state = {
    showDrawer: false,
    showModal: false
  };

  componentDidMount() {
    this.props.onTryAutoLogin();
  }

  handleToggleDrawer = () => {
    this.setState({ showDrawer: !this.state.showDrawer });
  };

  handleRemoveProduct = productId => {
    this.props.removePorduct(productId);
  };

  handleCrearAllShoppingCart = () => {
    this.props.clearAllShoppingCart();
  };

  handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("userId");
    this.props.onTryAutoLogin();
  };

  handleCheckoutProducts = () => {
    this.props.checkoutProducts();
    this.setState({ showModal: true });
  };

  render() {
    const { classes } = this.props;
    return (
      <BrowserRouter>
        <Layout
          logout={this.handleLogout}
          showHeader={this.props.isAuthenticated}
          clearAllShoppingCart={this.handleCrearAllShoppingCart}
          removeShoppingCartProduct={this.handleRemoveProduct}
          shoppingCartProducts={this.props.shoppingCart}
          toggleDrawer={this.handleToggleDrawer}
          showDrawer={this.state.showDrawer}
          showModal={this.state.showModal}
          checkoutProducts={this.handleCheckoutProducts}
        >
          <Route
            path="/login"
            render={props =>
              this.props.isAuthenticated ? (
                <Redirect to="/" />
              ) : (
                <LoginPage {...props} />
              )
            }
          />
          <PrivateRoute
            exact
            path="/"
            component={HomePage}
            isAuthenticated={this.props.isAuthenticated}
          />
          <Modal
            className={classes.modal}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.showModal}
            onClose={() => this.setState({ showModal: false })}
          >
            <Paper className={classes.paper} elevation={1}>
              <Typography
                variant="title"
                className={classes.message}
                id="modal-title"
              >
                Checkout Succesfully
              </Typography>
            </Paper>
          </Modal>
        </Layout>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ users, auth, shoppingCart }) {
  return {
    isAuthenticated: auth.isAuthenticated,
    users: users.list,
    shoppingCart: shoppingCart.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTryAutoLogin() {
      dispatch(autoLoginAction(...arguments));
    },
    removePorduct() {
      dispatch(removeProductAction(...arguments));
    },
    clearAllShoppingCart() {
      dispatch(clearAllAction(...arguments));
    },
    checkoutProducts() {
      dispatch(checkoutAction(...arguments));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(App));
