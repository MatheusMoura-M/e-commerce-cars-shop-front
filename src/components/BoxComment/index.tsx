import { Button, Container, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { useAuth } from "../../context/webContext";
import { useParams } from "react-router-dom";
import FormCreateComment from "../Forms/FormCreateComment";

export const BoxComment = () => {
  const { id } = useParams();
  const { isLogged, onCreateComment, userLogged, navigate } = useAuth();

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
        flexDir={"column"}
        justifyContent={{ base: "unset", xsm2: "space-around" }}
        gap={{ base: "24px", xsm2: 15 }}
        borderRadius={"4px"}
      >
        {isLogged && (
          <HStack gap={"8px"} w={126}>
            <Image
              borderRadius={"full"}
              src={userLogged.image_url}
              alt="Img do usuário"
              w={"32px"}
              h={"32px"}
              objectFit={"cover"}
            />
            <Text
              as={"h3"}
              m={"0px !important"}
              color={"grey.1"}
              fontFamily={"inter"}
              fontWeight={"500"}
              fontSize={"14px"}
              textOverflow={"ellipsis"}
              whiteSpace={"nowrap"}
              overflow={"hidden"}
            >
              {userLogged.name}
            </Text>
          </HStack>
        )}
        <FormCreateComment />
        <HStack
          h={{ base: "72px" }}
          wrap={{ base: "wrap", xsm2: "unset" }}
          spacing={"8px"}
        >
          <Button
            variant={"greyComments"}
            onClick={(e) =>
              isLogged
                ? onCreateComment(
                    { comment: (e.target as HTMLButtonElement).innerText },
                    id!
                  )
                : navigate("/login")
            }
          >
            Gostei muito!
          </Button>
          <Button
            variant={"greyComments"}
            onClick={(e) =>
              isLogged
                ? onCreateComment(
                    { comment: (e.target as HTMLButtonElement).innerText },
                    id!
                  )
                : navigate("/login")
            }
          >
            Incrível
          </Button>
          <Button
            variant={"greyComments"}
            onClick={(e) =>
              isLogged
                ? onCreateComment(
                    { comment: (e.target as HTMLButtonElement).innerText },
                    id!
                  )
                : navigate("/login")
            }
            mt={{ base: "24px", xsm2: "unset" }}
            ml={{ base: "0px !important", xsm2: "8px !important" }}
          >
            Recomendarei para meus amigos!
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};
