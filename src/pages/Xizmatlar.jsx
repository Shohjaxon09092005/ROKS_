import React, { useState } from 'react';
import '../styles/servicesApp.css';
import cardiologyImage from '../images/cardiolgy.jpg';
import neurologyImage from '../images/neurology.jpg';
import surgeryImage from '../images/surgery.jpg';
import pediatricsImage from '../images/pediatrics.jpg';
import { NavLink } from 'react-router-dom';
import translations from "../translate/TranslationXizmat"; // Таржима матнларини импорт қилиш
import { useLanguage } from "../translate/LanguageContext"; // Фаол тилни олиш

function Xizmatlar() {
  const { language } = useLanguage(); // Фаол тилни олиш
  const t = translations[language]; // Фаол тилга мос таржималар

  const services = [
    {
      id: 'uzi',
      name: t.cardiology, // Динамик таржима
      description: t.cardiologyDescription, // Динамик таржима
      image: cardiologyImage,
    },
    {
      id: 'uzi',
      name: t.neurology, // Динамик таржима
      description: t.neurologyDescription, // Динамик таржима
      image: neurologyImage,
    },
    {
      id: 'uzi',
      name: t.surgery, // Динамик таржима
      description: t.surgeryDescription, // Динамик таржима
      image: surgeryImage,
    },
    {
      id: 'uzi',
      name: t.pediatrics, // Динамик таржима
      description: t.pediatricsDescription, // Динамик таржима
      image: pediatricsImage,
    },
    {
      id: 'uzi',
      name: t.cardiology, // Динамик таржима
      description: t.cardiologyDescription, // Динамик таржима
      image: cardiologyImage,
    },
    {
      id: 'uzi',
      name: t.neurology, // Динамик таржима
      description: t.neurologyDescription, // Динамик таржима
      image: neurologyImage,
    },
    {
      id: 'uzi',
      name: t.surgery, // Динамик таржима
      description: t.surgeryDescription, // Динамик таржима
      image: surgeryImage,
    },
    {
      id: 'uzi',
      name: t.pediatrics, // Динамик таржима
      description: t.pediatricsDescription, // Динамик таржима
      image: pediatricsImage,
    },
    {
      id: 'uzi',
      name: t.cardiology, // Динамик таржима
      description: t.cardiologyDescription, // Динамик таржима
      image: cardiologyImage,
    },
    {
      id: 'uzi',
      name: t.neurology, // Динамик таржима
      description: t.neurologyDescription, // Динамик таржима
      image: neurologyImage,
    },
    {
      id: 'uzi',
      name: t.surgery, // Динамик таржима
      description: t.surgeryDescription, // Динамик таржима
      image: surgeryImage,
    },
    {
      id: 'uzi',
      name: t.pediatrics, // Динамик таржима
      description: t.pediatricsDescription, // Динамик таржима
      image: pediatricsImage,
    },
    {
      id: 'uzi',
      name: t.cardiology, // Динамик таржима
      description: t.cardiologyDescription, // Динамик таржима
      image: cardiologyImage,
    },
    {
      id: 'uzi',
      name: t.neurology, // Динамик таржима
      description: t.neurologyDescription, // Динамик таржима
      image: neurologyImage,
    },
    {
      id: 'uzi',
      name: t.surgery, // Динамик таржима
      description: t.surgeryDescription, // Динамик таржима
      image: surgeryImage,
    },
    {
      id: 'uzi',
      name: t.pediatrics, // Динамик таржима
      description: t.pediatricsDescription, // Динамик таржима
      image: pediatricsImage,
    },
  ];
  const [visibleCount, setVisibleCount] = useState(8); // Бошланғич кўрсатиш миқдори

  const showMore = () => {
    setVisibleCount(visibleCount + 4); // Ҳар сафар 4 та қўшиб кўрсатиш
  };

  const showLess = () => {
    setVisibleCount(8); // Бошланғич ҳолатга қайтариш
  };

  return (
    <div className='serviceApp'>
      <div className="container">
        <div className="services-page">
          <h1 className="page-title">{t.servicesTitle}</h1> {/* Динамик таржима */}
          <p className="page-description">{t.servicesDescription}</p> {/* Динамик таржима */}
          <div className="services-grid">
            {services.slice(0, visibleCount).map((service) => (
              <NavLink to={`/ServicesAbout/${service.id}`} key={service.id}>
                <div className="service-card">
                  <img src={service.image} alt={service.name} className="service-image" />
                  <h3 className="service-name">{service.name}</h3>
                  <p className="service-description">{service.description}</p>
                  <button className="service-btn">{t.moreDetails}</button> {/* Динамик таржима */}
                </div>
              </NavLink>
            ))}
          </div>
          <div className="services-buttons">
            {visibleCount < services.length ? (
              <button className="btn btn-primary" onClick={showMore}>
                {t.showMore} {/* Динамик таржима */}
              </button>
            ) : (
              <button className="btn btn-secondary" onClick={showLess}>
                {t.hide} {/* Динамик таржима */}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Xizmatlar;
