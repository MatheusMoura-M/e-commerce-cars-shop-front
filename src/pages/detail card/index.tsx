import Header from "../../components/header";
import { Footer } from "../../components/footer";
import { Box, Container, Flex, Image } from "@chakra-ui/react";

export const DetailCard = () => {
  return (
    <Container
      as="section"
      bg={"#F7F7F7"}
      bgGradient={
        "linear-gradient(180deg, #4529E6 31.25%, #F1F3F5 31.26%, #F1F3F5 100%)"
      }
      height={"100vh"}
      minW={"100vw"}
    >
      <Flex as={"section"}>
        <Box>
          <Image />
        </Box>
        <Flex></Flex>
        <Flex></Flex>
      </Flex>
    </Container>
  );
};
