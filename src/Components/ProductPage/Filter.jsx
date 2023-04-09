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
  RadioGroup,
  HStack,
  Badge,
  Circle,
  Code,
} from "@chakra-ui/react";
import { useState, useContext, useEffect } from "react";
import { shortID } from "../short_key.generator";
import { AiOutlineUser, AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { RxCross2 } from "react-icons/";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { CloseIcon } from "@chakra-ui/icons";

const Filter = ({ filterData }) => {
  const [filterObj, setFilterObj] = useState({});
  const [show, setShow] = useState(null);
  // const params=useParams()
  // console.log(params)
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  // const [searchObject, setSearchObject] = useState({});
  // const filterData = [];

  const handleShow = (id) => {
    show === id ? setShow(null) : setShow(id);
  };
  const [value, setValue] = useState("1");

  const handleFilter = (filterKey, name) => {
    const newSearchObj = { ...filterObj };
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

    setSearchParams(newSearchObj);
    setFilterObj(newSearchObj);
  };

  const removeAllFilter=()=>{
    setSearchParams({});
    setFilterObj({});
  }
  console.log(filterObj);
  useEffect(() => {
    const searchParamsObject = {};
    for (let [key, value] of searchParams.entries()) {
      if (searchParamsObject[key]) {
        searchParamsObject[key].push(value);
      } else {
        searchParamsObject[key] = [value];
      }
    }
    setFilterObj(searchParamsObject);
  }, []);
  return (
    <Flex direction="column" gap="10px" pt="10px" pos="sticky" top="120px" >
      <HStack justify="space-between"><Heading size="xsm">Filtered By:</Heading><Button variant="ghost" size="sm" onClick={removeAllFilter}  rightIcon={<CloseIcon boxSize="10px" ml="2px" />}>Clear All</Button></HStack>
      <HStack wrap="wrap" gap="5px"  >
        {Object.keys(filterObj).map((heading) =>
          filterObj[heading].map((query) => (
            <Button
            ml="5px"
              size="sm"
             borderColor="brown"
              borderRadius="20px"
              variant="outline"
              onClick={()=>handleFilter(heading,query)}
              rightIcon={<CloseIcon boxSize="10px" ml="2px" />}
            >
              {heading.includes("ratings") ? "Rating-" : ""}{" "}
              {query.charAt(0).toUpperCase() + query.slice(1)}
            </Button>
          ))
        )}
      </HStack>
    
      <VStack alignItems="flex-start" gap="10px">
        
        {filterData.map((operation, i) =>
          Object.keys(operation).map((filter, i) => (
            <Box key={shortID()} w="full">
              <Box borderWidth="1px"  mb="10px"/>
              <HStack cursor="pointer" justifyContent="space-between" pl="5px" onMouseEnter={() => handleShow(filter)} >
                <Heading  size="sm">
                  {filter.split("_").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                </Heading>
                {show === filter ? <AiOutlineUp /> : <AiOutlineDown />}
              </HStack>
             
              {/* <Box
                display={show === filter ? "block" : "none"}
                mb="5px"
                borderWidth="1.5px"
                bg="blue"
              /> */}
              <Box>
                <VStack
                  display={show === filter ? "flex" : "none"}
                  alignItems="flex-start"
                >
                  <Box border="2px solid black" w="full" mt="5px"/>
                  {Object.keys(operation[filter]).map((key, i) =>
                    filter !== "Types" ? (
                      <Checkbox
                        key={shortID()}
                        size="lg"
                        isChecked={filterObj[filter]?.includes(key)}
                        // isDisabled={filter === "Quantity" && operation[filter][key] > 0}
                        value={key}
                        onChange={() => handleFilter(filter, key)}
                      >
                        {filter === "_colors" ? (
                          <Badge
                            alignItems="center"
                            p="10px"
                            border=".5px solid grey"
                            bg={key}
                            display="inline-block"
                            borderRadius="50%"
                          />
                        ) : (
                          ""
                        )}{" "}
                        {key.charAt(0).toUpperCase() + key.slice(1)}{" "}
                        <Code color="gray" bg="white">
                          ({operation[filter][key]})
                        </Code>
                      </Checkbox>
                    ) : (
                      <Radio key={shortID()} value={key}>
                        {key}( {operation[filter][key]} )
                      </Radio>
                    )
                  )}
                </VStack>
              </Box>
              
            </Box>
            // console.log(filter)
          ))
        )}
        
      </VStack>
      <Box borderWidth="1px" mb="10px"/>
    </Flex>
  );
};

export default Filter;
