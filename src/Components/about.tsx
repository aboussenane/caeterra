'use client'

import { Box, Container,Center, Stack, Button, ButtonGroup, Grid, GridItem, VStack,Card, CardHeader, CardBody, CardFooter, Heading, Text, Divider} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import React from 'react';
const imageNames = ['image-1.png', 'image-2.png', 'image-3.png', 'image-4.png'];
const details = ['Adel details', 'Rym details', 'Anas details', 'Batman details', 'Peter Parker details', 'Jimmy details', 'John details', 'Spiderman details'];
const About: React.FC = () => {
    return (
    <VStack spacing={8} p={4} bg='white' w='100vw' display='flex' justifyContent='center' alignItems='center' position='relative' >
        
        <Box overflowX='auto' w='full' p={4} >
                <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                {imageNames.map((imageName, index) => (
                        
                        <Card maxW='sm'minW='sm'>
                            <CardBody>
                            <Center>
                                <Image
                                key={imageName}
                                boxSize='45%'
                                objectFit='cover'
                                borderRadius={5}
                                src={`/images/Team/${imageName}`}
                                alt={imageName}
                                />
                            </Center>
                                <Stack mt='6' spacing='3'>
                                <Divider />
                                <Heading size='md'>{imageName.replace('.png', '')}</Heading>
                                <Text>
                                {details[index]}
                                </Text>
                                
                                </Stack>
                            </CardBody>
                            </Card>
                    ))}
                </Grid>
            </Box>
        <Button colorScheme='blue' p={4}>Learn More About Caeterra</Button> 
    </VStack>
    
        
    );
};

export default About;