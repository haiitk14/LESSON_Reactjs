import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Product from './Product';

class Products extends Component {
    render() {
        let products = [
            {
                id: 1,
                slug: 'iphonex',
                name: 'IP X',
                price: 15000000
            },
            {
                id: 2,
                slug: 'iphone6',
                name: 'IP 6',
                price: 5000000
            },
            {
                id: 3,
                slug: 'iphone7plus',
                name: 'IP 7 plus',
                price: 10000000
            }
        ];
        let {match} = this.props;
        let url = match.url;

        let result = products.map((item, index) => {
            return (
                <NavLink to={ `${url}/${item.slug}` } key={index}>
                    <li  className="list-group-item">
                        {item.name} - {item.price}
                    </li>
                </NavLink>

            )
        });
        let { location } = this.props;
        console.log(location);


        return (
            <div className="container">
                <h1>Danh sách sản phẩm</h1>

                <div className="row">

                    <ul className="list-group">
                        {result}
                    </ul>

                </div>
                
                <div className="row">
                    <Route path='/products/:slug' component={ Product }></Route>
                </div>
                

            </div>
        );
    }

}

export default Products;
