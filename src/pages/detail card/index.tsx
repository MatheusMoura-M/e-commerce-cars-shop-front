import Header from "../../components/header";
import { Footer } from "../../components/footer";
import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";
import CoverImgCar from "../../assets/CoverImgCar.svg";
import imgPerfil from "../../assets/ImgPerfil.svg";
import imgPerfil1 from "../../assets/ImgPerfil1.svg";
import imgPerfil2 from "../../assets/ImgPerfil2.svg";
import imgPerfil3 from "../../assets/ImgPerfil3.svg";
import ContainerDetailCard from "./style";

export const DetailCard = () => {
  return (
    <>
      <Header />
      <ContainerDetailCard>
        <Container
          as={"section"}
          display={"flex"}
          flexDirection={"row"}
          p={0}
          minW={"100%"}
          justifyContent={"center"}
          gap={"46px"}
        >
          <Flex
            as={"section"}
            mt={"40px"}
            flexDirection={"column"}
            gap={"1rem"}
          >
            <Flex
              bg={"grey.10"}
              h={"355px"}
              w={"752px"}
              borderRadius={"4px"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                src={CoverImgCar}
                alt="Imagem de um carro branco"
                w={"441px"}
                h={"253px"}
              />
            </Flex>
            <Flex
              bg={"grey.10"}
              h={"240px"}
              w={"752px"}
              borderRadius={"4px"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Flex
                alignItems={"flex-start"}
                flexDirection={"column"}
                p={"44px 49px 28px 44px"}
              >
                <Box mb={"41px"}>
                  <Text
                    as={"h2"}
                    fontWeight={600}
                    color={"grey.1"}
                    fontSize={"20px"}
                    fontFamily={"lexend"}
                  >
                    Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200
                  </Text>
                </Box>
                <Flex justifyContent={"space-between"} w={"100%"} mb={"24px"}>
                  <Flex
                    gap={"12px"}
                    className="aboutKmYear-container"
                    justifyContent={"center"}
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
                  w={"100px"}
                  h={"38px"}
                  borderRadius={"4px"}
                  fontSize={"14px"}
                  fontFamily={"inter"}
                >
                  Comprar
                </Button>
              </Flex>
            </Flex>
            <Flex
              bg={"grey.10"}
              h={"213px"}
              w={"752px"}
              borderRadius={"4px"}
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
                fontFamily={"lexend"}
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
          <Flex flexDirection={"column"} gap={"34px"}>
            <Flex
              bg={"grey.10"}
              h={"377px"}
              w={"440px"}
              borderRadius={"4px"}
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
                  w={"108px"}
                  h={"108px"}
                  p={"27px 7px"}
                  bg={"grey.7"}
                  borderRadius={"4px"}
                >
                  <Image src={CoverImgCar} alt="Imagem de um carro Branco" />
                </Flex>
                <Flex
                  alignItems={"center"}
                  w={"108px"}
                  h={"108px"}
                  p={"27px 7px"}
                  bg={"grey.7"}
                  borderRadius={"4px"}
                >
                  <Image src={CoverImgCar} alt="Imagem de um carro Branco" />
                </Flex>
                <Flex
                  alignItems={"center"}
                  w={"108px"}
                  h={"108px"}
                  p={"27px 7px"}
                  bg={"grey.7"}
                  borderRadius={"4px"}
                >
                  <Image src={CoverImgCar} alt="Imagem de um carro Branco" />
                </Flex>
                <Flex
                  alignItems={"center"}
                  w={"108px"}
                  h={"108px"}
                  p={"27px 7px"}
                  bg={"grey.7"}
                  borderRadius={"4px"}
                >
                  <Image src={CoverImgCar} alt="Imagem de um carro Branco" />
                </Flex>
                <Flex
                  alignItems={"center"}
                  w={"108px"}
                  h={"108px"}
                  p={"27px 7px"}
                  bg={"grey.7"}
                  borderRadius={"4px"}
                >
                  <Image src={CoverImgCar} alt="Imagem de um carro Branco" />
                </Flex>
                <Flex
                  alignItems={"center"}
                  w={"108px"}
                  h={"108px"}
                  p={"27px 7px"}
                  bg={"grey.7"}
                  borderRadius={"4px"}
                >
                  <Image src={CoverImgCar} alt="Imagem de um carro Branco" />
                </Flex>
              </Flex>
            </Flex>
            <Flex
              bg={"grey.10"}
              h={"426px"}
              w={"426px"}
              borderRadius={"4px"}
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
              p={"37px 44px"}
              gap={"30px"}
            >
              <Flex flexDirection={"column"} w={"104px"} h={"104px"}>
                <Image src={imgPerfil} alt="Foto de perfil do usuário" />
              </Flex>
              <Text
                as={"h2"}
                fontWeight={600}
                fontSize={"20px"}
                fontFamily={"lexend"}
              >
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
                w={"206px"}
                borderRadius={"4px"}
                fontFamily={"inter"}
              >
                Ver todos anúncios
              </Button>
            </Flex>
          </Flex>
        </Container>
      </ContainerDetailCard>
    </>
  );
};
