import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  sortProductList,
  unSortProductList,
  showCartContainer,
  showFullContainer,
} from '../actions';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSorted: false,
    };
  }

  sortProduct = () => {
    toast('Product Sorted!', {
      position: 'top-right',
      type: 'success',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    this.props.dispatch(sortProductList());
    this.setState({
      isSorted: true,
    });
  };

  unSortProduct = () => {
    this.props.dispatch(unSortProductList());
    this.setState({
      isSorted: false,
    });
  };

  showCartBox = () => {
    toast('Your Cart!', {
      position: 'top-right',
      type: 'info',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    this.props.dispatch(showCartContainer());
  };

  showAll = () => {
    this.props.dispatch(showFullContainer());
  };

  render() {
    const { cartCount } = this.props.products;
    const { isSorted } = this.state;
    return (
      <div id="navbar-container">
        <ul id="nav-list">
          <li className="nav-items">
            <button onClick={this.showCartBox}>View Cart</button>
          </li>
          <li className="nav-items">
            <button onClick={this.showAll}>ShowAll</button>
          </li>
          <li className="nav-items" id="banner">
            <small>Data is not persistent, page refresh will reset data.</small>
          </li>
          <li className="nav-items" id="cart-nav-item">
            <img
              src="https://image.flaticon.com/icons/svg/628/628556.svg"
              className="cart-img"
              style={{ height: '24px', width: '24px' }}
            />
            <span id="cart-count">{cartCount}</span>
          </li>
          <li className="nav-items" id="cart-nav-sort">
            {isSorted ? (
              <button className="unsort-button" onClick={this.unSortProduct}>
                {' '}
                UnSort Items{' '}
              </button>
            ) : (
              <button className="sort-button" onClick={this.sortProduct}>
                {' '}
                Sort Items{' '}
              </button>
            )}
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ products }) {
  return {
    products,
  };
}

export default connect(mapStateToProps)(Navbar);
