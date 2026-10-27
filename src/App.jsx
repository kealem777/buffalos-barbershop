import React, { useState } from 'react';
import { translations } from './data/translations';
import { SplashIntro } from './components/SplashIntro';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { MastersSection } from './components/MastersSection';
import { ProductsSection } from './components/ProductsSection';
import { PromotionsSection } from './components/PromotionsSection';
import { AcademySection } from './components/AcademySection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

function App() {
  const [lang, setLang] = useState('es');
  const [showSplash, setShowSplash] = useState(true);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState(null);
  const [preselectedMaster, setPreselectedMaster] = useState(null);

  const t = translations[lang] || translations.es;

  const handleOpenBooking = (service = null, master = null) => {
    setPreselectedService(service);
    setPreselectedMaster(master);
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
    setPreselectedService(null);
    setPreselectedMaster(null);
  };

  return (
    <div className="min-h-screen bg-dark-950 text-gray-100 flex flex-col font-montserrat">
      {/* Animated Big Centered Splash Logo on Site Open */}
      {showSplash && (
        <SplashIntro onFinish={() => setShowSplash(false)} />
      )}

      {/* Fixed / Sticky Navigation Header */}
      <Navbar
        lang={lang}
        setLang={setLang}
        t={t}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with atmospheric background, big title and badges */}
        <Hero
          t={t}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 2. Services & Prices Section (Interactive Category Tabs) */}
        <ServicesSection
          lang={lang}
          t={t}
          onSelectService={(service) => handleOpenBooking(service, null)}
        />

        {/* 3. Our Master Barbers Section */}
        <MastersSection
          lang={lang}
          t={t}
          onSelectMaster={(master) => handleOpenBooking(null, master)}
        />

        {/* 4. Products & Cosmetics Shop */}
        <ProductsSection
          lang={lang}
          t={t}
        />

        {/* 5. Special Promotions */}
        <PromotionsSection
          lang={lang}
          t={t}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 6. Academy & Masterclasses (Featuring Certificates Photo) */}
        <AcademySection
          lang={lang}
          t={t}
        />

        {/* 7. Gallery of Real Barber Shop Photos */}
        <GallerySection
          lang={lang}
        />

        {/* 8. Location, Interactive Map & Working Hours */}
        <LocationSection
          lang={lang}
          t={t}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        t={t}
      />

      {/* Interactive Step-by-Step Online Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={handleCloseBooking}
        preselectedService={preselectedService}
        preselectedMaster={preselectedMaster}
        lang={lang}
        t={t}
      />
    </div>
  );
}

export default App;
