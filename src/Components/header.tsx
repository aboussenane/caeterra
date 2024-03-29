'use client'
import { Link } from '@chakra-ui/next-js'
import { Box, Center, flexbox } from '@chakra-ui/react'
import React from 'react';

const Header: React.FC = () => {
    return (
    <Box bg='whitesmoke' w='100vw' h='10vh' display='flex' justifyContent='center' alignItems='center' position='fixed' top='0' left='0' right='0' zIndex='1000'>
        
            <Link href='/about' color='blue.400' _hover={{ color: 'blue.500' }} padding='20px'>
                Home
            </Link>
            <Link href='/about' color='blue.400' _hover={{ color: 'blue.500' }} padding='20px'>
                About
            </Link>
            <Link href='/about' color='blue.400' _hover={{ color: 'blue.500' }} padding='20px'>
                Services
            </Link>
            <Link href='/about' color='blue.400' _hover={{ color: 'blue.500' }} padding='20px'>
                Contact
            </Link>
    </Box>
    
        
    );
};

export default Header;