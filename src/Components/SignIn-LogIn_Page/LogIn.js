import React from 'react'
import { Container,Grid,GridItem,FormControl,Input,FormLabel,Heading,Text ,Button,Box} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const LogIn = () => {
  return (
    <Container >
      <Heading p="30px 0px 40px 0px " size="md">
      Sign In
      </Heading>
      <Grid templateColumns="repeate (2,1fr)" gap="30px">
        <GridItem colSpan={2}>
          <FormControl isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input type="email"  placeholder='Email'/>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="Password" placeholder="Password" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <Button colorScheme="green" fontWeight="700" w="full">
             Sign In
            </Button>
          </FormControl>
        </GridItem>
        
        <GridItem colSpan={2} textAlign="Center"><Link><Text  fontWeight="700" color="blue.400" as="u">Forgot your password?</Text></Link></GridItem>
        </Grid>
        </Container>
  )
}

export default LogIn