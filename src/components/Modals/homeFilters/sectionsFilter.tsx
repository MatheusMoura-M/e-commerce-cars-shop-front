import { Box, Text } from "@chakra-ui/react";
import { iFilters } from "../../../interface";

const Filters = ({
  filterOptionsMenu,
  setIsFilter,
  brands,
  models,
  colors,
  years,
  fuels,
  setOptionFilterSelected,
  optionFilterSelected,
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
            cursor={"pointer"}
            onClick={() => {
              filterOptionsMenu();
              setIsFilter(true);

              brands
                ? setOptionFilterSelected!({
                    ...optionFilterSelected,
                    brand: elem,
                  })
                : models
                ? setOptionFilterSelected!({
                    ...optionFilterSelected,
                    model: elem,
                  })
                : colors
                ? setOptionFilterSelected!({
                    ...optionFilterSelected,
                    color: elem,
                  })
                : years
                ? setOptionFilterSelected!({
                    ...optionFilterSelected,
                    year: elem,
                  })
                : setOptionFilterSelected!({
                    ...optionFilterSelected,
                    fuel: elem,
                  });
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

export default Filters;
