import {
  Center,
  Container,
  VStack,
  Box,
  Code,
  Text,
  Image,
} from "@chakra-ui/react";
import {useState}from "react";
import SignIn from "../Components/SignIn-LogIn_Page/SignIn";
import LogIn from "../Components/SignIn-LogIn_Page/LogIn";
import { Link } from "react-router-dom";
const Sign_In_Login = () => {
  const [info, setInfo] = useState("");
  return (
    <Container fontSize="12px" p="10px" maxW="1000px">
      <Box ml="70px">
        <Code
          p="7px"
          fontSize="12px"
          ml="70px"
          m
          colorScheme="red"
          bg="red.100"
          display={info?"block":"none"}
        >
         {info}
        </Code>

        <Center alignItems="flex-start">
          <SignIn setInfo={setInfo} />
          <Box
            mt="130px"
            h="600px"
            border="0.1px solid"
            borderColor="gray.400"
          ></Box>
          <LogIn setInfo={setInfo}/>
        </Center>
      </Box>
      <Box mt="50px">
        <Link>
          <Text>Return Policy</Text>
        </Link>
        <Link>
          <Text>Contact Customer Care</Text>
        </Link>
        <Link>
          <Text>FAQ</Text>
        </Link>
        <Link>
          <Text>Privacy Policy</Text>
        </Link>
        <Link>
          <Text>Site User Terms & Conditions*</Text>
        </Link>
        <Text>
          © 2022 Overstock.com All Rights Reserved We self-certify compliance
          with:
        </Text>
        <Image src="https://ak1.ostkcdn.com/img/mxc/20200630-intl-privacy_shield.png" />
      </Box>
    </Container>
  );
};

export default Sign_In_Login;
