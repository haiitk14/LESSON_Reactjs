import React, { Component } from 'react';

class CartItem extends Component {
    render() {
        let { cartItem } = this.props;
        
        return (
            <tr>
                <th scope="row">
                    <img src={ cartItem.product.image }
                        alt={ cartItem.product.name } className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{ cartItem.product.name }</strong>
                    </h5>
                </td>
                <td>{ cartItem.product.price }</td>
                <td className="center-on-small-only">
                    <span className="qty">{ cartItem.quantity } </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light">
                            <a href="# " >—</a>
                        </label>
                        <label className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light">
                            <a href="# " >+</a>
                        </label>
                    </div>
                </td>
                <td>{ this.showSubTotal(cartItem.product.price, cartItem.quantity ) }</td>
                <td>
                    <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item">
                        X
                    </button>
                </td>
            </tr>
        );
    }

    showSubTotal = (price, quantity) => {
        return price * quantity;
    }
}

export default CartItem;
