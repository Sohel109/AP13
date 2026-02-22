import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import BentoGrid from './components/BentoGrid';
import Team from './components/Team';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PageDesign from './pages/PageDesign';
import PageDev from './pages/PageDev';
import PageSEO from './pages/PageSEO';
import PageMaintenance from './pages/PageMaintenance';
import PageMentions from './pages/PageMentions';
import PagePrivacy from './pages/PagePrivacy';

function HomePage() {
  useScrollReveal();
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <BentoGrid />
        <Team />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/design" element={<PageDesign />} />
        <Route path="/services/developpement" element={<PageDev />} />
        <Route path="/services/seo" element={<PageSEO />} />
        <Route path="/services/maintenance" element={<PageMaintenance />} />
        <Route path="/mentions-legales" element={<PageMentions />} />
        <Route path="/politique-de-confidentialite" element={<PagePrivacy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
