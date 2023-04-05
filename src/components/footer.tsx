import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import LogoFooter from "../assets/LogoFooter.svg";
import { ChevronUpIcon } from "@chakra-ui/icons";

export const Footer = () => {
  return (
    <Container as="footer" m={0} minW={"100%"} p={0} bg={"grey.0"}>
      <Stack
        justifyContent={"space-between"}
        align={"center"}
        minW={"100%"}
        h={140}
        flexDirection={"row"}
        pr={59}
      >
        <Flex pl={59} alignItems={"center"}>
          <Image w={153.02} h={26.34} src={LogoFooter} alt="Logo footer" />
        </Flex>
        <Flex alignItems={"center"} mt={0} pr={50}>
          <Text
            color={"white"}
            fontWeight={"normal"}
            fontSize={"14px"}
            lineHeight={"24px"}
            fontFamily={"inter"}
          >
            © {new Date().getFullYear()} - Todos os direitos reservados.
          </Text>
        </Flex>
        <Button
          variant={"grey1"}
          h={50}
          w={53}
          alignItems={"center"}
          justifyContent={"center"}
          bg={"grey.1"}
        >
          <ChevronUpIcon w={"2rem"} h={18} color={"white"} />
        </Button>
      </Stack>
    </Container>
  );
};
