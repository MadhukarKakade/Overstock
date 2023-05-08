import React, { useState, useRef } from "react";

import fedex from "../Images/Checkout/fedexLogo.png";

import signup from "../Images/Checkout/signup.png";

import {
  Box,
  Flex,
  Button,
  HStack,
  Heading,
  Image,
  Text,
  Radio,
  RadioGroup,
  VStack,
  FormControl,
  Checkbox,
  Divider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import Checkout_Form from "../Components/Checkout_Page/Checkout_Form";
import Payment_Info from "../Components/Checkout_Page/Payment_Info";
import Footer from "../Components/Checkout_Page/Footer";
import Header from "../Components/Checkout_Page/Header";

import Order_Summary from "../Components/Checkout_Page/Order_Summary";

const initialBillAddr = {
  email: "",
  firstName: "",
  lastName: "",
  company: "",
  taxname: "",
  address1: "",
  address2: "",
  country: "",
  city: "",
  state: "",
  zipcode: "",
  phone: "",
};
const Checkout = () => {
  const [value, setValue] = useState("1");
  const ref = useRef(null);
  const [billAddr, setBillAddr] = useState(initialBillAddr);
  const [shipAddr, setShipAddr] = useState(initialBillAddr);
  console.log(billAddr);

  const checkRequired = (address) => {
    const { email, firstName, lastName, address1, country, city, phone } =
      address;

    return (
      email &&
      firstName.length > 3 &&
      lastName.length > 3 &&
      address1 &&
      country &&
      city &&
      phone.length == 10
    );
  };

  const handleChecked = (e) => {
    if (e.target.checked) {
      if (checkRequired(billAddr)) {
        console.log("ok");
        setShipAddr({ ...billAddr, disabled: true });
        ref.current.isDisabled = true;
      }
    } else {
      setShipAddr({ ...shipAddr, disabled: false });
    }
  };

  const handlePlaceOrder = () => {
    if (checkRequired(billAddr) && checkRequired(shipAddr)) {
      console.log("order placed successfully");
    } else {
      console.log("Please fill all required fildes");
    }
  };

  return (
    <VStack width="70%" m="auto" p="10px" alignItems="stretch" gap="10px">
      <Header />
      <Divider border="2px solid  black" size="lg" />
      <HStack justify="start">
        <Image w="150px" src={fedex} alt="fedex" />
        <Text fontWeight="bold" fontSize="xs">
          Secure checkout provided by FedEx International.
          <br />
          Your order total includes customs and taxes, if applicable.
        </Text>
      </HStack>
      <Box>
        <Link to="/cart">
          <Text as="u" fontSize="xs" fontWeight="bold">
            {"<< "}Back to Cart
          </Text>
        </Link>
      </Box>
      <Flex justify="space-between" gap="20px">
        <Box w="50%">
          <Heading
            p="10px"
            bg="antiquewhite"
            size="sm"
            borderColor="gray.100"
            borderLeft="1px"
            borderRight="1px"
            borderTop="1px "
          >
            Billing Address
          </Heading>
          <FormControl isRequired>
            <Checkout_Form address={billAddr} setAddress={setBillAddr} />
          </FormControl>
          <Checkbox pt="10px" onChange={handleChecked}>
            Shipping address is same as Billing address
          </Checkbox>
        </Box>
        <Box w="50%">
          <Heading
            p="10px"
            bg="antiquewhite"
            size="sm"
            borderColor="gray.100"
            borderLeft="1px"
            borderRight="1px"
            borderTop="1px"
          >
            Shipping Address
          </Heading>
          <FormControl isRequired isDisabled={shipAddr.disabled}>
            <Checkout_Form
              address={shipAddr}
              setAddress={setShipAddr}
              shipAddr={true}
            />
          </FormControl>
        </Box>
      </Flex>

      <Box>
        <Box></Box>
        <Box>
          <Heading
            p="10px"
            bg="antiquewhite"
            size="sm"
            borderColor="gray.100"
            border="1px "
          >
            Shipping Method
          </Heading>

          <Box>
            <Box p="10px">
              <RadioGroup onChange={setValue} value={value}>
                <Radio
                  spacing="100px"
                  colorScheme="blackAlpha"
                  value="1"
                  mt="5px"
                >
                  <Text as="b">International Standard </Text>- 11785.06 INR
                </Radio>
                <Text ml="115px" color="green" mt="5px">
                  Estimated Delivery Date: 2022-01-05
                </Text>
                <Radio
                  spacing="100px"
                  colorScheme="blackAlpha"
                  value="2"
                  mt="15px"
                >
                  <Text as="b">International Express </Text> - 14405.21 INR
                </Radio>
                <Text ml="115px" color="green" mt="5px">
                  Estimated Delivery Date: 2021-12-31
                </Text>
              </RadioGroup>
            </Box>
          </Box>
        </Box>
      </Box>
      <Order_Summary />
      <Payment_Info />

      <Box id="t3">
        <Image src={signup} alt="signup" />
        <Checkbox size="sm">
          When you sign up for email, you'll get exclusive coupons, sale
          notifications, and product ideas.(i)
        </Checkbox>
        <Text as="u">Privacy Policy</Text>
        <Text id="five"></Text>
        <br />
        <br />
      </Box>
      <Flex justify="space-between">
        <Box>
          <Text fontSize="sm">
            By clicking the "Place order" button, you acknowledge that your
            order will be processed and fulfilled by
          </Text>
          <Text fontSize="sm">
            <u>FedEx Cross Border</u> and you agree to{" "}
            <u>FedEx Cross Border Terms and Conditions</u> and{" "}
            <u>Privacy Policy</u> .
          </Text>
        </Box>
        <Button
          type="submit"
          color="white"
          bg="#81a555"
          size="sm"
          borderRadius="3px"
          onClick={handlePlaceOrder}
        >
          PLACE ORDER {">>"}
        </Button>
      </Flex>
      <Footer />
    </VStack>
  );
};

export default Checkout;
