var initialState = [
    {
        id: 1,
        name: 'IP 7',
        image: 'https://cdn.tgdd.vn/Products/Images/42/210653/iphone-11-pro-max-256gb-green-600x600.jpg',
        description: 'SP ip 7',
        price: 1000,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Samsung',
        image: 'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1100345574.jpeg',
        description: 'SP samsung s7',
        price: 2000,
        inventory: 9,
        rating: 2
    },
    {
        id: 3,
        name: 'IP 8',
        image: 'https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-hh-600x600-600x600.jpg',
        description: 'SP ip 8',
        price: 100,
        inventory: 5,
        rating: 3
    }
];

const products = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state];
    }
}

export default products;