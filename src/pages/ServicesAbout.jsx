import React from 'react';
import '../styles/servicesAbout.css';
import { useParams } from 'react-router-dom';
import translations from '../translate/TranslationServiesAbout'; // Tarjima matnlarini import
import { useLanguage } from '../translate/LanguageContext'; // Til boshqaruvi

function ServicesAbout() {
  const { language } = useLanguage(); // Faol tilni olish
  const t = translations[language]; // Faol tilga mos tarjimalar

  // Xizmatlar ma'lumotlarini dinamik tarjima bilan aniqlash
  const servicesData = [
    {
      id: 'uzi',
      name: t.uziName, // Tarjima orqali olingan nom
      description: t.uziDescription, // Tarjima orqali olingan tavsif
      doctors: [t.doctorAbdulla, t.doctorMavluda, t.doctorShaxzod], // Tarjima orqali olingan shifokorlar
      price: t.uziPrice, // Tarjima orqali olingan narx
      image: 'https://apteka.uz/upload/iblock/b32/b3283fe309691bd4565dbdd3b5f833ab.png',
    },
    {
      id: 'neurolog',
      name: t.neurologName,
      description: t.neurologDescription,
      doctors: [t.doctorJamshid, t.doctorMuhlisa],
      price: t.neurologPrice,
      image: 'https://apteka.uz/upload/iblock/b32/b3283fe309691bd4565dbdd3b5f833ab.png',
    },
    {
      id: 'nevropatolog',
      name: t.uziName, // Tarjima orqali olingan nom
      description: t.uziDescription, // Tarjima orqali olingan tavsif
      doctors: [t.doctorAbdulla, t.doctorMavluda, t.doctorShaxzod], // Tarjima orqali olingan shifokorlar
      price: t.uziPrice, // Tarjima orqali olingan narx
      image: 'https://apteka.uz/upload/iblock/b32/b3283fe309691bd4565dbdd3b5f833ab.png',
    },
    {
      id: 'endokrinolog',
      name: t.neurologName,
      description: t.neurologDescription,
      doctors: [t.doctorJamshid, t.doctorMuhlisa],
      price: t.neurologPrice,
      image: 'https://apteka.uz/upload/iblock/b32/b3283fe309691bd4565dbdd3b5f833ab.png',
    },
    {
      id: 'kardiolog',
      name: t.uziName, // Tarjima orqali olingan nom
      description: t.uziDescription, // Tarjima orqali olingan tavsif
      doctors: [t.doctorAbdulla, t.doctorMavluda, t.doctorShaxzod], // Tarjima orqali olingan shifokorlar
      price: t.uziPrice, // Tarjima orqali olingan narx
      image: 'https://apteka.uz/upload/iblock/b32/b3283fe309691bd4565dbdd3b5f833ab.png',
    },
    {
      id: 'terapevt',
      name: t.neurologName,
      description: t.neurologDescription,
      doctors: [t.doctorJamshid, t.doctorMuhlisa],
      price: t.neurologPrice,
      image: 'https://apteka.uz/upload/iblock/b32/b3283fe309691bd4565dbdd3b5f833ab.png',
    },
    {
      id: 'ginekolog',
      name: t.uziName, // Tarjima orqali olingan nom
      description: t.uziDescription, // Tarjima orqali olingan tavsif
      doctors: [t.doctorAbdulla, t.doctorMavluda, t.doctorShaxzod], // Tarjima orqali olingan shifokorlar
      price: t.uziPrice, // Tarjima orqali olingan narx
      image: 'https://apteka.uz/upload/iblock/b32/b3283fe309691bd4565dbdd3b5f833ab.png',
    },
    {
      id: 'fgds',
      name: t.neurologName,
      description: t.neurologDescription,
      doctors: [t.doctorJamshid, t.doctorMuhlisa],
      price: t.neurologPrice,
      image: 'https://apteka.uz/upload/iblock/b32/b3283fe309691bd4565dbdd3b5f833ab.png',
    },
    {
      id: 'ekg',
      name: t.neurologName,
      description: t.neurologDescription,
      doctors: [t.doctorJamshid, t.doctorMuhlisa],
      price: t.neurologPrice,
      image: 'https://apteka.uz/upload/iblock/b32/b3283fe309691bd4565dbdd3b5f833ab.png',
    },
    {
      id: 'pediatr',
      name: t.neurologName,
      description: t.neurologDescription,
      doctors: [t.doctorJamshid, t.doctorMuhlisa],
      price: t.neurologPrice,
      image: 'https://apteka.uz/upload/iblock/b32/b3283fe309691bd4565dbdd3b5f833ab.png',
    },
    {
      id: 'mrt',
      name: t.neurologName,
      description: t.neurologDescription,
      doctors: [t.doctorJamshid, t.doctorMuhlisa],
      price: t.neurologPrice,
      image: 'https://apteka.uz/upload/iblock/b32/b3283fe309691bd4565dbdd3b5f833ab.png',
    },
    {
      id: 'rentgen',
      name: t.neurologName,
      description: t.neurologDescription,
      doctors: [t.doctorJamshid, t.doctorMuhlisa],
      price: t.neurologPrice,
      image: 'https://apteka.uz/upload/iblock/b32/b3283fe309691bd4565dbdd3b5f833ab.png',
    },
    {
      id: 'laboratoriya',
      name: t.neurologName,
      description: t.neurologDescription,
      doctors: [t.doctorJamshid, t.doctorMuhlisa],
      price: t.neurologPrice,
      image: 'https://apteka.uz/upload/iblock/b32/b3283fe309691bd4565dbdd3b5f833ab.png',
    },
    {
      id: 'travmatolog',
      name: t.neurologName,
      description: t.neurologDescription,
      doctors: [t.doctorJamshid, t.doctorMuhlisa],
      price: t.neurologPrice,
      image: 'https://apteka.uz/upload/iblock/b32/b3283fe309691bd4565dbdd3b5f833ab.png',
    },
    {
      id: 'stomatolog',
      name: t.neurologName,
      description: t.neurologDescription,
      doctors: [t.doctorJamshid, t.doctorMuhlisa],
      price: t.neurologPrice,
      image: 'https://apteka.uz/upload/iblock/b32/b3283fe309691bd4565dbdd3b5f833ab.png',
    },
    {
      id: 'mskt',
      name: t.neurologName,
      description: t.neurologDescription,
      doctors: [t.doctorJamshid, t.doctorMuhlisa],
      price: t.neurologPrice,
      image: 'https://apteka.uz/upload/iblock/b32/b3283fe309691bd4565dbdd3b5f833ab.png',
    },
    // Boshqa xizmatlarni qo'shing
  ];

  const { id } = useParams(); // URL parametridan xizmat ID sini olish
  const service = servicesData.find((service) => service.id === id);

  if (!service) {
    return <div>{t.serviceNotFound}</div>; // Tarjima bilan "Xizmat topilmadi"
  }

  return (
    <div className="container">
      <div className="service-details">
        <div
          className="service-image"
          style={{ backgroundImage: `url(${service.image})` }}
        ></div>
        <div className="service-content">
          <h1>{service.name}</h1>
          <p>{service.description}</p>
          <h3>{t.doctors}</h3>
          <ul>
            {service.doctors.map((doctor, index) => (
              <li key={index}>{doctor}</li>
            ))}
          </ul>
          <h4>{t.price}: {service.price}</h4>
        </div>
      </div>
    </div>
  );
}

export default ServicesAbout;
