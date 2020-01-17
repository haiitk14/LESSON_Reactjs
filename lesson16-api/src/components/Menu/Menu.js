import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name: "Trang chủ",
        to: "/",
        exact: true
    },
    {
        name: "DS Sản Phẩm",
        to: "/product-list",
        exact: false
    },

];
// Custom link
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? 'active' : '';
                return (
                    <li className={`my-li ${active}`}>
                        <Link to={to}>
                            { label }
                        </Link>
                    </li>
                )
            }} />
    );
}

class Menu extends Component {
    render() {
        return (

            <div className="navbar navbar-default">
                <a className="navbar-brand" href="# ">CALL API</a>
                <ul className="nav navbar-nav">
                    {
                        this.showMenus(menus)
                    }
                </ul>
            </div>

        );
    }

    showMenus = (menus) => {
        let result = null;
        if (menus.length > 0) {
            result = menus.map((item, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={item.name}
                        to={item.to}
                        activeOnlyWhenExact={item.exact}
                    />
                )
            });
        }
    
        return result;
    }

}

export default Menu;
