import React, { Component } from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { toast } from 'react-toastify';
import AddProduct from './AddProduct';
import Product from './Product';
import { allProductsList, hideProductInfo } from '../actions';
import 'react-toastify/dist/ReactToastify.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
    };
  }

  componentDidMount() {
    // console.log('I did');
    this.props.dispatch(allProductsList());
  }

  isProductInCart = (product) => {
    const { products } = this.props;

    const index = products.cart.indexOf(product);
    if (index !== -1) {
      return true;
    }
    return false;
  };

  showFormBox = () => {
    const { showForm } = this.state;
    if (showForm) {
      toast('Add Product Form Closed!', {
        position: 'top-right',
        type: 'info',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      this.setState({
        showForm: false,
      });
    } else {
      toast('Add product form and click add product button to close!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      this.setState({
        showForm: true,
      });
    }
  };

  hideProduct = () => {
    this.props.dispatch(hideProductInfo());
  };
  render() {
    const { showForm } = this.state;
    const { products } = this.props;
    const { list, cart, showOne, showOneItem, showAll, showCart } = products;
    return (
      <Router>
        <div id="container">
          <Navbar />
          <div id="left-box">
            <button onClick={this.showFormBox} id="add_product">
              Add Product
            </button>
            {showForm && <AddProduct dispatch={this.props.dispatch} />}
            {showAll && (
              <div className="main-list">
                {list.map((product) => (
                  <Product
                    product={product}
                    key={product.id}
                    dispatch={this.props.dispatch}
                    isInCart={this.isProductInCart(product)}
                    showControls={true}
                  />
                ))}

                {list.length === 0 ? (
                  <div className="no-products">No products!</div>
                ) : null}
              </div>
            )}

            {showCart && (
              <div className="main-list">
                {cart.map((product) => (
                  <Product
                    product={product}
                    key={product.id}
                    dispatch={this.props.dispatch}
                    isInCart={this.isProductInCart(product)}
                    showControls={false}
                  />
                ))}

                {cart.length === 0 ? (
                  <div className="no-products">No products!</div>
                ) : null}
              </div>
            )}
          </div>
          <div id="right-box">
            {showOne && (
              <div className="product-desc-info">
                <button onClick={this.hideProduct} id="close-info-button">
                  Close
                </button>
                <Product
                  product={showOneItem}
                  key={showOneItem.id}
                  dispatch={this.props.dispatch}
                  isInCart={this.isProductInCart(showOneItem)}
                />
              </div>
            )}
          </div>
        </div>
      </Router>
    );
  }
}

function callback(state) {
  return {
    products: state.products,
  };
}

const connectedComponent = connect(callback)(App);

export default connectedComponent;
