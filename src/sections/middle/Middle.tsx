import React from "react";
import egg from "../../images/desktop/image-transform.jpg";
import "./Middle.scss";

export const Middle = () => {
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
      <div className="middle__grid-card-img">
        <img src={egg} alt="egg" />
      </div>
      <div className="middle__grid-card">
        <h1 className="middle-grid-header">Tranform you Brand</h1>
        <span className="middle-grid__subtitle">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </span>
        <span className="middle-grid__subtext">Learn more</span>
      </div>
      <div className="middle__grid-card">
        <h1 className="middle-grid-header">Tranform you Brand</h1>
        <span className="middle-grid__subtitle">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </span>
        <span className="middle-grid__subtext">Learn more</span>
      </div>
    </div>
  );
};
