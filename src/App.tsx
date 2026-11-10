import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { StorePage } from './pages/StorePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#29231F]">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/produtos" element={<ProductsPage />} />
            <Route path="/nossa-loja" element={<StorePage />} />
            <Route path="/sobre-a-castor" element={<AboutPage />} />
            <Route path="/contato" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
};

export default App;

