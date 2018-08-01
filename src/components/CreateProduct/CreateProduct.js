import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { reduxForm, Field } from "redux-form";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { CustomTextField, CustomSelect } from "../common/index";
import styles from "./styles";
import { createProductAction } from "../../reducers/products/actions/index";

function getSteps() {
  return ["Product Information", "Product Image", "Preview"];
}

function getStepInstructions(step) {
  switch (step) {
    case 0:
      return "Please provide some information about your product";
    case 1:
      return "You can select an image for your product";
    case 2:
      return "Check if everything is ok with your new product";
    default:
      return "Unknown step";
  }
}

class CreateProduct extends Component {
  state = {
    activeStep: 0,
    skipped: new Set(),
    fileToUpload: ""
  };

  isStepOptional = step => {
    return step === 1;
  };

  handleNext = () => {
    const { activeStep } = this.state;
    let { skipped } = this.state;
    if (this.isStepSkipped(activeStep)) {
      skipped = new Set(skipped.values());
      skipped.delete(activeStep);
    }
    this.setState({
      activeStep: activeStep + 1,
      skipped
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1
    });
  };

  handleSkip = () => {
    const { activeStep } = this.state;
    if (!this.isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    this.setState(state => {
      const skipped = new Set(state.skipped.values());
      skipped.add(activeStep);
      return {
        activeStep: state.activeStep + 1,
        skipped
      };
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

  handleCreateProduct = () => {
    this.props.createProduct(this.props.createProductForm.values);
  };

  handleUploadFile = e => {
    this.setState({ fileToUpload: e.target.files[0] });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            if (this.isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (this.isStepSkipped(index)) {
              props.completed = false;
            }
            return (
              <Step key={label} {...props}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <div className={classes.stepperContent}>
            <Typography className={classes.instructions}>
              All steps completed - you&quot;re finished
            </Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div className={classes.stepperContent}>
            <Typography className={classes.instructions}>
              {getStepInstructions(activeStep)}
            </Typography>
            <form className={classes.createForm} noValidate autoComplete="off">
              {activeStep === 0 ? (
                <Fragment>
                  <Field
                    name="name"
                    component={CustomTextField}
                    className={classes.textField}
                    label="Product Name"
                    type="text"
                    margin="normal"
                  />
                  <Field
                    name="detail"
                    component={CustomTextField}
                    className={classes.textField}
                    label="Product Details"
                    type="text"
                    margin="normal"
                  />
                  <Field
                    name="stock"
                    component={CustomSelect}
                    label="Products in stock"
                  />
                </Fragment>
              ) : null}
              {activeStep === 1 ? (
                <Fragment>
                  <input type="file" onChange={this.handleUploadFile} />
                </Fragment>
              ) : null}
              {activeStep === 2 ? (
                <List>
                  <ListItem>
                    <Typography variant="subheading">
                      Product Name: 
                    </Typography>
                    <ListItemText
                      primary={this.props.createProductForm.values.name}
                    />
                  </ListItem>
                  <ListItem>
                  <Typography variant="subheading">
                      Product Details: 
                    </Typography>
                    <ListItemText
                      primary={this.props.createProductForm.values.detail}
                    />
                  </ListItem>
                  <ListItem>
                  <Typography variant="subheading">
                      Stock: 
                    </Typography>
                    <ListItemText
                      primary={this.props.createProductForm.values.stock}
                    />
                  </ListItem>
                </List>
              ) : null}
            </form>
            <div className={classes.createActions}>
              <Button
                disabled={activeStep === 0}
                onClick={this.handleBack}
                className={classes.button}
              >
                Back
              </Button>
              {this.isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleSkip}
                  className={classes.button}
                >
                  Skip
                </Button>
              )}
              <Button
                variant="contained"
                color="primary"
                onClick={
                  activeStep === steps.length - 1
                    ? this.handleCreateProduct
                    : this.handleNext
                }
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Create" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const validate = val => {
  const errors = {};

  if (!val.name) {
    errors.name = "Required";
  }
  if (!val.detail) {
    errors.detail = "Required";
  }
  if (!val.stock) {
    errors.stock = "Required";
  }

  return errors;
};

const mapStateToProps = ({ form }) => {
  console.log(form);
  return {
    createProductForm: form.createProduct
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProduct() {
      dispatch(createProductAction(...arguments));
    }
  };
};

const createProduct = reduxForm({
  form: "createProduct",
  validate
})(CreateProduct);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(createProduct));
