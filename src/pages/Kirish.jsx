import React, { useState } from "react";
import { useLanguage } from "../translate/LanguageContext"; // Kontekstni import qilish
import translations from "../translate/Kirish"; // Tarjima faylini import qilish
import "../styles/kirish.css";
import { NavLink } from "react-router-dom";

function Kirish() {
  const { language } = useLanguage(); // Hozirgi tilni olish
  const t = translations[language].login; // Hozirgi tilga mos tarjimalar

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="container">
      <div className="login-container">
        <h2>{t.title}</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">{t.emailLabel}</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.emailPlaceholder}
            required
          />
          <label htmlFor="password">{t.passwordLabel}</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t.passwordPlaceholder}
            required
          />
          <button type="submit" className="login-btn">
            {t.button}
          </button>
        </form>
        <p className="signup-prompt">
          {t.signupPrompt}{" "}
          <NavLink to="/ro'yxatdan_o'tish">{t.signupLink}</NavLink>
        </p>
      </div>
    </div>
  );
}

export default Kirish;
