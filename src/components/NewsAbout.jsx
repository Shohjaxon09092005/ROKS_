import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../translate/LanguageContext'; // Tanlangan tilni olish uchun
import translations from '../translate/NewsAbout'; // Tarjima ma'lumotlari
import '../styles/newsAbout.css';

function NewsAbout() {
  const { id } = useParams(); // URL'dan yangilik ID sini olish
  const { language } = useLanguage(); // Foydalanuvchi tanlagan tilni olish
  const t = translations[language] || translations['uz']; // Default qilib "uz" ni ishlatish

  // Yangiliklarni tanlangan til bo‘yicha olish
  const news = t.allNews.find((item) => item.id.toString() === id);

  if (!news) {
    return <h2>{t.newsNotFound || 'Yangilik topilmadi'}</h2>;
  }

  return (
    <div className="NewsAbout">
      <div className="news-details">
        <img className="news-image" src={news.image} alt={news.title} />
        <div className="news-content">
          <h1>{news.title}</h1>
          <p className="news-date">{news.date}</p>
          <p>{news.description}</p>
        </div>
        <form className="comment-form">
          <h3>{t.leaveFeedback || 'Fikr-mulohazalar qoldiring'}</h3>
          <textarea
            placeholder={t.writeYourFeedback || 'Fikringizni yozing...'}
            rows="4"
          ></textarea>
          <button type="submit">{t.submit || 'Jo‘natish'}</button>
        </form>
        <Link to="/yangiliklar" className="back-button">
          {t.backButton || 'Ortga'}
        </Link>
      </div>
    </div>
  );
}

export default NewsAbout;
