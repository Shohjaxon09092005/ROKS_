import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { LanguageProvider } from './translate/LanguageContext'; // LanguageProvider import qilindi

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <LanguageProvider> {/* Tilni boshqarish provider */}
      <div className="App">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
