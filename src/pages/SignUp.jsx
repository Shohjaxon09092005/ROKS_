import React, { useState } from "react";
import { useLanguage } from "../translate/LanguageContext"; // Kontekstni import qilish
import translations from "../translate/SignUp"; // Tarjima faylini import qilish
import "../styles/signUp.css";
import { NavLink } from "react-router-dom";

function SignUp() {
  const { language } = useLanguage(); // Hozirgi tilni olish
  const t = translations[language].signUp; // Hozirgi tilga mos tarjimalar

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert(t.passwordMismatch);
      return;
    }
    console.log("Foydalanuvchi ma'lumotlari:", formData);
  };

  return (
    <div className="container">
      <div className="signup-container">
        <div className="signup-header">
          <h2>{t.title}</h2>
          <p>{t.description}</p>
        </div>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label>{t.fullNameLabel}</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder={t.fullNamePlaceholder}
              required
            />
          </div>
          <div className="form-group">
            <label>{t.emailLabel}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t.emailPlaceholder}
              required
            />
          </div>
          <div className="form-group">
            <label>{t.phoneLabel}</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t.phonePlaceholder}
              required
            />
          </div>
          <div className="form-group">
            <label>{t.passwordLabel}</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder={t.passwordPlaceholder}
              required
            />
          </div>
          <div className="form-group">
            <label>{t.confirmPasswordLabel}</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder={t.confirmPasswordPlaceholder}
              required
            />
          </div>
          <button type="submit" className="signup-btn">
            {t.button}
          </button>
        </form>
        <p className="login-prompt">
          {t.loginPrompt} <NavLink to="/kirish">{t.loginLink}</NavLink>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
