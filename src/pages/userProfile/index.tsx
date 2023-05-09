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
import { ContainerProfile, UlCardCars } from "./style";
import CarCard from "../../components/cards/car/car";
import { ModalCreateCarAd } from "../../components/modals/advertiserProfile/createCarsAd.modal";
import { ModalEditCarAd } from "../../components/modals/advertiserProfile/editCarsAd.modal";
import { useAuth } from "../../context/webContext";

export const ProfileCard = () => {
  const { userCarsProfile, userLogged, setSelectedCar, selectedCar } =
    useAuth();

  const {
    isOpen: isCreateOpen,
    onOpen: onCreateOpen,
    onClose: onCreateClose,
  } = useDisclosure();
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();

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
                borderRadius={"full"}
                src={userLogged.image_url}
                alt="Foto de perfil do usuário"
              />
            </Flex>
            <Text as={"h2"} fontWeight={600} fontSize={"20px"}>
              {userLogged.name}
            </Text>
            <Text
              as={"p"}
              fontSize={"16px"}
              fontWeight={400}
              lineHeight={"28px"}
              color={"grey.2"}
              fontFamily={"inter"}
            >
              {userLogged.description}
            </Text>
            <Button
              width="fit-content"
              color="brand.1"
              border="2px"
              bg="f7f7f7"
              borderColor="brand.1"
              borderRadius="4px"
              fontSize="0.875rem"
              onClick={onCreateOpen}
            >
              Criar Anuncio
            </Button>
          </Flex>
          <UlCardCars>
            {userCarsProfile.map((card) => {
              return (
                <Box margin="0px">
                  <CarCard
                    description={card.description}
                    image={card.cover_image}
                    km={card.km}
                    price={card.price}
                    model={card.model}
                    brandCar={card.brand}
                    year={card.year}
                    id={card.id}
                    key={card.id}
                    userName="usuário"
                  />
                  <Box display="flex" gap="20px" padding-bottom="20px">
                    <Button
                      width="fit-content"
                      color="gray.0"
                      border="2px"
                      bg="f7f7f7"
                      borderColor="gray.0"
                      borderRadius="4px"
                      fontSize="0.875rem"
                      onClick={() => {
                        setSelectedCar(card);
                        onEditOpen();
                      }}
                    >
                      Editar
                    </Button>
                    <Button
                      width="fit-content"
                      color="gray.0"
                      border="2px"
                      bg="f7f7f7"
                      borderColor="gray.0"
                      borderRadius="4px"
                      fontSize="0.875rem"
                    >
                      Ver Detalhes
                    </Button>
                  </Box>
                </Box>
              );
            })}
          </UlCardCars>
        </Box>
      </Box>
      <ModalCreateCarAd isOpen={isCreateOpen} onClose={onCreateClose} />
      <ModalEditCarAd isOpen={isEditOpen} onClose={onEditClose} />
      <Footer />
    </ContainerProfile>
  );
};
