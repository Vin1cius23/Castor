import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { LocationContactSection } from '../components/sections/LocationContactSection';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main className="pt-24 bg-[#F7F5F0]">
      <section className="bg-[#29231F] text-[#F7F5F0] py-14 sm:py-16 border-b border-[#B49A70]/30">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#B49A70] hover:text-white mb-5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar ao Início</span>
          </Link>
          <h1 className="font-editorial text-4xl sm:text-5xl font-normal text-white">
            Atendimento, Horários e Localização
          </h1>
        </div>
      </section>

      <LocationContactSection />
    </main>
  );
};

