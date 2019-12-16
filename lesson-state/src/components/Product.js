import React, { Component } from 'react';

class Product extends Component {
	constructor() {
		super();
		this.state = {
			products: [
				{
					id: 1,
					name: "IP 1",
					price: "100000",
					ispublic: true

				},
				{
					id: 2,
					name: "Samsung 1",
					price: "200000",
					ispublic: true
				}
			],
			isActive: true,
		}
	}
	onSave = () => {
		let name = this.refs.name.value;
		let price = this.refs.price.value;
		let ispublic = this.refs.ispublic.checked;
		let arrNew = this.state.products;
		arrNew.push({
			id: Math.floor(Math.random() * 1000),
			name: name,
			price: price,
			ispublic: ispublic
		});
		this.setState({
			products: arrNew
		})
	}
	onDelete = (productId) => {
		let  arrOld = this.state.products;
        let arrNew = arrOld.filter((product, index) => {
            return product.id !== productId
        });
		this.setState({
			products: arrNew
		});
	}
	onActive = () => {
		this.setState({
			isActive: !this.state.isActive
		});
	}
	render () {
		let emplements = this.state.products.map((product, index) => {
			let result = "";

			if (this.state.isActive) {
				result =	<tr key={ index }>
			   	    	      <th scope="row" >{ index + 1} </th>
			   	    	      <td>{ product.name }</td>
			   	    	      <td>{ product.price }</td>
			   	    	      <td>{ product.ispublic === true ? 'Có' : 'Không' }</td>
			   	    	      <td>
			   	    	      	<button type="button" className="btn btn-danger" onClick={(e) => { this.onDelete(product.id)}}>Xóa</button>
			   	    	      </td>
			   	    	    </tr>
			}
			return result;
		});
	  	return (
		    <div>
		    	<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
	    			<div className="form-group">
	    				<label>Tên Sản Phẩm</label>
	    				<input type="text" className="form-control" ref="name"/>
	    			</div>
	    			<div className="form-group">
	    				<label>Giá</label>
	    				<input type="number" className="form-control" ref="price"/>
	    			</div>
	    			<div className="form-group">
	    				<label>Hiển thị <input type="checkbox" ref="ispublic"/> </label>
	    			</div>
	    			<div className="form-group">
	    				<button type="button" className="btn btn-primary" onClick={ this.onSave }>Lưu</button>
	    				
	    			</div>
		    	</div>
		    	<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
		    		<div className="card">
			       	  <div className="card-body">
			       	    <div className="table-responsive|table-responsive-sm|table-responsive-md|table-responsive-lg|table-responsive-xl">
			       	    	<table className="table table-striped|table-dark|table-bordered|table-borderless|table-hover|table-sm">
			       	    	  <caption>Danh sách Sản phẩm</caption>
			       	    	  <thead className="thead-dark|thead-light">
			       	    	    <tr>
			       	    	      <th scope="col">STT</th>
			       	    	      <th scope="col">Tên</th>
			       	    	      <th scope="col">Giá</th>
			       	    	      <th scope="col">Hiển thị</th>
			       	    	    </tr>
			       	    	  </thead>
			       	    	  <tbody>
			       	    	    { emplements }
			       	    	  </tbody>
			       	    	</table>
			       	    </div>
			       	  </div>
			       	</div>
		    	</div>
		       	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
		       		<button type="button" class="btn btn-warning" onClick={ this.onActive }>Active: { this.state.isActive === true ? "true" : "false" }</button>
		       	</div>
		    </div>
	  	);
  	}
}

export default Product;
