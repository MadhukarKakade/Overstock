import React from "react";
import logo from "../Images/logo.png";
import fedex from "../Images/Checkout/fedex.jpg";
import visa from "../Images/Checkout/visa.png";
import mastercard from "../Images/Checkout/mastercard.png";
import signup from "../Images/Checkout/signup.png";
import security from "../Images/Checkout/Security.gif";
import australia from "../Images/Checkout/australia.png"
import {
  Box,
  Flex,
  Button,
  HStack,
  Heading,
  Image,
  Input,
  Select,
  SimpleGrid,
  Text,
  FormLabel,
  Radio,
  RadioGroup,
  VStack,
  FormControl,
  Checkbox,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import shortid from "shortid";
const   currentYear = new Date().getFullYear()
const currentMonth=new Date().getMonth()
const Checkout = () => {
  const [value, setValue] = React.useState("1");
  
  return (
    <Box width="70%" m="auto">
      <HStack justify="space-between">
        <Image w="75px" src={logo} alt="logo" />
        <Text> You are using our secure server</Text>
      </HStack>
      <Box border="0.1px solid  rgb(220,220,220)" m="10px 0px" />
      <HStack justify="start">
        <Image w="150px" src={fedex} alt="fedex" />
        <Text fontWeight="bold" fontSize="xs">
          Secure checkout provided by FedEx International.
          <br />
          Your order total includes customs and taxes, if applicable.
        </Text>
      </HStack>
      <Box className="returnAnchor_Box">
        <Link to="/cart">{"<< "}Back to Cart</Link>
      </Box>
      <Flex justify="space-between" gap="20px">
        <Box className="addressBox1" w="50%">
          <Heading
            p="10px"
            bg="#fff8e9"
            size="sm"
            borderColor="gray.100"
            borderLeft="1px"
            borderRight="1px"
            borderTop="1px "
          >
            Billing Address
          </Heading>

          <SimpleGrid
            templateColumns="150px auto"
            gap="15px"
            fontSize="sm"
            p="5px 10px"
            w="full"
            borderColor="gray"
            border="1px"
          >
            <Text fontWeight="bold">Email</Text>
            <Input size="xs" id="email" type="text" required />
            <Text fontWeight="bold">First Name</Text>
            <Input size="xs" id="firstName" type="text" required />
            <Text fontWeight="bold">Last Name</Text>
            <Input size="xs" id="lastName" type="text" required />
            <Text>Company</Text>
            <Input size="xs" id="company" type="text" />
            <Text>Tax ID</Text>
            <Input size="xs" id="taxId" type="text" />
            <Text fontWeight="bold">Address Line 1</Text>
            <Input size="xs" id="address1" type="text" required />

            <Text>Address Line 2</Text>
            <Input size="xs" id="address2" type="text" />
            <Text fontWeight="bold">Country</Text>
            <Select
              size="xs"
              id="country"
              placeholder="Select Country"
              required
            >
              <option value="india">India</option>
              <option value="canada">Canada</option>
              <option value="china">China</option>
              <option value="japan">Japan</option>
              <option value="russia">Russia</option>
              <option value="france">France</option>
            </Select>
            <Text fontWeight="bold">City</Text>
            <Input size="xs" id="city" type="text" required />
            <Text>State</Text>
            <Input size="xs" id="state" type="text" />
            <Text>Zip code</Text>
            <Input size="xs" id="zipcode" type="text" />
            <Text fontWeight="bold">Phone #</Text>

            <Input size="xs" id="phone" type="text" required />
          </SimpleGrid>
        </Box>
        <Box className="addressBox2" w="50%">
          <Heading
            p="10px"
            bg="#fff8e9"
            size="sm"
            borderColor="gray.100"
            borderLeft="1px"
            borderRight="1px"
            borderTop="1px"
          >
            Shipping Address
          </Heading>

          <SimpleGrid
            templateColumns="150px auto"
            gap="15px"
            fontSize="sm"
            p="5px 10px"
            w="full"
            borderColor="gray"
            border="1px"
          >
            <Text fontWeight="bold">Email</Text>
            <Input
              size="xs"
              className="topEle"
              id="email"
              type="text"
              required
            />
            <Text fontWeight="bold">First Name</Text>
            <Input size="xs" id="firstName" type="text" required />
            <Text fontWeight="bold">Last Name</Text>
            <Input size="xs" id="lastName" type="text" required />
            <Text>Company</Text>
            <Input size="xs" id="company" type="text" />
            <Text>Tax ID</Text>
            <Input size="xs" id="taxId" type="text" />
            <FormLabel fontWeight="bold">Address Line 1</FormLabel>
            <Input size="xs" id="address1" type="text" isRequired />

            <Text>Address Line 2</Text>
            <Input size="xs" id="address2" type="text" />
            <Text></Text>
            <Text>(We cannot ship to PO box, APO or FPO addresses.)</Text>
            <Text fontWeight="bold">Country</Text>
            <Select
              id="country"
              placeholder="Select Country"
              isRequired
              size="xs"
            >
              <option value="india">India</option>
              <option value="canada">Canada</option>
              <option value="china">China</option>
              <option value="japan">Japan</option>
              <option value="russia">Russia</option>
              <option value="france">France</option>
            </Select>
            <Text fontWeight="bold">City</Text>
            <Input size="xs" id="city" type="text" required />
            <Text>State</Text>
            <Input size="xs" id="state" type="text" />
            <Text>Zip code</Text>
            <Input size="xs" id="zipcode" type="text" />
            <Text fontWeight="bold">Phone #</Text>

            <Input size="xs" id="phone" type="text" required />
          </SimpleGrid>
        </Box>
      </Flex>

      <Box className="paymentsItemInfo">
        <Box></Box>
        <Box className="methodShipping">
          <Heading
            p="10px"
            bg="#fff8e9"
            size="sm"
            borderColor="gray.100"
            border="1px "
          >
            Shipping Method
          </Heading>

          <Box className="shippingInfo">
            {/* <!-- <form className = "shippingBox1"> --> */}

            {/* <!-- </form> --> */}
            <Box p="10px">
              <RadioGroup onChange={setValue} value={value}>
                <Radio spacing="100px" colorScheme="blackAlpha" value="1" mt="5px">
                  <Text as="b">International Standard </Text>- 11785.06 INR
                </Radio>
                <Text ml="115px" color="green" mt="5px">
                  Estimated Delivery Date: 2022-01-05
                </Text>
                <Radio spacing="100px" colorScheme="blackAlpha" value="2" mt="15px">
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

      <Box border="1px" >
        <Heading
          p="10px"
          bg="#fff8e9"
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
<SimpleGrid templateColumns="400px auto" w="70%" gap="10px" >
         
            <FormLabel fontSize="sm">Card Type</FormLabel>
            <Select size="xs" placeholder="Select Card" name="card_type">
              <option value="Visa">Visa</option>
              <option value="RuPay">RuPay</option>
              <option value="MasterCard">MasterCard</option>
            </Select>
         
            <FormLabel fontSize="sm">Credit Card Number</FormLabel>
            <Input size="xs" placeholder="Credit Card Number" name="name" type="number" />
       
            <FormLabel fontSize="sm">Expiration Date</FormLabel>
            <HStack> <Select maxW="70px" size="xs"><option></option> {Array(12)
                      .fill("")
                      .map((_, i) => <option key={shortid()} value={i+1}>{i+1}</option>)}</Select>
                      <Select size="xs"> <option></option>{Array(10)
                      .fill("")
                      .map((_, i) => <option key={shortid()} value={i+ currentYear}>{i+ currentYear}</option>)}</Select>
                     
                      </HStack>
           
         
            <FormLabel fontSize="sm">Security Code</FormLabel>
            <Input size="xs" type="password" maxLength="3" minLength="3" className="Inputbox" name="cvv"  />
          < Text></Text> <Image src={security} alt="security code" /></SimpleGrid>
          </FormControl>
        </Box>
      </Box>

      <Box id="t3">
        <Image src={signup}alt="signup"/>
    <Checkbox size="sm" >When you sign up for email, you'll get exclusive coupons, sale
          notifications, and product ideas.(i)</Checkbox>
          <Text as="u">Privacy Policy</Text>
        <Text id="five">
          
        </Text>
        <br />
        <br />
      </Box>
      <Flex justify="space-between">
        <Box>
      <Text fontSize="sm">By clicking the "Place order" button, you acknowledge that your order will be processed and fulfilled by</Text>
      <Text fontSize="sm"> 
<u>FedEx Cross Border</u> and you agree to <u>FedEx Cross Border Terms and Conditions</u> and <u>Privacy Policy</u> .</Text></Box>
      <Button type="submit" color="white" bg="#81a555" size="sm" borderRadius="3px">
        PLACE ORDER {">>"}
      </Button>
      </Flex>
      <Box className="paydown">
        <Heading color="rgb(12,12,12)" font-size="25px" font-weight="bold">
        
          Customer Testimonials:
        </Heading>

        <hr />
      </Box>
      <Flex gap="5px" bg="antiquewhite">
        <Box>
          <Image height="77px" width="70px" src={australia} />
        </Box>
        <VStack justify="space-around">
          <Heading size="xs">Catherine</Heading>
          <Heading size="xs">Australia</Heading>
        </VStack>
       
      </Flex>
      <Box className="ptag">
        <Text>
          "I received my item today and I am just emailing to say how pleased I
          am with your service. I am thrilled with the coat I ordered, a coat I
          cannot buy in Australia. The price was fair and I received the item
          within 10 days!" Thank you for excellent service."Christine
        </Text>
      </Box>
      <Flex gap="5px" bg="antiquewhite">
        <Box className="candaimage">
          <Image
            height="67px"
            width="70px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokZpLAQZ4TnOZ6kmzqxYURhciBvNAa1GAd2Xr8ygiVbBZ8vsv"
          />
        </Box>
        <VStack justify="space-around">
        <Heading size="xs">Christine</Heading>
        <Heading size="xs">Mississauga, ON</Heading>
        </VStack>
        <Box className="ptag">
        <Text mt="10px" fontSize="xs" ml="100px">"I'm very impressed by the level of dedication Overstock.com has for its customers."</Text>
        </Box>
      </Flex>

      <Box className="downtag">View all customer testimonials-</Box>
      <Box className="downMenu">
        <Box className="downMenu1">Return Policy</Box>
        <Box className="downMenu1">Contact Customer Care</Box>
        <Box className="downMenu1">FAQ</Box>

        <Box className="downMenu1">Privacy Policy</Box>

        <Box className="downMenu1">Site User Term & condition</Box>
      </Box>

      <hr />
      <Box>© 2021 Overstock.com All Rights Reserved</Box>
    </Box>
  );
};

export default Checkout;
