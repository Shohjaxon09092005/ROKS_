import React from "react";
import "../styles/aboutCard.css";
import { useLanguage } from "../translate/LanguageContext"; // Til kontekstidan foydalanamiz
import translations from "../translate/TranslationAboutCard"; // Tarjimalarni import qilamiz

function AboutCard() {
  const { language } = useLanguage(); // Faol tilni olish
  const t = translations[language]; // Tarjimani tanlash

  return (
    <div className="home-container">
      {/* Klinika haqida */}
      <section className="about_section">
        <h1 className="section_title">{t.aboutTitle}</h1>
        <p className="about_description">{t.aboutDescription}</p>
        <div className="about_stats">
          <div className="stat_item">
            <h3>9+</h3>
            <p>{t.experience}</p>
          </div>
          <div className="stat_item">
            <h3>5000+</h3>
            <p>{t.satisfiedClients}</p>
          </div>
          <div className="stat_item">
            <h3>100+</h3>
            <p>{t.specialists}</p>
          </div>
        </div>
      </section>

      {/* Bizning qadriyatlar */}
      <section className="values_section">
        <h2 className="section_title">{t.valuesTitle}</h2>
        <div className="values_container">
          <div className="value_item">
            <h3>{t.quality}</h3>
            <p>{t.qualityDescription}</p>
          </div>
          <div className="value_item">
            <h3>{t.sincerity}</h3>
            <p>{t.sincerityDescription}</p>
          </div>
          <div className="value_item">
            <h3>{t.innovation}</h3>
            <p>{t.innovationDescription}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutCard;
