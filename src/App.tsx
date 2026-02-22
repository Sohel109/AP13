import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import BentoGrid from './components/BentoGrid';
import Team from './components/Team';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
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

export default App;
