'use client'

import { Box, Container, Stack, Button, ButtonGroup, VStack,Grid, GridItem, Center} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import React from 'react';
const imageNames = ['image-1.jpg'];

const Hero: React.FC = () => {
    return (
    <Center>
        <Center>
        
            <Image      
                boxSize='75%'
                objectFit='cover'
                width='100%'
                maxWidth='1000px'
                borderRadius={5}
                src={`/Images/Hero/image-1.jpg`}
                alt="Home"
            />
    
            
        </Center>
    </Center>
    
        
    );
};

export default Hero;

/*
Hero Section carousel
'use client'

import { Box, Container, Stack, Button, ButtonGroup, VStack,Grid, GridItem, Center} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import React from 'react';
const imageNames = ['image-1.jpg'];

const Hero: React.FC = () => {
    return (
    <VStack spacing={8} p={4} bg='white' w='100vw' display='flex' justifyContent='center' alignItems='center' position='relative' >
        <Center>
        <Box overflowX='auto' w='full' p={4} sx={{
                    WebkitOverflowScrolling: 'touch', // This enables momentum-based scrolling on iOS devices.
                    scrollbarWidth: 'none', 
                    '&::-webkit-scrollbar': {
                        display: 'none', 
                    },
                }}>
                <Stack direction='row' spacing={4}>
                
                {imageNames.map((imageName) => (
                        <Image
                            key={imageName}
                            boxSize='45%'
                            objectFit='cover'
                            borderRadius={5}
                            src={`/images/Hero/${imageName}`}
                            alt={imageName}
                        />
                    ))}
                </Stack>
            </Box>
        </Center>
        <Container>Blablabblabl Adel is best web developper hahahahahah Brief overview of Caeterra's services</Container>
        <Button colorScheme='blue' p={4}>Explore Our Services</Button> 
    </VStack>
    
        
    );
};

export default Hero;
*/