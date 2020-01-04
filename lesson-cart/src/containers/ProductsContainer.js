import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Products from './../components/Products';
import Product from '../components/Product';
import * as actions from './../actions/index'


class ProductsContainer extends Component {
    render() {
        let { products } = this.props;
        
        return (

           <Products>
               { this.showProducts(products) }
           </Products>

        );
    }

    showProducts(products) {
        var result = null;
        let { onAddToCart } = this.props;

        if (products.length > 0) {
            result = products.map((item, index) => {
                return <Product key={ index } product={ item } onAddToCart= {onAddToCart}></Product>
            });
        }

        return result;
    }
}
ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired
}


const mapStateToProps = state => {
    return {
        products: state.products
    };
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actions.actAddToCart(product, 1));
        },
    }
 }

export default connect(mapStateToProps, mapDispatchToProps) (ProductsContainer);
