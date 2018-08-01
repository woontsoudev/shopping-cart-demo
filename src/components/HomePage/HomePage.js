import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import AddIcon from "@material-ui/icons/Add";

import { CreateProduct } from "../index";
import styles from "./styles";
import { getProductsAction } from "../../reducers/products/actions/index";
import { addProductAction } from "../../reducers/shoppingCart/actions/index";

class HomePage extends Component {
  state = {
    showProductDetailModal: false,
    showCreateProductModal: false,
    productDetail: {}
  };

  componentDidMount() {
    this.props.getProducts();
  }

  handleAddToShoppingCart = productId => {
    let product;
    this.props.products.forEach(item => {
      if (item._id === productId) {
        product = { ...item };
      }
    });
    this.props.addProduct(product);
  };

  handleShowProductDetails = productId => {
    let product;
    this.props.products.forEach(item => {
      if (item._id === productId) {
        product = { ...item };
      }
    });
    this.setState({ showProductDetailModal: true, productDetail: product });
  };

  handleCreateProductModal = () => {
    this.setState({ showCreateProductModal: true });
  };

  render() {
    const { classes, products } = this.props;
    const productCards = products.map(product => {
      return (
        <Grid item md={4} sm={6} xs={12} key={product._id}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={require("../../assets/img1.png")}
              title={product.name}
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {product.name}
              </Typography>
              <Typography component="p">
                In stock: {product.quantity}
              </Typography>
            </CardContent>
            <CardActions className={classes.actions}>
              <Button
                onClick={() => this.handleShowProductDetails(product._id)}
                size="small"
                color="primary"
              >
                Product details
              </Button>
              <Button
                disabled={product.quantity === 0}
                onClick={() => this.handleAddToShoppingCart(product._id)}
                size="small"
                color="primary"
                variant="contained"
              >
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      );
    });

    return (
      <div className={classes.root}>
        <Button
          variant="fab"
          color="secondary"
          elevation={20}
          onClick={this.handleCreateProductModal}
          className={classes.actionButton}
        >
          <AddIcon />
        </Button>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Typography variant="headline" component="h2">
              Products
            </Typography>
          </Grid>
          {productCards}
        </Grid>
        <Modal
          className={classes.productDetailPaper}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.showProductDetailModal}
          onClose={() => this.setState({ showProductDetailModal: false })}
        >
          <Paper className={classes.productDetailPaper} elevation={1}>
            <Typography variant="title" id="modal-title">
              {this.state.productDetail.name}
            </Typography>
            <Typography variant="subheading" id="simple-modal-description">
              {this.state.productDetail.detail}
            </Typography>
            <Typography variant="subheading" id="simple-modal-description">
              {this.state.productDetail.quantity === 0
                ? "Out of stock"
                : `In stock: ${this.state.productDetail.quantity}`}
            </Typography>
          </Paper>
        </Modal>
        <Modal
          className={classes.modal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.showCreateProductModal}
          onClose={() => this.setState({ showCreateProductModal: false })}
        >
          <Paper className={classes.createProductPaper} elevation={1}>
            <CreateProduct />
          </Paper>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = ({ products }) => {
  return {
    products: products.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProducts() {
      dispatch(getProductsAction(...arguments));
    },
    addProduct() {
      dispatch(addProductAction(...arguments));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(HomePage));
