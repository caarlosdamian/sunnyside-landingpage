import React, { useState } from "react";
import { navbarTitle } from "../../utils/data";
import HeaderImg from "../../images/desktop/image-header.jpg";
import HeaderImgMobile from "../../images/mobile/image-header.jpg";
import Logo from "../../images/logo.svg";
import hamburger from "../../images/icon-hamburger.svg";
import arrow from "../../images/icon-arrow-down.svg";
import "./Header.scss";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Menu } from "../../components/Menu/Menu";

export const Header = () => {
  const { width } = useWindowSize();
  const [show, setShow] = useState(false)
  return (
    <div className="header__container">
      <img
        src={width <= 375 ? HeaderImgMobile : HeaderImg}
        alt="HeaderImg"
        className="header__container-img"
      />
      {show && <Menu navbarTitle={navbarTitle}/>} 
      {width <= 375 && <img src={arrow} alt="arrow" className="header__container-arrow" />}
      <div className="header_navbar">
        <img src={Logo} alt="logo" className="logo" />
        <div className="header__navbar-container">
          {width <= 375 ? (
            <img src={hamburger} alt="hamburger" className="hamburger-menu"  onClick={()=>setShow(!show)}/>
          ) : (
            navbarTitle.map((item) => (
              <span
                key={item.id}
                className={`header__navbar-container__titles ${
                  (item.id === 4 && "button") || ""
                }`}
              >
                {item.label}
              </span>
            ))
          )}
        </div>
      </div>
      <h1 className="header__title">WE ARE CREATIVES</h1>
    </div>
  );
};
