import React from "react";
import "../styles/footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { useLanguage } from "../translate/LanguageContext"; // Til konteksti
import translations from "../translate/TranslationFooter"; // Tarjimalar

function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          {/* Logo va qisqacha ma'lumot */}
          <div className="footer-about">
            <h3 className="footer-logo">{t.logo}</h3>
            <p className="footer-description">{t.description}</p>
          </div>

          {/* Tezkor havolalar */}
          <div className="footer-links">
            <h4>{t.quickLinksTitle}</h4>
            <ul>
              {t.quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.path}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Aloqa ma'lumotlari */}
          <div className="footer-contact">
            <h4>{t.contactTitle}</h4>
            <p>
              <FaPhoneAlt /> {t.contact.phone}
            </p>
            <p>
              <FaEnvelope /> {t.contact.email}
            </p>
            <p>
              <FaMapMarkerAlt /> {t.contact.address}
            </p>
          </div>

          {/* Ijtimoiy tarmoqlar */}
          <div className="footer-socials">
            <h4>{t.socialsTitle}</h4>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegramPlane />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright qismi */}
        <div className="footer-bottom">
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
