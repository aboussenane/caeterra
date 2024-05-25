'use client'

import { Box, Center, Stack, Button, ButtonGroup, Grid, Link, GridItem, VStack,Card, CardHeader, CardBody, CardFooter, Heading, Text, Divider} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import React from 'react';
const imageNames = ['Full-Service Property Management.jpg', 'Cleaning Services.jpg', 'Listing Management.jpg','Guest Management.jpg'];
const details = ['Caeterra takes the stress out of managing your property. Our full-service approach covers everything from bookings to ensuring your space is ready for guests at all times.', 'Exceptional cleanliness is our promise. Caeterra\'s professional cleaning services ensure your property shines with cleanliness and attention to detail, maximizing guest satisfaction.', 'Optimize your property\'s online presence with Caeterra. Our experts craft compelling listings that stand out in Ottawa\'s competitive short-term rental market.', 'Guest satisfaction is our priority. Caeterra manages all guest interactions, providing a smooth and enjoyable experience for your guests from booking to check-out.', 'Service details', 'John details', 'Spiderman details'];
const Services: React.FC = () => {
    return (
    <VStack spacing={8} p={4} bg='white' w='100vw' display='flex' justifyContent='center' alignItems='center' position='relative' >
        
        <Heading>Our Services</Heading>
        <Box overflowX='auto' w='full' p={4} sx={{
                    WebkitOverflowScrolling: 'touch', // This enables momentum-based scrolling on iOS devices.
                    scrollbarWidth: 'none', /* For Firefox */
                    '&::-webkit-scrollbar': {
                        display: 'none', /* For Chrome, Safari, and Opera */
                    },
                }}>
                <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                {imageNames.map((imageName, index) => (
                        
                        <Card minW='sm'>
                            <CardBody>
                                <Center>
                                    <Image
                                    key={imageName}
                                    boxSize='45vw'
                                    
                                    objectFit='cover'
                                    borderRadius={5}
                                    src={`/images/Services/${imageName}`}
                                    alt={imageName}
                                    />
                                </Center>
                                <Stack mt='6' spacing='3'>
                                
                                <Heading size='md'>{imageName.replace('.jpg', '')}</Heading>
                                <Text>
                                {details[index]}
                                </Text>
                                <Divider />
                                <CardFooter>
                                <ButtonGroup spacing='4'>
                                <Link href={`mailto:Caterra@gmail.com?subject=${encodeURIComponent(imageName.replace('.jpg', ''))}`}target="_blank">
                                    <Button variant='solid' colorScheme='red'>
                                    Book now
                                    </Button>
                                </Link>
                                </ButtonGroup>
                            </CardFooter>
                                </Stack>
                            </CardBody>
                            </Card>
                    ))}
                </Grid>
            </Box>
        
    </VStack>
    
        
    );
};

export default Services;