import React from "react";
import { FaUserMd } from "react-icons/fa"; // Icon uchun
import { NavLink } from "react-router-dom";
import { useLanguage } from "../translate/LanguageContext"; // Til konteksti
import translations from "../translate/TranslationDoctors"; // Tarjimalar
import "../styles/doctors.css";

import doctor1 from "../images/doctor1.jpg";
import doctor2 from "../images/doctor2.jpg";
import doctor3 from "../images/doctor3.jpg";
import doctor4 from "../images/doctor4.jpg";

function Doctors({ limit, showAll }) {
  const { language } = useLanguage();
  const t = translations[language];

  const doctors = [
    {
      id: 1,
      name: "Dr. Aliyev Samandar",
      position: "kardiolog",
      image: doctor1,
    },
    {
      id: 2,
      name: "Dr. Shukurova Laylo",
      position: "nevropatolog",
      image: doctor2,
    },
    {
      id: 3,
      name: "Dr. Usmonova Dildora",
      position: "travmatolog",
      image: doctor4,
    },
    {
      id: 4,
      name: "Dr. Karimov Ilyos",
      position: "stomatolog",
      image: doctor3,
    },
  ];

  const displayedDoctors = showAll ? doctors : doctors.slice(0, limit);

  return (
    <section className="doctors-team">
      <h2 className="section-title">{t.sectionTitle}</h2>
      <p className="section-description">{t.sectionDescription}</p>
      <div className="doctors-grid">
        {displayedDoctors.map((doctor) => (
          <NavLink to={`/DoctorsAbout/${doctor.id}`} key={doctor.id}>
            <div className="doctor-card">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="doctor-image"
              />
              <h3 className="doctor-name">{doctor.name}</h3>
              <p className="doctor-position">{t.positions[doctor.position]}</p>
            </div>
          </NavLink>
        ))}
      </div>
      <div className="team-button">
        <NavLink to="/doctors" className="btn btn-primary">
          {t.viewAllDoctors} <FaUserMd />
        </NavLink>
      </div>
    </section>
  );
}

export default Doctors;
