import {
  Container,
  Heading,
  Box,
  HStack,
  Select,
  Image,
  Text,
  Button,
  VStack,

} from "@chakra-ui/react";
import { APIContext } from "../../Context/APIDataContext";
import {useContext}from "react";
import axios from "axios";
const quntOption = new Array(21).fill(0);
const Shopping_Cart = () => {
  const {cartData,setCartData}=useContext(APIContext)
  const deleteItem = async ( id) => {
    const url = "http://localhost:8000/cart/";
    
      console.log(id)
     let res=await axios.delete(`${url}/${id}`)
    
    let data = await axios.get(url);
   setCartData(data.data) 
  };
  return (
    <Container maxW='container.lg' >
   
      {/* Append data under the box */}
     {cartData?.map(iteme =>(
      <Box>
      <HStack
        borderWidth="1px"
      
        alignItems="flex-start" 
        p="20px"
        w='800px'
        gap="10px"
      >
        
        <Box>
          <Image src={iteme.productImage} alt={iteme.productName} />
        </Box>
        <VStack alignItems="flex-start" gap="20px" fontSize="14px">
          <Box>
            <Heading size="sm">{iteme.productName}</Heading>

            <Text>White Base & Natural Maple Top</Text>
          </Box>

          <Box fontSize="16px">
            {/* <Text as="s">{+(iteme.Price)} </Text> */}
            <Text pl="10px" display="inline" color="red">
              20% Savings
            </Text>
            <Heading size="sm" color="tomato">{iteme.Price}</Heading>
          </Box>

          <Box>
            <Text>Quantity : </Text>
            <Select w="120px">
              {quntOption.map((qunt, i) => (
                <option key={200 + i} value={i}>
                  {i} {i === 0 ? "Remove" : ""}
                </option>
              ))}
            </Select>
          </Box>
          <HStack>
          
            <Button variant="link" onClick={()=>{deleteItem(iteme.id)}}>Remove</Button>
            <Button pl="20px" colorScheme="pink" variant="link">
              Save For Later
            </Button>
          </HStack>
        </VStack>
     
      </HStack>
    
      </Box>
))}
    </Container>
  );
};

export default Shopping_Cart;
