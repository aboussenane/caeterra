// pages/home.tsx
'use client'
import React from 'react';

import Intro from '@/Components/intro'

import Services from '@/Components/service';
import Pitch from '@/Components/pitch';
import Contact from '@/Components/contact';

import Listings from '@/Components/listings';


const HomePage: React.FC = () => {
    return (
        
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Intro/>
        <div className="h-10"></div>
        <Services/>
        <Pitch/>
        <Listings/>
        <Contact/>
        <div className="h-10"></div>
            
        </main>
        
    );
};

export default HomePage;
