import { Box, Image, Text, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import {Link } from "react-router-dom"
import { shortID } from "../short_key.generator";

const Offers = ({ offers, colSizes }) => {
 // console.log( offers);
  return (
    
    <SimpleGrid columns={colSizes} spacing={10} textAlign="center">
      {offers.map((offer, i) => (
        <Box _hover={{borderWidth:"2px" ,padding:"5px"}}  key={shortID()}>
         <Link to="/products">
          <Image src={offer.image} />
          <Text color={"brown"}>{offer.title}</Text>
          </Link>
        </Box>   
      ))}
    </SimpleGrid>
  );
};

export default Offers;
