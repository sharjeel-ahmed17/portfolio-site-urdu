"use client"
import { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import { portfolioData } from '../data/portfolioData';
import About from '../components/about/About';
import Skills from '../components/skills/Skills';
import Projects from '../components/projects/Projects';
import Contact from '../components/contact/Contact';
import Experience from '../components/experience/Exprience';

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'ur'>('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ur' : 'en');
  };

  const direction = language === 'en' ? 'ltr' : 'rtl';
  const textAlign = language === 'en' ? 'text-left' : 'text-right';

  const data = portfolioData[language];

  return (
    <div className={`min-h-screen bg-gray-100 ${direction === 'rtl' ? 'rtl' : ''}`}>
      <Navbar language={language} toggleLanguage={toggleLanguage} />
      <main className={`container mx-auto px-4 py-8 ${textAlign}`}>
        <About data={data} />
        <Skills language={language} data={data} />
        <Experience language={language} data={data} />
        <Projects language={language} data={data} />
        <Contact language={language} data={data} />
      </main>
    </div>
  );
}
