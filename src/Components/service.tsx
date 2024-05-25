'use client'

import { Box, Center, Stack, Button, ButtonGroup, Grid, GridItem, VStack,Card, CardHeader, CardBody, CardFooter, Heading, Text, Divider} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import React from 'react';
const imageNames = ['Full-Service Property Management.png', 'Cleaning Services.png', 'Cleaning Services.png', 'Listing Management.png','Guest Management.png'];
const details = ['Service details', 'Service details', 'Service details', 'Service details', 'Service details', 'Service details', 'John details', 'Spiderman details'];
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
                                    boxSize='45%'
                                    objectFit='cover'
                                    borderRadius={5}
                                    src={`/images/Services/${imageName}`}
                                    alt={imageName}
                                    />
                                </Center>
                                <Stack mt='6' spacing='3'>
                                
                                <Heading size='md'>{imageName.replace('.png', '')}</Heading>
                                <Text>
                                {details[index]}
                                </Text>
                                <Divider />
                                <CardFooter>
                                <ButtonGroup spacing='4'>
                                <Button variant='solid' colorScheme='blue'>
                                    Book now
                                </Button>
                                <Button variant='ghost' colorScheme='blue'>
                                    Learn More
                                </Button>
                                </ButtonGroup>
                            </CardFooter>
                                </Stack>
                            </CardBody>
                            </Card>
                    ))}
                </Grid>
            </Box>
        <Button colorScheme='blue' p={4}>View Our Services</Button> 
    </VStack>
    
        
    );
};

export default Services;