import { useState, useContext, useRef, useEffect } from "react";
import { APIContext } from "../../Context/APIDataContext";
import axios from "axios";
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
  Select,
  PopoverArrow,
  Circle,
  Flex,
  VStack,
  Center,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { shortID } from "../short_key.generator";
import Pagination from "./Pagination";
import { getData } from "../../api";
import Loading from "../Loading";
import { useLocation } from "react-router-dom";
{
  /* <AiFillStar fontSize="16px" color="#81E6D9" /> */
}
let col;
const Product = () => {
  // const enable = useRef();

  let rating;
  const {urlRoute } = useContext(APIContext);
  const [productsData, setProductsData] = useState([]);
  const [loading ,setLoading] =useState(null)
  const [totalPage, setTotalPage] = useState();
  const location = useLocation();
  //console.log(location)
  const [page,setPage] =useState(1)
  const initRef = useRef(null);
  const { setCartData, setFavoriteData, favoriteData } = useContext(APIContext);
  const [enable, setEnable] = useState("");
  const cart = async ( route,product, method) => {
    const url =  'https://humdrum-town-8956-server-yo9e.vercel.app/'+ route;
    if (method === "post") {
      let res = await axios.post(url, product);
    //  console.log(res)
    }
    if(method==="delete"){
      //console.log(product)
      let res=  axios.delete(`${url}/${product}`)
    }
    let data = await axios.get(url);
    route === "cart" ? setCartData(data.data) : setFavoriteData(data.data);
  };
  
const handleFavour=(product,col)=>{
  let i;
  const check=favoriteData.some(function(el) {
        i=el.id
     return(el.product_Id===product.product_Id)
      
    })
    //console.log(check,i)
  check? cart("favorite",i,"delete"):cart( "favorite",product,"post")
}


   

useEffect(() => {
  // cart("cart");
  //   cart("favorite");
  setLoading(true)
  const route = location.pathname.replace("/products", "");
  const query=location.search
 const newParams={_page:page,_limit:9}
  getData(route,query,newParams).then(({totalCount,data})=> {
    setProductsData(data);
    const  totalpage=Math.ceil(totalCount / 9)
    setTotalPage(totalpage)
    setLoading(false)
   
  }).catch((err)=>{
    console.log(err)
    setLoading(false)
  })

  
}, [location.pathname,location.search,page]);
if (loading){
  return <Loading/>
}
   console.log( productsData);
  return (
    <Box>
    <SimpleGrid columns={[1, 2, 2, 3]} spacing="15px">
      {productsData?.map((product) => (
        <Box  key={shortID()} borderWidth="2px" fontSize="12px">
          <Box pos="relative">
            {col=favoriteData.some(function(el) {
   return (el.product_Id===product.product_Id)
              
            })
            }
            
            <Circle
              size="40px"
              bg="gray.400"
              pos="absolute"
              right="20px"
              top="10px"
              zIndex={4}
              cursor="pointer"
              color={col?"red":"white"}
              value={col}
              onClick={(e) => {
                handleFavour(product,e);
              }}
            >
              <MdFavorite
                size="25px"
               
               
              />
            </Circle>

            <Image
              // pos="relative"
              w="full"
              src={product.product_image}
              alt={product.product_name}
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
            </Badge>
          </Box>

          <VStack alignItems="start" gap="3px" position="relative" p="10px">
            <Heading size="sm" color="red">
              {product.price}
            </Heading>
            
            <Flex  gap="5px"  alignItems="center" justifyContent="start">
            <Box as="span" alignSelf="end" fontWeight={500}>{product._customer_ratings}</Box>
            <Box >
              {Array(5)
                .fill("")
                .map((m, i) => (
                  <StarIcon
                  m="0px" p="0px"
                  key={shortID()}
                    color={i < product._customer_ratings ? "orange.400" : "gray.300"}
                  />
                ))}
                </Box>
              <Box as="span" ml="10px" color="gray.600" fontSize="sm">
                ({product.total_ratings})
              </Box>
            </Flex>

            <Text>{product.product_name}</Text>
            <Popover closeOnBlur={false} initialFocusRef={initRef}>
              {({ isOpen, onClose }) => (
                <Box>
                  <PopoverTrigger>
                    <Button onMouseOver={()=>setEnable(product.id)}>Click to {enable==product.id&&isOpen ? "Hide" : "Details"}</Button>
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
                            <Heading fontSize="22px" color="red">
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
                                <Select>
                                  {Array(20)
                                    .fill(0)
                                    .map((qunt, i) => (
                                      <option  key={shortID()} value={i}>
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
                                  onClick={() => cart("cart",product,"post")}
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
          </VStack>
        </Box>
      ))}
    </SimpleGrid>
     <Center m="20px"><Pagination page={page} setPage={setPage} totalPage={totalPage}/></Center>
     </Box>
  );
};

export default Product;
