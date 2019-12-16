import React, { Component } from 'react';

class Size extends Component {

  render () {
     return (
      <div>
        <div className="panel panel-success">
        	<div className="panel-heading">
        		<h3 className="panel-title">Size: 20px</h3>
        	</div>
        	<div className="panel-body">

	        	<div className="form-group">
        			<button type="button" className="btn btn-success">Giảm - </button>
					<button type="button" className="btn btn-success">Tăng + </button>
	        	</div>

        		<div className="form-group">
        			<button type="button" className="btn btn-danger">Reset</button>
        		</div>

        	</div>
        </div>
      </div>
    );
  }
}

export default Size;