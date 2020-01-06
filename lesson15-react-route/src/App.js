import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    {/* MENU */}
                    <nav className="navbar navbar-inverse">
                        <ul className="nav navbar-nav">
                            <li>
                                <NavLink activeClassName="my-active" exact to="/" >Trang chủ</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="my-active" to="/about">Giới thiệu</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="my-active" to="/contact">Liên hệ</NavLink>
                            </li>
                        </ul>
                    </nav>

                    {/* Nội dung */}
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/contact" component={Contact}></Route>
                </div>
            </Router>
        );
    }

}

export default App;
