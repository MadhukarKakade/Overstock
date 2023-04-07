import {
  Box,
  Heading,
  Text,
  VStack,
  Checkbox,
  Flex,
  
  Radio,
  PopoverAnchor,
  Button,
  RadioGroup,HStack
} from "@chakra-ui/react";
import { useState, useContext, useEffect } from "react";
import { shortID } from "../short_key.generator";
import { AiOutlineUser,AiOutlineDown,AiOutlineUp } from "react-icons/ai";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

const Filter = ({filterData}) => {
  const [filterObj, setFilterObj] = useState({});
  const [show,setShow]=useState(null)
// const params=useParams()
// console.log(params)
const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  // const [searchObject, setSearchObject] = useState({});
  // const filterData = [];
 

  

  
 
 const handleShow=(id)=>{
  show===id?setShow(null):setShow(id)
 }
  const [value, setValue] = useState("1");

  const handleFilter = (filterKey, name) => {
    const newSearchObj = {...filterObj };
    if (newSearchObj[filterKey] == undefined) {
      newSearchObj[filterKey] = [name];
    } else {
      const checkPresence = newSearchObj[filterKey].includes(name);
      if (checkPresence) {
        newSearchObj[filterKey].splice(
          newSearchObj[filterKey].indexOf(name),
          1
        );
      } else {
        newSearchObj[filterKey].push(name);
      }
    }
  
   // console.log(newSearchObj,"****")
  
    setSearchParams(newSearchObj)
    setFilterObj(newSearchObj);
  };
  console.log(filterObj)
  useEffect(()=>{
    const searchParamsObject = {};
    for (let [key, value] of searchParams.entries()) {
      if (searchParamsObject[key]) {
        searchParamsObject[key].push(value);
      } else {
        searchParamsObject[key] = [value];
      }
    }
    setFilterObj(searchParamsObject);
  },[])
  return (
    <Flex direction="column" gap="10px" pt="10px">
      <Heading size="xsm">Filtered By:</Heading>
      <Box borderWidth="1px" />
      <VStack alignItems="flex-start" gap="10px">
        {filterData.map((operation, i) =>
          Object.keys(operation).map((filter, i) => (
            <Box key={shortID()} w="full">
              <HStack justifyContent="space-between" > <Heading  onClick={()=>handleShow(filter)} size="sm">{filter.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</Heading>{show===filter?<AiOutlineUp/>:<AiOutlineDown />}</HStack>
              
              <Box display={show===filter?"block":"none"}  mb="5px"  borderWidth="1.5px" bg="blue" />
              <Box>
                <VStack display={show===filter?"flex":"none"} alignItems="flex-start">
              
                  {Object.keys(operation[filter]).map((key, i) => (
                    
                    filter !== "Types" ? 
                    <Checkbox
                    key={shortID()}
                      size="sm"
                isChecked= {filterObj[filter]?.includes(key)}
                     // isDisabled={filter === "Quantity" && operation[filter][key] > 0}
                      value={key}
                      onChange={() => handleFilter(filter, key)}
                    >
                      {filter === "Quantity" && key > 0 ? "" : key} (
                      {operation[filter][key]} )
                
                     
                    </Checkbox>: <Radio  key={shortID()} value={key}>{key} 
                    ( {operation[filter][key]} )</Radio>
                      
                  ))}
                 
                </VStack>
                </Box>
                
                 
                 
                
              
            </Box>
            // console.log(filter)
          ))
        )}
       
      </VStack>
    </Flex>
  );
};

export default Filter;
