import Header from "../../components/navBar";
import { Footer } from "../../components/footer";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { ContainerProfile, UlCardCars } from "./style";
import CarCard from "../../components/cards/car/car";
import { useContext, useEffect, useState } from "react";
import { contextHomeProvider } from "../../context/homePage.context";
import imgPerfil from "../../assets/ImgPerfil.svg";
import { NumberPage } from "./style";
import { useAuth } from "../../context/webContext";
import { useParams } from "react-router-dom";

export const AnnouncerProfileCard = () => {
  const { carsUser, onGetCarsUser } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);

  const { carAd, GetCardsAd } = useContext(contextHomeProvider);

  const pageLimit = 12;
  const pages = Math.ceil(carAd.length / pageLimit) - 1;
  const startPageAt = currentPage * pageLimit;
  const endPageAt = startPageAt + pageLimit;

  const { id } = useParams();

  useEffect(() => {
    GetCardsAd();
    onGetCarsUser(id!);
  }, []);

  const pageCard = () => {
    const cards = carAd.slice(startPageAt, endPageAt);

    return cards;
  };

  return (
    <ContainerProfile>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        maxWidth="1450px"
      >
        <Header />
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Flex
            bg={"grey.10"}
            w={"80%"}
            borderRadius={4}
            flexDirection={"column"}
            p={{ base: "30px 28px", xl: "37px 44px" }}
            gap={{ base: "25px", xl: "30px" }}
            marginTop={{ base: "65px", xl: "75px" }}
          >
            <Flex flexDirection={"column"} w={"104px"} h={"104px"}>
              <Image
                src={carsUser.image_url}
                borderRadius={"full"}
                alt="Foto do usuário"
              />
            </Flex>
            <Text as={"h2"} fontWeight={600} fontSize={"20px"}>
              {carsUser.name}
            </Text>
            <Text
              as={"p"}
              fontSize={"16px"}
              fontWeight={400}
              lineHeight={"28px"}
              color={"grey.2"}
              fontFamily={"inter"}
            >
              {carsUser.description}
            </Text>
          </Flex>
          <UlCardCars>
            {carsUser.cars?.map((card) => (
              <Box margin="0px" key={card.id}>
                <CarCard
                  description={card.description}
                  image={card.cover_image}
                  km={card.km}
                  price={card.price}
                  model={card.model}
                  brandCar={card.brand}
                  year={card.year}
                  id={card.id}
                  userName={carsUser.name}
                />
              </Box>
            ))}
          </UlCardCars>
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
              onClick={() =>
                currentPage > 0
                  ? setCurrentPage(currentPage - 1)
                  : setCurrentPage(0)
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
              hidden={pages == currentPage ? true : false}
              onClick={() => {
                currentPage < pages
                  ? setCurrentPage(currentPage + 1)
                  : setCurrentPage(pages);
              }}
            >
              Seguinte &gt;
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </ContainerProfile>
  );
};
