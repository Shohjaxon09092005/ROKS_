import React from "react";
import "../styles/home.css";
import Service from "../components/Service";
import Doctors from "../components/Doctors";
import FeedBack from "../components/FeedBack";
import { NavLink } from "react-router-dom";
import AboutCard from "../components/AboutCard";
import translations from "../translate/Translate"; // Tarjima matnlarini import
import { useLanguage } from "../translate/LanguageContext"; // Tilni olish uchun

function Home() {
  const { language } = useLanguage(); // Faol tilni olish
  const t = translations[language]; // Faol tilga mos tarjimalar

  return (
    <div className="home">
      <section className="about-section">
        <video autoPlay loop muted className="background-video">
          <source
            src="https://videos.pexels.com/video-files/9574137/9574137-uhd_2732_1440_25fps.mp4"
            type="video/mp4"
          />
          {t.browserNotSupportVideo}
        </video>
        <div className="section_black">
          <h1 className="title">{t.clinicTitle}</h1>
          <p className="description">{t.clinicDescription}</p>
          <NavLink to="/qabul">
            <button className="online-appointment-btn">
              {t.online}
            </button>
          </NavLink>
        </div>
      </section>

      <div className="home-page">
        <section className="slider-section">
          <div className="slider">
            <div className="slide" style={{ backgroundColor: "#28a745" }}>
              <h2>{t.discountTitle}</h2>
              <p>{t.discountDescription}</p>
            </div>
            <div className="slide" style={{ backgroundColor: "#dc3545" }}>
              <h2>{t.newServiceTitle}</h2>
              <p>{t.newServiceDescription}</p>
            </div>
            <div className="slide" style={{ backgroundColor: "#343a40" }}>
              <h2>{t.oncologyTitle}</h2>
              <p>{t.oncologyDescription}</p>
            </div>
          </div>
        </section>
      </div>

      <div className="container">
        <AboutCard />
        <Service limit={12} showAll={false} />
        <Doctors limit={4} showAll={false} />
        <FeedBack />
      </div>
    </div>
  );
}

export default Home;
