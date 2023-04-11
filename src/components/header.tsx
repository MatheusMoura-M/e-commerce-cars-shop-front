import {
  Box,
  Flex,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  Image,
  Text,
} from "@chakra-ui/react";
import imgLogo from "../assets/LogoHeader.svg";
import imgPerfil from "../assets/ImgPerfil.svg";
import { IHeaderProps } from "../@types";
import { useAuth } from "../context/webContext";
import { HamburgerIcon } from "@chakra-ui/icons";

const BtnDefault = ["Carros", "Motos", "Leilão", "Login", "Register"];

const Header = ({ isLogin = false, isLogged = false }: IHeaderProps) => {
  const { MenuHamburguer } = useAuth();

  return (
    <>
      <Box
        bg={"#FDFDFD"}
        px={"60px"}
        h={"80px"}
        borderBottom={"2px solid"}
        borderColor={"grey.6"}
      >
        <Flex alignItems={"center"} justifyContent={"space-between"} h={"100%"}>
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Image w={153.02} h={26.34} src={imgLogo} alt="Logo Header" />
          </Box>
          <Flex
            borderLeft={"2px solid"}
            borderColor={{ base: "transparent", md: "grey.6" }}
            alignItems={"center"}
            gap={"1rem"}
            h={"100%"}
          >
            {isLogged ? (
              <HStack
                display={{ base: "none", md: "flex" }}
                pl={"44px"}
                alignItems={"center"}
                gap={"0.5rem"}
              >
                <Image width={45} src={imgPerfil} alt="Logo Header" />
                <Text>Samuel Leão</Text>
              </HStack>
            ) : (
              <HStack
                display={{ base: "none", md: "flex" }}
                w={270}
                alignItems={"center"}
                justifyContent={"space-around"}
                gap={"0.5rem"}
              >
                <Button variant={"grey6"} color={"grey.2"}>
                  Login
                </Button>
                <Button variant={"grey5"}>Register</Button>
              </HStack>
            )}
            <Menu>
              <MenuButton
                display={{ base: "flex", md: "none" }}
                as={Button}
                rounded={"full"}
                variant={"hamburguer"}
                cursor={"pointer"}
                minW={0}
              >
                <HamburgerIcon />
              </MenuButton>
              <MenuList
                // display={{ base: "none", md: "flex" }}
                flexDirection={"column"}
                alignItems={"flex-start"}
                justifyContent={"flex-start"}
                borderTopRadius={"0rem"}
                borderBottomRadius={".5rem"}
                maxH={"max-content"}
                minW={"335px"}
                bg={"#FDFDFD"}
                mt={".8rem"}
              >
                {BtnDefault.map((link) => (
                  <MenuHamburguer key={link}>{link}</MenuHamburguer>
                ))}
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
