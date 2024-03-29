import axios from "axios";

const baseUrl = process.env.REACT_APP_MOCK_SERVER_URL

export  const getData = async (route,query="",params={}) => {
    try { 
        // params["_limit"]=9
    //  const url={baseUrl}${route}${query}&${}
      let url=baseUrl+route
      const paramString=new URLSearchParams (params)
      if(paramString||query){
        if(query){
        url=url+query+"&"+paramString
        }else {
          url=url+"?"+paramString
        }
      }
     console.log(url)
      let res = await  axios.get( url )
      const count = res.headers["x-total-count"];
   
    //   setTotal( count);
      console.log(count,res.data)
   
    // {(rating = Math.floor(Math.random() * (6 - 1) + 1))}
    //  let data=res.data.forEach(ele =>  ele["rating"]=Math.floor(Math.random() * (6 - 1) + 1) );
    // console.log(res.data);
     return {totalCount:count,data:res.data};
      
    } catch (error) {
     // SetLoading(true)
      console.log(error);
    }
  };

  export const postData=async(route,data)=>{
    try{
      let url=baseUrl+route
let res=await axios.post(url,data)
return res

    }catch (error) {
     // SetLoading(true)
      console.log(error);
    }
  }