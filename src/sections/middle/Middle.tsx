import React from "react";
import egg from "../../images/desktop/image-transform.jpg";
import eggMobile from "../../images/mobile/image-transform.jpg";
import cup from "../../images/desktop/image-stand-out.jpg";
import cupMobile from "../../images/mobile/image-stand-out.jpg";
import cherri from "../../images/desktop/image-graphic-design.jpg";
import cherriMobile from "../../images/mobile/image-graphic-design.jpg";
import orange from "../../images/desktop/image-photography.jpg";
import orangeMobile from "../../images/mobile/image-photography.jpg";
import "./Middle.scss";
import { useWindowSize } from "../../hooks/useWindowSize";

export const Middle = () => {
  const { width } = useWindowSize();
  return (
    <div className="middle-grid">
      <div className="middle__grid-card">
        <h1 className="middle-grid-header">Tranform you Brand</h1>
        <span className="middle-grid__subtitle">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </span>
        <div className="bottom__button">
          <span className="middle-grid__subtext">Learn more</span>
          <div className="line"></div>
        </div>
      </div>
      <div id="egg-card" className="middle__grid-card-img">
        <img className="img-card" src={width <=375? eggMobile: egg} alt="egg" />
      </div>
      <div className="middle__grid-card-img">
        <img className="img-card"  src={width <=375? cupMobile: cup}  alt="cup" />
      </div>
      <div className="middle__grid-card">
        <h1 className="middle-grid-header">Stand out to the right audience</h1>
        <span className="middle-grid__subtitle">
        Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. 
        </span>
        <div className="bottom__button">
          <span className="middle-grid__subtext">Learn more</span>
          <div className="line orange"></div>
        </div>
      </div>
      <div className="middle__grid-card-img-relative">
        <img className="img-card" src={width <=375? cherriMobile: cherri}   alt="cup" />
        <div className="middle__grid-card-img-relative-container">
          <h1 className="middle__grid-card-img-relative__header">
            Graphic Design
          </h1>
          <span className="middle__grid-card-img-relative__subtitle">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </span>
        </div>
      </div>
      <div className="middle__grid-card-img-relative">
        <img className="img-card" src={width <=375? orangeMobile: orange} alt="orange" />
        <div className="middle__grid-card-img-relative-container">
          <h1 className="middle__grid-card-img-relative__header">
          Photography
          </h1>
          <span className="middle__grid-card-img-relative__subtitle">
          Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
          </span>
        </div>
      </div>
    </div>
  );
};
