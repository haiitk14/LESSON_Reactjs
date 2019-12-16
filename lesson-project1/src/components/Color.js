import React, { Component } from 'react';

class Color extends Component {
	
	onClickColor = (textColor) => {
		this.props.onChangeColor(textColor);
	}

  	render () {

     	return (
      		<div>
        		<div className="panel panel-info">
		        	<div className="panel-heading">
		        		<h3 className="panel-title">Change Color</h3>
		        	</div>
		        	<div className="panel-body">
		     			<button type="button" 
		     				className={ this.props.color === "#5bc0de" ? "btn btn-info active" : "btn btn-info" }
		     				onClick={ (e) => {  this.onClickColor("#5bc0de"); }}
		     			>
		     				Info
		     			</button>
		     			<button type="button" 
		     				className={ this.props.color === "#337ab7" ? "btn btn-primary active" : "btn btn-primary" } 
		     				onClick={(e) => { this.onClickColor("#337ab7") }}
		     			>
		     				Primary
		     			</button>
		     			<button type="button" 
		     				className={ this.props.color === "#5cb85c" ? "btn btn-success active" : "btn btn-success" }
		     				onClick={ (e) => {  this.onClickColor("#5cb85c"); }}
		     			>
		     				Success
		     			</button>
		     			<button type="button" 
		     				className={ this.props.color === "#f0ad4e" ? "btn btn-warning active" : "btn btn-warning" }
							onClick={ (e) => {  this.onClickColor("#f0ad4e"); }}
		     			>
		     				Warning
		     			</button>
		     			<button type="button" 
		     				className={ this.props.color === "#d9534f" ? "btn btn-danger active" : "btn btn-danger" }
		     				onClick={ (e) => {  this.onClickColor("#d9534f"); }}
		     			>
		     				Danger
		     			</button>
		        	</div>
		        </div>
	      </div>
    	);
  	}
}

export default Color;