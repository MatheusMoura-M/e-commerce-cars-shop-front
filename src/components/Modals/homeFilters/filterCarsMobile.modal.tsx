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
import { ButtonFilterMobile } from "./buttonFilter";

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
    setOptionFilterSelected,
    optionFilterSelected,
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
    optionFilterSelected,
  ]);

  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="full">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton mt="6px" />
        <Text
          color="grey.1"
          ml="15px"
          mt="20px"
          fontSize={"1.5rem"}
          fontWeight="600"
        >
          Filtros
        </Text>
        <DrawerBody px={0}>
          <DrawerHeader px={"1.5rem"}>Marca</DrawerHeader>
          <Box ml={"35px"}>
            <Filters
              brands={brands}
              setIsFilter={setIsFilter}
              filterOptionsMenu={filterOptionsMenu}
              setOptionFilterSelected={setOptionFilterSelected}
              optionFilterSelected={optionFilterSelected}
            />
          </Box>

          <DrawerHeader px={"1.5rem"}>Modelo</DrawerHeader>
          <Box ml={"35px"}>
            <Filters
              models={models}
              setIsFilter={setIsFilter}
              filterOptionsMenu={filterOptionsMenu}
              setOptionFilterSelected={setOptionFilterSelected}
              optionFilterSelected={optionFilterSelected}
            />
          </Box>

          <DrawerHeader px={"1.5rem"}>Cor</DrawerHeader>
          <Box ml={"35px"}>
            <Filters
              colors={colors}
              setIsFilter={setIsFilter}
              filterOptionsMenu={filterOptionsMenu}
              setOptionFilterSelected={setOptionFilterSelected}
              optionFilterSelected={optionFilterSelected}
            />
          </Box>

          <DrawerHeader px={"1.5rem"}>Ano</DrawerHeader>
          <Box ml={"35px"}>
            <Filters
              years={years}
              setIsFilter={setIsFilter}
              filterOptionsMenu={filterOptionsMenu}
              setOptionFilterSelected={setOptionFilterSelected}
              optionFilterSelected={optionFilterSelected}
            />
          </Box>

          <DrawerHeader px={"1.5rem"}>Combustível</DrawerHeader>
          <Box ml={"35px"}>
            <Filters
              fuels={fuels}
              setIsFilter={setIsFilter}
              filterOptionsMenu={filterOptionsMenu}
              setOptionFilterSelected={setOptionFilterSelected}
              optionFilterSelected={optionFilterSelected}
            />
          </Box>
          <Box mt="35px">
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
          <Box mt="35px">
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
            onClose={onClose}
            clearFilter={clearFilter}
          />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default ModalFilterMobile;
