import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { contextHomeProvider } from "../../../context/homePage.context";

interface iStatusModal {
  isOpen: boolean;
  onClose(): void;
}

const ModalFilterMobile = ({ isOpen, onClose }: iStatusModal) => {

  const {brands, colors, fuels, models, years} = useContext(contextHomeProvider)

  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="full">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton marginTop="6px" />
        <Text
          color="grey.1"
          marginLeft="15px"
          marginTop="20px"
          fontWeight="600"
        >
          Filtro
        </Text>
        <DrawerBody>
          <Box marginLeft="-25px">
            <DrawerHeader>Marca</DrawerHeader>

            <Box marginLeft="30px">
              {/* {
                brands.map(brand => {
                  return (
                    <Text fontWeight="600" color="grey.3" key={brand.id}>
                      {brand.name}
                    </Text>
                  )
                })
              } */}
            </Box>
          </Box>
          <Box marginLeft="-25px">
            <DrawerHeader>Modelo</DrawerHeader>

            <Box marginLeft="30px">
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
          <Box marginLeft="-25px">
            <DrawerHeader>Cor</DrawerHeader>

            <Box marginLeft="30px">
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
          <Box marginLeft="-25px">
            <DrawerHeader>Ano</DrawerHeader>
            <Box marginLeft="30px">
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
          <Box marginLeft="-25px">
            <DrawerHeader>Combustível</DrawerHeader>
            <Box marginLeft="30px">
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
          <Box marginLeft="-25px" marginTop="35px">
            <DrawerHeader>KM</DrawerHeader>
            <Box marginLeft="30px" display="flex">
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
          <Box marginLeft="-25px" marginTop="35px">
            <DrawerHeader>Preço</DrawerHeader>
            <Box marginLeft="30px" display="flex">
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
            marginTop="40px"
            marginBottom="40px"
          >
            <Button
              bg={"brand.1"}
              color={"grey.10"}
              w={{
                base: "250px",
                sm: "60%",
                md: "350px",
                lg: "400px",
                xl: "350px",
              }}
              borderRadius="5px"
              fontWeight="600"
              _hover={{ background: "brand.2" }}
              padding="25px 0px 22px 0px"
            >
              Ver anúncios
            </Button>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default ModalFilterMobile;
