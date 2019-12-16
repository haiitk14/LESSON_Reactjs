import React, { Component } from 'react';

class Size extends Component {

	onClickTang = () => {
		let heightOld = this.props.height;
		let heightNew = Number(heightOld) + 10;
		this.props.onChangeHeight(heightNew);
	}
	onClickGiam = () => {
		let heightOld = this.props.height;
		let heightNew = Number(heightOld) - 10;
		this.props.onChangeHeight(heightNew < 20 ? 20 : heightNew);
	}
	onReset = () => {
		this.props.onChangeHeight(20);
	}

  render () {
     return (
      <div>
        <div className="panel panel-success">
        	<div className="panel-heading">
        		<h3 className="panel-title">Size: { this.props.height } px</h3>
        	</div>
        	<div className="panel-body">

	        	<div className="form-group">
        			<button type="button" className="btn btn-success" onClick={ this.onClickGiam }>Giảm - </button>
					<button type="button" className="btn btn-success" onClick={ this.onClickTang }>Tăng + </button>
	        	</div>

        		<div className="form-group">
        			<button type="button" className="btn btn-danger" onClick={ this.onReset }>Reset</button>
        		</div>

        	</div>
        </div>
      </div>
    );
  }
}

export default Size;