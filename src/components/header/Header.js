import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import LanguageToggle from "../languageToggle/LanguageToggle";
import StyleContext from "../../contexts/StyleContext";
import {usePortfolio} from "../../hooks/usePortfolio";
import {resumeFiles} from "../../utils/resumeFiles";

function Header() {
  const {isDark} = useContext(StyleContext);
  const {portfolio, ui, language} = usePortfolio();
  const {
    greeting,
    skillsSection,
    parkingoAwardSection,
    technicalSkillsSection,
    educationInfo,
    workExperiences,
    bigProjects,
    achievementSection,
    resumeSection
  } = portfolio;

  const navItems = [
    {label: ui.nav.home, href: "#greeting", show: greeting.displayGreeting},
    {label: ui.nav.whatIDo, href: "#skills", show: skillsSection.display},
    {label: ui.nav.award, href: "#award", show: parkingoAwardSection.display},
    {
      label: ui.nav.skills,
      href: "#technical-skills",
      show: technicalSkillsSection.display
    },
    {label: ui.nav.education, href: "#education", show: educationInfo.display},
    {
      label: ui.nav.experience,
      href: "#experience",
      show: workExperiences.display
    },
    {label: ui.nav.projects, href: "#projects", show: bigProjects.display},
    {
      label: ui.nav.certifications,
      href: "#achievements",
      show: achievementSection.display
    },
    {
      label: ui.nav.resume,
      href: resumeFiles[language],
      download: ui.resumeDownloadName,
      show: resumeSection.display,
      isDownload: true
    },
    {label: ui.nav.contact, href: "#contact", show: true}
  ];

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="#greeting" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {navItems.map(
            item =>
              item.show && (
                <li key={item.label}>
                  <a
                    href={item.href}
                    {...(item.isDownload
                      ? {download: item.download}
                      : {})}
                  >
                    {item.label}
                  </a>
                </li>
              )
          )}
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <LanguageToggle />
            </a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;
