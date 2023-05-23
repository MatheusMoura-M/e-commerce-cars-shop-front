import { Box, Flex, Heading, Input } from "@chakra-ui/react";
import { useAuthHome } from "../../../context/homePage.context";
import { useEffect } from "react";
import Filters from "./sectionsFilter";
import { ButtonFilter } from "./buttonFilter";

const FilterCars = () => {
  const {
    brands,
    colors,
    fuels,
    models,
    years,
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
    setOptionFilterSelected,
    optionFilterSelected,
    filterInputs,
  } = useAuthHome();

  useEffect(() => {
    filterCarList();
    filterInputs();
    filterOptionsMenu();
  }, [
    carAd,
    isFilter,
    isInputFilter,
    minKm,
    maxKm,
    minPrice,
    maxPrice,
    optionFilterSelected,
  ]);

  return (
    <Box as="section" mt="80px" ml="20px" w="370px">
      <Flex flexDir={"column"}>
        <Heading fontSize="1.4rem">Marca</Heading>

        <Box m={"15px 0 15px 7px"}>
          <Filters
            brands={brands}
            setIsFilter={setIsFilter}
            filterOptionsMenu={filterOptionsMenu}
            setOptionFilterSelected={setOptionFilterSelected}
            optionFilterSelected={optionFilterSelected}
          />
        </Box>
      </Flex>
      <Flex flexDir={"column"}>
        <Heading fontSize="1.4rem">Modelo</Heading>

        <Box m={"15px 0 15px 7px"}>
          <Filters
            models={models}
            setIsFilter={setIsFilter}
            filterOptionsMenu={filterOptionsMenu}
            setOptionFilterSelected={setOptionFilterSelected}
            optionFilterSelected={optionFilterSelected}
          />
        </Box>
      </Flex>
      <Flex flexDir={"column"}>
        <Heading fontSize="1.4rem">Cor</Heading>

        <Box m={"15px 0 15px 7px"}>
          <Filters
            colors={colors}
            setIsFilter={setIsFilter}
            filterOptionsMenu={filterOptionsMenu}
            setOptionFilterSelected={setOptionFilterSelected}
            optionFilterSelected={optionFilterSelected}
          />
        </Box>
      </Flex>
      <Flex flexDir={"column"}>
        <Heading fontSize="1.4rem">Ano</Heading>

        <Box m={"15px 0 15px 7px"}>
          <Filters
            years={years}
            setIsFilter={setIsFilter}
            filterOptionsMenu={filterOptionsMenu}
            setOptionFilterSelected={setOptionFilterSelected}
            optionFilterSelected={optionFilterSelected}
          />
        </Box>
      </Flex>
      <Flex flexDir={"column"}>
        <Heading fontSize="1  .4rem">Combustível</Heading>

        <Box m={"20px 0 15px 7px"}>
          <Filters
            fuels={fuels}
            setIsFilter={setIsFilter}
            filterOptionsMenu={filterOptionsMenu}
            setOptionFilterSelected={setOptionFilterSelected}
            optionFilterSelected={optionFilterSelected}
          />
        </Box>
      </Flex>
      <Flex flexDir={"column"}>
        <Heading fontSize="1.4rem">KM</Heading>

        <Flex m="25px 0px 35px 10px">
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
            onChange={(e) => {
              inputStatus(e.target.value, minKm);
              setMinKm(e.target.value);
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
            onChange={(e) => {
              inputStatus(e.target.value, maxKm);
              setMaxKm(e.target.value);
            }}
          />
        </Flex>
      </Flex>
      <Flex flexDir={"column"}>
        <Heading fontSize="1.4rem">Preço</Heading>

        <Flex m="25px 0px 35px 10px">
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
            onChange={(e) => {
              inputStatus(e.target.value, minPrice);
              setMinPrice(e.target.value);
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
            onChange={(e) => {
              inputStatus(e.target.value, maxPrice);
              setMaxPrice(e.target.value);
            }}
          />
        </Flex>
      </Flex>
      <ButtonFilter
        isFilter={isFilter}
        isInputFilter={isInputFilter}
        clearFilter={clearFilter}
      />
    </Box>
  );
};

export default FilterCars;
