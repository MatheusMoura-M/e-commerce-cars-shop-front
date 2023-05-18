import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  Text,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { contextHomeProvider } from "../../../context/homePage.context";
import Filters from "./sectionsFilter";
import { iStatusModal } from "../../../interface";
import ButtonFilterMobile from "./buttonFilter";

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
    isFilter,
    carAd,
    filterOptionsMenu,
    setMaxKm,
    setMinKm,
    setMinPrice,
    setMaxPrice,
    minKm,
    maxKm,
    minPrice,
    maxPrice,
    setIsFilter,
    clearFilter,
    isInputFilter,
    inputStatus,
    FilterInputs,
    filteredAlready,
    setFilteredAlready,
    filteredCars,
  } = useContext(contextHomeProvider);

  useEffect(() => {
    filterCarList();
    filterOptionsMenu();
    FilterInputs();
  }, [
    isOpen,
    carAd,
    isFilter,
    isInputFilter,
    brandSelected,
    modelSelected,
    yearSelected,
    colorSelected,
    fuelSelected,
    minKm,
    maxKm,
    minPrice,
    maxPrice,
  ]);

  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="full">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton mt="6px" />
        <Text color="grey.1" ml="15px" mt="20px" fontWeight="600">
          Filtro
        </Text>
        <DrawerBody>
          <Box ml="-25px">
            <DrawerHeader>Marca</DrawerHeader>

            <Filters
              setBrandSelected={setBrandSelected}
              brands={brands}
              setIsFilter={setIsFilter}
              filterOptionsMenu={filterOptionsMenu}
            />
          </Box>
          <Box ml="-25px">
            <DrawerHeader>Modelo</DrawerHeader>

            <Filters
              setModelSelected={setModelSelected}
              models={models}
              setIsFilter={setIsFilter}
              filterOptionsMenu={filterOptionsMenu}
            />
          </Box>
          <Box ml="-25px">
            <DrawerHeader>Cor</DrawerHeader>

            <Filters
              setColorSelected={setColorSelected}
              colors={colors}
              setIsFilter={setIsFilter}
              filterOptionsMenu={filterOptionsMenu}
            />
          </Box>
          <Box ml="-25px">
            <DrawerHeader>Ano</DrawerHeader>

            <Filters
              setYearSelected={setYearSelected}
              years={years}
              setIsFilter={setIsFilter}
              filterOptionsMenu={filterOptionsMenu}
            />
          </Box>
          <Box ml="-25px">
            <DrawerHeader>Combustível</DrawerHeader>

            <Filters
              setFuelSelected={setFuelSelected}
              fuels={fuels}
              setIsFilter={setIsFilter}
              filterOptionsMenu={filterOptionsMenu}
            />
          </Box>
          <Box ml="-25px" mt="35px">
            <DrawerHeader>KM</DrawerHeader>

            <Flex ml="30px">
              <Input
                w="120px"
                mr="25px"
                borderRadius="0px"
                bgColor="grey.5"
                borderColor="grey.5"
                placeholder="Mínima"
                fontWeight="600"
                color="grey.1"
                focusBorderColor="grey.5"
                type="number"
                value={minKm}
                onChange={(event) => {
                  setMinKm(event.target.value);
                  inputStatus(event.target.value, minKm);
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
                value={maxKm}
                onChange={(event) => {
                  setMaxKm(event.target.value);
                  inputStatus(event.target.value, maxKm);
                }}
              />
            </Flex>
          </Box>
          <Box ml="-25px" mt="35px">
            <DrawerHeader>Preço</DrawerHeader>

            <Flex ml="30px">
              <Input
                w="120px"
                mr="25px"
                borderRadius="0px"
                bgColor="grey.5"
                borderColor="grey.5"
                placeholder="Mínimo"
                fontWeight="600"
                color="grey.1"
                focusBorderColor="grey.5"
                type="number"
                value={minPrice}
                onChange={(event) => {
                  setMinPrice(event.target.value);
                  inputStatus(event.target.value, minPrice);
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
                value={maxPrice}
                onChange={(event) => {
                  setMaxPrice(event.target.value);
                  inputStatus(event.target.value, maxPrice);
                }}
              />
            </Flex>
          </Box>

          <ButtonFilterMobile
            isFilter={isFilter}
            isOpen={isOpen}
            filteredAlready={filteredAlready}
            setFilteredAlready={setFilteredAlready}
            onClose={onClose}
            clearFilter={clearFilter}
          />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default ModalFilterMobile;
