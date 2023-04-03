import React from "react";
import { Box, VStack, Text, Flex, HStack ,Image} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { shortID } from "./short_key.generator";
const footer = {
  "MY ACCOUNT": ["Orders & Returns", "Email Preferences", "Account Settings"],
  "LET US HELP": [
    "Contact Customer Care",
    "Shipping Information",
    "Return Policy",
    "International Help",
    "Accessibility",
  ],
  "COMPANY INFORMATION": [
    "About Overstock™",
    "Contact Us",
    "Careers",
    "Investor Relations",
    "Supply Chain Transparency",
  ],
  "MORE WAYS TO SHOP": ["Tips & Ideas", "Deals", "Clearance", "New Arrivals"],
};

const Footer = () => {
  return (
    <Box fontSize="12px" color="white" >
      <Flex justifyContent="space-between" bg="rgb(84,86,88)" p="50px 250px 50px 100px "  >
        {Object.keys(footer).map((keyName, keyIndex) => (
          <VStack  key={shortID()} gap="15px"  alignItems="flex-start">
            
            <Text  fontWeight="500">{keyName}</Text>
            {footer[keyName].map((task, i) => (
           
              <Link   key={shortID()}path="/:task">
                <Text  >{task}</Text>
              </Link>
            
            ))}
          
          </VStack>
          // and a[keyName] to get its value
          // console.log(keyName)
        ))}
      </Flex>
      
      <HStack bg="rgb(47,51,55)"  p="30px 100px" justifyContent="space-between">
        <Box textAlign="start">
          <Text>© Copyright 2022, Overstock.com®, Inc.</Text>
          <Text>799 Coliseum Way Midvale, UT 84047 | 1-800-843-2446</Text>
        </Box>
        <HStack  gap="20px">
          <Text>Privacy Policy


</Text>

          <Text>Terms & Conditions</Text>
          <Text>*Promotion Terms</Text>
          <HStack><Text>Ship to:</Text> <Image src="https://ak1.ostkcdn.com/img/mxc/intFlag_IN.gif" w="30px"/></HStack>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Footer;
