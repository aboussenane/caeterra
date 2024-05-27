
'use client'
import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../Components/header'
import Intro from '../Components/intro'
import {ListIcon, VStack, Box} from '@chakra-ui/react'
import Hero from '@/Components/hero';
import About from '@/Components/about';
import Services from '@/Components/service';
import Pitch from '@/Components/pitch';
import Contact from '@/Components/contact';
import Footer from '@/Components/footer';
import Listings from '@/Components/listings';
import ListingsPage from '../../pages/listings';
import HomePage from '../../pages/home';
import { Center } from '@chakra-ui/react';
import { Providers } from '../app/providers';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home');
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'listings':
        return <ListingsPage />;
      default:
        return <HomePage />;
    }
  };
  return (
    
    <Providers>
      <Box className="flex min-h-screen flex-col items-center justify-between" w="100%" p="4" md="p-24">
        <Header onSelectPage={setCurrentPage} />
        <VStack spacing={8} w="100%" alignItems="center">
          {renderPage()}
          <Footer />
        </VStack>
      </Box>
    </Providers>
    
  );
}
