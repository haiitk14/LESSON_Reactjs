import React from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name: "Trang chủ",
        to: "/",
        exact: true
    },
    {
        name: "DS Sản Phẩm",
        to: "/products",
        exact: false
    },

];
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
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
const showMenus = (menus) => {
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
function Menu() {
    return (

        <div className="navbar navbar-default">
            <a className="navbar-brand" href="# ">CALL API</a>
            <ul className="nav navbar-nav">
                {
                    showMenus(menus)
                }
            </ul>
        </div>

    );
}

export default Menu;
