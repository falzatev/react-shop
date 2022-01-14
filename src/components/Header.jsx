import React, { useState, useContext } from "react";
import Menu from "@components/Menu";
import MenuMobile from '@components/MenuMobile';
import AppContext from "@context/AppContext";
import MyOrder from "@containers/MyOrder";
import "@styles/Header.scss";

import menuIcon from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";

const Header = () => {
  const [toggleMenuMobile, setToggleMenuMobile] = useState(false);
  const { state: {cart, toggleOrders, toggle}, setToggleOrders, setToggle} = useContext(AppContext);

  const handleToggle = () => {
    setToggle();
  };

  const handleToggleOrders = () => {
    setToggleOrders();
  }

  return (
    <nav>
      <img src={menuIcon} alt="menu" className="menu" onClick={() => setToggleMenuMobile(!toggleMenuMobile)}/>
      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={(handleToggle)}>
            platzi@example.com
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={handleToggleOrders}
          >
            <img src={shoppingCart} alt="shopping cart" />
            {cart.length > 0 ? <div>{cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
      {toggleMenuMobile && <MenuMobile />}
    </nav>
  );
};

export default Header;
