import {
  Box,
  Flex,
  Avatar,
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

const BtnDefault = ["Perfil", "Sair"];

const Header = ({ isLogin = false, isLogged = false }: IHeaderProps) => {
  const { MenuHamburguer } = useAuth();

  return (
    <>
      <Box
        bg={"grey.10"}
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
            borderColor={"grey.6"}
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
            {/* <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar size={"sm"} />
                </MenuButton>
                <MenuList
                  display={{ base: "none", md: "flex" }}
                  flexDirection={"column"}
                  maxH={"max-content"}
                  _hover={{
                    color: "white",
                  }}
                  transition="0.2s"
                  minW={"100px"}
                >
                  {BtnDefault.map((link) => (
                    <MenuHamburguer key={link}>{link}</MenuHamburguer>
                  ))}
                </MenuList>
              </Menu> */}
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
