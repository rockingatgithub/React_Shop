import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './Product';

class Cart extends Component {
  render() {
    const { products } = this.props;
    const { list, cart } = products;
    return (
      <div>
        <div id="main-list">
          {cart.map((product) => (
            <Product
              product={product}
              key={product.id}
              dispatch={this.props.dispatch}
              isInCart={this.isProductInCart(product)}
            />
          ))}

          {list.length === 0 ? (
            <div className="no-products">No products!</div>
          ) : null}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ products }) {
  return {
    products,
  };
}

export default connect(mapStateToProps)(Cart);
