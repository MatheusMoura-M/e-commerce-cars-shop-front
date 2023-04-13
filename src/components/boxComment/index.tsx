import { Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import ImgPerfil from "../../assets/ImgPerfil.svg";
import ContainerComment from "./style";
import { Input } from "../form/input";

export const BoxComment = () => {
  return (
    <ContainerComment>
      <Flex
        bg={"grey.10"}
        h={289}
        w={752}
        p={"36px 35px 39px 44px"}
        flexDirection={"column"}
        gap={15}
      >
        <HStack gap={"8px"} w={126}>
          <Image src={ImgPerfil} alt="Img do usuário" w={"32px"} h={"32px"} />
          <Text
            className="username"
            as={"h3"}
            color={"grey.1"}
            fontFamily={"inter"}
            fontWeight={"500"}
            fontSize={"14px"}
          >
            Samuel Leão
          </Text>
        </HStack>
        <Input
          name="comment"
          placeholder="Digitar comentário"
          height="128px"
          variant="outline"
          pb={"70px"}
        />
        <HStack>
          <Button variant={"greyComments"}>Gostei muito!</Button>
          <Button variant={"greyComments"}>Incrível</Button>
          <Button variant={"greyComments"}>
            Recomendarei para meus amigos!
          </Button>
        </HStack>
      </Flex>
    </ContainerComment>
  );
};
