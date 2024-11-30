import React, { useState } from 'react';
import '../styles/yangiliklar.css';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../translate/LanguageContext';
import translations from '../translate/TranslationNews'; // Tarjima faylini import qilish

function Yangiliklar() {
  const { language } = useLanguage(); // Faol tilni olish
  const t = translations[language] || translations['uz']; // Agar tilni olishda muammo bo'lsa, uzbekcha tilni default qilib olish

  const [visibleNews, setVisibleNews] = useState(3); // Ko'rinadigan yangiliklar soni

  const handleLoadMore = () => {
    setVisibleNews((prev) => prev + 3); // 3 ta yangilik qo'shib ko'rsatadi
  };

  const handleLoadDel = () => {
    setVisibleNews(3); // Ko'rinadigan yangiliklar sonini 3 ga kamaytirish
  };

  const newsData = t?.allNews || []; // `t.allNews` bo'lmasa bo'sh massiv

  return (
    <div className="yangiliklar">
      <section className="news-section">
        <div className="container">
          <h2 className="section-title">{t.newsTitle}</h2>
          <p className="section-description">{t.newsDescription}</p>
          <div className="news-grid">
            {newsData.slice(0, visibleNews).map((news) => (
              <NavLink to={`/newsAbout/${news.id}`} key={news.id}>
                <div className="news-card">
                  <img src={news.image} alt={news.title} className="news-image" />
                  <div className="news-content">
                    <h3 className="news-title">{news.title}</h3>
                    <p className="news-description">{news.description}</p>
                    <div className="news-meta">
                      <span className="news-category">{news.category}</span>
                      <span className="news-date">{news.date}</span>
                    </div>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
          {visibleNews < newsData.length ? (
            <button className="load-more-btn" onClick={handleLoadMore}>
              {t.showMore}
            </button>
          ) : (
            <button className="load-more-btn load-more-btn2" onClick={handleLoadDel}>
              {t.hide}
            </button>
          )}
        </div>
      </section>
    </div>
  );
}

export default Yangiliklar;
