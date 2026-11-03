import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import SplashScreen from './components/SplashScreen';
import AboutPage from './pages/AboutPage';
import CoachesPage from './pages/CoachesPage';
import ContactPage from './pages/ContactPage';
import EventsPage from './pages/EventsPage';
import HomePage from './pages/HomePage';
import MembershipPage from './pages/MembershipPage';
import SportsPage from './pages/SportsPage';
import SportDetailPage from './pages/SportDetailPage';

function PageMotion() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });

    const headings = document.querySelectorAll(
      '.page-hero-content h1, .sport-detail-hero-content h1, .section-heading h2, .welcome-copy h2, .mission-copy h2, .about-cta h2, .sports-bottom h2, .membership-form-intro h2, .events-gallery h2, .coach-cta h2, .sport-detail-hero-content .eyebrow, .section-heading > p, .page-hero-content > p, .sport-detail-hero-content > p, .welcome-copy > p, .mission-copy > p, .reason-item, .timeline-item, .sport-element, .event-card'
    );

    if (!window.IntersectionObserver) {
      headings.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    headings.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

function SiteLayout() {
  return (
    <>
      <PageMotion />
      <SplashScreen />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/sports" element={<SportsPage />} />
          <Route path="/sports/:slug" element={<SportDetailPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/coaches" element={<CoachesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SiteLayout />
    </BrowserRouter>
  );
}
