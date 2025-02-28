import { Box, Button, useDisclosure, Show, Hide, Flex } from "@chakra-ui/react";
import Header from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { useEffect } from "react";
import CardCardList from "./cardCarSection";
import { useAuth } from "../../context/webContext";
import { HomePanel } from "../../components/HomePanel";
import { PageSwitch } from "../../components/PageSwitch";
import {
  FilterCars,
  ModalFilterMobile,
} from "../../components/Modals/homeFilters";
import { useAuthHome } from "../../context/homePage.context";

export const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { userLogged } = useAuth();

  const {
    carAd,
    GetCardsAd,
    filteredCars,
    filterOptionsMenu,
    filterCarList,
    isFilter,
    inputCarsFiltered,
    isInputFilter,
    currentPage,
    currentPageFilter,
    optionFilterSelected,
    formatPrice,
    filterInputs,
  } = useAuthHome();

  const pageLimit =
    window.innerWidth == 1450 || window.innerWidth > 1450 ? 12 : 8;

  const startSliceAt =
    filteredCars.length != 0
      ? currentPageFilter * pageLimit
      : currentPage * pageLimit;

  const endSliceAt = startSliceAt + pageLimit;

  useEffect(() => {
    GetCardsAd();
    filterInputs();
    filterOptionsMenu();
    filterCarList();
    pageCard();
  }, [optionFilterSelected]);

  useEffect(() => {
    pageCard();
    GetCardsAd();
  }, [isFilter, userLogged]);

  const pageCard = () => {
    let cards: any = [];

    if (filteredCars.length != 0 && isFilter && !isInputFilter) {
      cards = filteredCars.slice(startSliceAt, endSliceAt);
    } else if ((isInputFilter && !isFilter) || isFilter) {
      cards = inputCarsFiltered.slice(startSliceAt, endSliceAt);
    } else if (!isFilter && !isInputFilter) {
      cards = carAd.slice(startSliceAt, endSliceAt);
    }

    formatPrice(cards);
    return cards;
  };

  return (
    <Box
      display={{ xl2m: "flex" }}
      w={{ base: "100%", lg3: 1110, xl2m: "100%" }}
      m={{ lg2m: "0 auto" }}
      alignItems={{ xl2m: "center" }}
      justifyContent={{ xl2m: "center" }}
    >
      <Flex
        justifyContent="center"
        flexDir="column"
        bgColor="grey.10"
        maxW="1450px"
      >
        <Header />
        <HomePanel />
        <Flex>
          <Show above={"lg2m"}>
            <FilterCars />
          </Show>
          <CardCardList pageCard={pageCard()} />
        </Flex>

        <Flex
          w={"100%"}
          mt="60px"
          mb="30px"
          alignItems="center"
          justifyContent="center"
        >
          <Hide above={"lg2m"}>
            <Button
              bg={"brand.1"}
              color={"grey.10"}
              w={{
                base: "250px",
                sm: "60%",
                md: "350px",
                lg: "400px",
                xl: "350px",
              }}
              borderRadius="5px"
              fontWeight="500"
              _hover={{ bg: "brand.2" }}
              onClick={() => {
                onOpen();
              }}
              mb="0px"
            >
              Filtros
            </Button>
          </Hide>
        </Flex>
        <PageSwitch />
        <ModalFilterMobile isOpen={isOpen} onClose={onClose} />
        <Footer />
      </Flex>
    </Box>
  );
};
