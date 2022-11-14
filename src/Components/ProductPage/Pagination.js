import {useContext} from "react";
import {Button,ButtonGroup} from "@chakra-ui/react"
import { APIContext } from "../../Context/APIDataContext";
const Pagination = () => {
  // TODO: Remove below const and instead import them from chakra
  const{totalpage, setPage,page}=useContext(APIContext);
   
  return (
    <ButtonGroup >
      <Button  onClick={()=>setPage(1)}>First</Button>
      <Button  disabled={page==1?true:false} onClick={()=>setPage(page-1)}>Previous</Button>
      <Button disabled={page==totalpage?true:false} onClick={()=>setPage(page+1)}>Next</Button>
      <Button  onClick={()=>setPage(totalpage)}>Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
