import React from "react";
import avatar1 from "../../images/image-emily.jpg";
import avatar2 from "../../images/image-jennie.jpg";
import avatar3 from "../../images/image-thomas.jpg";
import "./BottomTop.scss";

export const BottomTop = () => {
  return (
    <div className="bottom-top__container">
      <h1 className="bottom-top__header">CLIENT TESTIMONIALS</h1>
      <div className="bottom-top__grid">
        <div className="bottom-top__card">
          <img src={avatar1} alt="avatar1" className="bottom-top__img" />
          <h4 className="bottom-top__subtitle">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </h4>
          <div className="bottom-top__grid-container">
            <h1 className="bottom-top__grid-container__header">Emily R.</h1>
            <h1 className="bottom-top__grid-container__subtitle">
              Marketing Director
            </h1>
          </div>
        </div>
        <div className="bottom-top__card">
          <img src={avatar3} alt="avatar1" className="bottom-top__img" />
          <h4 className="bottom-top__subtitle">
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </h4>
          <div className="bottom-top__grid-container">
            <h1 className="bottom-top__grid-container__header">Thomas S.</h1>
            <h1 className="bottom-top__grid-container__subtitle">
              Chief Operating Officer
            </h1>
          </div>
        </div>
        <div className="bottom-top__card">
          <img src={avatar2} alt="avatar1" className="bottom-top__img" />
          <h4 className="bottom-top__subtitle">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </h4>
          <div className="bottom-top__grid-container">
            <h1 className="bottom-top__grid-container__header">Jennie F.</h1>
            <h1 className="bottom-top__grid-container__subtitle">
              Business Owner
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
