import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
export const APIContext = createContext(null);

//const apiReducer=(action,state) =>{
// switch(action.type){
//   case "men": return initialState+"/"+state
//   default: return state
// }
const initialState = 'http://localhost:8080';
const APIDataContext = ({ children }) => {
  const [urlRoute, setUrlRoute] = useState('men');
  const [productsData, setProductsData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [favoriteData, setFavoriteData] = useState([]);
  const getData = async url => {
    try {
      let res = await axios.get(url);
      setProductsData(res.data);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  //console.log(productsData);
  useEffect(() => {
    let url = initialState + '/' + urlRoute;
    // console.log(url);
   // getData(url);
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
