import React, { Component } from 'react';

class ProductItem extends Component {
    
    render() {
        let { product, index } = this.props;
        let statusName = product.status ? 'Còn hàng' : 'Hết hàng';
        let statusClass = product.status ? 'primary' : 'danger';
    
        return (
    
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${statusClass}`}>
                        { statusName }
                    </span>
                </td>
                <td>
    
                    <button type="button" className="btn btn-primary"><i className="fa fa-edit"></i> Chỉnh sửa</button>
                    <button type="button" className="btn btn-danger"><i className="fa fa-trash"></i> Xóa</button>
    
                </td>
            </tr>
    
    
    
    
        );
    }
    
}

export default ProductItem;
