import { Box, Image, Text, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import {Link } from "react-router-dom"

const Offers = ({ offers, colSizes }) => {
  console.log( offers);
  return (
    
    <SimpleGrid columns={colSizes} spacing={10} textAlign="center">
      {offers.map((offer, i) => (
        <Box key={i + 400}>
         <Link to="/products">
          <Image src={offer.image} />
          <Text>{offer.title}</Text>
          </Link>
        </Box>   
      ))}
    </SimpleGrid>
  );
};

export default Offers;
