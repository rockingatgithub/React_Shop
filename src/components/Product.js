import React, { Component } from 'react';
import { addToCart, removeFromCart, deleteProduct, showItem } from '../actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: props.product.price,
      title: props.product.title,
      desc: props.product.desc,
      image: props.product.img,
      showEditOption: false,
    };
  }

  handleAddClick = () => {
    toast('Product added to cart!', {
      position: 'top-right',
      type: 'info',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    const { product } = this.props;
    this.props.dispatch(addToCart(product));
  };

  handleRemoveClick = () => {
    toast('Product Removed!', {
      position: 'top-right',
      type: 'info',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    const { product } = this.props;
    this.props.dispatch(removeFromCart(product));
  };

  handleDeleteProduct = (product) => {
    toast('Product deleted!', {
      position: 'top-right',
      type: 'info',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    this.props.dispatch(deleteProduct(product));
  };

  showEdit = () => {
    const { showEditOption } = this.state;
    if (showEditOption) {
      this.setState({
        showEditOption: false,
      });
    } else {
      this.setState({
        showEditOption: true,
      });
    }
  };

  editPrice = (e) => {
    this.setState({
      price: e.target.value,
    });
  };

  editTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  editDesc = (e) => {
    this.setState({
      desc: e.target.value,
    });
  };

  showProduct = (product) => {
    this.props.dispatch(showItem(product));
  };

  render() {
    const { product, isInCart, showControls } = this.props;
    const { title, price, showEditOption, desc, image } = this.state;
    return (
      <div className="product-card product-info">
        {/* <div id="item-id">{product.id}</div> */}
        <span
          onClick={() => this.showProduct(product)}
          className="product-title"
        >
          {title}
        </span>
        {showControls && (
          <span className="delete-button">
            <img
              className="cart-button"
              src="https://image.flaticon.com/icons/svg/833/833262.svg"
              style={{ height: '20px', width: '20px' }}
              onClick={() => this.handleDeleteProduct(product)}
            />
            <img
              className="cart-edit"
              src="https://img.icons8.com/ios/50/000000/edit.png"
              onClick={this.showEdit}
              style={{
                height: '20px',
                width: '20px',
                marginRight: '10px',
                display: 'inline-block',
                position: 'relative',
              }}
            />
          </span>
        )}
        {showEditOption && (
          <div className="item-controls">
            <p className="product-form-price">
              Price: <input onChange={this.editPrice} />
            </p>
            <p className="product-form-title">
              Title: <input onChange={this.editTitle} />
            </p>
            <p className="product-form-desc">
              Description: <input onChange={this.editDesc} />
            </p>
          </div>
        )}
        <p className="product-image-container">
          <img
            src={image}
            className="product-image"
            onClick={() => this.showProduct(product)}
          />
        </p>
        <p className="product-price">Rs.{price}</p>
        <p className="product-desc">{desc}</p>

        {isInCart ? (
          <button className="remove-from-cart" onClick={this.handleRemoveClick}>
            Remove
          </button>
        ) : (
          <button className="add-to-cart" onClick={this.handleAddClick}>
            Add To Cart
          </button>
        )}
      </div>
    );
  }
}

export default Product;
