import { FormLabel, Input, Select, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

const Checkout_Form = ({address,setAddress,shipAddr}) => {
    const handleChange = (e) => {
        const { value, name } = e.target;
        if (
          !(
            (name == "phone" && value.length > 10) ||
            (value.length > 6 && name == "zipcode")
          )
        ) {
            setAddress({ ...address, [name]: value });
        }
      };
  return (
    <SimpleGrid
    templateColumns="150px auto"
              gap="15px"
              fontSize="sm"
              p="5px 10px"
              w="full"
              borderColor="gray"
              border="1px"
  >
    <FormLabel fontSize="sm">Email</FormLabel>
    <Input
      size="xs"
      name="email"
      type="text"
      value={address.email}
      onChange={handleChange}
    />
    <FormLabel fontSize="sm">First Name</FormLabel>
    <Input
      size="xs"
      name="firstName"
      type="text"
      value={address.firstName}
      onChange={handleChange}
    />
    <FormLabel fontSize="sm">Last Name</FormLabel>
    <Input
      size="xs"
      name="lastName"
      type="text"
      value={address.lastName}
      onChange={handleChange}
    />
    <Text fontSize="sm" fontWeight={400}>
      Company
    </Text>
    <Input
      size="xs"
      name="company"
      type="text"
      value={address.company}
      onChange={handleChange}
    />
    <Text fontSize="sm" fontWeight={400}>
      Tax name
    </Text>
    <Input
      size="xs"
      name="taxname"
      type="text"
      value={address.taxname}
      onChange={handleChange}
    />
    <FormLabel fontSize="sm">Address Line 1</FormLabel>
    <Input
      size="xs"
      name="address1"
      type="text"
      value={address.address1}
      onChange={handleChange}
    />

    <Text fontSize="sm" fontWeight={400}>
      Address Line 2
    </Text>
  
    <Input
      size="xs"
      name="address2"
      type="text"
      value={address.address2}
      onChange={handleChange}
    />
     { shipAddr&&<Text></Text>}
   { shipAddr&&    <Text>(We cannot ship to PO box, APO or FPO addresses.)</Text>
  }
    <FormLabel fontSize="sm">Country</FormLabel>
    <Select
      size="xs"
      name="country"
      placeholder="Select Country"
      value={address.country}
      onChange={handleChange}
    >
      <option value="india">India</option>
      <option value="canada">Canada</option>
      <option value="china">China</option>
      <option value="japan">Japan</option>
      <option value="russia">Russia</option>
      <option value="france">France</option>
    </Select>
    <FormLabel fontSize="sm" ext>
      City
    </FormLabel>
    <Input
      size="xs"
      name="city"
      type="text"
      value={address.city}
      onChange={handleChange}
    />
    <Text fontSize="sm" fontWeight={400}>
      State
    </Text>
    <Input
      size="xs"
      name="state"
      type="text"
      value={address.state}
      onChange={handleChange}
    />
    <Text fontSize="sm" fontWeight={400}>
      Zip code
    </Text>
    <Input
      size="xs"
      name="zipcode"
      type="number"
      value={address.zipcode}
      onChange={handleChange}
    />
    <FormLabel fontSize="sm">Phone #</FormLabel>

    <Input
      size="xs"
      name="phone"
      type="tel"
      value={address.phone}
      onChange={handleChange}
    />
  </SimpleGrid>
  )
}

export default Checkout_Form