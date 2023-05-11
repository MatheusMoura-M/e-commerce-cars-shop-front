import Header from "../../components/navBar";
import { Footer } from "../../components/footer";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ContainerProfile, ContainerSallerInfo, UlCardCars } from "./style";
import CarCard from "../../components/cards/car/car";
import { useContext, useEffect, useState } from "react";
import { contextHomeProvider } from "../../context/homePage.context";
import imgPerfil from "../../assets/ImgPerfil.svg";
import { NumberPage } from "./style";
import { useAuth } from "../../context/webContext";
import { useParams } from "react-router-dom";
import { iCarResponse } from "../../interface/car.interface";
import { ModalCreateCarAd } from "../../components/modals/advertiserProfile/createCarsAd.modal";
import { ModalEditCarAd } from "../../components/modals/advertiserProfile/editCarsAd.modal";

export const AnnouncerProfileCard = () => {
  const {
    carsUser,
    onGetCarsUser,
    onGetSellerCars,
    sellerData,
    userLogged,
    carsSeller,
  } = useAuth();

  const {
    isOpen: isCreateOpen,
    onOpen: onCreateOpen,
    onClose: onCreateClose,
  } = useDisclosure();

  const [currentPage, setCurrentPage] = useState(0);

  let pageLimit = 0;

  if (window.innerWidth >= 1450) {
    pageLimit = 16;
  } else {
    pageLimit = 9;
  }

  const pages = Math.ceil(carsSeller.length / pageLimit);

  const startSliceAt = currentPage * pageLimit;
  const endSliceAt = startSliceAt + pageLimit;

  const { id } = useParams();
  const userId = userLogged.id;

  useEffect(() => {
    onGetSellerCars(id!);
  }, [id]);

  const pageCard = () => {
    let cards: any = [];
    cards = carsSeller.slice(startSliceAt, endSliceAt);

    return cards;
  };

  return (
    <>
      <ContainerProfile>
        <Header />
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          maxWidth="1450px"
        >
          <Box
            display="flex"
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <ContainerSallerInfo>
              <Flex
                bg={"grey.10"}
                w="100%"
                borderRadius={4}
                flexDirection={"column"}
                p={{ base: "30px 28px", xl: "37px 44px" }}
                gap={{ base: "25px", xl: "30px" }}
                marginTop={{ base: "65px", xl: "75px" }}
              >
                <Flex flexDirection={"column"} w={"104px"} h={"104px"}>
                  <Image
                    src={sellerData.image_url}
                    borderRadius={"full"}
                    alt="Foto do usuário"
                  />
                </Flex>

                <Box display="flex" flexWrap="wrap">
                  <Text
                    as={"h2"}
                    fontWeight={600}
                    fontSize={"20px"}
                    marginRight="13px"
                    marginBottom="5px"
                    w={"250px"}
                    textOverflow={"ellipsis"}
                    whiteSpace={"nowrap"}
                    overflow={"hidden"}
                  >
                    {sellerData.name}
                  </Text>
                  <Text
                    bgColor="brand.4"
                    color="brand.1"
                    width="100px"
                    fontSize="0.875rem"
                    fontWeight="500"
                    height="29px"
                    textAlign="center"
                    pt="4px"
                    borderRadius="3px"
                  >
                    Anunciante
                  </Text>
                </Box>
                <Text
                  as={"p"}
                  fontSize={"16px"}
                  fontWeight={400}
                  lineHeight={"28px"}
                  color={"grey.2"}
                  fontFamily={"inter"}
                  textAlign="left"
                >
                  {sellerData.description}
                </Text>
                {sellerData.id == userId && (
                  <Button
                    width="140px"
                    fontSize="0.875rem"
                    borderRadius="3px"
                    border="2px"
                    borderColor="brand.1"
                    bgColor="transparent"
                    color="brand.1"
                    _hover={{ bgColor: "brand.4" }}
                    marginBottom="5px"
                    onClick={onCreateOpen}
                  >
                    Criar Anúncio
                  </Button>
                )}
              </Flex>
            </ContainerSallerInfo>
            <UlCardCars>
              {pageCard().map((card: iCarResponse) => {
                return (
                  <CarCard
                    key={card.id}
                    description={card.description}
                    image={card.cover_image}
                    km={card.km}
                    price={card.price}
                    model={card.model}
                    imageUrl={sellerData.image_url}
                    brandCar={card.brand}
                    year={card.year}
                    id={card.id}
                    sellerName={sellerData.name}
                    buttonsSection={userId == sellerData.id ? true : false}
                    isPublished={card.published ? true : false}
                    buttonStatus={userId == sellerData.id ? false : true}
                    cardObj={card}
                  />
                );
              })}
            </UlCardCars>
          </Box>
          <Box>
            <NumberPage>
              <span>{currentPage + 1}</span>
              <span>de {!carsSeller.length ? 1 : pages}</span>
            </NumberPage>
            <Box display="flex" justifyContent="center">
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
                  pages == currentPage + 1 || carsSeller.length == 0
                    ? true
                    : false
                }
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
      <ModalCreateCarAd isOpen={isCreateOpen} onClose={onCreateClose} />
    </>
  );
};
