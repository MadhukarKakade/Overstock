import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
export const APIContext = createContext(null);



const baseUrl = 'https://humdrum-town-8956-server-yo9e.vercel.app';
const APIDataContext = ({ children }) => {
  const [urlRoute, setUrlRoute] = useState('/decor');
  const [productsData, setProductsData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [favoriteData, setFavoriteData] = useState([]);
  const [loading ,setLoading] =useState(null)
  const [page,setPage] =useState(1)
  const [total, setTotal] = useState();
  const getData = async (route) => {
    try { 
      const url=`${baseUrl}${route}?_page=${page}&_limit=9`
      let res = await  axios.get( url )
      const count = res.headers["x-total-count"];
   
      setTotal( count);
      //console.log(res.data)
     setLoading(false)
    // {(rating = Math.floor(Math.random() * (6 - 1) + 1))}
     let data=res.data.forEach(ele =>  ele["rating"]=Math.floor(Math.random() * (6 - 1) + 1)
      
     );
    // console.log(res.data);
     return res.data;
      
    } catch (error) {
     // SetLoading(true)
      console.log(error);
    }
  };
  const  totalpage=Math.ceil(total / 9)
  const postData= (route,data) =>{
  
    axios.post(baseUrl+route,data)
  .then(function (response) {
    return (response) 
    })
    .catch(function (error) {
      console.log(error);
    });
  
  
  }
  const deleteData= (route,query,data )=>{
    axios.delete(baseUrl+route, {
      params: {
        [query]: data
       }
    
    });
  }
  console.log(urlRoute);
  useEffect(() => {
    setLoading(true)
   
    getData(urlRoute).then((data)=> setProductsData(data))

    setLoading(false)
  }, [urlRoute,page]);
  return (
    <APIContext.Provider
      value={{
        productsData,
        cartData,
        favoriteData,
        setUrlRoute,
        setCartData,
        setFavoriteData,
        loading,
        setLoading,
      postData,
        page,
        totalpage,
        setPage
      }}
    >
      {children}
    </APIContext.Provider>
  );
};

export default APIDataContext;
