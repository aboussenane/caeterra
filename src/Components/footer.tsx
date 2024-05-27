'use client'
import { Link } from '@chakra-ui/next-js'
import { Box, Center, flexbox, VStack} from '@chakra-ui/react'
import React from 'react';

const Footer: React.FC = () => {
    return (
    <Center>
    <Box bg='whitesmoke' p='10' w='100vw' h='10vh' display='flex' justifyContent='center' alignItems='center' position='absolute' bottom='0' left='0' right='0' >
        <VStack display='flex' justifyContent='center' alignItems='center' position='relative'>
            
            <Box>
                <Center>
                    
                    <Link href='https://rooms.xyz/dankroomz/caeterrahome' color='black' padding='20px'>
                        Ask our AI characters!
                    </Link>
                </Center>
            </Box>
            
            <Box >
            &copy; {new Date().getFullYear()} Caeterra. All Rights Reserved.
            
            </Box>
        </VStack>
    </Box>
    </Center>
        
    );
};

export default Footer;