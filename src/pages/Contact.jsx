import React, { useState } from "react";
import "../styles/contact.css";
import { FaTelegram, FaInstagram, FaFacebook, FaStar } from "react-icons/fa";
import { useLanguage } from "../translate/LanguageContext"; // Tilni boshqarish uchun
import translations from "../translate/Contact"; // Tarjima fayli

function Contact() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const { language } = useLanguage(); // Foydalanuvchi tanlagan tilni olish
  const t = translations[language] || translations["uz"]; // Default qilib o‘zbek tilini ishlatish

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleStarHover = (value) => {
    setHover(value);
  };

  const handleStarLeave = () => {
    setHover(0);
  };

  return (
    <section className="contact-section">
      <h2 className="section-title">{t.contact.title}</h2>
      <p className="section-description">{t.contact.description}</p>
      <div className="container">
        <div className="contact-container">
          {/* Chap tomon: Form */}
          <div className="contact-form">
            <form>
              <label htmlFor="name">{t.contact.form.name}</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={t.contact.form.namePlaceholder}
                required
              />
              <label htmlFor="email">{t.contact.form.email}</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t.contact.form.emailPlaceholder}
                required
              />
              <label htmlFor="message">{t.contact.form.message}</label>
              <textarea
                id="message"
                name="message"
                placeholder={t.contact.form.messagePlaceholder}
                rows="5"
                required
              ></textarea>
              <button type="submit" className="submit-btn">
                {t.contact.form.submit}
              </button>
            </form>
          </div>

          {/* O'ng tomon: Ma'lumot */}
          <div className="contact-info">
            <h3>{t.contact.info.title}</h3>
            <p>
              <i className="fas fa-phone"></i> +998 (99) 123-45-67
            </p>
            <p>
              <i className="fas fa-envelope"></i> info@example.com
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i> {t.contact.info.address}
            </p>
            <h4>{t.contact.info.social}</h4>
            <div className="social-icons">
              <a href="#!">
                <i className="fab fa-telegram">
                  <FaTelegram />
                </i>
              </a>
              <a href="#!">
                <i className="fab fa-instagram">
                  <FaInstagram />
                </i>
              </a>
              <a href="#!">
                <i className="fab fa-facebook">
                  <FaFacebook />
                </i>
              </a>
            </div>
            <div className="map-container">
              <iframe
                title={t.contact.info.mapTitle}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d881.6785512831265!2d68.76355443324482!3d40.52011081541715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b2074d4bc1114b%3A0x26c24a38aa3593d6!2sRDM%20Klinikasi!5e0!3m2!1suz!2s!4v1732242162179!5m2!1suz!2s"
                width="100%"
                height="400"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Fikrlar va Reyting Qismi */}
        <div className="feedback-section">
          <h3 className="feedback-title">{t.contact.feedback.title}</h3>
          <form className="feedback-form">
            <label htmlFor="feedback-name">{t.contact.feedback.name}</label>
            <input
              type="text"
              id="feedback-name"
              name="name"
              placeholder={t.contact.feedback.namePlaceholder}
              required
            />
            <label htmlFor="feedback-message">{t.contact.feedback.message}</label>
            <textarea
              id="feedback-message"
              name="message"
              placeholder={t.contact.feedback.messagePlaceholder}
              rows="4"
              required
            ></textarea>

            {/* Reyting (Yulduzchalar) */}
            <div className="star-rating">
              <p>{t.contact.feedback.rating}</p>
              {[1, 2, 3, 4, 5].map((value) => (
                <FaStar
                  key={value}
                  size={24}
                  className={`star ${value <= (hover || rating) ? "active" : ""}`}
                  onClick={() => handleStarClick(value)}
                  onMouseEnter={() => handleStarHover(value)}
                  onMouseLeave={handleStarLeave}
                />
              ))}
            </div>

            <button type="submit" className="feedback-submit-btn">
              {t.contact.feedback.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
