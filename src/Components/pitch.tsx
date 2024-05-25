'use client'

import {List,ListItem,ListIcon, Container, Card, CardBody,Center,Text, Heading, Button, ButtonGroup, VStack, Divider, Box,Stack,Image} from '@chakra-ui/react'
import { MdCheckCircle, MdStar } from 'react-icons/md'
import React from 'react';
import { BiTrophy } from 'react-icons/bi';
const imageNames = ['image-1.png', 'image-2.png', 'image-3.png', 'image-4.png'];
const details = ['testimonial details', 'testimonial details', 'testimonial details', 'testimonial details', 'testimonial details', 'testimonial details', 'John details', 'Spiderman details'];
const Pitch: React.FC = () => {
    return (
    <VStack spacing={8} p={4} bg='white' w='100vw' display='flex' justifyContent='center' alignItems='center' position='relative' >
        <Heading>Why Choose Caeterra</Heading>
        <Container >
        Discover why property owners choose Caeterra. Our track record speaks for itself - see testimonials from satisfied clients and visual proof of success.
  
        </Container>
        <Divider />
        <List spacing={3}>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                10 year track record of success in Ottawa's short-term rental market.
            </ListItem>
            <ListItem>
                <ListIcon as={MdStar} color='gold' />
                Proven quality of service with 5-star reviews from satisfied clients.
            </ListItem>
            <ListItem>
                <ListIcon as={BiTrophy} color='gold' />
                Guest favourite on Airbnb with over 1000 bookings and counting.
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Face to face meetings with our team to ensure your property is in good hands.
            </ListItem>
        </List>
       
        
    </VStack>
    
        
    );
};

export default Pitch;

/* Testimonials Section carousel
<Box overflowX='auto' w='full' p={4} sx={{
                    WebkitOverflowScrolling: 'touch', // This enables momentum-based scrolling on iOS devices.
                    scrollbarWidth: 'none', 
                    '&::-webkit-scrollbar': {
                        display: 'none', 
                    },
                }}>
                <Stack direction='row' spacing={4}>
                {imageNames.map((imageName, index) => (
                        
                        <Card maxW='md'minW='sm'direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'>
                            <CardBody>
                            
                                <Image
                                key={imageName}
                                boxSize='45%'
                                objectFit='cover'
                                
                                maxW={{ base: '100%', sm: '200px' }}
                                borderRadius={5}
                                src={`/images/Testimonials/${imageName}`}
                                alt={imageName}
                                />
                            
                                <Stack mt='6' spacing='3'>
                                <Divider />
                                <Heading size='md'>{imageName.replace('.png', '')}</Heading>
                                <Text py='2'>
                                {details[index]}
                                </Text>
                                
                                </Stack>
                            </CardBody>
                            </Card>
                    ))}
                </Stack>
            </Box>
            */