import { Box ,Image} from '@chakra-ui/react'


const Banner = ({banner}) => {
  return (
   <Box>
    <Image src={banner} />
   </Box>
  )
}

export default Banner