import { Box, Text } from "@chakra-ui/react";
import { iFilters } from "../../../../interface";

export const Filters = ({
  filterOptionsMenu,
  setIsFilter,
  brands,
  setBrandSelected,
  models,
  setModelSelected,
  colors,
  setColorSelected,
  years,
  setYearSelected,
  fuels,
  setFuelSelected,
}: iFilters) => {
  const filter = brands
    ? brands
    : models
    ? models
    : colors
    ? colors
    : years
    ? years
    : fuels;

  return (
    <Box>
      {filter!.map((elem: string, i: number) => {
        return (
          <Text
            key={i}
            fontWeight="600"
            color="grey.3"
            onClick={() => {
              filterOptionsMenu();
              setIsFilter(true);
              {
                setBrandSelected
                  ? setBrandSelected!(elem)
                  : setModelSelected
                  ? setModelSelected!(elem)
                  : setColorSelected
                  ? setColorSelected!(elem)
                  : setYearSelected
                  ? setYearSelected!(elem)
                  : setFuelSelected!(elem);
              }
            }}
            _hover={{ color: "grey.2", transition: "0.3s" }}
          >
            {elem}
          </Text>
        );
      })}
    </Box>
  );
};
