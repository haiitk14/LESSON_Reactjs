import React, { Component } from 'react';

class Color extends Component {

  render () {
     return (
      <div>
        <div className="panel panel-info">
        	<div className="panel-heading">
        		<h3 className="panel-title">Change Color</h3>
        	</div>
        	<div className="panel-body">
     			<button type="button" className="btn btn-info">Info</button>
     			<button type="button" className="btn btn-primary">Primary</button>
     			<button type="button" className="btn btn-success">Success</button>
     			<button type="button" className="btn btn-warning">Warning</button>
     			<button type="button" className="btn btn-danger">Danger</button>
        	</div>
        </div>
      </div>
    );
  }
}

export default Color;