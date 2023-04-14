import {
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import ImgPerfil from "../../assets/ImgPerfil.svg";
import ContainerComment from "./style";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import formSchema from "../../schemas/comments";
import { IHeaderProps, iComment } from "../../@types";
import { useNavigate } from "react-router-dom";
import { Input } from "../form/input";

export const BoxComment = ({ isLogged }: IHeaderProps) => {
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iComment>({
    resolver: yupResolver(formSchema),
  });

  const onFormSubmit = (formData: object) => {
    console.log(formData);
  };

  const returnHome = () => {
    Navigate("/");
  };

  return (
    <ContainerComment>
      <Flex
        bg={"grey.10"}
        h={{ base: 414, xl: 289 }}
        w={{ base: "90%", sm4: 700, md: 752 }}
        p={
          isLogged
            ? { base: "36px 41px 36px 26px", xl: "36px 35px 39px 44px" }
            : "57px 35px 39px 44px"
        }
        flexDirection={"column"}
        justifyContent={"space-around"}
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
          gap={"5px"}
        >
          <Input
            id="comment"
            register={register}
            type="text"
            placeholder="Digitar comentário"
            height="128px"
            variant="outline"
            borderRadius={"4px"}
            _hover={{
              bg: "grey.8",
            }}
            // focusBorderColor="transparent"
          />
          <Flex justifyContent={"flex-end"} p={"0 11px 13px 0"}>
            {isLogged ? (
              <Button
                variant={"brand1"}
                w={108}
                h={38}
                fontSize={"14px"}
                fontFamily={"inter"}
                onClick={handleSubmit(onFormSubmit)}
              >
                Comentar
              </Button>
            ) : (
              <Button
                variant={"grey2"}
                w={108}
                h={38}
                fontSize={"14px"}
                fontFamily={"inter"}
                onClick={() => returnHome()}
              >
                Comentar
              </Button>
            )}
          </Flex>
        </Flex>
        <HStack h={{ base: "72px" }} wrap={"wrap"}>
          <Button variant={"greyComments"}>Gostei muito!</Button>
          <Button variant={"greyComments"}>Incrível</Button>
          <Button variant={"greyComments"} className="buttonRecommend">
            Recomendarei para meus amigos!
          </Button>
        </HStack>
      </Flex>
    </ContainerComment>
  );
};
