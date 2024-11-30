import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../styles/doctorsApp.css";
import { NavLink } from "react-router-dom";
import translations from "../translate/TranslationDoctorsPage";
import { useLanguage } from "../translate/LanguageContext";

function DoctorsPage() {
  const { language } = useLanguage(); // Faol tilni olish
  const t = translations[language]; // Tilga mos tarjimalarni yuklash

  const [doc, setDoc] = useState(4);

  function showMore() {
    setDoc(doc + 4);
  }
  function showLess() {
    setDoc(4);
  }

  return (
    <section className="new-doctors-page">
      <h2 className="section-title">{t.pageTitle}</h2>
      <p className="section-description">{t.pageDescription}</p>
      <div className="new-doctors-grid">
        {t.doctors.slice(0, doc).map((doctor) => (
          <NavLink to={`/DoctorsAbout/${doctor.id}`} key={doctor.id}>
            <div className="doctor-card">
              <img
                src={require(`../images/doctor${doctor.id}.jpg`)}
                alt={doctor.name}
                className="doctor-image"
              />
              <div className="doctor-info">
                <h3 className="doctor-name">{doctor.name}</h3>
                <p className="doctor-position">{doctor.position}</p>
                <p className="doctor-bio">{doctor.bio}</p>
                <div className="doctor-rating">
                  {Array.from(
                    { length: Math.floor(doctor.rating) },
                    (_, i) => (
                      <FaStar key={i} className="star-icon" />
                    )
                  )}
                  {doctor.rating % 1 !== 0 && <FaStar className="half-star-icon" />}
                  <span className="rating-number">
                    {doctor.rating.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
      <div className="doctors-buttons">
        {doc < t.doctors.length ? (
          <button className="btn btn-primary" onClick={showMore}>
            {t.showMore}
          </button>
        ) : (
          <button className="btn btn-secondary" onClick={showLess}>
            {t.showLess}
          </button>
        )}
      </div>
    </section>
  );
}

export default DoctorsPage;
