import { useContext, useEffect, useState } from "react";
import Filter from "../Components/ProductPage/Filter";
import Product from "../Components/ProductPage/Product";
import { Grid, GridItem, Box, Center } from "@chakra-ui/react";
import { APIContext } from "../Context/APIDataContext";
import Loading from "../Components/Loading";
import Pagination from "../Components/ProductPage/Pagination";
import { getData } from "../api";
import { useParams, useSearchParams } from "react-router-dom";
const Products_Page = () => {
  const [loading, setLoading] = useState(null);
  

  const [filterData, setFilterData] = useState([]);


  const params = useParams();

  const setFilter = (data) => {

    let newFilterData = [];
    for (let key in data[0]) {
      if (key[0] == "_") {
        newFilterData.push({ [key]: {} });
      }
    }
  
    // console.log(filterData[0]["_colors"]);

    data.forEach((product) => {
      let i = 0;
      Object.keys(product).forEach((key) => {
        if (key[0] == "_") {
          const obj = newFilterData[i][key];
          i++;

          const ele = product[key];
          if(ele){
          obj[ele] = (obj[ele] || 0) + 1;
          }
        }
      });
    });

    setFilterData(newFilterData);
  };
  console.log(filterData);
  // const handleParams = () => {
  //   const searchParamsObject = {};
  //   for (let [key, value] of searchParams.entries()) {
  //     if (searchParamsObject[key]) {
  //       searchParamsObject[key].push(value);
  //     } else {
  //       searchParamsObject[key] = [value];
  //     }
  //   }
  //   setParams(searchParamsObject);
  // };
  useEffect(() => {
    setLoading(true);
    const route = "/" + params.id;
    getData(route)
      .then(({ totalCount, data }) => {
       
        setFilter(data);
        
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
    // handleParams()
  }, [params.id]);
  if (loading) {
    return <Loading />;
  }
  return (
    <Box>
      <Grid w="90%" m="auto" templateColumns="250px auto" gap={6}>
        <GridItem>
          <Filter filterData={filterData} />
        </GridItem>
        <GridItem>
          <Product setFilterData={setFilterData} filterData={filterData}/>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Products_Page;
