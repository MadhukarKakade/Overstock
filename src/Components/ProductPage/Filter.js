import {
  Box,
  Heading,
  Text,
  VStack,
  Checkbox,
  Flex,
  Circle,
  Divider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Radio,
  PopoverAnchor,
  Button,
  RadioGroup,HStack
} from "@chakra-ui/react";
import { useState, useContext } from "react";

import { AiOutlineUser,AiOutlineDown,AiOutlineUp } from "react-icons/ai";

const Filter = ({ productsData, setData }) => {
  const [show,setShow]=useState(null)
  const filterData = [];

  for (let key in productsData[0]) {
    if (
      !(
        key === "id" ||
        key === "offer_timline" ||
        key === "productImage" ||
        key === "productName" ||
        key === "offer_timline" ||
        key === "product_Id" ||
        key === "Pricie" ||
        key === "Customer_Ratings"
      )
    ) {
      filterData.push({ [key]: {} });
    }
  }

  productsData.forEach((product) => {
    let i = 0;
    Object.keys(product).forEach((key) => {
      if (
        !(
          key === "id" ||
          key === "offer_timline" ||
          key === "productImage" ||
          key === "productName" ||
          key === "offer_timline" ||
          key === "product_Id"||
          key === "Pricie" ||
          key === "Customer_Ratings"
        )
      ) {
        const obj = filterData[i][key];
        i++;
        // console.log(obj)
        const ele = product[key];
        if (obj[ele] === undefined) {
          obj[ele] = 1;
        } else {
          obj[ele]++;
        }
      }
    });
  });
  // console.log(filterData);
  // filterData.map((operation, i) => {
  //   Object.keys(operation).map((filter, i) => {
  //     //  console.log(filter)
  //     const block = operation[filter];
  //     Object.keys(block).map((key, i) => {
  //       // console.log(key,block[key])
  //     });
  //   });
 // });
 const handleShow=(id)=>{
  show===id?setShow(null):setShow(id)
 }
  const [value, setValue] = useState("1");
  return (
    <Flex direction="column" gap="10px" pt="10px">
      <Heading size="xsm">Filtered By:</Heading>
      <Box borderWidth="1px" />
      <VStack alignItems="flex-start" gap="10px">
        {filterData.map((operation, i) =>
          Object.keys(operation).map((filter, i) => (
            <Box key={400 + i} w="full">
              <HStack justifyContent="space-between" > <Heading  onClick={()=>handleShow(filter)} size="sm">{filter==="Quantity"? "Availabilty":filter.replace('_', ' ')}</Heading>{show===filter?<AiOutlineUp/>:<AiOutlineDown />}</HStack>
              
              <Box display={show===filter?"block":"none"}  mb="5px"  borderWidth="1.5px" bg="blue" />
              <RadioGroup>
                <VStack display={show===filter?"flex":"none"} alignItems="flex-start">
                 
                  {Object.keys(operation[filter]).map((key, i) => (
                    filter !== "Types" ? 
                    <Checkbox
                      size="sm"
                      isDisabled={filter === "Quantity" && operation[filter][key] > 0}
                      value={key}
                    >
                      {filter === "Quantity" && key > 0 ? "" : key} (
                      {operation[filter][key]} )
                    </Checkbox>: <Radio value={key}>{key} 
                    ( {operation[filter][key]} )</Radio>
                  ))}
                 
                </VStack>
                </RadioGroup>
                
                 
                 
                
              
            </Box>
            // console.log(filter)
          ))
        )}
       
      </VStack>
    </Flex>
  );
};

export default Filter;
