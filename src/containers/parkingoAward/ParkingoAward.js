import React, {useContext} from "react";
import "./ParkingoAward.scss";
import {usePortfolio} from "../../hooks/usePortfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function ParkingoAward() {
  const {isDark} = useContext(StyleContext);
  const {portfolio} = usePortfolio();
  const {parkingoAwardSection} = portfolio;

  if (!parkingoAwardSection.display) {
    return null;
  }

  function openUrlInNewTab(url) {
    if (!url) return;
    window.open(url, "_blank").focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="award">
        <div className="parkingo-award-container">
          <div className="parkingo-award-text">
            <h1
              className={
                isDark ? "dark-mode parkingo-award-heading" : "parkingo-award-heading"
              }
            >
              {parkingoAwardSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle parkingo-award-subtitle"
                  : "subTitle parkingo-award-subtitle"
              }
            >
              {parkingoAwardSection.subtitle}
            </p>
            <p
              className={
                isDark
                  ? "dark-mode parkingo-award-desc"
                  : "parkingo-award-desc"
              }
            >
              {parkingoAwardSection.description}
            </p>
            {parkingoAwardSection.footerLink?.length > 0 && (
              <div className="parkingo-award-footer">
                {parkingoAwardSection.footerLink.map((link, i) => (
                  <span
                    key={i}
                    className={
                      isDark ? "dark-mode parkingo-award-tag" : "parkingo-award-tag"
                    }
                    onClick={() => openUrlInNewTab(link.url)}
                  >
                    {link.name}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="parkingo-award-image-div">
            <img
              src={parkingoAwardSection.image}
              alt={parkingoAwardSection.imageAlt}
              className="parkingo-award-image"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
