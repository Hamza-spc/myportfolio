import React, {useContext} from "react";
import "./TechnicalSkills.scss";
import {usePortfolio} from "../../hooks/usePortfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function TechnicalSkills() {
  const {isDark} = useContext(StyleContext);
  const {portfolio, ui} = usePortfolio();
  const {technicalSkillsSection} = portfolio;

  if (!technicalSkillsSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="technical-skills">
        <h1
          className={
            isDark ? "dark-mode technical-skills-heading" : "technical-skills-heading"
          }
        >
          {technicalSkillsSection.title}
        </h1>
        <p
          className={
            isDark
              ? "dark-mode subTitle technical-skills-subtitle"
              : "subTitle technical-skills-subtitle"
          }
        >
          {technicalSkillsSection.subtitle}
        </p>
        {technicalSkillsSection.primaryFocus && (
          <p
            className={
              isDark
                ? "dark-mode technical-skills-focus"
                : "technical-skills-focus"
            }
          >
            <strong>{ui.sectionHeadings.primaryFocus}</strong>{" "}
            {technicalSkillsSection.primaryFocus}
          </p>
        )}
        <div className="technical-skills-grid">
          {technicalSkillsSection.categories.map((category, i) => (
            <div
              key={i}
              className={
                isDark
                  ? "dark-mode technical-skill-category technical-skill-category-dark"
                  : "technical-skill-category technical-skill-category-light"
              }
            >
              <h3 className="technical-skill-category-title">{category.name}</h3>
              <div className="technical-skill-tags">
                {category.skills.map((skill, j) => (
                  <span key={j} className="technical-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}
