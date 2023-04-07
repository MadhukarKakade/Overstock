import {useContext} from "react";
import {Button,ButtonGroup} from "@chakra-ui/react"
import { APIContext } from "../../Context/APIDataContext";
const Pagination = ({totalPage, setPage,page}) => {
  // TODO: Remove below const and instead import them from chakra
  console.log(totalPage)
   
  return (
    <ButtonGroup >
      <Button isDisabled={page==1}   onClick={()=>setPage(1)}>First</Button>
      <Button  isDisabled={page==1} onClick={()=>setPage(page-1)}>Previous</Button>
      <Button>{page}</Button>
      <Button isDisabled={page==totalPage} onClick={()=>setPage(page+1)}>Next</Button>
      <Button isDisabled={page==totalPage} onClick={()=>setPage(totalPage)}>Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
