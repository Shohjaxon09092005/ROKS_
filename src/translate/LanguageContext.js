import React, { createContext, useState, useContext } from "react";

// Til konteksti yaratish
const LanguageContext = createContext();

// Kontekst provayder komponenti
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "uz" // LocalStorage'dan o'qish yoki standart "uz"
  );

  // Tilni o'zgartirish va localStorage'ga yozish
  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Tilni olish uchun maxsus hook
export function useLanguage() {
  return useContext(LanguageContext);
}
