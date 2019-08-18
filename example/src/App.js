import React, { Component } from 'react'
import Home from './Components/Home'
import InputTextDemo from './Components/InputTextDemo'
import FormsDemo from './Components/FormsDemo'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <div className="d-flex" id="wrapper">
          <div className="bg-light border-right" id="sidebar-wrapper">
            <Link to="/">
              <div className="sidebar-heading">React Falcon Form</div>
            </Link>
            <div className="list-group list-group-flush">
              <Link to="/inputtext">
                <li className="list-group-item list-group-item-action bg-light">Input</li>
              </Link>
              <Link to="/validationFilter">
                <li className="list-group-item list-group-item-action bg-light">ValidationFilter</li>
              </Link>
              <Link to="/formsDemo">
                <li className="list-group-item list-group-item-action bg-light">Forms</li>
              </Link>
              <Link to="/button">
                <li className="list-group-item list-group-item-action bg-light">Button</li>
              </Link>
            </div>
          </div>

          <div id="page-content-wrapper">

            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
              <button className="btn btn-primary" id="menu-toggle">Toggle Menu</button>

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                  <li className="nav-item active">
                    <a className="nav-link" href="https://github.com/leond08/react-falcon-form">Source Code <span className="sr-only">(current)</span></a>
                  </li>
                </ul>
              </div>
            </nav>

              <div className="container-fluid">
                {/* APP Routes only. avoid dashes(-) when naming routes */}
                <Route exact path="/" component={Home} />
                <Route path="/inputtext" component={InputTextDemo} />
                <Route path="/formsDemo" component={FormsDemo} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
