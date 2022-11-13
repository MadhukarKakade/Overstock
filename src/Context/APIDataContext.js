import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
export const APIContext = createContext(null);

//const apiReducer=(action,state) =>{
// switch(action.type){
//   case "men": return initialState+"/"+state
//   default: return state
// }

// const setProductsData=()=>{}
// const productsData= [{
//   id: 1,
//   offer_timline: "Sale Ends in 2 Days 22 Hours",
//   productImage: "https://ak1.ostkcdn.com/images/products/is/images/direct/b8c9ee5d9f874b3dd9a93d8e08958becf00cabca/20-in.-W-x-28-in.-L-Single-Beveled-Edge-Bath-Wall-Vanity-Mirror.jpg?imwidth=480&impolicy=medium",
//   Price: "Sale INR 8813.56",
//   Customer_Ratings: 507,
//   productName: "Single Beveled Edge Bathroom Wall Vanity Mirror",
//   Types: "Bathroom-Vanity",
//   Mirror_Shapes: "Oval",
//   Frame_Colors: "Gold",
//   Mirror_Sizes: "Large (over 32'' high)",
//   Frame_Finishes: "Antique",
//   Quantity: 50,
//   product_Id: 101
// },
// {
//   id: 2,
//   offer_timline: "Sale Ends in 2 Days 22 Hours",
//   productImage: "https://ak1.ostkcdn.com/images/products/is/images/direct/4e18181d80c9276e45646fed6b687947ad2af29a/Glitzhome-Deluxe-Round-Gold-Mirror.jpg?imwidth=480&impolicy=medium",
//   Price: "Sale Starts at INR 6528.63",
//   Customer_Ratings: 110,
//   productName: "Glitzhome Oversized Iron-framed Round Wall Mirror",
//   Types: "Full Length",
//   Mirror_Shapes: "Round",
//   Frame_Colors: "Grey",
//   Mirror_Sizes: "Small (Under 15'' high)",
//   Frame_Finishes: "Distressed",
//   Quantity: 50,
//   product_Id: 102
// },
// {
//   id: 3,
//   offer_timline: "Sale Ends in 2 Days 22 Hours",
//   productImage: "https://ak1.ostkcdn.com/images/products/is/images/direct/7aef4b2caf29c3b09223e4bf1c66591341c9c3a5/Kate-and-Laurel-Yitro-Round-Wall-Mirror.jpg?imwidth=480&impolicy=medium",
//   Price: "Sale Starts at INR 7986.74",
//   Customer_Ratings: 473,
//   productName: "Kate and Laurel Yitro Round Wall Mirror",
//   Types: "Floor Mirror",
//   Mirror_Shapes: "Round",
//   Frame_Colors: "White",
//   Mirror_Sizes: "Medium (15''-32'' high)",
//   Frame_Finishes: "Antique",
//   Quantity: 50,
//   product_Id: 103
// },
// {
//   id: 4,
//   offer_timline: "Sale Ends in 2 Days 22 Hours",
//   productImage: "https://ak1.ostkcdn.com/images/products/is/images/direct/06e14596ad69dd33017f0343e2cdaf0c366770cb/Rathburn-Metal-Venetian-Wall-Mounted-Mirror.jpg?imwidth=480&impolicy=medium",
//   Price: "Sale Starts at INR 10688.28",
//   Customer_Ratings: 663,
//   productName: "Rathburn Metal Venetian Wall Mounted Mirror",
//   Types: "Accent",
//   Mirror_Shapes: "Rectangular",
//   Frame_Colors: "Silver",
//   Mirror_Sizes: "Large (over 32'' high)",
//   Frame_Finishes: "Distressed",
//   Quantity: 50,
//   product_Id: 104
// },
// {
//   id: 5,
//   offer_timline: "Sale Ends in 2 Days 22 Hours",
//   productImage: "https://ak1.ostkcdn.com/images/products/is/images/direct/273a10ac4e7a45313d7cfce16b84ba6ca96f909b/Wall-Mirror-Mounted-Bathroom-Round-Mirror-with-Brushed-Metal-Frame.jpg?imwidth=480&impolicy=medium",
//   Price: "Sale Starts at INR 5671.67",
//   Customer_Ratings: 1,
//   productName: "YVANLA Wall Mirror Mounted Bathroom Round Mirror with Metal Frame",
//   Types: "Mirror Sets",
//   Mirror_Shapes: "Round",
//   Frame_Colors: "Clear",
//   Mirror_Sizes: "Small (Under 15'' high)",
//   Frame_Finishes: "Maple Finish",
//   Quantity: 50,
//   product_Id: 105
// },
// {
//   id: 6,
//   offer_timline: "",
//   productImage: "https://ak1.ostkcdn.com/images/products/is/images/direct/346baebdcd2b783dbc82a30202d54a3cc0400c6c/Black-Simple-Fashion-Rectangle-Bathroom-Wall-Mounted-Vanity-Mirror.jpg?imwidth=480&impolicy=medium",
//   Price: "Sale INR 11399.98",
//   Customer_Ratings: 222,
//   productName: "Modern Large Black Rectangle Wall Mirrors for Bathroom Vanity Mirror",
//   Types: "Cheval Mirror",
//   Mirror_Shapes: "Square",
//   Frame_Colors: "White",
//   Mirror_Sizes: "Medium (15''-32'' high)",
//   Frame_Finishes: "Mirrored",
//   Quantity: 50,
//   product_Id: 106
// }]
const baseUrl = 'http://localhost:8080';
const APIDataContext = ({ children }) => {
  const [urlRoute, setUrlRoute] = useState('mirror');
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
    let route ="/mirror";
     console.log( route);
    getData(route);
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
