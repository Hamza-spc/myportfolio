import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import StyleContext from "../../contexts/StyleContext";
import {usePortfolio} from "../../hooks/usePortfolio";
import {resumeFiles} from "../../utils/resumeFiles";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  const {portfolio, ui, language} = usePortfolio();
  const {greeting} = portfolio;

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text={ui.buttons.contact} href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={resumeFiles[language]}
                    download={ui.resumeDownloadName}
                    className="download-link-button"
                  >
                    <Button text={ui.buttons.downloadResume} />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {greeting.profileImage ? (
              <img
                alt={greeting.username}
                src={greeting.profileImage}
                className="greeting-profile-photo"
              />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
