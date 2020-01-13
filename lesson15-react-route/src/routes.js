import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Products from './components/Products';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home></Home>
    },
    {
        path: '/about',
        exact: false,
        main: () => <About></About>
    },
    {
        path: '/contact',
        exact: false,
        main: () => <Contact></Contact>
    },
    {
        path: '/products',
        exact: false,
        main: ({match}) => <Products match={match}></Products>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound></NotFound>
    }
];

export default routes;