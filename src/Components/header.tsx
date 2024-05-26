'use client';
import { Link } from '@chakra-ui/next-js';
import { Box, HStack } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import NextLink from 'next/link';

const Header: React.FC = () => {
    const [showHeader, setShowHeader] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setShowHeader(true);
            } else {
                setShowHeader(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box
            
            w="100vw"
            h="35px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="fixed"
            top="0"
            left="0"
            right="0"
            zIndex="1000"
            bg="rgba(255, 255, 255, 0.1)"
            backdropFilter="blur(5px)"
            fontWeight={600}
            transform={showHeader ? 'translateY(0)' : 'translateY(-100%)'}
            transition="transform 0.3s ease-in-out"
        >
            <HStack spacing={8} p={4} w="100vw" display="flex" justifyContent="center" alignItems="center" position="relative">
                <Link href="/">Home</Link>
                <Link href="/listings">Listings</Link>
            </HStack>
        </Box>
    );
};

export default Header;
