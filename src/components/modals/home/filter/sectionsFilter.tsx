import { Box, Text } from "@chakra-ui/react";

export const BrandFilter = ({
  brandSelected,
  isFilter,
  filterOptionsMenu,
  setBrandSelected,
  brands,
  setIsFilter,
}: any) => {

  return brands.map((brand: string, i: number) => {
    return (
      <Box marginLeft="30px" key={i}>
        <Text
          fontWeight="600"
          color="grey.3"
          onClick={() => {
            setBrandSelected(brand);
            filterOptionsMenu()
            setIsFilter(true);
          }}
          _hover={{ color: "grey.2", transition: "0.3s" }}
        >
          {brand}
        </Text>
      </Box>
    );
  });
  
};

export const ModelFilter = ({
  modelSelected,
  isFilter,
  setModelSelected,
  filterOptionsMenu,
  models,
  setIsFilter,
}: any) => {
 
  return (
    <Box marginLeft="30px">
      {models.map((model: string, i: number) => {
        return (
          <Text
            fontWeight="600"
            color="grey.3"
            key={i}
            onClick={() => {
              setModelSelected(model);
              filterOptionsMenu()
              setIsFilter(true);
            }}
            _hover={{ color: "grey.2", transition: "0.3s" }}
          >
            {model}
          </Text>
        );
      })}
    </Box>
  );
  
};

export const ColorFilter = ({
  isFilter,
  setColorSelected,
  colorSelected,
  filterOptionsMenu,
  colors,
  setIsFilter,
}: any) => {
  
  return (
    <Box marginLeft="30px">
      {colors.map((color: string, i: number) => {
        return (
          <Text
            fontWeight="600"
            color="grey.3"
            key={i}
            onClick={() => {
              setColorSelected(color);
              filterOptionsMenu()
              setIsFilter(true);
            }}
            _hover={{ color: "grey.2", transition: "0.3s" }}
          >
            {color}
          </Text>
        );
      })}
    </Box>
  );
  
};

export const YearFilter = ({
  yearSelected,
  isFilter,
  setYearSelected,
  filterOptionsMenu,
  years,
  setIsFilter,
}: any) => {

  return (
    <Box marginLeft="30px">
      {years.map((year: string, i: number) => {
        return (
          <Text
            fontWeight="600"
            color="grey.3"
            key={i}
            onClick={() => {
              setYearSelected(year);
              filterOptionsMenu()
              setIsFilter(true);
            }}
            _hover={{ color: "grey.2", transition: "0.3s" }}
          >
            {year}
          </Text>
        );
      })}
    </Box>
  );
  
};

export const FuelFilter = ({
  fuelSelected,
  isFilter,
  setFuelSelected,
  filterOptionsMenu,
  fuels,
  setIsFilter,
}: any) => {

  return (
    <Box marginLeft="30px">
      {fuels.map((fuel: string, i: number) => {
        return (
          <Text
            fontWeight="600"
            color="grey.3"
            key={i}
            onClick={() => {
              setFuelSelected(fuel);
              filterOptionsMenu()
              setIsFilter(true);
            }}
            _hover={{ color: "grey.2", transition: "0.3s" }}
          >
            {fuel}
          </Text>
        );
      })}
    </Box>
  );
  
};
