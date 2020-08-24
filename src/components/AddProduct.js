import React, { Component } from 'react';
import { addProductToList } from '../actions';
class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pTitle: '',
      pPrice: '',
    };
  }

  productTitle = (e) => {
    this.setState({
      pTitle: e.target.value,
    });
  };

  productPrice = (e) => {
    this.setState({
      pPrice: e.target.value,
    });
  };

  submitProduct = () => {
    const { pTitle, pPrice } = this.state;
    const product = {
      title: pTitle,
      price: pPrice,
    };
    this.props.dispatch(addProductToList(product));
  };

  render() {
    return (
      <div>
        <input onChange={this.productTitle} />
        <input onChange={this.productPrice} />
        <button onClick={this.submitProduct}>ADD</button>
      </div>
    );
  }
}

export default AddProduct;
