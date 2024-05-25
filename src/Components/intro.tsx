'use client'

import { Center, Box, Heading, Button, ButtonGroup, VStack} from '@chakra-ui/react'
import React from 'react';
import Hero from '@/Components/hero';

const Intro: React.FC = () => {
    return (
    <VStack spacing={8} p={4} bg='white' w='100vw' h='100vh' display='flex' justifyContent='center' alignItems='center' position='relative' >
        <Heading as='h3' fontWeight="normal">Caeterra</Heading>
        <Heading>Unlock Your Property's Potential.</Heading>
        <Hero/>
        <Center position='relative' fontWeight={"bold"}>Ottawa's full service Property Management Company</Center>
    </VStack>
    
        
    );
};

export default Intro;