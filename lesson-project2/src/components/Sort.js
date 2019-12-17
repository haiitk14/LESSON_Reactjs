import React, { Component } from 'react';

class Sort extends Component {
  render() {
    return (
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <div className="btn-group">
              <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Action <span className="caret"></span>
              </button>
              <ul className="dropdown-menu">
                <li><a >Action</a></li>
                <li><a>Another action</a></li>
                <li><a>Something else here</a></li>
                <li className="divider"></li>
                <li><a>Separated link</a></li>
              </ul>
            </div>
          </div>
    );
  }
}

export default Sort;
