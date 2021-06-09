import About from './About.js'
import Shop from './Shop.js'
import Nav from './Nav.js'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import { useHistory } from 'react-router-dom'

const App = () => {
    return (
        <Router>
        <Nav />
            <Route path="/about" component={About}/>
            <Route path="/shop" component={Shop} />
        </Router>
    )


}

export default App;
