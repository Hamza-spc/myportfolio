import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div
      className={
        isDark
          ? `dark-mode certificate-card${cardInfo.image ? "" : " certificate-card-no-image"}`
          : `certificate-card${cardInfo.image ? "" : " certificate-card-no-image"}`
      }
    >
      {cardInfo.image ? (
        <div className="certificate-image-div">
          <img
            src={cardInfo.image}
            alt={cardInfo.imageAlt || "Card Thumbnail"}
            className="card-image"
          ></img>
        </div>
      ) : null}
      <div className="certificate-detail-div">
        <h5 className="cert-title">{cardInfo.title}</h5>
        {cardInfo.issuer ? (
          <p className="cert-issuer">{cardInfo.issuer}</p>
        ) : null}
        {cardInfo.date ? (
          <p className="cert-date">Issued {cardInfo.date}</p>
        ) : cardInfo.description ? (
          <p className="card-subtitle">{cardInfo.description}</p>
        ) : null}
        {cardInfo.skills ? (
          <p className="cert-skills">Skills: {cardInfo.skills}</p>
        ) : null}
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => {
          return (
            <span
              key={i}
              className={
                isDark ? "dark-mode certificate-tag" : "certificate-tag"
              }
              onClick={() => openUrlInNewTab(v.url, v.name)}
            >
              {v.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
