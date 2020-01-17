import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import routes from './routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return (

            <Router>
                <div>
                    {/* MENU */}
                    <Menu></Menu>
                    <div className="container">
    
                        <div className="row">
                            {/* Nội dung */}
                            {/* Switch như witch case trong code */}
                            <Switch>
                                {
                                    this.showContentMenus(routes)
                                }
                            </Switch>
                        </div>
    
                    </div>
    
                </div>
            </Router>
    
    
        );
    }
    showContentMenus = (routes) => {
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
    
        return result;
    }
    
    
}
export default App;
