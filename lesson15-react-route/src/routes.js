import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Products from './components/Products';
import Login from './components/Login';

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
        main: ({match, location}) => <Products match={match} location= {location}></Products>
    },
    {
        path: '/login',
        exact: false,
        main: ({ location }) => <Login location={location}></Login>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound></NotFound>
    }
];

export default routes;