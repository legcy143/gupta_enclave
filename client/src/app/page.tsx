import React from 'react'
import Sample from './Sample';
import Navbar from '@/app/_site/Navbar';
import HeroSection from './_site/HeroSection';

export default function Home() {

  return (
    <main>
      <Navbar />
      <HeroSection />
      <Sample />
    </main>
  );
}