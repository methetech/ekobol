import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Solutions from './pages/Solutions';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';
import About from './pages/About';
import Contact from './pages/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App bg-void-primary text-text-primary">
        <AnimatedBackground />
        <Header />
        <main style={{ paddingTop: '80px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;