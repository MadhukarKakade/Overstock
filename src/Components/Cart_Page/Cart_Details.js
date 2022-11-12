import {
  Button,
  Box,
  Container,
  Text,
  Input,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { RiLock2Fill } from "react-icons/ri";
import { Link, Navigate } from "react-router-dom";
const color = "black";
const Cart_Details = () => {
  const [promo, setPromo] = useState(false);

  return (
    <Container>
      <Box borderWidth="1px" p="10px" w="300px">
        <Button
          leftIcon={<BsPlusLg />}
          variant="ghost"
          w="full"
          fontSize="20px"
          onClick={() => setPromo(!promo)}
        >
          Add a Promo Code
        </Button>

        <Box display={!promo ? "none" : "block"}>
          <Text>Enter Promocode</Text>
          <HStack gap="10px">
            <Input
              borderColor="blackAlpha"
              w="200px"
              placeholder="Enter promocode"
            />
            <Button borderColor="blackAlpha" variant="outline">
              Apply
            </Button>
          </HStack>
        </Box>
      </Box>
      <Box borderWidth="1px" p="20px" mt="20px">
        <HStack justifyContent="space-between">
          <VStack gap="5px" alignItems="flex-start">
            <Text as="b">(11) Items:</Text>
            <Text>Sale Savings:</Text>
            <Text as="b">Subtotal:</Text>
          </VStack>
          <VStack gap="5px" alignItems="flex-start">
            <Text as="b">INR 433,040.11</Text>
            <Text color="red">- INR 64,961.04</Text>
            <Text as="b">INR 368,079.07</Text>
          </VStack>
        </HStack>
        <Box m="20px" borderWidth="1px" />
        <Text alignSelf="center" as="b" fontSize="20px">
          Your Total: INR 376,892.62
        </Text>
        <Link to="/checkout">
          <Button
            bg="black"
            colorScheme="blackAlpha"
            leftIcon={<RiLock2Fill />}
            mt="20px"
            w="full"
            onClick={()=> console.log(1)}
          >
            Check out
          </Button>
          </Link>
      </Box>
    </Container>
  );
};

export default Cart_Details;
