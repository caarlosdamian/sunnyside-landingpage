import React from "react";
import milk from "../../images/desktop/image-gallery-milkbottles.jpg";
import cone from "../../images/desktop/image-gallery-cone.jpg";
import orange from "../../images/desktop/image-gallery-orange.jpg";
import sugar from "../../images/desktop/image-gallery-sugarcubes.jpg";
import "./BottomMiddle.scss";

export const BottomMiddle = () => {
  return (
    <div className="bottom-middle__container">
      <img src={milk} alt="milk" className="bottom-middle__img" />
      <img src={cone} alt="cone" className="bottom-middle__img" />
      <img src={orange} alt="orange" className="bottom-middle__img" />
      <img src={sugar} alt="sugar" className="bottom-middle__img" />
    </div>
  );
};
