import { Box, FormControl, FormLabel, HStack, Heading, Image, Input, Select, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { shortID } from '../short_key.generator'

import visa from "../../Images/Checkout/visa.png";
import mastercard from "../../Images/Checkout/mastercard.png";
import security from "../../Images/Checkout/Security.gif";
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const Payment_Info = () => {
  return (
    <Box border="1px">
    <Heading
      p="10px"
      bg="antiquewhite"
      size="sm"
      borderColor="gray.100"
      borderBottom="1px"
    >
      Payment Information
    </Heading>

    <Box p="10px">
      <HStack h="70px">
        <Image src={visa} alt="visa" />
        <Image src={mastercard} alt="Mastercard" />
      </HStack>
      <FormControl isRequired>
        <SimpleGrid templateColumns="400px auto" w="70%" gap="10px">
          <FormLabel fontSize="sm">Card Type</FormLabel>
          <Select size="xs" placeholder="Select Card" name="card_type">
            <option value="Visa">Visa</option>
            <option value="RuPay">RuPay</option>
            <option value="MasterCard">MasterCard</option>
          </Select>
          <FormLabel fontSize="sm">Credit Card Number</FormLabel>
          <Input
            size="xs"
            placeholder="Credit Card Number"
            name="name"
            type="number"
          />
          <FormLabel fontSize="sm">Expiration Date</FormLabel>
          <HStack>
        
            <Select maxW="70px" size="xs">
              <option></option>{" "}
              {Array(12)
                .fill("")
                .map((_, i) => (
                  <option key={shortID()} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
            </Select>
            <Select size="xs">
            
              <option></option>
              {Array(10)
                .fill("")
                .map((_, i) => (
                  <option key={shortID()} value={i + currentYear}>
                    {i + currentYear}
                  </option>
                ))}
            </Select>
          </HStack>
          <FormLabel fontSize="sm">Security Code</FormLabel>
          <Input
            size="xs"
            type="password"
            maxLength="3"
            minLength="3"
        
            name="cvv"
          />
          <Text></Text> <Image src={security} alt="security code" />
        </SimpleGrid>
      </FormControl>
    </Box>
  </Box>
  )
}

export default Payment_Info