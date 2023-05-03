import { Button, Container, Flex, HStack, Image, Text } from "@chakra-ui/react";
import ImgPerfil from "../../assets/ImgPerfil.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../form/input";
import { useAuth } from "../../context/webContext";
import { useState } from "react";
import { iCommentRequest } from "../../interface/comment.interface";
import commentSchema from "../../schemas/comments";

export const BoxComment = () => {
  const {
    returnHome,
    isLogged,
    setIsLogged,
    carAdSelected,
    onCreateComment,
    userLogged,
  } = useAuth();
  const [commentInput, setCommentInput] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iCommentRequest>({
    resolver: yupResolver(commentSchema),
  });

  const onFormSubmit = (formData: iCommentRequest) => {
    const newData =
      formData.comment === commentInput ? formData : { comment: commentInput };
    onCreateComment(newData, carAdSelected.id);
  };

  setIsLogged(true);

  return (
    <Container
      as={"section"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={{ base: "center", md: "flex-start" }}
      borderRadius={"4px"}
      minW={{ base: "100%", md: 752 }}
      p={"0px"}
      m={{ base: "0px 0px 45px 0px", md: "0px 0px 73px 0px" }}
    >
      <Flex
        bg={"grey.10"}
        h={{ base: 414, sm3: 289 }}
        w={{ base: "90%", sm4: 700, md: 752 }}
        p={
          isLogged
            ? { base: "36px 41px 36px 26px", xl: "36px 35px 39px 44px" }
            : "57px 35px 39px 44px"
        }
        flexDirection={"column"}
        justifyContent={{ base: "unset", xsm2: "space-around" }}
        gap={{ base: "24px", xsm2: 15 }}
        borderRadius={"4px"}
      >
        {isLogged && (
          <HStack gap={"8px"} w={126}>
            <Image src={ImgPerfil} alt="Img do usuário" w={"32px"} h={"32px"} />
            <Text
              as={"h3"}
              m={"0px !important"}
              color={"grey.1"}
              fontFamily={"inter"}
              fontWeight={"500"}
              fontSize={"14px"}
            >
              {userLogged.name}
            </Text>
          </HStack>
        )}
        <Flex
          as="form"
          onSubmit={handleSubmit(onFormSubmit)}
          border={"1px solid"}
          borderColor={{ base: "transparent", xsm2: "grey.7" }}
          borderRadius={"4px"}
          flexDirection={"column"}
          h={
            errors.comment?.message
              ? { base: 200, xsm2: 150 }
              : { base: 200, xsm2: 128 }
          }
          gap={{ base: "unset", xsm2: "5px" }}
          _hover={{
            bg: { base: "transparent", xsm2: "grey.8" },
            borderColor: { base: "transparent", xsm2: "grey.7" },
          }}
          _focusWithin={{
            borderColor: { base: "transparent", xsm2: "brand.2" },
            backgroundColor: "grey.10",
          }}
        >
          <Input
            id="comment"
            value={commentInput}
            register={register}
            errorMessage={errors.comment?.message}
            placeholder="Digitar comentário"
            height="128px"
            variant="outline"
            _hover={{
              bg: "grey.8",
            }}
            mt={"0 !important"}
            pb={{ base: "80px", xsm2: "25px" }}
            borderColor={{ base: "grey.7", xsm2: "transparent" }}
            _focusVisible={{
              borderColor: { base: "brand.2", xsm2: "transparent" },
            }}
            onChange={(e) => {
              setCommentInput(e.target.value);
            }}
          />
          <Flex
            justifyContent={{ base: "flex-start", xsm2: "flex-end" }}
            alignItems={"center"}
            p={{ base: "unset", xsm2: "0 11px 8px 0" }}
            mt={{ base: "20px", xsm2: "0px" }}
            h={45}
          >
            {isLogged ? (
              <Button
                variant={"brand1"}
                type="submit"
                w={108}
                h={38}
                fontSize={"14px"}
                fontFamily={"inter"}
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
                onClick={returnHome}
              >
                Comentar
              </Button>
            )}
          </Flex>
          <HStack
            h={{ base: "72px" }}
            wrap={{ base: "wrap", xsm2: "unset" }}
            spacing={"8px"}
          >
            <Button
              variant={"greyComments"}
              // onClick={(e) =>
              //   setCommentInput((e.target as HTMLButtonElement).innerText)
              // }
              onClick={(e) =>
                onCreateComment(
                  { comment: (e.target as HTMLButtonElement).innerText },
                  carAdSelected.id
                )
              }
            >
              Gostei muito!
            </Button>
            <Button
              variant={"greyComments"}
              onClick={(e) =>
                onCreateComment(
                  { comment: (e.target as HTMLButtonElement).innerText },
                  carAdSelected.id
                )
              }
            >
              Incrível
            </Button>
            <Button
              variant={"greyComments"}
              onClick={(e) =>
                onCreateComment(
                  { comment: (e.target as HTMLButtonElement).innerText },
                  carAdSelected.id
                )
              }
              mt={{ base: "24px", xsm2: "unset" }}
              ml={{ base: "0px !important", xsm2: "8px !important" }}
            >
              Recomendarei para meus amigos!
            </Button>
          </HStack>
        </Flex>
      </Flex>
    </Container>
  );
};
