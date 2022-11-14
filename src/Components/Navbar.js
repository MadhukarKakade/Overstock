import { useContext,useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";

import { APIContext } from "../Context/APIDataContext";
import { AiOutlineUser,AiOutlineDown,AiOutlineUp } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { GrFavorite, GrCart } from "react-icons/gr";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RiLock2Fill } from "react-icons/ri";
import {
  Box,
  Flex,
 
  Input,
  HStack,
  Text,
  InputGroup,
  InputRightElement,
  Avatar,

  VStack,
  Image,
  Circle,
  
  Button,
  CloseButton,
} from "@chakra-ui/react";

//const cartData = [];
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
  const [addTag,setHide]=useState({hide:true,delete:false})
 
  return (
    <Box>
      <HStack p="5px" color="white" bg="blackAlpha.800" display={addTag.delete?"none":"flex"} justifyContent="center" alignItems={addTag.hide?"center":"flex-start"}>
        
        <Box fontSize="12px" >
          <HStack cursor="pointer" alignItems="center" onClick={()=>setHide({...addTag,hide:!addTag.hide})}>
          <Text  display="inline" >
            Sign up to receive our latest deals and get a 10% off coupon.
            
          </Text>
         {addTag.hide?<AiOutlineDown fontSize="16px" />:<AiOutlineUp/>} 
          </HStack>
          <Box p="10px 0px" display={addTag.hide?"none":"block"}>
            <InputGroup  >
              <Input bg="white" color="black" type="email"  placeholder=" Enter email address" />
              <InputRightElement w="80px">
                <Button  variant="solid" colorScheme="telegram"> Sign up</Button>
              </InputRightElement>
            </InputGroup>

            <Text p="10px 0px">
              Terms & Conditions | Privacy Policy | *You can unsubscribe at any
              time
            </Text>
          </Box>
          
        </Box>
        <CloseButton  onClick={()=>setHide({...addTag,delete:!addTag.delete})}/>
      </HStack>
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
              w="1100px"
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
                <Text
                  position="absolute"
                  top="-10px"
                  right="10px"
                  color="tomato"
                  fontWeight="600"
                  fontSize="10px"
                >{cartData.length}</Text>
              )}
              <Text>Cart</Text>
            </VStack>
          </Link>
        </HStack>
        <Link to="/checkout">  <Button leftIcon={<RiLock2Fill />} bg="black" colorScheme="blackAlpha">
          Check out
        </Button>
        </Link>
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
            <Text onClick={() => setUrlRoute("/"+text.toLowerCase())}>{text}</Text>
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
