import {
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import ImgPerfil from "../../assets/ImgPerfil.svg";
import ContainerComment from "./style";
import { Input } from "../form/input";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import formSchema from "../../schemas/comments";
import { IHeaderProps, iComment } from "../../@types";

export const BoxComment = ({ isLogged }: IHeaderProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iComment>({
    resolver: yupResolver(formSchema),
  });

  const onFormSubmit = (formData: object) => {
    console.log("FORM");
    console.log(formData);
  };

  return (
    <ContainerComment>
      <Flex
        bg={"grey.10"}
        h={289}
        w={752}
        p={isLogged ? "36px 35px 39px 44px" : "57px 35px 39px 44px"}
        flexDirection={"column"}
        gap={15}
        borderRadius={"4px"}
      >
        {isLogged && (
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
        )}
        <Flex
          className="boxInput"
          borderColor={"grey.7"}
          borderRadius={"4px"}
          position={"relative"}
          flexDirection={"column"}
          h={128}
        >
          <textarea />
          {/* <Input
            id="comment"
            register={register}
            type="password"
            placeholder="Digitar comentário"
            height="128px"
            variant="outline"
            borderRadius={"4px"}
            _hover={{
              bg: "grey.8",
            }}
            // focusBorderColor="transparent"
            showPass
          /> */}
          <Flex justifyContent={"flex-end"} p={"0 11px 13px 0"}>
            <Button
              variant={isLogged ? "brand1" : "grey2"}
              w={108}
              h={38}
              fontSize={"14px"}
              fontFamily={"inter"}
              onClick={handleSubmit(onFormSubmit)}
            >
              Comentar
            </Button>
          </Flex>
        </Flex>
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
