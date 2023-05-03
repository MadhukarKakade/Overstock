import React from "react";
import logo from "../Images/logo.png";
import fedex from "../Images/Checkout/fedexLogo.png";
import visa from "../Images/Checkout/visa.png";
import mastercard from "../Images/Checkout/mastercard.png";
import signup from "../Images/Checkout/signup.png";
import security from "../Images/Checkout/Security.gif";
import australia from "../Images/Checkout/australia.png";
import privacy_shield from "../Images/Checkout/privacy_shield.png";
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
  Divider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import shortid from "shortid";
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const Checkout = () => {
  const [value, setValue] = React.useState("1");

  return (
    <VStack width="70%" m="auto" p="10px" alignItems="stretch" gap="10px">
      <HStack justify="space-between" pl="40%">
        <Box justifySelf="center" ><Image w="100px" src={logo} alt="logo" /></Box>
        
        <Text fontSize="md" color="green.300"> You are using our secure server</Text>
      </HStack>
      <Divider border="2px solid  black"  size="lg" />
      <HStack justify="start">
        <Image w="150px" src={fedex} alt="fedex" />
        <Text fontWeight="bold" fontSize="xs">
          Secure checkout provided by FedEx International.
          <br />
          Your order total includes customs and taxes, if applicable.
        </Text>
      </HStack>
      <Box >
        <Link to="/cart"><Text as="u" fontSize="xs" fontWeight="bold">{"<< "}Back to Cart</Text></Link>
      </Box>
      <Flex justify="space-between" gap="20px">
        <Box  w="50%">
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
          <SimpleGrid
          
            templateColumns="150px auto"
            gap="15px"
        
            p="5px 10px"
            w="full"
            borderColor="gray"
            border="1px"
            fontWeight="bold"
           
          >
            <FormLabel  fontSize="sm" >Email</FormLabel>
            <Input size="xs" id="email" type="text" required />
            <FormLabel fontSize="sm" >First Name</FormLabel>
            <Input size="xs" id="firstName" type="text" required />
            <FormLabel fontSize="sm" >Last Name</FormLabel>
            <Input size="xs" id="lastName" type="text" required />
            <Text fontSize="sm" fontWeight={400} isRequired="false" required="false">Company</Text>
            <Input size="xs" id="company" type="text" isRequired="false" required="false"/>
            <FormLabel fontSize="sm">Tax ID</FormLabel>
            <Input size="xs" id="taxId" type="text" />
            <FormLabel fontSize="sm" >Address Line 1</FormLabel>
            <Input size="xs" id="address1" type="text" required />

            <FormLabel fontSize="sm">Address Line 2</FormLabel>
            <Input size="xs" id="address2" type="text" />
            <FormLabel fontSize="sm" >Country</FormLabel>
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
            <FormLabel fontSize="sm"ext >City</FormLabel>
            <Input size="xs" id="city" type="text" required />
            <FormLabel fontSize="sm">State</FormLabel>
            <Input size="xs" id="state" type="text" />
            <FormLabel fontSize="sm">Zip code</FormLabel>
            <Input size="xs" id="zipcode" type="text" />
            <FormLabel fontSize="sm" >Phone #</FormLabel>

            <Input size="xs" id="phone" type="text" required />
          </SimpleGrid>
          </FormControl>
        </Box>
        <Box className="addressBox2" w="50%">
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
            bg="antiquewhite"
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
                {" "}
                <Select maxW="70px" size="xs">
                  <option></option>{" "}
                  {Array(12)
                    .fill("")
                    .map((_, i) => (
                      <option key={shortid()} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                </Select>
                <Select size="xs">
                  {" "}
                  <option></option>
                  {Array(10)
                    .fill("")
                    .map((_, i) => (
                      <option key={shortid()} value={i + currentYear}>
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
                className="Inputbox"
                name="cvv"
              />
              <Text></Text> <Image src={security} alt="security code" />
            </SimpleGrid>
          </FormControl>
        </Box>
      </Box>

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
        >
          PLACE ORDER {">>"}
        </Button>
      </Flex>
      <Box >
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
        "I received my item today and I am just emailing to say how pleased I am
        with your service. I am thrilled with the coat I ordered, a coat I
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
            "I'm very impressed by the level of dedication Overstock.com has for
            its customers."
          </Text>
        </Box>
      </Flex>

      <Text as="u">View all customer testimonials</Text>
      </Box>
      <HStack justify="space-between">
        <Text  >Return Policy</Text>
        <Text >Contact Customer Care</Text>
        <Text >FAQ</Text>

        <Text >Privacy Policy</Text>

        <Text >Site User Term & condition</Text>
        </HStack>
  

      <Divider borderWidth="1px"/>
      <HStack justify="space-between"><Box>© 2021 Overstock.com All Rights Reserved</Box><Flex><Text fontSize="xs">We self-certify compliance with: </Text><Image src={privacy_shield} alt="Privacy Shield" /></Flex></HStack> 
    </VStack>
  );
};

export default Checkout;
