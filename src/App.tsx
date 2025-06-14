import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

import AdminApp from './admin/AdminApp'; // ⬅️ Admin paneli import edildi

function App() {
  const isAdminPath = window.location.pathname.startsWith("/admin");

  if (isAdminPath) {
    return <AdminApp />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
