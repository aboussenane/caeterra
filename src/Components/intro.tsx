'use client'

import { Box, Heading, Button, ButtonGroup, VStack} from '@chakra-ui/react'
import React from 'react';

const Intro: React.FC = () => {
    return (
    <VStack spacing={8} p={4} bg='white' w='100vw' display='flex' justifyContent='center' alignItems='center' position='relative' >
        <Heading>Unlock Your Property's Potential with Caeterra</Heading>
        <Button colorScheme='blue' p={4}>Get Started</Button> 
    </VStack>
    
        
    );
};

export default Intro;