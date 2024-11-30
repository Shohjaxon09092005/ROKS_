import React from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../translate/LanguageContext"; // Tanlangan tilni olish
import translations from "../translate/DiseasesPage"; // Tarjima ma'lumotlari

function DiseaseCard({ disease, ID }) {
  const { language } = useLanguage(); // Foydalanuvchi tanlagan tilni olish
  const t = translations[language] || translations["uz"]; // Default qilib o‘zbek tilini qo‘llash

  return (
    <div className="disease-card">
      <img src={disease.image} alt={disease.name} />
      <h3>{disease.name}</h3>
      <p>{disease.description}</p>
      <NavLink to={`/diseases/${ID}`}>
        <button>{t.readMore || "Batafsil o'qish"}</button>
      </NavLink>
    </div>
  );
}

export default DiseaseCard;
