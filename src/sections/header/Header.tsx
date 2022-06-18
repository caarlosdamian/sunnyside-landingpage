import React from "react";
import { navbarTitle } from "../../utils/data";
import HeaderImg from "../../images/desktop/image-header.jpg";
import Logo from "../../images/logo.svg";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="header__container">
      <img src={HeaderImg} alt="HeaderImg" className="header__container-img" />

      <div className="header_navbar">
        <img src={Logo} alt="logo"  className="logo"/>
        <div className="header__navbar-container">
          {navbarTitle.map((item) => (
            <span
              key={item.id}
              className={`header__navbar-container__titles ${
                (item.id === 4 && "button") || ""
              }`}
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>
      <h1 className="header__title">WE ARE CREATIVES</h1>
    </div>
  );
};
