import * as types from './../constants/ActionType';

var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];

const products = (state = initialState, action) => {
    let { product, quantity } = action;
    let index = -1;

    switch (action.type) {

        case types.ADD_TO_CART:
            index = findProductInCart(state, product);

            if (index === -1) {
                state.push({
                    product: product,
                    quantity: quantity
                });
            } else {
                state[index].quantity += 1;
            }
            localStorage.setItem("CART", JSON.stringify(state));
            return [...state];

        case types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);

            if (index !==  -1) {
                state.splice(index, 1);
            }
            localStorage.setItem("CART", JSON.stringify(state));
            return [...state];

        case types.MINUS_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            
            if (index !==  -1) {
                let sumQuantity = state[index].quantity;

                if (sumQuantity > 1) {
                    state[index].quantity -= 1;
                } else {
                    state.splice(index, 1);
                }
            }
            localStorage.setItem("CART", JSON.stringify(state));
            return [...state];
            
        case types.PLUS_PRODUCT_IN_CART:
            index = findProductInCart(state, product);

            if (index === -1) {
                state.push({
                    product: product,
                    quantity: quantity
                });
            } else {
                state[index].quantity += 1;
            }
            localStorage.setItem("CART", JSON.stringify(state));
            return [...state];

        default: return [...state];
    }
}

var findProductInCart = (cart, product) => {
    let result = -1;

    if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
            if (product.id === cart[i].product.id) {
                result = i;
                break;
            }
        }
    }
    return result;
}

export default products;