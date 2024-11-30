import React from "react";
import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../translate/LanguageContext"; // Tanlangan tilni olish
import translations from "../translate/DiseanceDetails"; // Tarjima ma'lumotlari
import "../styles/diseanseDetails.css";

function DiseaseDetails() {
  const { id } = useParams();
  const { language } = useLanguage(); // Foydalanuvchi tanlagan tilni olish
  const t = translations[language] || translations["uz"]; // Default qilib o‘zbek tilini qo‘llash

  const diseases = t.diseasesList; // Tarjima faylidan kasalliklar ro‘yxati
  const disease = diseases.find((d) => d.id === parseInt(id));

  if (!disease) {
    return <h2>{t.noDiseaseMessage || "Kasallik haqida ma'lumot topilmadi"}</h2>;
  }

  return (
    <div className="disease-details">
      <h1 className="disease-title">{disease.name}</h1>
      <p className="disease-description">{disease.details}</p>
      <Link to="/kasalliklar" className="back-link">
        {t.backButton || "Orqaga qaytish"}
      </Link>
    </div>
  );
}

export default DiseaseDetails;
