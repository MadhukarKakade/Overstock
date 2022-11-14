import {useState,useContext} from "react";
import {APIContext} from "../../Context/APIDataContext";
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Checkbox,
  Text,
   Button,
   useToast
} from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
let Confirm=""
const initalUserdata={userInfo:{name:"",password:""},cart:[],favorite:[]}
const SignIn = ({setInfo}) => {
  const { postData} = useContext(APIContext);
  const toast = useToast()
  const [userData,setUserData]=useState(initalUserdata)
const [log,setlog]=useState(false)
  const handleData=({target})=>{
    const {value,name}=target
    setUserData({...userData,userInfo:{...userData.userInfo,[name]:value}})
    //setUserData({...userData})
      }

      const handleSubmit=()=>{

        const email=userData.userInfo.email
        const password=userData.userInfo.password
        if(email.includes("@") &&email.includes(".")){
          if(password.length>5){
            if(password===Confirm){
             postData("/userdata",userData )
             toast({
              title: 'Account created.',
              description: "welcome "+  email,
              status: 'success',
              duration: 2000,
              isClosable: true,
              position:"top"
            })
              setInfo("")
              setlog(true)
            }else{
              setInfo( "The passwords you have entered do not match. Please try again.")
            }   
          }else{
            setInfo("Password must be a minimum of 6 characters and cannot exceed 40 characters.")
          }
        }else{
        setInfo("This email address is invalid.")
       }
      }
      if(log){
        
       return <Navigate to="/" />
      }
  return (
    <Container>
      <Heading  p="30px 0px 40px 0px" size="md">
        Create Account
      </Heading>
      <Grid templateColumns="repeate (2,1fr)" gap="30px">
        <GridItem colSpan={2}>
          <FormControl isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input type="email" placeholder="Email" name="email" onChange={handleData}/>
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl isRequired>
            <FormLabel>Create Password</FormLabel>
            <Input type="Password" placeholder="Password"  name="password" onChange={handleData}/>
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl isRequired>
            <FormLabel>Confirm Password*</FormLabel>
            <Input type="Password" placeholder="Confirm Password" onChange={(e)=>Confirm=e.target.value}/>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <Box borderWidth='1px' p="10px">
              <Checkbox p="5px" colorScheme="blue" />
              <Text display="inline">
                Sign up today for exclusive offers from Overstock.com delivered
                right to your inbox**
              </Text>
            </Box>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <Button colorScheme="telegram" fontWeight="700" w="full" onClick={handleSubmit}>
              Create Account
            </Button>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Box border="0.5px solid gray" w="50%" m="auto" />
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <Button
              variant="outline"
              colorScheme="black"
              fontWeight="700"
              w="full"
            >
              Continue as Guest
            </Button>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Box>
            <Text pl="7px">
              By creating an account or continuing as a Guest, you
            </Text>
            <Text>
              agree to our
              <Text as="u" fontWeight="700">
                Terms & Conditions
              </Text>
              and
              <Text as="u" fontWeight="700">
                Privacy Policy.
              </Text>
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Box>
            <Text as="u" fontWeight="700">
              Terms & Conditions | Privacy Policy.
            </Text>
            <Text>**You can unsubscribe at any time</Text>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default SignIn;
