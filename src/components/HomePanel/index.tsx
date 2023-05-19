import { Flex, Text } from "@chakra-ui/react";
import ImgPorsche from "../../assets/imgCardCar/porsche.svg";

export const HomePanel = () => {
  return (
    <Flex
      as={"section"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDir={"column"}
      position={"relative"}
      h={{ base: 590, smm: 620, md1: 400 }}
      bgImage={ImgPorsche}
      // bgImage={`url(${ImgPorsche})`}
      bgSize={{ base: "150%", smm: "130%", xsm3: "100%", md3: "1000px" }}
      bgRepeat={"no-repeat"}
      bgPosition={"center"}
    >
      <Flex
        position={"absolute"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={{ md1: "center" }}
        color={"white"}
        w={"100%"}
        h={"100%"}
        bgGradient="linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%)"
      >
        <Text
          as={"h2"}
          fontSize={"2rem"}
          fontWeight={500}
          m={{ base: "80px 0px 20px", md1: 0 }}
        >
          Motors Shop
        </Text>
        <Text
          as={"p"}
          fontSize={"1.5rem"}
          textAlign={"center"}
          w={{ base: "100%", smm: "95%" }}
          fontWeight={500}
          lineHeight={"30px"}
        >
          A melhor plataforma de anúncios de carros do país
        </Text>
      </Flex>
    </Flex>
  );
};
