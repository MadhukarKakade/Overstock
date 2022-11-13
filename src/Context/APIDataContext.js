import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
export const APIContext = createContext(null);



const baseUrl = 'http://localhost:8080';
const APIDataContext = ({ children }) => {
  const [urlRoute, setUrlRoute] = useState('/mirror');
  const [productsData, setProductsData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [favoriteData, setFavoriteData] = useState([]);
  const getData = async (route) => {
    try {
      let res = await  axios.get(baseUrl+route, {
        
      })
     // console.log(res.data)
      setProductsData(res.data);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const postData= (query,data ,) =>{
    axios.post(baseUrl, {
      params: {
       query : data
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  const deleteData=(path,data)=>{
    axios.delete(baseUrl, {
      params: {
        path : data
       }
    
    });
  }
  console.log(cartData);
  useEffect(() => {
    
    
    getData(urlRoute);
  }, [urlRoute]);
  return (
    <APIContext.Provider
      value={{
        productsData,
        cartData,
        favoriteData,
        setUrlRoute,
        setCartData,
        setFavoriteData,
      }}
    >
      {children}
    </APIContext.Provider>
  );
};

export default APIDataContext;
