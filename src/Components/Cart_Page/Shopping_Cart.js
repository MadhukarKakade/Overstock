import {
  Container,
  Heading,
  Box,
  HStack,
  Select,
  Image,
  Text,
  Button,
  VStack,

} from "@chakra-ui/react";
import React from "react";
const quntOption = new Array(21).fill(0);
const Shopping_Cart = () => {
  return (
    <Container maxW='container.lg' >
   
      {/* Append data under the box */}
      <Box>
      <HStack
        borderWidth="1px"
      
        alignItems="flex-start" 
        p="20px"
        w='800px'
        gap="10px"
      >
        
        <Box>
          <Image src="https://ak1.ostkcdn.com/images/products/is/images/direct/fd159088cc160951bdeabcdc14e4ad81d6c6516e/Kitchen-Island-with-Natural-Solid-Wood-Top.jpg?impolicy=mediumlow" />
        </Box>
        <VStack alignItems="flex-start" gap="20px" fontSize="14px">
          <Box>
            <Heading size="sm">2-shelf Natural Solid Wood Top Kitchen Island</Heading>

            <Text>White Base & Natural Maple Top</Text>
          </Box>

          <Box fontSize="16px">
            <Text as="s">INR 15,313.86</Text>
            <Text pl="10px" display="inline" color="red">
              20% Savings
            </Text>
            <Heading size="sm" color="tomato">Sale INR 12,251.46</Heading>
          </Box>

          <Box>
            <Text>Quantity : </Text>
            <Select w="120px">
              {quntOption.map((qunt, i) => (
                <option key={200 + i} value={i}>
                  {i} {i === 0 ? "Remove" : ""}
                </option>
              ))}
            </Select>
          </Box>
          <HStack>
          
            <Button variant="link">Remove</Button>
            <Button pl="20px" colorScheme="pink" variant="link">
              Save For Later
            </Button>
          </HStack>
        </VStack>
      </HStack>
      </Box>
    </Container>
  );
};

export default Shopping_Cart;
