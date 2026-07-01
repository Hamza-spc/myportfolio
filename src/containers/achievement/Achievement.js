import React, {useContext, useState} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {usePortfolio} from "../../hooks/usePortfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

function renderCard(card, isDark, key) {
  return (
    <AchievementCard
      key={key}
      isDark={isDark}
      cardInfo={{
        title: card.title,
        issuer: card.issuer,
        date: card.date,
        skills: card.skills,
        description: card.subtitle,
        image: card.image,
        imageAlt: card.imageAlt,
        footer: card.footerLink || []
      }}
    />
  );
}

export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  const {portfolio, ui} = usePortfolio();
  const {achievementSection} = portfolio;
  const [showAll, setShowAll] = useState(false);

  if (!achievementSection.display) {
    return null;
  }

  const allCards = achievementSection.achievementsCards;
  const featuredCards = allCards.filter(card => card.featured);
  const otherCards = allCards.filter(card => !card.featured);
  const hasMore = otherCards.length > 0;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {achievementSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {achievementSection.subtitle}
            </p>
          </div>

          <div className="achievement-cards-div achievement-cards-featured">
            {featuredCards.map((card, i) => renderCard(card, isDark, `featured-${i}`))}
          </div>

          {showAll && (
            <div className="achievement-cards-div achievement-cards-expanded">
              {otherCards.map((card, i) => renderCard(card, isDark, `other-${i}`))}
            </div>
          )}

          {hasMore && (
            <div className="achievement-toggle-wrapper">
              <button
                type="button"
                className={
                  isDark
                    ? "achievement-toggle-btn achievement-toggle-btn-dark"
                    : "achievement-toggle-btn"
                }
                onClick={() => setShowAll(!showAll)}
                aria-expanded={showAll}
              >
                {showAll
                  ? ui.achievement.showLess
                  : ui.achievement.viewAll(allCards.length)}
                <i
                  className={`fas fa-chevron-${showAll ? "up" : "down"} achievement-toggle-icon`}
                  aria-hidden="true"
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </Fade>
  );
}
