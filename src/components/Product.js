import React, { Component } from 'react';
import { addToCart, removeFromCart, deleteProduct } from '../actions';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: props.product.price,
      title: props.product.title,
      showEditOption: false,
    };
  }

  handleAddClick = () => {
    const { product } = this.props;
    this.props.dispatch(addToCart(product));
  };

  handleRemoveClick = () => {
    const { product } = this.props;
    this.props.dispatch(removeFromCart(product));
  };

  handleDeleteProduct = (product) => {
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
    const { price } = this.state;
    this.setState({
      price: e.target.value,
    });
  };

  editTitle = (e) => {
    const { title } = this.state;
    this.setState({
      title: e.target.value,
    });
  };

  render() {
    const { product, isInCart } = this.props;
    const { title, price, showEditOption } = this.state;
    return (
      <div className="product-card">
        <h1>{product.id}</h1>
        <span>
          <img
            src="https://image.flaticon.com/icons/svg/833/833262.svg"
            style={{ height: '24px', width: '24px' }}
            onClick={() => this.handleDeleteProduct(product)}
          />
        </span>
        <img
          src="https://img.icons8.com/ios/50/000000/edit.png"
          onClick={this.showEdit}
          style={{
            height: '24px',
            width: '24px',
            marginRight: '10px',
            display: 'inline-block',
            position: 'relative',
          }}
        />
        {showEditOption && (
          <div>
            <p>
              Price: <input onChange={this.editPrice} />
            </p>
            <p>
              Title: <input onChange={this.editTitle} />
            </p>
          </div>
        )}
        <p>{title}</p>
        <p>{price}</p>
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
