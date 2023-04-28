import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";

const FilterCars = () => {
  return (
    <Box 
      as="section" 
      marginTop="80px" 
      marginLeft="20px" 
      w="370px"
    >
     <Box>
          <Heading fontSize="1.7rem">Marca</Heading>

        <Box margin="15px 0px 15px 10px">
          <Text fontWeight="600" color="grey.3" >
            General Motors
          </Text>
           <Text fontWeight="600" color="grey.3">
            Fiat Ford
          </Text>
          <Text fontWeight="600" color="grey.3">
            Honda
          </Text>
          <Text fontWeight="600" color="grey.3">
            Toyota
          </Text>
          <Text fontWeight="600" color="grey.3">
            Toyota
          </Text>
          <Text fontWeight="600" color="grey.3">
            Volswagen
          </Text>
        </Box>
      </Box> 
      <Box>
        <Heading fontSize="1.7rem">Modelo</Heading>

        <Box margin="15px 0px 15px 10px">
          <Text fontWeight="600" color="grey.3">
            Civic
          </Text>
          <Text fontWeight="600" color="grey.3">
            Corolla
          </Text>
          <Text fontWeight="600" color="grey.3">
            Cruze
          </Text>
          <Text fontWeight="600" color="grey.3">
            Fit
          </Text>
          <Text fontWeight="600" color="grey.3">
            Gol
          </Text>
          <Text fontWeight="600" color="grey.3">
            Ka
          </Text>
          <Text fontWeight="600" color="grey.3">
            Onix
          </Text>
          <Text fontWeight="600" color="grey.3">
            Porsche 718
          </Text>
        </Box>
      </Box>
      <Box>
        <Heading fontSize="1.7rem">Cor</Heading>

        <Box margin="15px 0px 15px 10px">
          <Text fontWeight="600" color="grey.3">
            Azul
          </Text>
          <Text fontWeight="600" color="grey.3">
            Branca
          </Text>
          <Text fontWeight="600" color="grey.3">
            Cinza
          </Text>
          <Text fontWeight="600" color="grey.3">
            Prata
          </Text>
          <Text fontWeight="600" color="grey.3">
            Preta
          </Text>
          <Text fontWeight="600" color="grey.3">
            Verde
          </Text>
        </Box>
      </Box>
      <Box>
        <Heading fontSize="1.7rem">Ano</Heading>

        <Box margin="15px 0px 15px 10px">
          <Text fontWeight="600" color="grey.3">
            2022
          </Text>
          <Text fontWeight="600" color="grey.3">
            2021
          </Text>
          <Text fontWeight="600" color="grey.3">
            2018
          </Text>
          <Text fontWeight="600" color="grey.3">
            2015
          </Text>
          <Text fontWeight="600" color="grey.3">
            2013
          </Text>
          <Text fontWeight="600" color="grey.3">
            2012
          </Text>
          <Text fontWeight="600" color="grey.3">
            2010
          </Text>
        </Box>
      </Box>
      <Box>
        <Heading fontSize="1.7rem">Combustível</Heading>

        <Box margin="15px 0px 15px 10px">
          <Text fontWeight="600" color="grey.3">
            Diesel
          </Text>
          <Text fontWeight="600" color="grey.3">
            Etanol
          </Text>
          <Text fontWeight="600" color="grey.3">
            Gasolina
          </Text>
          <Text fontWeight="600" color="grey.3">
            Flex
          </Text>
        </Box>
      </Box>
      <Box>
        <Heading fontSize="1.7rem">KM</Heading>

        <Box margin="25px 0px 35px 10px" display="flex">
          <Input
            w="120px"
            marginRight="25px"
            borderRadius="0px"
            bgColor="grey.5"
            borderColor="grey.5"
            placeholder="Mínima"
            fontWeight="600"
            color="grey.1"
            focusBorderColor="grey.5"
            type="number"
          />
          <Input
            w="120px"
            borderRadius="0px"
            bgColor="grey.5"
            borderColor="grey.5"
            placeholder="Máxima"
            fontWeight="600"
            color="grey.1"
            focusBorderColor="grey.5"
            type="number"
          />
        </Box>
      </Box>
      <Box>
        <Heading fontSize="1.7rem">Preço</Heading>

        <Box margin="25px 0px 35px 10px" display="flex">
          <Input
            w="120px"
            marginRight="25px"
            borderRadius="0px"
            bgColor="grey.5"
            borderColor="grey.5"
            placeholder="Mínimo"
            fontWeight="600"
            color="grey.1"
            focusBorderColor="grey.5"
            type="number"
          />

          <Input
            w="120px"
            borderRadius="0px"
            bgColor="grey.5"
            borderColor="grey.5"
            placeholder="Máximo"
            fontWeight="600"
            color="grey.1"
            focusBorderColor="grey.5"
            type="number"
          />
        </Box>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        marginTop="70px"
        marginBottom="40px"
        w="100%"
      >
        <Button
          bg={"brand.1"}
          color={"grey.10"}
          w="250px"
          borderRadius="5px"
          fontWeight="600"
          _hover={{ background: "brand.2" }}
          padding="25px 0px 22px 0px"
        >
          Ver anúncios
        </Button>
      </Box>
    </Box>
  );
};

export default FilterCars;
