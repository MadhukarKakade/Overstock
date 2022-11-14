import {useContext,useEffect,useState} from 'react'
import Filter from "../Components/ProductPage/Filter"
import Product from "../Components/ProductPage/Product"
import { Grid,GridItem,Box,Center } from '@chakra-ui/react'
import { APIContext } from './../Context/APIDataContext';
import Loading from "../Components/Loading"
import Pagination from '../Components/ProductPage/Pagination';
const ProductsPage = () => {
  
  const { productsData,loading } = useContext(APIContext);
  
  
  const [data,setData]=useState([])
  useEffect(() => {
    
     setData(productsData );
  }, [productsData]);
  if (loading){
    return <Loading/>
  }
  return (
    <Box>
    <Grid w="85%" m="auto" templateColumns="20% 80%" gap={6}>
    <GridItem>
      <Filter productsData={data} setData={setData} />
    </GridItem>
    <GridItem>
      <Product productsData={data} />
    </GridItem>
  </Grid>
  <Center m="20px"><Pagination/></Center>
  </Box>
  )
}

export default ProductsPage