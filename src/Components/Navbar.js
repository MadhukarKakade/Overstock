import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";

import { APIContext } from "../Context/APIDataContext";
import { AiOutlineUser } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { GrFavorite, GrCart } from "react-icons/gr";
import { HiOutlineShoppingBag } from "react-icons/hi";

import {
  Box,
  Flex,
  Vstack,
  Input,
  HStack,
  Text,
  InputGroup,
  InputRightElement,
  Avatar,
  Center,
  VStack,
  Image,
  Circle,
  Badge,
  Divider,
} from "@chakra-ui/react";
const cartData = [];
const nav = [
  "Furniture",
  "Rugs",
  "Decor",
  "Bedding",
  "Home Improvement",
  "Kitchen",
  "Outdoor",
  "Lighting",
  "Kids & Baby",
  "More",
];
const Navbar = () => {
  const { setUrlRoute, cartData } = useContext(APIContext);
  return (
    <Box>
      <HStack p="2px 20px">
        <Box>Ships to:</Box>
        <HStack>
          <Avatar
            borderRadius="full"
            src="https://ak1.ostkcdn.com/img/mxc/intFlag_IN.gif"
            alt="indiaflag"
            size="xs"
          />
          <Box>INDIA</Box>
        </HStack>
      </HStack>
      <Box border="0.1px solid  rgb(220,220,220)" />
      <Flex justify="space-between" alignItems="center" p="15px 20px">
        <Box>
          <Link to="/">
            <Image w="75px" src={logo} alt="logo" />
          </Link>
        </Box>
        <HStack>
          <InputGroup>
            <InputRightElement
              bg="red"
              children={<BiSearch color="white" size="25px" />}
            />
            <Input
              borderColor="black"
              w="1200px"
              type="text"
              placeholder="Search...everything you find ship for free"
            />
          </InputGroup>
        </HStack>

        <HStack spacing="25px" fontSize="12px" lineHeight="1px">
        <Link to="/login">
          <VStack>
            
              <AiOutlineUser size="25px" />
              <Text>Account</Text>
           
          </VStack>
          </Link>
          <Link to="/login">
          <VStack>
          
            <GrFavorite size="25px" />
            <Text>Lists</Text>
           
          </VStack>
          </Link>
          <Link to="/cart">
            
            <VStack position="relative" fontSize="12px">
              <GrCart size="25px" />
              {cartData.length && (
                <Circle
                  position="absolute"
                  top="-15px"
                  right="-10px"
                  bg="tomato"
                  color="white"
                  size="20px"
                ></Circle>
              )}
              <Text>Cart</Text>
            </VStack>
          </Link>
        </HStack>
      </Flex>
      <Box border="0.1px solid  rgb(220,220,220)  " />
      <HStack
        pos="relative"
        justifyContent="space-between"
        fontWeight="500"
        p="2px 10px"
      >
        {nav.map((text, i) => (
          <Link key={i} to="/products">
            <Text onClick={() => setUrlRoute(text.toLowerCase())}>{text}</Text>
          </Link>
        ))}
        <Text color="gray.400" fontWeight="300">
          |
        </Text>
        <Text color="red">Sales & Deals</Text>
      </HStack>
      <Box border="0.1px solid rgb(220,220,220) " />
    </Box>
  );
};

export default Navbar;
