import React from "react";
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
  InputGroup,
  InputLeftElement,
  HStack,
  Button,
  Textarea,
  InputLeftAddon,
  Center,
} from "@chakra-ui/react";
const SignIn = () => {
  return (
    <Container>
      <Heading  p="30px 0px 40px 0px" size="md">
        Create Account
      </Heading>
      <Grid templateColumns="repeate (2,1fr)" gap="30px">
        <GridItem colSpan={2}>
          <FormControl isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input type="email" placeholder="Email"/>
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl isRequired>
            <FormLabel>Create Password</FormLabel>
            <Input type="Password" placeholder="Password" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl isRequired>
            <FormLabel>Confirm Password*</FormLabel>
            <Input type="Password" placeholder="Confirm Password" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <Box border=".2px solid gray" p="10px">
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
            <Button colorScheme="telegram" fontWeight="700" w="full">
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
