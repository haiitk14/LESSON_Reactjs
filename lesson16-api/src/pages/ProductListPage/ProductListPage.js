import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux'; // kết nối redux
import Axios from 'axios';


class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }
    componentDidMount() {
        // Sau khi component render lần 1
        let host = 'http://localhost:3000'; 
        Axios({
            method: 'get',
            url: host + '/products',
            responseType: 'stream'
        }).then(response => {
            this.setState({
                products: response.data
            });
            
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        let { products } = this.state;
        //let products  = [];
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <button type="button" className="btn btn-primary">Thêm mới</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                        <ProductList>

                            {this.showProducts(products)}

                        </ProductList>

                    </div>
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

const mapStateToProps = state => {
    return {
        products: state.products
    };
}
const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}

export default connect(mapStateToProps, null)(ProductListPage);
