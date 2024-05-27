// pages/home.tsx
'use client'
import React from 'react';

import Intro from '@/Components/intro'

import Services from '@/Components/service';
import Pitch from '@/Components/pitch';
import Contact from '@/Components/contact';

import Listings from '@/Components/listings';
import { Box } from '@chakra-ui/react';

const HomePage: React.FC = () => {
    return (
        <Box className="flex min-h-screen flex-col items-center justify-between" w="100%" p="4" md="p-24">
        
        <Intro/>
        <div className="h-10"></div>
        <Services/>
        <Pitch/>
        <Listings/>
        <Contact/>
        <div className="h-10"></div><div className="h-10"></div>
        </Box>
        
        
    );
};

export default HomePage;
