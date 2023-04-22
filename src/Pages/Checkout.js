import React from "react";
import logo from "../Images/logo.png";
import fedex from "../Images/Checkout/fedex.jpg";
import {
  Box,
  Flex,
  FormLabel,
  HStack,
  Heading,
  Image,
  Input,
  Select,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
const Checkout = () => {
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
      <div class="returnAnchor_div">
        <a class="returnAnchor" href="http://">
          {" "}
          {"<< "}Back to Cart
        </a>
      </div>
      <Flex justify="space-between" gap="10px">
        <div class="addressBox1" >
        
            <Heading p="10px" bg="#fff8e9" size="sm">Billing Address</Heading>
       
          <SimpleGrid templateColumns="150px 350px" gap="15px" fontSize="sm" w="50%" >
            <Text fontWeight="bold">EMAIL</Text>
            <Input size="xs"  id="email" type="text" required />
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
              class="form-select countrySelect"
              id="country"
              aria-FormLabel="Default select example"
              required
            >
              <option selected>Select Country</option>
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
        </div>
        <div class="addressBox2">
        <Heading p="10px" bg="#fff8e9" size="sm">Shipping Address</Heading>
      
        <SimpleGrid templateColumns="150px 350px" gap="15px" fontSize="sm" w="50%">
            <Text  fontWeight="bold">EMAIL</Text>
            <Input size="xs" class="topEle" id="email" type="text" required />
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
            <Text></Text>
            <Text >
                (We cannot ship to PO box, APO or FPO addresses.)
              </Text>
            <Text fontWeight="bold">Country</Text>
            <Select
            
              id="country"
              aria-FormLabel="Default select example"
              required
            >
              <option selected>Select Country</option>
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
         
        </div>
      </Flex>

      <div class="paymentsItemInfo">
        <div></div>
        <div class="methodShipping">
          <div class="headShipping">
            <Text>Shipping Method</Text>
          </div>
          <div class="shippingInfo">
            {/* <!-- <form class = "shippingDiv1"> --> */}

            {/* <!-- </form> --> */}
            <div class="shippingDiv2">
              <div>
                <Input size="xs" type="radio" name="shippingMethod" value="standard" />
                <span>
                  <b>International Standard</b> - 11785.06 INR
                </span>
                <Text class="green">Estimated Delivery Date: 2022-01-05</Text>
              </div>
              <div>
                <Input size="xs" type="radio" name="shippingMethod" value="express" />
                <span>
                  <b>International Express</b> - 14405.21 INR
                </span>
                <Text class="green">Estimated Delivery Date: 2021-12-31</Text>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="paymentUserDetails">
        <div class="payment_divHead">
          <Text>Payment Information</Text>
        </div>
        <div class="paymentDetails">
          <div class="imgDiv">
            <img src="https://e7.pngegg.com/pngimages/27/252/png-clipart-mastercard-visa-credit-card-paypal-logo-mastercard-text-display-advertising.png" />
          </div>
          <div class="cardInfo">
            <div class="cardQuery">
              <Text>Card Type</Text>
              <Text>Cardholder Name</Text>
              <Text class="expcvv_text">Expiry</Text>
              <Text class="expcvv_text2">CVV</Text>
            </div>
            <div class="cardQueryResult">
              <select class="Inputbox" name="card_type" id="card_type" required>
                <option value="">Select Card</option>
                <option value="Visa">Visa</option>
                <option value="RuPay">RuPay</option>
                <option value="MasterCard">MasterCard</option>
              </select>
              <Input size="xs"
                type="text"
                class="Inputbox"
                name="name"
                id="name"
                required
              />
              <Input size="xs"
                type="date"
                class="Inputbox"
                name="exp_date"
                id="exp_date"
                required
              />
              <Input size="xs"
                type="password"
                class="Inputbox"
                name="cvv"
                id="cvv"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Checkout;
