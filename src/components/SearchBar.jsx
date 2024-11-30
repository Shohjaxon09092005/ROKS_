import React from "react";
import { useLanguage } from "../translate/LanguageContext"; // Tanlangan tilni olish
import translations from "../translate/DiseasesPage"; // Tarjima ma'lumotlari

function SearchBar({ setSearchTerm }) {
  const { language } = useLanguage(); // Foydalanuvchi tanlagan tilni olish
  const t = translations[language] || translations["uz"]; // Default qilib o‘zbek tilini qo‘llash

  return (
    <input
      type="text"
      placeholder={t.searchPlaceholder || "Kasallik nomini kiriting..."}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default SearchBar;
