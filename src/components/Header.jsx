import React, { useState, useRef } from "react";
import "../styles/header.css";
import logo from "../images/Roks.png";
import { NavLink } from "react-router-dom";
import burger from "../images/burger-bar.png";
import icon from "../images/search.png";
import { useLanguage } from "../translate/LanguageContext"; // LanguageContext'dan hookni import qilamiz
import translations from "../translate/Translate"; // Tarjima matnlarini import qilamiz

function Header() {
  const { language, changeLanguage } = useLanguage(); // Til va tilni o'zgartirish funksiyasini olish

  const [isSearchActive, setIsSearchActive] = useState(false);
  const modalRef = useRef();

  function delModal() {
    modalRef.current.classList.remove("openModal");
  }

  function openModal() {
    modalRef.current.classList.add("openModal");
  }

  // Faol til uchun tarjimalarni olish
  const t = translations[language];

  return (
    <div className="header">
      <div ref={modalRef} className="modal">
        <div className="modal_wrapper">
          <div className="modal_button">
            <button onClick={delModal} className="close-search">
              X
            </button>
          </div>

          <nav className="nav-links">
            <NavLink to="/">{t.home}</NavLink>
            <NavLink to="/Xizmatlar">{t.services}</NavLink>
            <NavLink to="/doctors">{t.doctors}</NavLink>
            <NavLink to="/yangiliklar">{t.news}</NavLink>
            <NavLink to="/kasalliklar">{t.encyclopedia}</NavLink>
            <NavLink to="/contact">{t.contact}</NavLink>
            <NavLink to="/qabul">
              <button className="request-btn">{t.online}</button>
            </NavLink>
            <NavLink to="/kirish" className="login">
              {t.login}
            </NavLink>
          </nav>
        </div>
      </div>
      <div className="container">
        <div className="header_wrapper">
          <div className="logo">
            <img src={logo} alt="ROKS.UZ Logo" />
          </div>

          <div className="menu_wrapper_header">
            {!isSearchActive ? (
              <nav className="nav-links">
                 <NavLink to="/">{t.home}</NavLink>
            <NavLink to="/Xizmatlar">{t.services}</NavLink>
            <NavLink to="/doctors">{t.doctors}</NavLink>
            <NavLink to="/yangiliklar">{t.news}</NavLink>
            <NavLink to="/kasalliklar">{t.encyclopedia}</NavLink>
            <NavLink to="/contact">{t.contact}</NavLink>
              </nav>
            ) : (
              <div className="search-bar">
                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  className="search-input"
                />
                <button
                  className="close-search"
                  onClick={() => setIsSearchActive(false)}
                >
                  ✖
                </button>
              </div>
            )}

            <div className="actions">
              <NavLink to="/qabul">
                <button className="request-btn">{t.online}</button>
              </NavLink>
              <NavLink to="/kirish" className="login">
              {t.login}
            </NavLink>
              <i
                className="search-icon"
                onClick={() => setIsSearchActive(!isSearchActive)}
              >
                <img src={icon} alt="icon" />
              </i>
              <div className="language-dropdown">
                <button className="language-btn">{language.toUpperCase()}</button>
                <div className="language-menu">
                  <span onClick={() => changeLanguage("uz")}>
                    O‘zbekcha
                  </span>
                  <span onClick={() => changeLanguage("ru")}>Русский</span>
                  <span onClick={() => changeLanguage("en")}>English</span>
                </div>
              </div>
              <img
                onClick={openModal}
                className="burgerIcon"
                src={burger}
                alt="burgerMenu"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
