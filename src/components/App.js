import React, { Component } from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import AllProducts from './AllProducts';
import AddProduct from './AddProduct';
import Cart from './Cart';
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/all" component={AllProducts} />
            <Route exact path="/add" component={AddProduct} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
