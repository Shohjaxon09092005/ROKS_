import React from "react";
import "../styles/feedBack.css";
import { FaStar } from "react-icons/fa"; // Reyting yulduzlari uchun
import Slider from "react-slick"; // Slayder kutubxonasi
import { useLanguage } from "../translate/LanguageContext"; // Til konteksti
import translations from "../translate/TranslationFeedBack"; // Tarjimalar

function FeedBack() {
  const { language } = useLanguage();
  const t = translations[language];

  const feedbacks = [
    { id: 1, ...t.comments[0], rating: 5 },
    { id: 2, ...t.comments[1], rating: 4 },
    { id: 3, ...t.comments[2], rating: 5 },
    { id: 4, ...t.comments[3], rating: 5 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="feedback-section">
      <h2 className="section-title">{t.feedbackTitle}</h2>
      <Slider {...settings}>
        {feedbacks.map((feedback) => (
          <div className="feedback-card" key={feedback.id}>
            <div className="feedback-content">
              <h3 className="customer-name">{feedback.name}</h3>
              <p className="customer-comment">"{feedback.comment}"</p>
              <div className="customer-rating">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    color={index < feedback.rating ? "#ffc107" : "#e4e5e9"}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default FeedBack;
