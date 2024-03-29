'use client'
import { Link } from '@chakra-ui/next-js'
import { Box, Center, flexbox, VStack} from '@chakra-ui/react'
import React from 'react';

const Footer: React.FC = () => {
    return (
    <Box bg='whitesmoke' p='20' w='100vw' h='10vh' display='flex' justifyContent='center' alignItems='center' position='absolute' bottom='0' left='0' right='0' >
        <VStack display='flex' justifyContent='center' alignItems='center' position='relative'>
            <Box>
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
            <Box>
                <Center>
                    <Link href='/about' color='blue.400' _hover={{ color: 'blue.500' }} padding='20px'>
                        Facebook
                    </Link>
                    <Link href='/about' color='blue.400' _hover={{ color: 'blue.500' }} padding='20px'>
                        Twitter
                    </Link>
                    <Link href='/about' color='blue.400' _hover={{ color: 'blue.500' }} padding='20px'>
                        Instagram
                    </Link>
                </Center>
            </Box>
            <Box>
                Copryright Yur Boi D-Lo 2024
            </Box>
        </VStack>
    </Box>
    
        
    );
};

export default Footer;