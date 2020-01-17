import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';

class ProductListPage extends Component {
    render() {
        let products = [
            {
                id: 1,
                name: 'Iphone 6',
                price: 2000,
                status: true
            },
            {
                id: 3,
                name: 'Iphone 7',
                price: 40000,
                status: false
            }
        ];
        return (

            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <button type="button" className="btn btn-primary">Thêm mới</button>

                    <ProductList>

                        {this.showProducts(products)}

                    </ProductList>

                </div>
            </div>

        );
    }
    showProducts = (products) => {
        let result = null;
        if (products.length > 0) {
            result = products.map((item, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={item}
                        index={index}
                    ></ProductItem>
                );
            })
        }
        return result;
    
    }
}

export default ProductListPage;
