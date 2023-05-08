import { Box, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from "../../Images/logo.png";
const Header = () => {
  return (
    <HStack justify="space-between" pl="40%">
    <Box justifySelf="center">
      <Image w="100px" src={logo} alt="logo" />
    </Box>

    <Text fontSize="md" color="green.300">
   
      You are using our secure server
    </Text>
  </HStack>
  )
}

export default Header