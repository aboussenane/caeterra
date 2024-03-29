'use client'

import {List,ListItem,ListIcon, Container, Card, CardBody,Center,Text, Heading, Button, ButtonGroup, VStack, Divider, Box,Stack,Image} from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'
import React from 'react';
const imageNames = ['image-1.png', 'image-2.png', 'image-3.png', 'image-4.png'];
const details = ['testimonial details', 'testimonial details', 'testimonial details', 'testimonial details', 'testimonial details', 'testimonial details', 'John details', 'Spiderman details'];
const Pitch: React.FC = () => {
    return (
    <VStack spacing={8} p={4} bg='white' w='100vw' display='flex' justifyContent='center' alignItems='center' position='relative' >
        <Heading>Why Choose Caeterra</Heading>
        <Container >
  There are many benefits to a joint design and development system. Not only
  does it bring benefits to the design team, but it also brings benefits to
  engineering teams. It makes sure that our experiences have a consistent look
  and feel, not just in our design specs, but in production
  
        </Container>
        <Divider />
        <List spacing={3}>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </ListItem>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Assumenda, quia temporibus eveniet a libero incidunt suscipit
            </ListItem>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
        </List>
        <Divider />
        <Box overflowX='auto' w='full' p={4} sx={{
                    WebkitOverflowScrolling: 'touch', // This enables momentum-based scrolling on iOS devices.
                    scrollbarWidth: 'none', /* For Firefox */
                    '&::-webkit-scrollbar': {
                        display: 'none', /* For Chrome, Safari, and Opera */
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
    </VStack>
    
        
    );
};

export default Pitch;