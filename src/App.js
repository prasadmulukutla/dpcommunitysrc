import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  HashRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import PropTypes from 'prop-types';
import HomePage from './components/HomePage.jsx';
injectTapEventPlugin();
class App extends Component {
  render() {
    return (
      <Router >
    <div>
      <div className="cleatfix">
      <nav className="fh5co-nav-style-1 clearfix" role="navigation" data-offcanvass-position="fh5co-offcanvass-left">
        <div className="container clearfix">
         
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 fh5co-logo">
            <a href="#" ><i></i></a>
            <a href="#">Dp's United</a>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-4 text-right fh5co-link-wrap">
            <ul className="fh5co-special" data-offcanvass="yes">
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/login" className="call-to-action">Get Started</Link></li>
            </ul>
          </div>

        </div>
      </nav>
    <nav className="cd-stretchy-nav clearfix">
      <a className="cd-nav-trigger" href="#0">
        <span aria-hidden="true"></span>
      </a>

      <ul>
        <li><Link to="/login" className="active"><span>Home</span></Link></li>
        <li><Link to="/login"><span>Portfolio</span></Link></li>
        <li><Link to="/login"><span>Services</span></Link></li>
        <li><Link to="/login"><span>Store</span></Link></li>
        <li><Link to="/login"><span>Contact</span></Link></li>
      </ul>
      <span aria-hidden="true" className="stretchy-nav-bg"></span>
    </nav>
    </div>
    
      <Route path="/public" component={HomePage}/>
      <Route path="/login" component={HomePage}/>
    </div>
  </Router>
    );
  }
}

export default App;
