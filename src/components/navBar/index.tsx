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
  Show,
} from "@chakra-ui/react";
import imgLogo from "../../assets/LogoHeader.svg";
import imgPerfil from "../../assets/ImgPerfil.svg";
import { IHeaderProps } from "../../@types";
import { useAuth } from "../../context/webContext";
import { HamburgerIcon } from "@chakra-ui/icons";

const BtnsDefault = ["Login", "Register"];
const BtnsIsLogged = [
  "Editar Perfil",
  "Editar Endereço",
  "Meus Anuncios",
  "Sair",
];

const Header = ({ isLogin = false, isLogged = false }: IHeaderProps) => {
  const { MenuHamburguer, returnHome } = useAuth();
  return (
    <Box
      id="header"
      bg={"#FDFDFD"}
      pl={["10px", null, "40px", "60px"]}
      h={"80px"}
      borderBottom={"2px solid"}
      borderColor={"grey.6"}
    >
      <Flex h={"100%"} justifyContent={"space-between"}>
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Image
            onClick={returnHome}
            w={[130, null, 140, 153.02]}
            h={[20.1, null, 23, 26.34]}
            src={imgLogo}
            alt="Logo Header"
          />
        </Box>
        {isLogged ? (
          // MENU HAMBURGUER IS LOGGED
          <Flex alignItems={"center"} gap={"1rem"} h={"100%"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"hamburguer"}
                cursor={"pointer"}
                maxW={200}
                minH={"100%"}
                px={0}
              >
                <HStack
                  borderLeft={"2px solid"}
                  borderColor={"grey.6"}
                  minH={"78px"}
                  display={"flex"}
                  pl={[".5rem", "1rem", null, "1.7rem"]}
                  pr={[".5rem", "1rem", null, "1.7rem"]}
                  alignItems={"center"}
                  gap={[null, ".5rem"]}
                >
                  <Image
                    width={[30, 35, null, 45]}
                    src={imgPerfil}
                    alt="Logo Header"
                  />
                  <Text
                    color={"grey.2"}
                    fontWeight={"400"}
                    fontSize={["14px", "15px", "16px"]}
                  >
                    Samuel Leão
                  </Text>
                </HStack>
              </MenuButton>
              <MenuList
                transform={{
                  base: "translate(0px, -7px) !important",
                  xl4: "translate(-127px, -7px) !important",
                }}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                justifyContent={"flex-start"}
                borderTopRadius={"0rem"}
                borderBottomRadius={".5rem"}
                maxH={"max-content"}
                minW={["18.5rem", "20.5rem"]}
                pt={"0px"}
                bg={"#FDFDFD"}
              >
                {BtnsIsLogged.map((link) => (
                  <MenuHamburguer key={link}>{link}</MenuHamburguer>
                ))}
              </MenuList>
            </Menu>
          </Flex>
        ) : (
          // MENU HAMBURGUER IS NOT LOGGED
          <Flex alignItems={"center"} gap={"1rem"} h={"100%"}>
            <HStack
              display={{ base: "none", sm2: "flex" }}
              borderLeft={"2px solid"}
              borderColor={{ base: "transparent", sm2: "grey.6" }}
              minH={"78px"}
              w={270}
              alignItems={"center"}
              justifyContent={"space-around"}
              gap={"0.5rem"}
            >
              <Button variant={"grey5"} color={"grey.2"}>
                Login
              </Button>
              <Button variant={"grey4"}>Register</Button>
            </HStack>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"hamburguer"}
                cursor={"pointer"}
                minW={0}
                minH={"100%"}
                pr={"2rem"}
              >
                <Show below="sm2">
                  <HamburgerIcon />
                </Show>
              </MenuButton>
              <MenuList
                display={"flex"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                justifyContent={"flex-start"}
                borderTopRadius={"0rem"}
                borderBottomRadius={".5rem"}
                maxH={"max-content"}
                minW={["18.5rem", "20.5rem"]}
                pt={"0px"}
                bg={"#FDFDFD"}
                pb={{ base: ".5rem", sm2: "0rem" }}
              >
                <Show below="sm2">
                  {BtnsDefault.map((link) => (
                    <MenuHamburguer key={link}>{link}</MenuHamburguer>
                  ))}
                </Show>
              </MenuList>
            </Menu>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
