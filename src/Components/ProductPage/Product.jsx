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
  useDisclosure,
} from "@chakra-ui/react";


import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { shortID } from "../short_key.generator";
import Pagination from "./Pagination";
import { getData, postData } from "../../api";
import Loading from "../Loading";
import { useLocation } from "react-router-dom";
import Product_Popover from "./Product_Popover";
import { StarIcon } from "@chakra-ui/icons";
{
  /* <AiFillStar fontSize="16px" color="#81E6D9" /> */
}
let col;
const Product = () => {
  // const enable = useRef();

  const { setCartData, setFavoriteData, favoriteData } = useContext(APIContext);
  const [productsData, setProductsData] = useState([]);
  const [loading ,setLoading] =useState(null)
  const [totalPage, setTotalPage] = useState();
  const location = useLocation();
  //console.log(location)
  const [page,setPage] =useState(1)
 

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
     return(el.product_id===product.product_id)
      
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
       product.product_name&& <Box  key={shortID()} borderWidth="2px" fontSize="12px">
          <Box pos="relative">
            {col=favoriteData.some(function(el) {
   return (el.product_id===product.product_id)
              
            })
            }
            
            <Circle
              size="30px"
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
         <Product_Popover product={product}/>
          </VStack>
        </Box>
      ))}
    </SimpleGrid>
     <Center m="20px"><Pagination page={page} setPage={setPage} totalPage={totalPage}/></Center>
     </Box>
  );
};

export default Product;
