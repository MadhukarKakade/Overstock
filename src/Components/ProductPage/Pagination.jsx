import {useContext} from "react";
import {Button,ButtonGroup} from "@chakra-ui/react"
import { APIContext } from "../../Context/APIDataContext";
const Pagination = () => {
  // TODO: Remove below const and instead import them from chakra
  const{totalpage, setPage,page}=useContext(APIContext);
   
  return (
    <ButtonGroup >
      <Button isDisabled={page==1}   onClick={()=>setPage(1)}>First</Button>
      <Button  isDisabled={page==1} onClick={()=>setPage(page-1)}>Previous</Button>
      <Button>{page}</Button>
      <Button isDisabled={page==totalpage} onClick={()=>setPage(page+1)}>Next</Button>
      <Button isDisabled={page==totalpage} onClick={()=>setPage(totalpage)}>Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
