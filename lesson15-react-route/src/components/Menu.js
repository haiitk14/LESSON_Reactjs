import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name: "Trang chủ",
        to: "/",
        exact: true
    },
    {
        name: "Giới thiệu",
        to: "/about",
        exact: false
    },
    {
        name: "Liên hệ",
        to: "/contact",
        exact: false
    },
    {
        name: "Sản phẩm",
        to: "/products",
        exact: false
    },
    {
        name: "Đăng nhập",
        to: "/login",
        exact: false
    }
];
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            console.log(match);
            var active = match ? 'active abc' : '';
            return (
                <li className={`my-li ${active}`}>
                    <Link to={to} className='my-link'>
                        {label}
                    </Link>
                </li>
            )
        }} />
    );
}
class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <ul className="nav navbar-nav">
                    {this.showMenus(menus)}
                    {/* <MenuLink label="Trang chủ" to="/" activeOnlyWhenExact={true} />
                    <MenuLink label="Giới thiệu" to="/about" activeOnlyWhenExact={false} />
                    <MenuLink label="Liên hệ" to="/contact" activeOnlyWhenExact={false} /> */}
                </ul>
            </nav>
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
