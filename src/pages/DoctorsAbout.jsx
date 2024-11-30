import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import translations from '../translate/TranslationDocAbout';
import { useLanguage } from '../translate/LanguageContext';
import '../styles/doctorsAbout.css';
import avatar from '../images/doctor1.jpg'
function DoctorsAbout() {
  const { id } = useParams();
  const { language } = useLanguage(); // Faol tilni olish
  const t = translations[language]; // Faol tilga mos tarjimalar
  const doctor = t.doctorsData.find((doc) => doc.id === id);

  const [feedback, setFeedback] = useState('');
  const [allFeedback, setAllFeedback] = useState([]);

  // Faol til o'zgarganda fikr-mulohazalarni yangilash
  useEffect(() => {
    if (doctor) {
      setAllFeedback(doctor.feedback || []);
    }
  }, [language, doctor]);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim()) {
      setAllFeedback((prev) => [...prev, feedback]);
      setFeedback('');
    }
  };

  if (!doctor) {
    return <h2>{t.doctorNotFound}</h2>;
  }

  return (
    <div className='container docAbout'>
      <div className="doctor-details">
        <img src={avatar} alt={doctor.name} />
        <h1>{doctor.name}</h1>
        <p><strong>{t.specialty}:</strong> {doctor.specialty}</p>
        <p><strong>{t.experience}:</strong> {doctor.experience}</p>
        <p><strong>{t.bio}:</strong> {doctor.bio}</p>
        <p><strong>{t.workingHours}:</strong> {doctor.workingHours}</p>

        <div className="feedback-section">
          <h2>{t.feedbackSection}</h2>
          {allFeedback.length ? (
            <ul>
              {allFeedback.map((fb, index) => (
                <li key={index}>{fb}</li>
              ))}
            </ul>
          ) : (
            <p>{t.noFeedback}</p>
          )}

          <form onSubmit={handleFeedbackSubmit} className="feedback-form">
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder={t.leaveFeedback}
              rows="4"
            ></textarea>
            <button type="submit">{t.submitFeedback}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DoctorsAbout;
