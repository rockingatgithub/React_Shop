import React, { Component } from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import AllProducts from './AllProducts';
import AddProduct from './AddProduct';
import Cart from './Cart';
import Product from './Product';
import { allProductsList } from '../actions';
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
    toast('Add product');
    const { showForm } = this.state;
    if (showForm) {
      this.setState({
        showForm: false,
      });
    } else {
      this.setState({
        showForm: true,
      });
    }
  };

  render() {
    const { showForm } = this.state;
    const { products } = this.props;
    const { list, cart } = products;
    return (
      <Router>
        <div>
          <Navbar />
          <button onClick={this.showFormBox}>Add Product</button>
          {showForm && <AddProduct dispatch={this.props.dispatch} />}

          {/* <Switch>
            <Route exact path="/all" component={AllProducts} />
            <Route exact path="/add" component={AddProduct} />
            <Route exact path="/cart" component={Cart} />
          </Switch> */}

          <div id="main-list">
            {list.map((product) => (
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
