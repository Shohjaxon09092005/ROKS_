import React, { useState } from "react";
import DiseaseCard from "../components/DiseaseCard";
import SearchBar from "../components/SearchBar";
import { useLanguage } from "../translate/LanguageContext"; // Tanlangan tilni olish
import translations from "../translate/DiseasesPage"; // Tarjima ma'lumotlari
import "../styles/diseasesPage.css";

function DiseasesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const { language } = useLanguage(); // Foydalanuvchi tanlagan tilni olish
  const t = translations[language] || translations["uz"]; // Default qilib o‘zbek tilini olish

  // Tanlangan til bo‘yicha kasalliklar ma'lumotlari
  const filteredDiseases = t.diseases.filter((disease) =>
    disease.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="Kasallik">
      <h1>{t.diseasesTitle || "Kasalliklar haqida ma'lumot"}</h1>
      <SearchBar setSearchTerm={setSearchTerm} placeholder={t.searchPlaceholder || "Qidiruv..."} />
      <div className="diseases-list">
        {filteredDiseases.map((disease) => (
          <DiseaseCard key={disease.id} disease={disease} ID={disease.id} />
        ))}
      </div>
    </div>
  );
}

export default DiseasesPage;
