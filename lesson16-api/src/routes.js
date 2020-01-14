import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage></HomePage>
    },
    {
        path: '/products',
        exact: true,
        main: () => <ProductListPage></ProductListPage>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage></NotFoundPage>
    }
];

export default routes;