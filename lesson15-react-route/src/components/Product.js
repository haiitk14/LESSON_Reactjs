import React, { Component } from 'react';

class Product extends Component {
    render() {
        let {match} = this.props;
        let name = match.params.slug;
        console.log(match);

        return (
            <div>
               Đây là chi tiết sản phẩm: { name }
            </div>
        );
    }

}

export default Product;
