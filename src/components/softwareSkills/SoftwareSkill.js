import React from "react";
import "./SoftwareSkill.scss";
import {usePortfolio} from "../../hooks/usePortfolio";

export default function SoftwareSkill() {
  const {portfolio} = usePortfolio();
  const {skillsSection} = portfolio;

  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {skills.deviconClassname ? (
                  <i
                    className={`${skills.deviconClassname} devicon-icon`}
                  ></i>
                ) : (
                  <i
                    className={`${skills.fontAwesomeClassname} fa-icon`}
                  ></i>
                )}
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
