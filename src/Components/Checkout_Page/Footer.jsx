import { Box, Divider, Flex, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

import australia from "../../Images/Checkout/australia.png";
import privacy_shield from "../../Images/Checkout/privacy_shield.png";
const Footer = () => {
  return (
    <Box>
         <Box>
        <Heading color="rgb(12,12,12)" font-size="25px" font-weight="bold">
          Customer Testimonials:
        </Heading>

        <hr />

        <Flex gap="5px" pl="10px">
          <Box>
            <Image height="77px" width="70px" src={australia} />
          </Box>
          <VStack justify="space-around" alignItems="start">
            <Heading size="xs">Catherine</Heading>
            <Heading size="xs">Australia</Heading>
          </VStack>
        </Flex>

        <Text>
          "I received my item today and I am just emailing to say how pleased I
          am with your service. I am thrilled with the coat I ordered, a coat I
          cannot buy in Australia. The price was fair and I received the item
          within 10 days!" Thank you for excellent service."Christine
        </Text>

        <Flex gap="5px" bg="#dcddda" p="10px" mt="20px">
          <Box className="candaimage">
            <Image
              height="67px"
              width="70px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokZpLAQZ4TnOZ6kmzqxYURhciBvNAa1GAd2Xr8ygiVbBZ8vsv"
            />
          </Box>
          <VStack justify="space-around" alignItems="start">
            <Heading size="xs">Christine</Heading>
            <Heading size="xs">Mississauga, ON</Heading>
          </VStack>
          <Box className="ptag">
            <Text mt="10px" fontSize="xs" ml="100px">
              "I'm very impressed by the level of dedication Overstock.com has
              for its customers."
            </Text>
          </Box>
        </Flex>

        <Text as="u">View all customer testimonials</Text>
      </Box>
      <HStack justify="space-between">
        <Text>Return Policy</Text>
        <Text>Contact Customer Care</Text>
        <Text>FAQ</Text>

        <Text>Privacy Policy</Text>

        <Text>Site User Term & condition</Text>
      </HStack>

      <Divider borderWidth="1px" />
      <HStack justify="space-between">
        <Box>© 2021 Overstock.com All Rights Reserved</Box>
        <Flex>
          <Text fontSize="xs">We self-certify compliance with: </Text>
          <Image src={privacy_shield} alt="Privacy Shield" />
        </Flex>
      </HStack>
    </Box>
  )
}

export default Footer