import React, { Component } from 'react';
import * as Message from './../constants/Message';

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
                        <label 
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={ () => this.showMinus(cartItem.product) }
                        >
                            <a href="# " >
                                —
                            </a>
                        </label>
                        <label 
                            className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light"
                            onClick={ () => this.showPlus(cartItem.product) }
                        >
                            <a href="# " >+</a>
                        </label>
                    </div>
                </td>
                <td>{ this.showSubTotal(cartItem.product.price, cartItem.quantity ) }</td>
                <td>
                    <button 
                        type="button" 
                        className="btn btn-sm btn-primary waves-effect waves-light" 
                        data-toggle="tooltip" 
                        data-placement="top"
                        title=""
                        data-original-title="Remove item"
                        onClick={ () => this.showDelete(cartItem.product) }
                    >
                        X
                    </button>
                </td>
            </tr>
        );
    }

    showDelete = (product) => {
        let { onDeleteProductInCart, onChangeMessage } = this.props; 
        onDeleteProductInCart(product);
        onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }

    showMinus = (product) => {
        let { onMinusProductInCart, onChangeMessage } = this.props; 
        onMinusProductInCart(product);
        onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
    }

    showPlus = (product) => {
        let { onPlusProductInCart, onChangeMessage } = this.props; 
        onPlusProductInCart(product);
        onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
    }

    showSubTotal = (price, quantity) => {
        return price * quantity;
    }
}

export default CartItem;
