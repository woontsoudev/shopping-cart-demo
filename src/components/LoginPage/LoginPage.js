import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { reduxForm, Field } from "redux-form";

import { CustomTextField } from "../common/index";
import styles from "./styles";
import {
  loginAction,
  registerAction
} from "../../reducers/auth/actions/index.js";

class LoginPage extends Component {

  handleLogin = () => {
    this.props.loginUser(this.props.loginForm.values);
  };

  handleRegister = () => {
    this.props.registerUser(this.props.loginForm.values);
  };

  render() {
    const { classes, loginForm } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={5}>
          <Typography variant="headline" component="h2">
            Login
          </Typography>
          {this.props.loginError ? (
            <Typography variant="body1" color="error" component="p">
              Invalid Credentials
            </Typography>
          ) : null}
          <form className={classes.form} noValidate autoComplete="off">
            <Field
              name="email"
              error={this.props.loginError}
              component={CustomTextField}
              className={classes.textField}
              label="Email"
              type="text"
              margin="normal"
            />
            <Field
              name="password"
              error={this.props.loginError}
              component={CustomTextField}
              className={classes.textField}
              label="Password"
              type="password"
              margin="normal"
            />
            <Divider light />
            <Button onClick={this.handleRegister} color="primary">
              Register
            </Button>
            <Button
              onClick={this.handleLogin}
              disabled={loginForm && !loginForm.values}
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Login
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

const validate = val => {
  const errors = {};

  if (!val.email) {
    errors.email = "Required";
  } else if (!/^.+@.+$/i.test(val.email)) {
    errors.email = "Invalid email address";
  }
  if (!val.password) {
    errors.password = "Required";
  }

  return errors;
};

function mapStateToProps({ users, form, auth }) {
  return {
    users: users.list,
    loginForm: form.loginForm,
    loginError: auth.loginError
  };
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser() {
      dispatch(loginAction(...arguments));
    },
    registerUser() {
      dispatch(registerAction(...arguments));
    }
  };
};

const loginPage = reduxForm({
  form: "loginForm",
  validate
})(LoginPage);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(loginPage));
