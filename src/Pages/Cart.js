import {
  Center,
  Flex,
  Box,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import Cart_Details from "../Components/Cart_Page/Cart_Details";
import Shopping_Cart from "../Components/Cart_Page/Shopping_Cart";

const Cart = () => {
  return (
    <Box w="70%" m="auto">
      <Heading textAlign="left" size="lg" p="20px 0px">
        Shopping Cart
      </Heading>
      <Center>
        <Flex gap="20px">
          <Shopping_Cart />
          <Cart_Details />
        </Flex>
      </Center>
    </Box>
  );
};

export default Cart;
