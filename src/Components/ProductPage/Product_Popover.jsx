import { Box, HStack,Button,Image, Heading, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Select, SimpleGrid, Text, Portal, useDisclosure } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { shortID } from '../short_key.generator';
import { StarIcon } from "@chakra-ui/icons";
import { postData } from '../../api';
import { useLocation } from 'react-router-dom';
const Product_Popover = ({product,enable,setEnable}) => {
  const initRef = useRef(null);
  const [quantity,setQuantity]=useState(1)
  const { isOpen, onToggle, onClose } = useDisclosure()
 
  const location = useLocation();

  const handleAddtoCart=(product_id)=>{
    const route = location.pathname.replace("/products", "");
    const data={product_id,quantity,route}
    postData("/cart",data).then((res)=>{console.log(res)})
   }
  return (
    <Popover closeOnBlur={false} initialFocusRef={initRef}>
    {({ isOpen, onClose }) => (
      <Box>
        <PopoverTrigger >
          <Button onMouseEnter={()=>setEnable(product.id)}>Click to {enable==product.id &&isOpen? "Hide" : "Details"}</Button>
        </PopoverTrigger>
        {enable==product.id &&<Portal>
          <PopoverContent w="800px" m="5px" borderWidth="2px">
            <PopoverCloseButton alignSelf="end" />
            <PopoverArrow bg="pink.500" size="xl" zIndex={10} />
            <PopoverBody bg="white">
              <HStack p="20px">
                <Box>
                  <Box>
                    <Image
                      w="full"
                      src={product.product_image}
                      alt={product.product_name}
                    />
                  </Box>
                </Box>

                <SimpleGrid spacing="15px" p="10px">
                  <Text>{product.product_name}</Text>
                  <Heading  fontSize="22px" color="red">
                    {product.Price}
                  </Heading>
                  <Box display="flex" mt="2" alignItems="center">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <StarIcon
                        key={shortID()}
                          color={i < 2 ? "orange.400" : "gray.300"}
                        />
                      ))}
                    <Box
                      as="span"
                      ml="2"
                      color="gray.600"
                      fontSize="sm"
                    >
                      {product._customer_ratings}
                    </Box>
                    <Text></Text>
                  </Box>
                  <Text fontSize="12px" w="400px">
                    Open up your room and simplify getting ready in
                    the morning with this large mirror. Thanks to its
                    versatile design, this mirror is freestanding with
                    the included U-shaped bracket, and can also be
                    leaned against the wall or hung on the wall
                  </Text>
                  <Select placeholder="Select option" w="300px">
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
                      <Select onChange={(e)=>setQuantity(e.target.value) } value={quantity}>
                        {Array(20)
                          .fill(0)
                          .map((qunt, i) => (
                            <option  key={shortID()} value={i+1}>
                              Qty. {i + 1}
                            </option>
                          ))}
                      </Select>
                      <Button
                        bg="blackAlpha.800"
                        color="white"
                        leftIcon={
                          <AiOutlineShoppingCart fontSize="25px" />
                        }
                        mt="20px"
                        w="full"
                        _hover={{ bg: "blackAlpha.900" }}
                        onClick={() => handleAddtoCart(product.product_id)}
                      >
                        Add to Cart
                      </Button>
                    </HStack>
                  </Box>
                </SimpleGrid>
              </HStack>
            </PopoverBody>
          </PopoverContent>
        </Portal>}
      </Box>
     )} 
  </Popover>
  )
}

export default Product_Popover