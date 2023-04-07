import {
  SimpleGrid,
  Container,
  Heading,
  Text,
  Box,
  Image,
  VStack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Banner from "../Components/Home_Page/Banner";
import Offers from "../Components/Home_Page/Offers";
import { banners, offers } from "../Components/Images";
import { Link } from "react-router-dom";
import { shortID } from "../Components/short_key.generator";
const offer = {
  BrandsWeLove: [
    "https://ak1.ostkcdn.com/img/mxc/110822-DysonLogo.svg?imwidth=1920",
    "https://ak1.ostkcdn.com/img/mxc/110822-KeurigLogo.svg?imwidth=1920",
    "https://ak1.ostkcdn.com/img/mxc/110822-SharkLogo.svg?imwidth=1920",
    "https://ak1.ostkcdn.com/img/mxc/110822-CasperLogo.svg?imwidth=1920",
    "https://ak1.ostkcdn.com/img/mxc/110822-NinjaLogo.svg?imwidth=1920",
    "https://ak1.ostkcdn.com/img/mxc/110822-CuisinartLogo.svg?imwidth=1920",
    "https://ak1.ostkcdn.com/img/mxc/110822-CalphalonLogo.svg?imwidth=1920",
    "https://ak1.ostkcdn.com/img/mxc/110822-HamiltonBeachLogo.svg?imwidth=1920",
  ],
  FreshFindsInEachCategory: [
    {
      image:
        "https://ak1.ostkcdn.com/img/mxc/11192021-CatSilo-Furniture.png?imwidth=1920",
      title: "Furnituer",
    },
    {
      image:
        "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-AreaRugs.png?imwidth=1920",
      title: "Area Rugs",
    },
    {
      image:
        "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-BedBath.png?imwidth=1920",
      title: "Bedding",
    },
    {
      image:
        "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Decor.png?imwidth=1920",
      title: "Home Decor",
    },
    {
      image:
        "https://ak1.ostkcdn.com/img/mxc/CatSilo-Window-040721.jpg?imwidth=1920",
      title: "Window Treattments",
    },
    {
      image:
        "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Kitchen.png?imwidth=1920",
      title: "Kitchen",
    },
    {
      image:
        "https://ak1.ostkcdn.com/img/mxc/11192021-CatSilo-Outdoor.png?imwidth=1920",
      title: "Outdoor",
    },
    {
      image:
        "https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-HomeImp.jpg?imwidth=1920",
      title: "Home Improvement",
    },
    {
      image:
        "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Storage.png?imwidth=1920",
      title: "Storage",
    },
    {
      image:
        "https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-Mattresses.jpg?imwidth=1920",
      title: "Mattresses",
    },
    {
      image:
        "https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Lighting.png?imwidth=1920",
      title: "lighting",
    },
    {
      image:
        "https://ak1.ostkcdn.com/img/mxc/CatSilo-AllDeals-040721.jpg?imwidth=1920",
      title: "Shop All Deals",
    },
  ],
};
const trading = [
  "Mugs",
  "Blankets",
  "Cookie Cutters",
  "Air Fryers",
  "Kitchen Mixers",
  "Lamps",
  "Towels",
  "Tree Skirts",
  "Garland",
  "Fall Wreaths",
  "Christmas Trees",
  "Fireplaces",
];

const Home = () => {
  //console.log(banners);
  return (
    <VStack w="80%" m="auto" spacing="50px">
      <Banner banner={banners[0]} />

      <Heading size="lg">Limited-Time Deals</Heading>

      <Offers offers={offers} colSizes={[2, 3, 5, 6]} />
      <Heading size="lg">Brands We Love</Heading>
      <SimpleGrid columns={[1, 2, 2, 3]} spacing={10}>
        {offer.BrandsWeLove.map((offer, i) => (
          <Box key={shortID()}  _hover={{borderWidth:"2px"}}>
            <Link to="">
              <Image src={offer} />
            </Link>
          </Box>
        ))}
      </SimpleGrid>
      <Banner banner={banners[1]} />
      <Heading size="lg">Fresh Finds In Each Category</Heading>
      <Offers offers={offer.FreshFindsInEachCategory} colSizes={[2, 3, 5, 6]} />
      <Banner banner={banners[2]} />
      <Button bg="black" colorScheme="blackAlpha">
        See All Styles
      </Button>
      <Heading>Trending Searches</Heading>
      <SimpleGrid columns={[1, 2, 2, 3]} gap="15px" pb="50px">
        {trading.map((trade, i) => (
          <Button h="50px" w="400px" key={shortID()}>
            {trade}
          </Button>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default Home;
