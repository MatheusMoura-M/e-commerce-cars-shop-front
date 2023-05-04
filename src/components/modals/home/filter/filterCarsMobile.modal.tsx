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
import { useContext, useEffect } from "react";
import { contextHomeProvider } from "../../../../context/homePage.context";
import {
  BrandFilter,
  ColorFilter,
  FuelFilter,
  ModelFilter,
  YearFilter,
} from "./sectionsFilter";
import {useState} from "react"
import { ButtonFilterMobile } from "./buttonFilter";

interface iStatusModal {
  isOpen: boolean;
  onClose(): void;
}

const ModalFilterMobile = ({ isOpen, onClose }: iStatusModal) => {
  const {
    brands,
    colors,
    fuels,
    models,
    years,
    setFuelSelected,
    setModelSelected,
    setYearSelected,
    setColorSelected,
    setBrandSelected,
    brandSelected,
    modelSelected,
    yearSelected,
    colorSelected,
    fuelSelected,
    filterCarList,
    filteredCars,
    isFilter,
    filterFieldsSelected,
    setIsFilter,
    setFilteredCar,
    setMinKm,
    setMaxKm,
    setMinPrice,
    setMaxPrice,
    maxPrice,
    minPrice,
    maxKm,
    minKm,
    FilterInputs, 
    clearFilter
  } = useContext(contextHomeProvider);

  useEffect(() => {
    filterFieldsSelected();
    filterCarList();
    FilterInputs()
  }, [
    isOpen,
    colorSelected,
    yearSelected,
    brandSelected,
    modelSelected,
    fuelSelected,
    isFilter,
    filteredCars,
    minKm,
    maxKm,
    minPrice,
    maxPrice
  ]);

  const [isClearButton, setIsClearButton] = useState<boolean>(false)

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

            <BrandFilter
              brandSelected={brandSelected}
              isFilter={isFilter}
              filterFieldsSelected={filterFieldsSelected}
              setBrandSelected={setBrandSelected}
              brands={brands}
            />

            <DrawerHeader>Modelo</DrawerHeader>

            <ModelFilter
              modelSelected={modelSelected}
              isFilter={isFilter}
              setModelSelected={setModelSelected}
              filterFieldsSelected={filterFieldsSelected}
              models={models}
            />
          </Box>
          <Box marginLeft="-25px">
            <DrawerHeader>Cor</DrawerHeader>

            <ColorFilter
              isFilter={isFilter}
              setColorSelected={setColorSelected}
              colorSelected={colorSelected}
              filterFieldsSelected={filterFieldsSelected}
              colors={colors}
            />
          </Box>
          <Box marginLeft="-25px">
            <DrawerHeader>Ano</DrawerHeader>

            <YearFilter
              yearSelected={yearSelected}
              isFilter={isFilter}
              setYearSelected={setYearSelected}
              filterFieldsSelected={filterFieldsSelected}
              years={years}
            />
          </Box>
          <Box marginLeft="-25px">
            <DrawerHeader>Combustível</DrawerHeader>

            <FuelFilter
              fuelSelected={fuelSelected}
              isFilter={isFilter}
              setFuelSelected={setFuelSelected}
              filterFieldsSelected={filterFieldsSelected}
              fuels={fuels}
            />
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
                onChange={(event) => {
                  setMinKm(event.target.value)
                  setIsFilter(true)
                  
                  if(event.target.value == "" && isFilter){
                    setIsFilter(false)
                    setFilteredCar([])
                  }
                  
                }}
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
                onChange={(event) => {
                  setMaxKm(event.target.value)
                  setIsFilter(true)
                  
                  if(event.target.value == "" && isFilter){
                    setIsFilter(false)
                    setFilteredCar([])
                  }
                  
                }}
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
                onChange={(event) => {
                  setMinPrice(event.target.value)
                  setIsFilter(true)
                  
                  if(event.target.value == "" && isFilter){
                    setIsFilter(false)
                    setFilteredCar([])
                  }
                  
                }}
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
                onChange={(event) => {
                  setMaxPrice(event.target.value)
                  setIsFilter(true)
                  
                  if(event.target.value == "" && isFilter){
                    setIsFilter(false)
                    setFilteredCar([])
                  }
                  
                }}
              />
            </Box>
          </Box>
          <ButtonFilterMobile 
            isFilter={isFilter} 
            onClose={onClose} 
            setIsClearButton={setIsClearButton} 
            isClearButton={isClearButton}
            clearFilter={clearFilter}
          />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default ModalFilterMobile;
