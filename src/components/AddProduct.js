import React, { Component } from 'react';
import { addProductToList } from '../actions';
class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pTitle: '',
      pPrice: '',
      pDesc: '',
      pImg: '',
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

  productDesc = (e) => {
    this.setState({
      pDesc: e.target.value,
    });
  };

  productImg = (e) => {
    this.setState({
      pImg: e.target.value,
    });
  };

  submitProduct = () => {
    const { pTitle, pPrice, pDesc, pImg } = this.state;
    const product = {
      title: pTitle,
      price: pPrice,
      desc: pDesc,
      img: pImg,
    };
    this.props.dispatch(addProductToList(product));
  };

  render() {
    return (
      <div id="add-form">
        <p className="add-form-block">
          <label for="item-title">Title: </label>
          <input id="item-title" onChange={this.productTitle} />
        </p>
        <p className="add-form-block">
          <label for="item-price">Price: </label>
          <input id="item-price" onChange={this.productPrice} />
        </p>
        <p className="add-form-block">
          <label for="item-desc">Description: </label>
          <input id="item-desc" onChange={this.productDesc} />
        </p>
        <p className="add-form-block">
          <label for="item-img">Image Link: </label>
          <input id="item-img" onChange={this.productImg} value="" />
        </p>
        <button id="add-product" onClick={this.submitProduct}>
          ADD
        </button>
      </div>
    );
  }
}

export default AddProduct;
