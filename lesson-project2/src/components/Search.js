import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search for..." />
              <span className="input-group-btn">
                <button className="btn btn-primary" type="button"><i className="fa fa-search"></i></button>
              </span>
            </div>
          </div>
    );
  }
}

export default Search;
