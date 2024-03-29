'use client'

import { Center,InputGroup,InputLeftAddon,Card,Select,Input, CardBody,CardFooter,Divider,Text,Stack, Heading, Button, ButtonGroup, HStack, Box} from '@chakra-ui/react'
import React from 'react';

const Contact: React.FC = () => {
    return (
    <HStack spacing={8} p={10} bg='white' w='100vw' display='flex' justifyContent='center' alignItems='center' position='relative' >
        <Card minWidth='250px' maxWidth='50%'>
            <CardBody>
                <Stack mt='6' spacing='3'>
                <Heading size='md'>Contact Us</Heading>
                
                <Input placeholder='Name' />
                <InputGroup>
                <InputLeftAddon>
                +1
                </InputLeftAddon>
                    <Input type='tel' placeholder='Phone number' />
                </InputGroup>
                <Select placeholder='Select Service'>
                    <option value='option1'>Full-Service Property Management</option>
                    <option value='option2'>Cleaning Services</option>
                    <option value='option3'>Property Maintenance</option>
                    <option value='option4'>Listing Management</option>
                    <option value='option5'>Guest Management</option>
                </Select>
                <Input placeholder='Message' minHeight='100px' />

                
                
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <Center>
                <Button variant='solid' colorScheme='blue'>
                    Submit
                </Button>
                </Center>
                
            </CardFooter>
        </Card>
        <Box minW='50%' bg='black' color='white'>
        Placing a map is not as easy as you might think it is <br />'
        </Box>
    </HStack>
    
        
    );
};

export default Contact;