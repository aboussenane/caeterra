'use client'

import { Center, InputGroup, InputLeftAddon, Card, Select, Input, CardBody, CardFooter, Divider, Stack, Heading, Button, ButtonGroup, HStack, Text } from '@chakra-ui/react'
import React, { useState } from 'react';


const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Service Inquiry: ${service}`);
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nMessage: ${message}`);
    window.open(`mailto:aboussenane@gmail.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  return (
    <HStack spacing={8} p={10} bg='white' w='100vw' display='flex' justifyContent='center' alignItems='center' position='relative'>
      <Card minWidth='250px' maxWidth='50%'>
        <CardBody>
          {submitted ? (
            <Center>
              <Text fontSize='xl' color='red'>Thank you for your inquiry! We will get back to you soon.</Text>
            </Center>
          ) : (
            <form onSubmit={handleSubmit}>
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Contact Us</Heading>
                <Input
                  placeholder='Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <InputGroup>
                  <InputLeftAddon>+1</InputLeftAddon>
                  <Input
                    type='tel'
                    placeholder='Phone number'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </InputGroup>
                <Select
                  placeholder='Select Service'
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  <option value='Full-Service Property Management'>Full-Service Property Management</option>
                  <option value='Cleaning Services'>Cleaning Services</option>
                  <option value='Property Maintenance'>Property Maintenance</option>
                  <option value='Listing Management'>Listing Management</option>
                  <option value='Guest Management'>Guest Management</option>
                </Select>
                <Input
                  placeholder='Message'
                  minHeight='100px'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Stack>
              <Divider />
              <CardFooter>
                <Center>
                  <ButtonGroup spacing='4'>
                    <Button type='submit' variant='solid' colorScheme='red'>
                      Book now
                    </Button>
                  </ButtonGroup>
                </Center>
              </CardFooter>
            </form>
          )}
        </CardBody>
      </Card>
    </HStack>
  );
};

export default Contact;
