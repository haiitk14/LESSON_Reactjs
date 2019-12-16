import React, { Component } from 'react';

class ContentSize extends Component {

  render () {
     return (
      <div>
        <div className="row">
        	<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        		<div className="text-center" style={{ borderStyle: "solid" }}>
        			<div style={{ height: this.props.height + "px" }}>
        		  		<div style={{ color: this.props.color }}>
        		  			<b>Kết quả</b>
        		  		</div>
        		  	</div>
        		</div>
        	</div>
        </div>
      </div>
    );
  }
}

export default ContentSize;