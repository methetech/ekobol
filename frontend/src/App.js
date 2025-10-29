import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AnimatedBackground from './components/AnimatedBackground'; // Yeni eklenen
import './App.css';

function App() {
  return (
    <div className="App bg-void-primary text-text-primary">
      <AnimatedBackground /> {/* Arka plan efekti */}
      <Header />
      <main style={{ paddingTop: '80px' }}> {/* Header'ın yüksekliği kadar boşluk */}
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;