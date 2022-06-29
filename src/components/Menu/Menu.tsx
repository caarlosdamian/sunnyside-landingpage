import React from "react";
import "./Menu.scss";

interface MenuProps {
  navbarTitle: any;
}

export const Menu = ({ navbarTitle }: MenuProps) => {
  return (
    <div className="menu-container">
        <div className="menu-triangle">
            
        </div>
      {navbarTitle.map((item: any) => (
        <span
          key={item.id}
          className={`menu-span ${(item.id === 4 && "button") || ""}`}
        >
          {item.label}
        </span>
      ))}
    </div>
  );
};
