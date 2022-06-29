import React from "react";
import milk from "../../images/desktop/image-gallery-milkbottles.jpg";
import cone from "../../images/desktop/image-gallery-cone.jpg";
import orange from "../../images/desktop/image-gallery-orange.jpg";
import sugar from "../../images/desktop/image-gallery-sugarcubes.jpg";
import milkMobile from "../../images/mobile/image-gallery-milkbottles.jpg";
import coneMobile from "../../images/mobile/image-gallery-cone.jpg";
import orangeMobile from "../../images/mobile/image-gallery-orange.jpg";
import sugarMobile from "../../images/mobile/image-gallery-sugar-cubes.jpg";
import "./BottomMiddle.scss";
import { useWindowSize } from "../../hooks/useWindowSize";

export const BottomMiddle = () => {
  const { width } = useWindowSize();
  return (
    <div className="bottom-middle__container">
      <img
        src={width <= 375 ? milkMobile : milk}
        alt="milk"
        className="bottom-middle__img"
      />
      <img
        src={width <= 375 ? coneMobile : cone}
        alt="cone"
        className="bottom-middle__img"
      />
      <img
        src={width <= 375 ? orangeMobile : orange}
        alt="orange"
        className="bottom-middle__img"
      />
      <img
        src={width <= 375 ? sugarMobile : sugar}
        alt="sugar"
        className="bottom-middle__img"
      />
    </div>
  );
};
