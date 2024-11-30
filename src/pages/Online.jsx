import React, { useState } from "react";
import { useLanguage } from "../translate/LanguageContext"; // Kontekstni import qilish
import translations from "../translate/Online"; // Tarjima faylini import qilish
import "../styles/online.css";

function Online() {
  const { language } = useLanguage(); // Hozirgi tilni olish
  const t = translations[language]; // Hozirgi til tarjimalari

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Yozilgan ma'lumotlar:", formData);
    alert(t.form.success);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      message: "",
    });
  };

  return (
    <div className="container">
      <div className="appointment-container">
        <h2>{t.title}</h2>
        <p>{t.description}</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>{t.form.fullName}</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder={t.form.fullNamePlaceholder}
              required
            />
          </div>
          <div className="form-group">
            <label>{t.form.email}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t.form.emailPlaceholder}
              required
            />
          </div>
          <div className="form-group">
            <label>{t.form.phone}</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t.form.phonePlaceholder}
              required
            />
          </div>
          <div className="form-group">
            <label>{t.form.date}</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>{t.form.time}</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>{t.form.message}</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t.form.messagePlaceholder}
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            {t.form.submit}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Online;
