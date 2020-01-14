import React from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';

function ProductListPage() {
    let products = [];
    return (


        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <ProductList>
                    {showProducts(products)}
                </ProductList>
            </div>
        </div>


    );
}
const showProducts = (products) => {
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

export default ProductListPage;
