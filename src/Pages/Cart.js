import { Container, GridItem, Center, Grid, Flex ,Box} from "@chakra-ui/react";
import React from "react";
import Cart_Details from "../Components/Cart_Page/Cart_Details";
import Shopping_Cart from "../Components/Cart_Page/Shopping_Cart";

const Cart = () => {
  return (
    <Box>
      <Center>
        <Flex>
          <Shopping_Cart />
          <Cart_Details />
        </Flex>
      </Center>
    </Box>
  );
};

export default Cart;
