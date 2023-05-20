import Header from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import CarCard from "../../components/Cards/car";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/webContext";
import { useParams } from "react-router-dom";
import { ModalCreateCarAd } from "../../components/Modals/advertiserProfile/createCarsAd.modal";
import { iCarResponse } from "../../interface";

export const AnnouncerProfileCard = () => {
  const { onGetSellerCars, sellerData, userLogged, carsSeller } = useAuth();
  const [currentPage, setCurrentPage] = useState(0);
  const { id } = useParams();
  const userId = userLogged.id;

  const {
    isOpen: isCreateOpen,
    onOpen: onCreateOpen,
    onClose: onCreateClose,
  } = useDisclosure();

  let pageLimit = 0;

  if (window.innerWidth >= 1450) {
    pageLimit = 16;
  } else {
    pageLimit = 9;
  }

  const pages = Math.ceil(carsSeller.length / pageLimit);
  const startSliceAt = currentPage * pageLimit;
  const endSliceAt = startSliceAt + pageLimit;

  useEffect(() => {
    onGetSellerCars(id!);
  }, [id]);

  const pageCard = () => {
    let cards: any = [];
    cards = carsSeller.slice(startSliceAt, endSliceAt);
    return cards;
  };

  return (
    <Container
      as={"section"}
      p={0}
      display={"flex"}
      flexDir={"column"}
      h={"auto"}
      m={"0 auto"}
      maxW={1450}
      bgGradient="linear-gradient(
        180deg,
        #4529e6 370px,
        #f7f7f7 50px,
        #f7f7f7 50px)"
    >
      <Header />
      <Flex justifyContent="center" flexDir="column" maxW="1450px">
        <Flex
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box w={{ base: "90%", lg4: 1000 }}>
            <Flex
              bg={"grey.10"}
              w="100%"
              borderRadius={4}
              flexDir={"column"}
              p={{ base: "30px 28px", xl: "37px 44px" }}
              gap={{ base: "25px", xl: "30px" }}
              mt={{ base: "65px", xl: "75px" }}
            >
              <Flex flexDir={"column"} w={"104px"} h={"104px"}>
                <Image
                  src={sellerData.image_url}
                  borderRadius={"full"}
                  alt="Foto do usuário"
                  h={"100%"}
                  w={"100%"}
                  objectFit={"cover"}
                />
              </Flex>

              <Flex flexWrap="wrap">
                <Text
                  as={"h2"}
                  fontWeight={600}
                  fontSize={"20px"}
                  mr="13px"
                  mb="5px"
                  maxW={"250px"}
                  textOverflow={"ellipsis"}
                  whiteSpace={"nowrap"}
                  overflow={"hidden"}
                >
                  {sellerData.name}
                </Text>
                <Text
                  bgColor="brand.4"
                  color="brand.1"
                  w="100px"
                  fontSize="0.875rem"
                  fontWeight="500"
                  h="29px"
                  textAlign="center"
                  pt="4px"
                  borderRadius="3px"
                >
                  Anunciante
                </Text>
              </Flex>
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
                  w="140px"
                  fontSize="0.875rem"
                  borderRadius="3px"
                  border="2px"
                  borderColor="brand.1"
                  bgColor="transparent"
                  color="brand.1"
                  _hover={{ bgColor: "brand.4" }}
                  mb="5px"
                  onClick={onCreateOpen}
                >
                  Criar Anúncio
                </Button>
              )}
            </Flex>
          </Box>
          <Flex
            as={"ul"}
            overflowX={"scroll"}
            w={{ base: "95.5%", lg2m: 1000, xl2m: 1350 }}
            h={{ base: 450, lg2m: "auto" }}
            m={{ base: "60px 0px 0px 15px", lg2m: "60px 0px 0px 0px" }}
            overflow={{ lg2m: "hidden" }}
            flexWrap={{ lg2m: "wrap" }}
            flexDir={{ lg2m: "row" }}
            justifyContent={{ lg2m: "flex-start" }}
            alignItems={{ lg2m: "flex-start" }}
            gap={{ lg2m: "20px" }}
            sx={{
              "::-webkit-scrollbar": {
                w: "10px",
                h: "12px",
              },
              "::-webkit-scrollbar-track": {
                bg: "grey.3",
                borderRadius: "10px",
                w: "10px",
              },
              "::-webkit-scrollbar-thumb": {
                bg: "grey.4",
                borderRadius: "24px",
              },
            }}
          >
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
          </Flex>
        </Flex>
        {/* PageSwitch */}
        <Box>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"row"}
            mt={"40px"}
          >
            <Text
              as={"span"}
              display={"block"}
              fontWeight={600}
              color={"grey.2"}
              mr={"5px"}
              fontSize={"1rem"}
            >
              {currentPage + 1}
            </Text>
            <Text
              as={"span"}
              display={"block"}
              fontWeight={600}
              color={"grey.3"}
            >
              de {!carsSeller.length ? 1 : pages}
            </Text>
          </Flex>
          <Flex justifyContent="center">
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
          </Flex>
        </Box>
      </Flex>
      <Footer />
      <ModalCreateCarAd isOpen={isCreateOpen} onClose={onCreateClose} />
    </Container>
  );
};
