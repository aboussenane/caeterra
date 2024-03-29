
'use client'
import Head from 'next/head';
import Header from '../Components/header'
import Intro from '../Components/intro'
import {VStack} from '@chakra-ui/react'
import Hero from '@/Components/hero';
import About from '@/Components/about';
import Services from '@/Components/service';
import Pitch from '@/Components/pitch';
import Contact from '@/Components/contact';
import Footer from '@/Components/footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <VStack spacing={8}>
        <Intro/>
        <Hero/>
        <About/>
        <Services/>
        <Pitch/>
        <Contact/>
        <div className="h-10"></div>
        <Footer/>
      </VStack>
      
      
    </main>
  );
}
