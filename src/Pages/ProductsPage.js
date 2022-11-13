import {useContext,useEffect,useState} from 'react'
import Filter from "../Components/ProductPage/Filter"
import Product from "../Components/ProductPage/Product"
import { Grid,GridItem, } from '@chakra-ui/react'
import { APIContext } from './../Context/APIDataContext';
const ProductsPage = () => {
  
  const { productsData } = useContext(APIContext);
  
  const [data,setData]=useState([])
  useEffect(() => {
    
     setData(productsData );
  }, [productsData]);
  
  return (
    <Grid w="85%" m="auto" templateColumns="20% 80%" gap={6}>
    <GridItem>
      <Filter productsData={data} setData={setData} />
    </GridItem>
    <GridItem>
      <Product productsData={data} />
    </GridItem>
  </Grid>
  )
}

export default ProductsPage