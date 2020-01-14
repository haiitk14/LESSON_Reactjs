import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import ProductList from './components/ProductList/ProductList';
import routes from './routes';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';



function App() {
    return (
        <div>
            <Menu />

            <div className="container">

                <div class="row">

                    {}

                </div>

            </div>

        </div>
    );
}
const showContentMenus = (routes) => {
    let result = null;

    if (routes.length > 0) {
        result = routes.map((item, index) => {
            return (
                <Route
                    key={index}
                    path={item.path}
                    exact={item.exact}
                    component={item.main}
                >
                </Route>
            )
        })
    }

    return  <Switch> result </Switch>;
}

export default App;
