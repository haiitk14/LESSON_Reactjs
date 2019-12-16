import React, { Component } from 'react';
import Color from './components/Color';
import Size from './components/Size';
import ContentSize from './components/ContentSize';

class App extends Component {
  constructor() {
    super();
    this.state = {
      color: '#d9534f',
      height: '20'
    }
  };

  onChangeColor = (textColor) => {
    this.setState({
        color: textColor
    });
  };

  onChangeHeight = (textSize) => {
    this.setState({
        height: textSize
    });
  };

  render () {
     return (
      <div>

        <div className="container-fluid">
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <a className="navbar-brand">Project-1</a>
              <ul className="nav navbar-nav">
                <li className="active">
                  <a>Demo</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="container-fluid">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <Color color={ this.state.color } onChangeColor={ this.onChangeColor }></Color>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <Size height={ this.state.height } onChangeHeight={ this.onChangeHeight }></Size>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <ContentSize color={this.state.color} height={ this.state.height }></ContentSize>
              </div>
            </div>
        </div>

      </div>
    );
  }
}

export default App;
