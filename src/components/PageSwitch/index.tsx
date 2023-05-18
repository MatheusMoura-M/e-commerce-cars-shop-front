import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { contextHomeProvider } from "../../context/homePage.context";

export const PageSwitch = () => {
  const {
    carAd,
    filteredCars,
    currentPage,
    setCurrentPage,
    currentPageFilter,
    setCurrentPageFilter,
  } = useContext(contextHomeProvider);

  const pageLimit =
    window.innerWidth == 1450 || window.innerWidth > 1450 ? 12 : 8;

  const pages =
    filteredCars.length != 0
      ? Math.ceil(filteredCars.length / pageLimit)
      : Math.ceil(carAd.length / pageLimit);

  return (
    <Box>
      <Flex alignItems={"center"} justifyContent={"center"} m={"20px 0 10px 0"}>
        {filteredCars.length != 0 ? (
          <>
            <Text
              as={"span"}
              display={"block"}
              fontWeight={600}
              mr={"5px"}
              fontSize={"1rem"}
              color={"grey.2"}
            >
              {currentPageFilter + 1}
            </Text>
            <Text
              as={"span"}
              display={"block"}
              fontWeight={600}
              color={"grey.3"}
            >
              de {!filteredCars.length ? 1 : pages}
            </Text>
          </>
        ) : (
          <>
            <Text
              as={"span"}
              display={"block"}
              fontWeight={600}
              mr={"5px"}
              fontSize={"1rem"}
              color={"grey.2"}
            >
              {currentPage + 1}
            </Text>
            <Text
              as={"span"}
              display={"block"}
              fontWeight={600}
              color={"grey.3"}
            >
              de {!carAd.length ? 1 : pages}
            </Text>
          </>
        )}
      </Flex>
      <Flex justifyContent="center">
        {filteredCars.length != 0 ? (
          <>
            <Button
              bg={"grey.10"}
              color={"brand.2"}
              fontWeight="600"
              fontSize="1.10rem"
              mb="30px"
              hidden={currentPageFilter + 1 == 1 ? true : false}
              onClick={() =>
                currentPageFilter > 0
                  ? setCurrentPageFilter(currentPageFilter - 1)
                  : setCurrentPageFilter(currentPageFilter - 1)
              }
            >
              &lt; Anterior
            </Button>
            <Button
              as="a"
              bg={"grey.10"}
              color={"brand.2"}
              fontWeight="600"
              fontSize="1.10rem"
              mb="30px"
              hidden={
                pages == currentPageFilter + 1 || !filteredCars.length
                  ? true
                  : false
              }
              onClick={() => {
                currentPageFilter < pages
                  ? setCurrentPageFilter(currentPageFilter + 1)
                  : setCurrentPageFilter(pages);
              }}
            >
              Seguinte &gt;
            </Button>
          </>
        ) : (
          <>
            <Button
              bg={"grey.10"}
              color={"brand.2"}
              fontWeight="600"
              fontSize="1.10rem"
              mb="30px"
              hidden={currentPage + 1 == 1 ? true : false}
              onClick={() =>
                currentPage > 0
                  ? setCurrentPage(currentPage - 1)
                  : setCurrentPage(currentPage - 1)
              }
            >
              &lt; Anterior
            </Button>
            <Button
              bg={"grey.10"}
              color={"brand.2"}
              fontWeight="600"
              fontSize="1.10rem"
              mb="30px"
              hidden={pages == currentPage + 1 || !carAd.length ? true : false}
              onClick={() => {
                currentPage < pages
                  ? setCurrentPage(currentPage + 1)
                  : setCurrentPage(pages);
              }}
            >
              Seguinte &gt;
            </Button>
          </>
        )}
      </Flex>
    </Box>
  );
};
