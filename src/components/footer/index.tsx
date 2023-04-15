import {
  Button,
  Container,
  Flex,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import LogoFooter from "../../assets/LogoFooter.svg";
import { ChevronUpIcon } from "@chakra-ui/icons";

export const Footer = () => {
  return (
    <Container
      as="footer"
      m={0}
      minW={"100%"}
      h={{ base: 310, md: 140 }}
      p={0}
      bg={"grey.0"}
    >
      <Stack
        justifyContent={{ base: "center", md: "space-between" }}
        align={"center"}
        flexDirection={{ base: "column", md: "row" }}
        p={{ base: "45px 55.5px", md: "45px 59px" }}
        gap={{ base: "60px", md: "unset" }}
      >
        <Flex alignItems={"center"}>
          <Image w={153.02} h={26.34} src={LogoFooter} alt="Logo footer" />
        </Flex>
        <Flex alignItems={"center"} mt={"0px !important"}>
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
        <Link href="#header" mt={"0px !important"}>
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
        </Link>
      </Stack>
    </Container>
  );
};
