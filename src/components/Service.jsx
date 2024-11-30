import React from "react";
import { FaUserMd } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../styles/service.css";
import { useLanguage } from "../translate/LanguageContext"; // Til konteksti
import translations from "../translate/TranslationService"; // Tarjimalar

function Service({ limit, showAll }) {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    { id: "uzi", doctors: 3 },
    { id: "neurolog", doctors: 5 },
    { id: "nevropatolog", doctors: 8 },
    { id: "endokrinolog", doctors: 4 },
    { id: "kardiolog", doctors: 3 },
    { id: "terapevt", doctors: 2 },
    { id: "ginekolog", doctors: 6 },
    { id: "fgds", doctors: 2 },
    { id: "ekg", doctors: 3 },
    { id: "pediatr", doctors: 3 },
    { id: "mrt", doctors: 1 },
    { id: "rentgen", doctors: 1 },
    { id: "laboratoriya", doctors: 3 },
    { id: "travmatolog", doctors: 5 },
    { id: "stomatolog", doctors: 3 },
    { id: "mskt", doctors: 1 },
  ];

  const displayedServices = showAll ? services : services.slice(0, limit);

  return (
    <section className="services">
      <h2 className="services-title">{t.servicesTitle}</h2>
      <div className="services-grid">
        {displayedServices.map((service, index) => (
          <NavLink to={`/ServicesAbout/${service.id}`} key={index}>
            <div className="service-card">
              <FaUserMd className="service-icon" />
              <h3>{t.services[service.id]}</h3>
              <p>
                {service.doctors} {t.doctorCount}
              </p>
            </div>
          </NavLink>
        ))}
      </div>
      <NavLink to="/Xizmatlar">
        <button className="view-more-btn">{t.viewMore}</button>
      </NavLink>
    </section>
  );
}

export default Service;
