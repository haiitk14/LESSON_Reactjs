import React, { Component } from 'react';
import Product from './components/Product';

class App extends Component {
	constructor() {
		super();
	}
	render () {
	  	return (
		    <div>
				<nav className="navbar navbar-inverse">
					<div className="container-fluid">
						<a className="navbar-brand" href="#">State</a>
						<ul className="nav navbar-nav">
							<li className="active">
								<a href="#">Home</a>
							</li>
						</ul>
					</div>
				</nav>
		       	<Product></Product>

		    </div>
	  	);
  	}
}

export default App;
