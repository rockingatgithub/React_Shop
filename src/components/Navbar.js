import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { sortProductList, unSortProductList } from '../actions';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSorted: false,
    };
  }

  sortProduct = () => {
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

  render() {
    const { cartCount } = this.props.products;
    const { isSorted } = this.state;
    return (
      <div>
        <ul style={{ listStyle: 'none', display: 'inline-block' }}>
          <li>{/* <Link to="/all">All</Link> */}</li>
          <li>{/* <Link to="/add">Add Items</Link> */}</li>
          <li>{/* <Link to="/cart">Cart Items</Link> */}</li>
        </ul>
        <img
          src="https://image.flaticon.com/icons/svg/628/628556.svg"
          className="cat-img"
          style={{ height: '20px', width: '20px' }}
        />
        <span>{cartCount}</span>
        {isSorted ? (
          <button onClick={this.unSortProduct}> UnSort Items </button>
        ) : (
          <button onClick={this.sortProduct}> Sort Items </button>
        )}
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
