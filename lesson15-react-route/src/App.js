import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import Menu from './components/Menu';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    {/* MENU */}
                    <Menu></Menu>
                
                    {/* Nội dung */}
                    {/* Switch như witch case trong code */}
                    <Switch>
                        {
                            this.showRoutes(routes)
                        }
                    </Switch>
                    
                </div>
            </Router>
        );
    }
    showRoutes = (routes) => {
        let result = null;
        if (routes.length > 0) {
            result = routes.map((item, index) => {
                return (
                    <Route 
                        key={ index }
                        path={ item.path } 
                        exact={ item.exact }
                        component={ item.main }
                    >
                    </Route>
                )
            })
        }

        return result;
    }

}

export default App;
