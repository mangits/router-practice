import Home from './Home.js'
import About from './About.js'
import Shop from './Shop.js'
import Cart from './Cart.js'
import Checkout from './Checkout.js'
import Nav from './Nav.js'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import { useHistory } from 'react-router-dom'

const App = () => {
    return (
    <>
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/shop" component={Shop} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/checkout" component={Checkout} />
            </Switch>
        </Router>
    </>
    )


}

export default App;

// Use React Router to make this a single-page-app that can change its view via the routes (tip - use a navbar along the top with buttons).

// It should feature routes to the following components:

// Home page
// Products page
// Individual product page
// View cart
// Checkout page
// Be sure to push your changes at the end and submit your repository below.