import { useState, useContext, useRef } from "react";
import { APIContext } from "../../Context/APIDataContext";
import axios from "axios";
import { GrFavorite, GrCart } from "react-icons/gr";
import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Badge,
  HStack,
  Button,
  PopoverTrigger,
  Popover,
  Portal,
  PopoverContent,
  PopoverCloseButton,
  PopoverBody,
  PopoverHeader,
  PopoverFooter,
  Select,
  VStack,
  PopoverArrow ,
 
  Circle
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { AiFillStar } from "react-icons/ai";
import {AiOutlineShoppingCart} from "react-icons/ai"
import { MdFavorite } from "react-icons/md";
{
  /* <AiFillStar fontSize="16px" color="#81E6D9" /> */
}
const Product = ({productsData}) => {
  // const enable = useRef();
  let  rating
  const initRef = useRef(null);
  const { setCartData, setFavoriteData, } = useContext(APIContext);
  const [enable, setIsVisible] = useState(false);
    const cart = async (id, route) => {
      const url = 'http://localhost:8080/' + route;
      let res = await axios.post(url, {
        product_Id: id,
      });
      let data = await axios.get(url);
      route == 'cart' ? setCartData(data.data) : setFavoriteData(data.data);
    };
  console.log(productsData);
  return (
    <SimpleGrid columns={[1, 2, 2, 3]} spacing="15px">
      {productsData?.map((product) => (
        <Box key={product.id + 1100} borderWidth="2px" fontSize="12px">
          <Box pos="relative">
            <Circle size='40px' bg='gray.400'  pos="absolute"  right= "20px"  top="10px" zIndex={4} > <MdFavorite  size="25px"   color="white"  /></Circle>
        
            <Image
              // pos="relative"
              w="full"
              src={product.productImage}
              alt={product.productName}
            />
            <Badge
             
              gap="4px"
              alignItems="center"
              pos="absolute"
              variant="solid"
              colorScheme="red"
              fontWeight="500"
              top="10px"
              zIndex={2}
            >
              {product.offer_timline}
            </Badge  >
           
          </Box>

          <Box position="relative" p="10px">
            <Heading size="sm" color="red">
              {product.Price}
            </Heading>
            { rating=Math.floor( Math.random() * (6 - 1) + 1) }
            <Box display="flex" mt="2" alignItems="center">
            
              {
              Array(5).fill("").map((m, i) => (
                  <StarIcon key={i} color={i < rating  ? "orange.400" : "gray.300"} />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {product.Customer_Ratings}
              </Box>
            </Box>
             
            <Text>{product.productName}</Text>
            <Popover closeOnBlur={false} initialFocusRef={initRef}>
              {({ isOpen, onClose }) => (
                <Box>
                  <PopoverTrigger>
                    <Button>Click to {isOpen ? "Hide" : "Details"}</Button>
                  </PopoverTrigger>
                  <Portal>
                    <PopoverContent  w="800px" m="5px" borderWidth="2px">
                    
                    <PopoverCloseButton  alignSelf="end"/>
                    <PopoverArrow bg='pink.500'size="xl" zIndex={10}/>
                      <PopoverBody bg="white">
                        <HStack  p="20px">
                          <Box>
                            <Box>
                              <Image
                                w="full"
                                src={product.productImage}
                                alt={product.productName}
                              />
                            </Box>
                          </Box>

                          <SimpleGrid spacing="15px" p="10px">
                            <Text>{product.productName}</Text>
                            <Heading fontSize="22px" color="red">
                              {product.Price}
                            </Heading>
                            <Box display="flex" mt="2" alignItems="center">
                              {Array(5)
                                .fill("")
                                .map((_, i) => (
                                  <StarIcon
                                    key={i}
                                    color={i < 2 ? "orange.400" : "gray.300"}
                                  />
                                ))}
                              <Box
                                as="span"
                                ml="2"
                                color="gray.600"
                                fontSize="sm"
                              >
                                {product.Customer_Ratings}
                              </Box>
                              <Text></Text>
                            </Box>
                            <Text fontSize="12px"  w="400px">
                              Open up your room and simplify getting ready in
                              the morning with this large mirror. Thanks to its
                              versatile design, this mirror is freestanding with
                              the included U-shaped bracket, and can also be
                              leaned against the wall or hung on the wall
                            </Text>
                            <Select placeholder="Select option"  w="300px">
                              <option value="option1">
                                Black-59×20 - INR 19,962.29 ​
                              </option>
                              <option value="option2">
                                Gold-65×22 - INR 18,682.33 ​
                              </option>
                              <option value="option3">
                                Mahogany-65×22 - INR 17,495.55
                              </option>
                              <option value="option3">
                                Silver-59×20 - INR 13,155.01
                              </option>
                              <option value="option3">
                                Silver-65×22 - INR 21,331.79
                              </option>
                              <option value="option3">
                                White-65×22 - INR 15,521.25
                              </option>
                            </Select>
                            <Box>
                              <Text>Quantity : </Text>
                              <HStack>
                                <Select>
                                  {Array(20)
                                    .fill(0)
                                    .map((qunt, i) => (
                                      <option key={200 + i} value={i}>
                                        Qty. {i + 1}
                                      </option>
                                    ))}
                                </Select>
                                <Button
                                 bg="blackAlpha.800"
                                 color="white"
                                  leftIcon={<AiOutlineShoppingCart fontSize="25px"/>}
                                  mt="20px"
                                  w="full"
                                  _hover={{ bg:"blackAlpha.900"}}
                                  onClick={() =>  cart(product.product_Id, 'cart')}
                                >
                                  Add to Cart
                                </Button>
                              </HStack>
                            </Box>
                            
                          </SimpleGrid>
                       
                        </HStack>
                      </PopoverBody>
                    </PopoverContent>
                  </Portal>
                  
                </Box>
              )}
            </Popover>
           
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default Product;
