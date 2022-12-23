import "./Header.css";
import Logo from "../../images/Logo.png";
import chev from "../../images/chevron-down.png";
import React from "react";

export default function Header() {
  return (
    <header className="header container">
      <div className="header__logo">
        <a href="##" className="header__logo">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <div className="header__menu">
        <nav className="header__menu_list">
          <ul className="header__menu_list_item">
            <li className="header__menu_link">
              <a href="##" className="header__menu_link_item">
                Home
              </a>
            </li>
            <li className="header__menu_link">
              <a href="##" className="header__menu_link_item dropdown__item">
                Categories
              </a>
              <img src={chev} alt="logo" className="chev" />
              <ul className="menu__dropdown-list">
                <li>
                  <a href="##" className="menu__dropdown-link">
                    Categories 1
                  </a>
                </li>
                <li>
                  <a href="##" className="menu__dropdown-link">
                    Categories 2
                  </a>
                </li>
                <li>
                  <a href="##" className="menu__dropdown-link">
                    Categories 3
                  </a>
                </li>
                <li>
                  <a href="##" className="menu__dropdown-link">
                    Categories 4
                  </a>
                </li>
              </ul>
            </li>
            <li className="header__menu_link">
              <a href="##" className="header__menu_link_item">
                My Collections
              </a>
            </li>
            <li className="header__menu_link">
              <a href="##" className="header__menu_link_item">
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__buttons">
        <button href="##" class="menu__button button-grey">
          Login
        </button>
        <button href="##" class="menu__button-orange button-orange">
          Sign Up
        </button>
      </div>
    </header>
  );
}
