'use client'

import { Box, Container, Stack, Button, ButtonGroup, VStack,Grid, GridItem} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import React from 'react';
const imageNames = ['image-1.png', 'image-2.png', 'image-3.png', 'image-4.png', 'image-5.png', 'image-6.png', 'image-7.png', 'image-8.png'];

const Hero: React.FC = () => {
    return (
    <VStack spacing={8} p={4} bg='white' w='100vw' display='flex' justifyContent='center' alignItems='center' position='relative' >
        <Box overflowX='auto' w='full' p={4} sx={{
                    WebkitOverflowScrolling: 'touch', // This enables momentum-based scrolling on iOS devices.
                    scrollbarWidth: 'none', /* For Firefox */
                    '&::-webkit-scrollbar': {
                        display: 'none', /* For Chrome, Safari, and Opera */
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
        <Container>Blablabblabl Adel is best web developper hahahahahah Brief overview of Caeterra's services</Container>
        <Button colorScheme='blue' p={4}>Explore Our Services</Button> 
    </VStack>
    
        
    );
};

export default Hero;