import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux'; // kết nối redux
import callAPI from './../../utils/apiCaller';


class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }
    componentDidMount() {
        // Chạy sau render()
        // Sau khi component render lần 1
        callAPI('products', 'GET', null).then(res => {
            this.setState({
                products: res.data
            });
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
