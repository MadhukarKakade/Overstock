import { Box, Circle, HStack, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

const Order_Summary = () => {
  return (
    <Box >
    <Heading
      p="10px"
      bg="antiquewhite"
      size="sm"
      borderColor="gray.100"
      border="1px "
    >
      Order Summary
    </Heading>
    <SimpleGrid
      templateColumns="auto auto"
      justifyContent="space-between"
      p="10px"
    >
      <Text>Subtotal: </Text>
      <Text>8068.23 INR</Text>
      <Text>Shipping: </Text>
      <Text>2979.36 INR</Text>
      <Text>Duty and Tax: </Text>
      <Text>4702.18 INR</Text>
      <HStack>
      
        <Circle bg="blue" size="15px" color="white">
          i
        </Circle>
        <Text> Loss and Damage Protection remove : </Text>
      </HStack>
      <Text>220.97 INR</Text>
      <Text>Order Total:</Text>
      <Text>15970.74 INR</Text>
    </SimpleGrid>
  </Box>
  )
}

export default Order_Summary