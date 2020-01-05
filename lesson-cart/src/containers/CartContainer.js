import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Message from './../constants/Message';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import { 
    actDeleteProductInCart, 
    actMinusProductInCart, 
    actPlusProductInCart, 
    actChangeMessage 
} from './../actions/index';

class CartContainer extends Component {
    render() {
        let { cart } = this.props;

        return (

            <Cart>
                {this.showCartItem(cart)}
                {this.showCartResult(cart)}
            </Cart>

        );
    }

    showCartItem = (cart) => {
        let { 
            onDeleteProductInCart, 
            onMinusProductInCart, 
            onPlusProductInCart,
            onChangeMessage
        } = this.props;

        let result = <tr>
                        <td>
                            { Message.MSG_CART_EMPTY }
                        </td>
                    </tr>;

        if (cart.length > 0) {

            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        cartItem={item}
                        index={index}
                        onDeleteProductInCart ={onDeleteProductInCart}
                        onMinusProductInCart ={onMinusProductInCart}
                        onPlusProductInCart ={onPlusProductInCart}
                        onChangeMessage = {onChangeMessage}
                    >
                    </CartItem>
                )
            });
        }

        return result;
    }

    showCartResult = (cart) => {
        let result = null;

        if (cart.length > 0) {
            result = <CartResult cart={cart}></CartResult>
        }
        return result;
    }

}
CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }).isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired,
    onDeleteProductInCart: PropTypes.func.isRequired,
    onMinusProductInCart: PropTypes.func.isRequired,
    onPlusProductInCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired,
}
const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actDeleteProductInCart(product));
        },
        onMinusProductInCart: (product) => {
            dispatch(actMinusProductInCart(product));
        },
        onPlusProductInCart: (product) => {
            dispatch(actPlusProductInCart(product));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
