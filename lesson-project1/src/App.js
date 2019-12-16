import React, { Component } from 'react';
import Color from './components/Color';
import Size from './components/Size';
import ContentSize from './components/ContentSize';

class App extends Component {

  render () {
     return (
      <div>

        <div className="container-fluid">
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <a className="navbar-brand">Project-1</a>
              <ul className="nav navbar-nav">
                <li className="active">
                  <a>Demo 1</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="container-fluid">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <Color></Color>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <Size></Size>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <ContentSize></ContentSize>
              </div>
            </div>
        </div>

      </div>
    );
  }
}

export default App;
