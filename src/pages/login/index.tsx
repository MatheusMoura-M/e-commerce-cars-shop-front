import { Footer } from "../../components/Footer";
import Header from "../../components/NavBar";
import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import ResetPassword from "../../components/Modals/resetPassword";
import FormLogin from "../../components/Forms/FormLogin";

export const LoginPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      justifyContent={"space-between"}
      flexDir={"column"}
      h={"100vh"}
      maxW={1450}
      margin={"0 auto"}
    >
      <Header />
      <Flex
        justifyContent={"space-between"}
        flexDir={"column"}
        gap={"1rem"}
        bg={"grey.10"}
        p={{ base: "2rem 1rem", sm2: "2rem 2rem" }}
        m={"0 auto"}
        w={{ base: "90%", sm2: 600 }}
        borderRadius={"4px"}
      >
        <Text as="h1" fontSize={"1.5rem"} fontWeight={500} color={"grey.0"}>
          Login
        </Text>
        <FormLogin onOpen={onOpen} />
        <ResetPassword isOpen={isOpen} onClose={onClose} />
      </Flex>
      <Footer />
    </Flex>
  );
};
