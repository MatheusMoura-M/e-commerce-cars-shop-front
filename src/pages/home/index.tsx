import { Box, Button, useDisclosure, Show, Hide } from "@chakra-ui/react";
import { ContainerHomePage, HomePanel, NumberPage, UlCardCars } from "./style";
import CarCard from "../../components/cards/car/car";
import ModalFilterMobile from "../../components/modals/home/filterCarsMobile.modal";
import FilterCars from "../../components/modals/home/filterCars.modal";
import Header from "../../components/navBar";
import { Footer } from "../../components/footer";
import { useState, useContext, useEffect } from "react";
import { contextHomeProvider } from "../../context/homePage.context";

export const Home = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentPage, setCurrentPage] = useState(1)
  const [cadsPage, setCardPage] = useState([])
  
  const {carAd, GetCardsAd} = useContext(contextHomeProvider)
  
  const pageLimit = 12
  const pages = Math.ceil(carAd.length / pageLimit) - 1
  const startPageAt = currentPage * pageLimit
  const endPageAt = startPageAt + pageLimit

  useEffect(() => {
    GetCardsAd()
  }, [])

  const pageCard = () => {

    const cards = carAd.slice(startPageAt, endPageAt)

    return cards

  }

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
          <Show breakpoint="(min-width: 1030px)">
            <FilterCars />
          </Show>
          <UlCardCars>
            {
              pageCard().map(card => {
                return (
                  <CarCard 
                    description={card.description} 
                    image={card.cover_image} 
                    km={card.km}
                    price={card.price} 
                    nameCar={card.model}
                    brandCar={card.brand}
                    year={card.year} 
                    key={card.id}
                    userName="usuário"  
                  />
                )
              })
            }
          </UlCardCars>
        </Box>

        <Box
          w={"100%"}
          mt="60px"
          mb="30px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Hide breakpoint="(min-width: 1030px)">
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
              onClick={onOpen}
            >
              Filtros
            </Button>
          </Hide>
        </Box>
        <Box>
          <NumberPage>
            <span>{currentPage}</span>
            <span>de {pages}</span>
          </NumberPage>
          <Box display="flex" justifyContent="center">
            <Button
              bg={"grey.10"}
              color={"brand.2"}
              fontWeight="600"
              fontSize="1.10rem"
              mb="30px"
              hidden={currentPage == 1 ? true : false}
              onClick={() => currentPage > 0 ? setCurrentPage(currentPage - 1) : setCurrentPage(0)}
            >
              &lt; Anterior
            </Button>
            <Button
              bg={"grey.10"}
              color={"brand.2"}
              fontWeight="600"
              fontSize="1.10rem"
              mb="30px"
              hidden={pages ==  currentPage? true : false}
              onClick={() => 
                {currentPage < pages ?  setCurrentPage(currentPage + 1) : setCurrentPage(pages)}
              }
            >
              Seguinte &gt;
            </Button>
          </Box>
        </Box>

        <ModalFilterMobile isOpen={isOpen} onClose={onClose} />
        <Footer />
      </Box>
    </ContainerHomePage>
  );
};
