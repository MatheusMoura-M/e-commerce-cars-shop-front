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
    filterFieldsSelected,
    setMaxKm,
    setMinKm,
    setMinPrice,
    setMaxPrice,
    FilterInputs,
    minKm,
    maxKm,
    minPrice,
    maxPrice,
    setIsFilter,
    setFilteredCar,
    clearFilter,
  } = useContext(contextHomeProvider);

  const [onlyInputFilter, setOnlyInputFilter] = useState(false);

  useEffect(() => {
    filterFieldsSelected();
    filterCarList();
    FilterInputs();

    if (
      (!brandSelected &&
        !modelSelected &&
        !colorSelected &&
        !yearSelected &&
        !fuelSelected &&
        minKm) ||
      maxKm ||
      minPrice ||
      maxPrice
    ) {
      setOnlyInputFilter(true);
    } else {
      setOnlyInputFilter(false);
    }
  }, [carAd, isFilter, minKm, maxKm, minPrice, maxPrice]);

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
            filterFieldsSelected={filterFieldsSelected}
            setBrandSelected={setBrandSelected}
            brands={brands}
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
            filterFieldsSelected={filterFieldsSelected}
            models={models}
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
            filterFieldsSelected={filterFieldsSelected}
            colors={colors}
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
            filterFieldsSelected={filterFieldsSelected}
            years={years}
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
            filterFieldsSelected={filterFieldsSelected}
            fuels={fuels}
          />
        </Box>
      </Box>
      <Box>
        <Heading fontSize="1.4rem">KM</Heading>

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
            onChange={(event) => {
              setMinKm(event.target.value);

              if (event.target.value == "" && isFilter) {
                setIsFilter(false);
                setFilteredCar([]);
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
              setMaxKm(event.target.value);
              FilterInputs();

              if (event.target.value == "" && isFilter) {
                setIsFilter(false);
                setFilteredCar([]);
              }
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
              FilterInputs();

              if (event.target.value == "" && isFilter) {
                setIsFilter(false);
                setFilteredCar([]);
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
              setMaxPrice(event.target.value);
              FilterInputs();
              setIsFilter(true);

              if (event.target.value == "" && isFilter) {
                setIsFilter(false);
                setFilteredCar([]);
              }
            }}
          />
        </Box>
      </Box>
      <ButtonFilter
        isFilter={isFilter}
        onlyInputFilter={onlyInputFilter}
        clearFilter={clearFilter}
      />
    </Box>
  );
};

export default FilterCars;
