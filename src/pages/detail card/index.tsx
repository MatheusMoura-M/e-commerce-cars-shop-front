import Header from "../../components/navBar";
import { Footer } from "../../components/footer";
import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";
import CoverImgCar from "../../assets/CoverImgCar.svg";
import imgPerfil from "../../assets/ImgPerfil.svg";
import imgPerfil1 from "../../assets/ImgPerfil1.svg";
import imgPerfil2 from "../../assets/ImgPerfil2.svg";
import imgPerfil3 from "../../assets/ImgPerfil3.svg";
import ContainerDetailCard from "./style";
import { BoxComment } from "../../components/boxComment";

export const DetailCard = () => {
  return (
    <>
      <ContainerDetailCard>
        <Header />
        <Container
          as={"section"}
          display={"flex"}
          flexDirection={{ base: "column", xl: "row" }}
          alignItems={{ base: "center", xl: "unset" }}
          p={0}
          minW={"100%"}
          justifyContent={"center"}
          gap={46}
          mb={"16px"}
        >
          <Flex
            as={"section"}
            mt={"40px"}
            flexDirection={"column"}
            alignItems={{ base: "center", xl: "unset" }}
            gap={"1rem"}
            width={{ base: "90%", xl: "unset" }}
          >
            <Flex
              bg={"grey.10"}
              h={355}
              w={{ base: "100%", sm3: 700, md: 752 }}
              borderRadius={4}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                src={CoverImgCar}
                alt="Imagem de um carro branco"
                w={441}
                h={253}
              />
            </Flex>
            <Flex
              bg={"grey.10"}
              h={{ base: 326, sm1: 240 }}
              w={{ base: "100%", sm3: 700, md: 752 }}
              borderRadius={4}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Flex
                alignItems={"flex-start"}
                flexDirection={"column"}
                p={{ base: "28px 20px 28px 28px", xl: "44px 49px 28px 44px" }}
              >
                <Box mb={"41px"}>
                  <Text
                    as={"h2"}
                    fontWeight={600}
                    color={"grey.1"}
                    fontSize={"20px"}
                  >
                    Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200
                  </Text>
                </Box>
                <Flex
                  justifyContent={"space-between"}
                  w={"100%"}
                  mb={"24px"}
                  flexDirection={{ base: "column", sm: "row" }}
                  gap={{ base: "32px", sm: "unset" }}
                >
                  <Flex
                    gap={"12px"}
                    className="aboutKmYear-container"
                    justifyContent={{ base: "flex-start", sm: "center" }}
                    alignItems={"center"}
                    mt={0}
                  >
                    <Text as="span" fontFamily={"inter"}>
                      2013
                    </Text>
                    <Text as="span" fontFamily={"inter"}>
                      0 KM
                    </Text>
                  </Flex>
                  <Flex alignItems={"center"}>
                    <Text as="span" className="priceCar">
                      R$ 00.000,00
                    </Text>
                  </Flex>
                </Flex>
                <Button
                  variant={"brand1"}
                  p={0}
                  w={100}
                  h={"38px"}
                  borderRadius={4}
                  fontSize={"14px"}
                  fontFamily={"inter"}
                >
                  Comprar
                </Button>
              </Flex>
            </Flex>
            <Flex
              bg={"grey.10"}
              h={213}
              w={{ base: "100%", sm3: 700, md: 752 }}
              borderRadius={4}
              flexDirection={"column"}
              alignItems={"flex-start"}
              justifyContent={"center"}
              gap={"2rem"}
              p={"36px 44px"}
            >
              <Text
                as={"h2"}
                fontWeight={600}
                color={"grey.1"}
                fontSize={"20px"}
              >
                Descrição
              </Text>
              <Text
                as={"p"}
                fontWeight={400}
                fontSize={"16px"}
                fontFamily={"inter"}
                color={"grey.2"}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis earum fuga porro inventore, alias quod eos accusantium
                impedit, voluptate veniam eligendi velit, iusto praesentium
                doloremque ea? Labore aperiam et sapiente.
              </Text>
            </Flex>
          </Flex>
          <Flex
            flexDirection={"column"}
            gap={"34px"}
            w={{ base: "90%", xl: "unset" }}
          >
            <Flex
              bg={"grey.10"}
              h={377}
              w={{ base: "100%", xl: 440 }}
              borderRadius={4}
              alignItems={"flex-start"}
              justifyContent={"center"}
              mt={"40px"}
              flexDirection={"column"}
              p={"36px 44px"}
            >
              <Text fontWeight={600} fontSize={"20px"} mb={"32px"}>
                Fotos
              </Text>
              <Flex wrap={"wrap"} gap={"32px 14px"}>
                <Flex
                  alignItems={"center"}
                  w={108}
                  h={108}
                  p={"27px 7px"}
                  bg={"grey.7"}
                  borderRadius={4}
                >
                  <Image src={CoverImgCar} alt="Imagem de um carro Branco" />
                </Flex>
                <Flex
                  alignItems={"center"}
                  w={108}
                  h={108}
                  p={"27px 7px"}
                  bg={"grey.7"}
                  borderRadius={4}
                >
                  <Image src={CoverImgCar} alt="Imagem de um carro Branco" />
                </Flex>
                <Flex
                  alignItems={"center"}
                  w={108}
                  h={108}
                  p={"27px 7px"}
                  bg={"grey.7"}
                  borderRadius={4}
                >
                  <Image src={CoverImgCar} alt="Imagem de um carro Branco" />
                </Flex>
                <Flex
                  alignItems={"center"}
                  w={108}
                  h={108}
                  p={"27px 7px"}
                  bg={"grey.7"}
                  borderRadius={4}
                >
                  <Image src={CoverImgCar} alt="Imagem de um carro Branco" />
                </Flex>
                <Flex
                  alignItems={"center"}
                  w={108}
                  h={108}
                  p={"27px 7px"}
                  bg={"grey.7"}
                  borderRadius={4}
                >
                  <Image src={CoverImgCar} alt="Imagem de um carro Branco" />
                </Flex>
                <Flex
                  alignItems={"center"}
                  w={108}
                  h={108}
                  p={"27px 7px"}
                  bg={"grey.7"}
                  borderRadius={4}
                >
                  <Image src={CoverImgCar} alt="Imagem de um carro Branco" />
                </Flex>
              </Flex>
            </Flex>
            <Flex
              bg={"grey.10"}
              h={426}
              w={{ base: "100%", xl: 440 }}
              borderRadius={4}
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
              p={"37px 44px"}
              gap={"30px"}
            >
              <Flex flexDirection={"column"} w={"104px"} h={"104px"}>
                <Image src={imgPerfil} alt="Foto de perfil do usuário" />
              </Flex>
              <Text as={"h2"} fontWeight={600} fontSize={"20px"}>
                Samuel Leão
              </Text>
              <Text
                as={"p"}
                fontSize={"16px"}
                fontWeight={400}
                lineHeight={"28px"}
                color={"grey.2"}
                textAlign={"center"}
                fontFamily={"inter"}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </Text>
              <Button
                variant={"grey0"}
                w={206}
                borderRadius={4}
                fontFamily={"inter"}
              >
                Ver todos anúncios
              </Button>
            </Flex>
          </Flex>
        </Container>
        <Flex
          as={"section"}
          w={{ base: "100%", xl: "59.3%" }}
          alignItems={{ base: "center", xl: "flex-end" }}
          justifyContent={"center"}
          flexDirection={"column"}
          gap={33}
        >
          <Container
            minW={"100%"}
            borderRadius={4}
            p={0}
            m={0}
            display={"flex"}
            justifyContent={{ base: "center", xl: "flex-end" }}
          >
            <Flex
              bg={"grey.10"}
              w={{ base: "90%", xl: 752 }}
              p={"36px 44px"}
              flexDirection={"column"}
              borderRadius={4}
              alignItems={"center"}
            >
              <Text
                color={"grey.1"}
                fontWeight={600}
                fontSize={"20px"}
                mb={"24px"}
              >
                Comentários
              </Text>
              <Flex flexDirection={"column"} gap={"44px"}>
                <Flex flexDirection={"column"} gap={"12px"}>
                  <Flex gap={"10px"} alignItems={"center"}>
                    <Image src={imgPerfil2} alt="Imagem de perfil do usuário" />
                    <Text
                      as={"h3"}
                      color={"grey.1"}
                      fontFamily={"inter"}
                      fontWeight={"500"}
                      fontSize={"14px"}
                    >
                      Júlia Lima
                    </Text>
                    <Text
                      as={"span"}
                      fontSize={"12px"}
                      fontFamily={"inter"}
                      fontWeight={400}
                      color={"grey.3"}
                      mt={"3px"}
                    >
                      • &ensp;há 3 dias
                    </Text>
                  </Flex>
                  <Text
                    as={"p"}
                    fontFamily={"inter"}
                    fontWeight={400}
                    fontSize={"14px"}
                    color={"grey.2"}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Text>
                </Flex>
                <Flex flexDirection={"column"} gap={"12px"}>
                  <Flex gap={"10px"} alignItems={"center"}>
                    <Image src={imgPerfil1} alt="Imagem de perfil do usuário" />
                    <Text
                      as={"h3"}
                      color={"grey.1"}
                      fontFamily={"inter"}
                      fontWeight={"500"}
                      fontSize={"14px"}
                    >
                      Marcos Antônio
                    </Text>
                    <Text
                      as={"span"}
                      fontSize={"12px"}
                      fontFamily={"inter"}
                      fontWeight={400}
                      color={"grey.3"}
                      mt={"3px"}
                    >
                      • &ensp;há 7 dias
                    </Text>
                  </Flex>
                  <Text
                    as={"p"}
                    fontFamily={"inter"}
                    fontWeight={400}
                    fontSize={"14px"}
                    color={"grey.2"}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Text>
                </Flex>
                <Flex flexDirection={"column"} gap={"12px"}>
                  <Flex gap={"10px"} alignItems={"center"}>
                    <Image src={imgPerfil3} alt="Imagem de perfil do usuário" />
                    <Text
                      as={"h3"}
                      color={"grey.1"}
                      fontFamily={"inter"}
                      fontWeight={"500"}
                      fontSize={"14px"}
                    >
                      Camila Silva
                    </Text>
                    <Text
                      as={"span"}
                      fontSize={"12px"}
                      fontFamily={"inter"}
                      fontWeight={400}
                      color={"grey.3"}
                      mt={"3px"}
                    >
                      • &ensp;há 1 mês
                    </Text>
                  </Flex>
                  <Text
                    as={"p"}
                    fontFamily={"inter"}
                    fontWeight={400}
                    fontSize={"14px"}
                    color={"grey.2"}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Container>
          <BoxComment isLogged />
        </Flex>
      </ContainerDetailCard>
      <Footer />
    </>
  );
};
