import {
  Box,
  Button,
  useDisclosure,
  Show,
  Hide,
  Link,
  Card,
} from "@chakra-ui/react";
import { ContainerHomePage, HomePanel, NumberPage } from "./style";
import ModalFilterMobile from "../../components/modals/home/filter/filterCarsMobile.modal";
import FilterCars from "../../components/modals/home/filter/filterCars.modal";
import Header from "../../components/navBar";
import { Footer } from "../../components/footer";
import { useState, useContext, useEffect } from "react";
import { contextHomeProvider } from "../../context/homePage.context";
import CardCardList from "./cardCarSection";


export const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentPage, setCurrentPage] = useState(0);
  const arraySkelotons = new Array(12).fill("cards");

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [currentPageFilter, setCurrentPageFilter] = useState(0);
  const [firstCardId, setFirstCardId] = useState<string>("");

  const {
    carAd,
    GetCardsAd,
    filteredCars,
    filterOptionsMenu,
    filterCarList,
    isFilter,
    inputCarsFiltered,
    isInputFilter,
    brandSelected,
    modelSelected,
    colorSelected,
    yearSelected, 
    fuelSelected,
  } = useContext(contextHomeProvider);

  const pageLimit =
    window.innerWidth == 1450 || window.innerWidth > 1450 ? 12 : 8;

  const pages =
    filteredCars.length != 0
      ? Math.ceil(filteredCars.length / pageLimit)
      : Math.ceil(carAd.length / pageLimit);

  const startSliceAt =
    filteredCars.length != 0
      ? currentPageFilter * pageLimit
      : currentPage * pageLimit;

  const endSliceAt = startSliceAt + pageLimit;

  useEffect(() => {
    GetCardsAd();
    filterOptionsMenu();
    filterCarList();
    pageCard();
  }, [
    brandSelected,
    modelSelected,
    colorSelected,
    yearSelected, 
    fuelSelected
  ]);
  
  useEffect(() => {
    pageCard();
  }, [isFilter]);

  const pageCard = () => {
    let cards: any = [];

    
    if (filteredCars.length != 0 && isFilter && !isInputFilter) {
      cards = filteredCars.slice(startSliceAt, endSliceAt);
    } else if ((isInputFilter && !isFilter) || isFilter) {
      cards = inputCarsFiltered.slice(startSliceAt, endSliceAt);
    } else if (!isFilter && !isInputFilter) {
      cards = carAd.slice(startSliceAt, endSliceAt);
    }

    return cards;
    
  };

  return (
    <ContainerHomePage>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        bgColor="grey.10"
        maxWidth="1450px"
      >
        <Header />

        <HomePanel>
          <div>
            <h2>Motors Shop</h2>
            <p>A melhor plataforma de anúncios de carros do país</p>
          </div>
        </HomePanel>
        <Box display="flex">
          <Show breakpoint="(min-width: 1110px)">
            <FilterCars />
          </Show>
          <CardCardList pageCard={pageCard()} setFirstCardId={setFirstCardId} />
        </Box>

        <Box
          w={"100%"}
          mt="60px"
          mb="30px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Hide breakpoint="(min-width: 1110px)">
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
              _hover={{ background: "brand.2" }}
              onClick={() => {
                onOpen();
              }}
              mb="0px"
            >
              Filtros
            </Button>
          </Hide>
        </Box>
        <Box>
          <NumberPage>
            {filteredCars.length != 0 ? (
              <>
                <span>{currentPageFilter + 1}</span>
                <span>de {!filteredCars.length ? 1 : pages}</span>
              </>
            ) : (
              <>
                <span>{currentPage + 1}</span>
                <span>de {!carAd.length ? 1 : pages}</span>
              </>
            )}
          </NumberPage>
          <Box display="flex" justifyContent="center">
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
                  hidden={
                    pages == currentPage + 1 || !carAd.length ? true : false
                  }
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
          </Box>
        </Box>

        <ModalFilterMobile isOpen={isOpen} onClose={onClose} />

        <Footer />
      </Box>
    </ContainerHomePage>
  );
};
