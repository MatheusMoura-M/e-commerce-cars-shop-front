import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import { contextHomeProvider } from "../../../../context/homePage.context";
import { useContext, useEffect, useState } from "react";
import {
  BrandFilter,
  ColorFilter,
  FuelFilter,
  ModelFilter,
  YearFilter,
} from "./sectionsFilter";
import { ButtonFilter } from "./buttonFilter";

const FilterCars = () => {
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
  } = useContext(contextHomeProvider);

  useEffect(() => {
    filterCarList();
    filterOptionsMenu();
  }, [
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

    <Box as="section" marginTop="80px" marginLeft="20px" w="370px">
      <Box>
        <Heading fontSize="1.4rem">Marca</Heading>

        <Box
          marginLeft="-23px"
          marginBottom="15px"
          marginTop="15px"
          cursor="pointer"
        >
          <BrandFilter
            brandSelected={brandSelected}
            isFilter={isFilter}
            filterOptionsMenu={filterOptionsMenu}
            setBrandSelected={setBrandSelected}
            brands={brands}
            setIsFilter={setIsFilter}
            filterCarList={filterCarList}
          />
        </Box>
      </Box>
      <Box>
        <Heading fontSize="1.4rem">Modelo</Heading>

        <Box
          marginLeft="-23px"
          marginBottom="15px"
          marginTop="15px"
          cursor="pointer"
        >
          <ModelFilter
            modelSelected={modelSelected}
            isFilter={isFilter}
            setModelSelected={setModelSelected}
            filterOptionsMenu={filterOptionsMenu}
            models={models}
            setIsFilter={setIsFilter}
          />
        </Box>
      </Box>
      <Box>
        <Heading fontSize="1.4rem">Cor</Heading>

        <Box
          marginLeft="-23px"
          marginBottom="15px"
          marginTop="15px"
          cursor="pointer"
        >
          <ColorFilter
            isFilter={isFilter}
            setColorSelected={setColorSelected}
            colorSelected={colorSelected}
            filterOptionsMenu={filterOptionsMenu}
            colors={colors}
            setIsFilter={setIsFilter}
          />
        </Box>
      </Box>
      <Box>
        <Heading fontSize="1.4rem">Ano</Heading>

        <Box
          marginLeft="-23px"
          marginBottom="15px"
          marginTop="15px"
          cursor="pointer"
        >
          <YearFilter
            yearSelected={yearSelected}
            isFilter={isFilter}
            setYearSelected={setYearSelected}
            filterOptionsMenu={filterOptionsMenu}
            years={years}
            setIsFilter={setIsFilter}
          />
        </Box>
      </Box>
      <Box>
        <Heading fontSize="1.4rem">Combustível</Heading>

        <Box
          marginLeft="-23px"
          marginBottom="20px"
          marginTop="15px"
          cursor="pointer"
        >
          <FuelFilter
            fuelSelected={fuelSelected}
            isFilter={isFilter}
            setFuelSelected={setFuelSelected}
            filterOptionsMenu={filterOptionsMenu}
            fuels={fuels}
            setIsFilter={setIsFilter}
          />
        </Box>
      </Box>
      <Box>

        <Heading fontSize="1.4rem">KM</Heading>

        <Box 
          margin="25px 0px 35px 10px" 
          display="flex"
        >
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
            onChange={(event) => {
              setMaxKm(event.target.value);
              inputStatus(event.target.value, maxKm);
            }}
          />
        </Box>
      </Box>
      <Box>
        <Heading fontSize="1.4rem">Preço</Heading>

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
            onChange={(event) => {
              setMaxPrice(event.target.value);
              inputStatus(event.target.value, maxPrice);
            }}
          />
        </Box>
      </Box>
      <ButtonFilter
        isFilter={isFilter}
        isInputFilter={isInputFilter}
        clearFilter={clearFilter}
      />
    </Box>
  );
};

export default FilterCars;
