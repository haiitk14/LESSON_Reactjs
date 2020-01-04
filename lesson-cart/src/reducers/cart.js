import * as types from './../constants/ActionType';

var data = JSON.parse(localStorage.getItem('CART'));
var initialState = [
    {
        product: {
            id: 1,
            name: 'IP 7',
            image: 'https://cdn.tgdd.vn/Products/Images/42/210653/iphone-11-pro-max-256gb-green-600x600.jpg',
            description: 'SP ip 7',
            price: 1000,
            inventory: 10,
            rating: 4
        },
        quantity: 5
    },
    {
        product: {
            id: 2,
            name: 'Samsung',
            image: 'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1100345574.jpeg',
            description: 'SP samsung s7',
            price: 2000,
            inventory: 9,
            rating: 2
        },
        quantity: 2
    }
];

const products = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_TO_CART: 
            console.log(action);
            return [...state];
        default: return [...state];
    }
}

export default products;