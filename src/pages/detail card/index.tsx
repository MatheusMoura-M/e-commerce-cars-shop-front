import Header from "../../components/navBar";
import { Footer } from "../../components/footer";
import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BoxComment } from "../../components/boxComment";
import { useAuth } from "../../context/webContext";
import { ModalCreateCarAd } from "../../components/modals/advertiserProfile/createCarsAd.modal";
import ModalEditUser from "../../components/modals/editProfile/updateUser.modal";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import ModalEditComment from "../../components/modals/editComment/updateComment.modal";
import "./style.css";

export const DetailCard = () => {
  const {
    navigate,
    isLogged,
    isOpenUpdateUser,
    onCloseUpdateUser,
    onOpenUpdateComment,
    isOpenUpdateComment,
    onCloseUpdateComment,
    carAdSelected,
    ownerOfAdSelected,
    comments,
    GetCarSpecific,
    onListComment,
    userLogged,
    goToAnnouncerProfile,
    setSelectedCommentId,
  } = useAuth();
  const { isOpen, onClose } = useDisclosure();

  const getDayComment = (date: Date) => {
    const dateNow = new Date();
    const dateComment = new Date(date);

    const timeDate1 = dateComment.getTime();
    const timeDateNow = dateNow.getTime();

    const difference = Math.abs(timeDate1 - timeDateNow);

    const differenceInDay = Math.ceil(difference / (1000 * 60 * 60 * 24));

    if (differenceInDay <= 1) {
      return `Há menos de um dia`;
    } else if (differenceInDay > 30) {
      let month = differenceInDay / 30;
      let toString = month.toString();
      let IntegerMonth = parseInt(toString);
      if (IntegerMonth < 1) {
        return `Há ${IntegerMonth} Mês`;
      }
      return `Há ${IntegerMonth} Meses`;
    }
    return `Há ${differenceInDay} dias`;
  };

  const linkWhats = `https://api.whatsapp.com/send?phone=55${ownerOfAdSelected.telephone}`;
  const { id } = useParams();

  useEffect(() => {
    GetCarSpecific(id!);
    onListComment(id!);
  }, []);

  const handleEditComment = (id: string) => {
    onOpenUpdateComment();
    setSelectedCommentId(id);
  };

  return (
    <>
      <Header />
      <Flex
        as={"section"}
        bg={"#f7f7f7"}
        bgGradient="linear-gradient(
          180deg,
          #4529e6 31.25%,
          #f1f3f5 31.26%,
          #f1f3f5 100%
        );"
        h={"100%"}
        m={"0 auto"}
        flexDirection={"column"}
        maxW={1450}
      >
        <Container
          as={"section"}
          display={"flex"}
          flexDirection={{ base: "column", xl: "row" }}
          alignItems={{ base: "center", xl: "unset" }}
          p={0}
          minW={"100%"}
          justifyContent={"center"}
          gap={{ base: 15, xl: 46 }}
          mb={"16px"}
        >
          <Flex
            as={"section"}
            mt={"40px"}
            flexDirection={"column"}
            alignItems={{ base: "center", xl: "unset" }}
            gap={"1rem"}
            width={{ base: "90%", xl: "unset" }}
          >
            <Flex
              bg={"grey.10"}
              h={355}
              w={{ base: "100%", sm4: 700, md: 752 }}
              borderRadius={4}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                src={carAdSelected.cover_image}
                alt="Imagem de um carro branco"
                w={441}
                h={253}
              />
            </Flex>
            <Flex
              bg={"grey.10"}
              h={{ base: 326, sm1: 240 }}
              w={{ base: "100%", sm4: 700, md: 752 }}
              mb={{ base: "8px", xl: "unset" }}
              borderRadius={4}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Flex
                w={"100%"}
                alignItems={"flex-start"}
                flexDirection={"column"}
                p={{ base: "28px 20px 28px 28px", xl: "44px 49px 28px 44px" }}
              >
                <Box mb={"41px"}>
                  <Text
                    as={"h2"}
                    fontWeight={600}
                    color={"grey.1"}
                    fontSize={"20px"}
                  >
                    {carAdSelected.model}
                  </Text>
                </Box>
                <Flex
                  justifyContent={"space-between"}
                  w={"100%"}
                  mb={"24px"}
                  flexDirection={{ base: "column", sm: "row" }}
                  gap={{ base: "32px", sm: "unset" }}
                >
                  <Flex
                    gap={"12px"}
                    className="aboutKmYear-container"
                    justifyContent={{ base: "flex-start", sm: "center" }}
                    alignItems={"center"}
                    mt={0}
                    w={"150px"}
                  >
                    <Text as="span" fontFamily={"inter"}>
                      {carAdSelected.year}
                    </Text>
                    <Text as="span" fontFamily={"inter"}>
                      {carAdSelected.km} KM
                    </Text>
                  </Flex>
                  <Flex alignItems={"center"}>
                    <Text as="span" className="priceCar">
                      R$ {carAdSelected.price}
                    </Text>
                  </Flex>
                </Flex>
                {isLogged ? (
                  <Button
                    display={"flex"}
                    variant={"brand1"}
                    p={0}
                    w={100}
                    h={38}
                    borderRadius={4}
                    fontSize={"14px"}
                    fontFamily={"inter"}
                  >
                    <Link
                      textDecoration={"none !important"}
                      pt={"10px"}
                      w={"100%"}
                      h={"100%"}
                      href={linkWhats}
                      isExternal
                    >
                      Comprar
                    </Link>
                  </Button>
                ) : (
                  <Button
                    variant={"grey2"}
                    w={100}
                    h={38}
                    borderRadius={4}
                    fontSize={"14px"}
                    fontFamily={"inter"}
                    onClick={() => navigate("/")}
                  >
                    Comprar
                  </Button>
                )}
              </Flex>
            </Flex>
            <Flex
              bg={"grey.10"}
              h={{ base: 325, sm1: 216 }}
              w={{ base: "100%", sm4: 700, md: 752 }}
              borderRadius={4}
              flexDirection={"column"}
              alignItems={"flex-start"}
              justifyContent={"center"}
              gap={"2rem"}
              p={"36px 44px"}
            >
              <Text
                as={"h2"}
                fontWeight={600}
                color={"grey.1"}
                fontSize={"20px"}
              >
                Descrição
              </Text>
              <Text
                as={"p"}
                fontWeight={400}
                fontSize={"16px"}
                fontFamily={"inter"}
                color={"grey.2"}
                w={"100%"}
              >
                {carAdSelected.description}
              </Text>
            </Flex>
          </Flex>
          <Flex
            alignItems={"center"}
            flexDirection={"column"}
            gap={{ base: "52px", xl: "34px" }}
            w={{ base: "90%", sm4: 700, md: "90%", xl: 440 }}
            maxW={{ md: 752 }}
          >
            <Flex
              bg={"grey.10"}
              w={{ base: "100%", sm4: 700, md: 752 }}
              maxW={{ base: "unset", xl: 440 }}
              borderRadius={4}
              alignItems={"flex-start"}
              justifyContent={"center"}
              mt={{ base: 0, xl: "40px" }}
              flexDirection={"column"}
              p={{ base: "20px 10px", sm1: "36px 44px" }}
              gap={"32px"}
            >
              <Text fontWeight={600} fontSize={"20px"} w={"100%"}>
                Fotos
              </Text>
              <Flex
                wrap={"wrap"}
                w={{ base: "100%", xsm2: "95%", sm3: "91%", sm4: "100%" }}
                gap={{
                  base: "50px 30px ",
                  xs1: "50px 10%",
                  sm4: "50px 5px",
                  xl: "32px 14px",
                }}
                justifyContent={{
                  base: "center",
                }}
                ml={{ sm2: "1rem", sm4: 0 }}
              >
                {carAdSelected.images?.map((image) => (
                  <Flex
                    key={image.id}
                    alignItems={"center"}
                    w={{ base: 90, sm4: 95, xl: 108 }}
                    h={{ base: 90, sm4: 95, xl: 108 }}
                    p={"27px 7px"}
                    bg={"grey.7"}
                    borderRadius={4}
                  >
                    <Image src={image.image_url} alt="Imagem secundária" />
                  </Flex>
                ))}
              </Flex>
            </Flex>
            <Flex
              bg={"grey.10"}
              h={426}
              w={{ base: "100%", sm4: 700, md: 752, xl: 440 }}
              borderRadius={4}
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
              p={{ base: "30px 28px", xl: "37px 44px" }}
              gap={{ base: "25px", xl: "30px" }}
            >
              <Flex flexDirection={"column"} w={"104px"} h={"104px"}>
                <Image
                  src={ownerOfAdSelected.image_url}
                  alt="Foto do usuário"
                  h={"100%"}
                  w={"100%"}
                  objectFit={"cover"}
                  borderRadius={"full"}
                />
              </Flex>
              <Text
                as={"h2"}
                fontWeight={600}
                fontSize={"20px"}
                w={"250px"}
                textAlign={"center"}
                textOverflow={"ellipsis"}
                whiteSpace={"nowrap"}
                overflow={"hidden"}
              >
                {ownerOfAdSelected.name}
              </Text>
              <Text
                as={"p"}
                w={"100%"}
                fontSize={"16px"}
                fontWeight={400}
                lineHeight={"28px"}
                color={"grey.2"}
                textAlign={"center"}
                fontFamily={"inter"}
              >
                {ownerOfAdSelected.description}
              </Text>
              <Button
                variant={"grey0"}
                w={206}
                borderRadius={4}
                fontFamily={"inter"}
                onClick={() => goToAnnouncerProfile(ownerOfAdSelected.id)}
              >
                Ver todos anúncios
              </Button>
            </Flex>
          </Flex>
        </Container>
        <Flex
          as={"section"}
          w={{ base: "100%", xl: "60.3%", xl1: "59.8%", xl2: "59.3%" }}
          alignItems={{ base: "center", xl: "flex-end" }}
          justifyContent={"center"}
          flexDirection={"column"}
          gap={33}
        >
          <Container
            minW={{ base: "100%", sm3: "90%", sm4: 752 }}
            borderRadius={4}
            p={0}
            m={0}
            display={"flex"}
            justifyContent={{ base: "center", xl: "flex-end" }}
          >
            <Flex
              bg={"grey.10"}
              p={{ base: "36px 40px 36px 20px", xl: "36px 44px" }}
              flexDirection={"column"}
              w={{ base: "90%", sm3: "100%", sm4: 700, md: 752 }}
              borderRadius={4}
              alignItems={"center"}
            >
              <Text
                color={"grey.1"}
                fontWeight={600}
                fontSize={"20px"}
                mb={"24px"}
              >
                Comentários
              </Text>
              <Flex flexDirection={"column"} gap={"44px"} w={"100%"}>
                {comments.map((comment) => {
                  return (
                    <Flex
                      key={comment.id}
                      flexDirection={"column"}
                      gap={"12px"}
                    >
                      <Flex gap={"10px"} alignItems={"center"}>
                        <Image
                          borderRadius={"full"}
                          w={"30px"}
                          src={comment.users.image_url}
                          alt="Imagem de perfil do usuário"
                          width="30px"
                          h={"30px"}
                          objectFit={"cover"}
                        />
                        <Text
                          as={"h3"}
                          color={"grey.1"}
                          fontFamily={"inter"}
                          fontWeight={"500"}
                          fontSize={"14px"}
                        >
                          {comment.users.name}
                        </Text>
                        <Text
                          as={"span"}
                          fontSize={"12px"}
                          fontFamily={"inter"}
                          fontWeight={400}
                          color={"grey.3"}
                          mt={"3px"}
                        >
                          • &ensp;{getDayComment(comment.createdAt)}
                        </Text>
                      </Flex>
                      <Flex
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Text
                          as={"p"}
                          fontFamily={"inter"}
                          fontWeight={400}
                          fontSize={"14px"}
                          color={"grey.2"}
                          w={"95%"}
                        >
                          {comment.comment}
                        </Text>
                        {comment.users.id === userLogged.id && (
                          <Flex
                            _hover={{
                              color: "brand.1",
                              transform: "translate(-2px, -2px)",
                              transition: ".5s",
                            }}
                            transition={".5s"}
                            onClick={() => {
                              handleEditComment(comment.id);
                            }}
                          >
                            <GiHamburgerMenu size={18} cursor={"pointer"} />
                          </Flex>
                        )}
                      </Flex>
                    </Flex>
                  );
                })}
              </Flex>
            </Flex>
          </Container>
          <BoxComment />
        </Flex>
        <ModalCreateCarAd isOpen={isOpen} onClose={onClose} />
        {/* <ModalUpdateAddress isOpen={isOpenAddress} onClose={onCloseAddress} /> */}
        <ModalEditUser isOpen={isOpenUpdateUser} onClose={onCloseUpdateUser} />
        <ModalEditComment
          isOpen={isOpenUpdateComment}
          onClose={onCloseUpdateComment}
        />
      </Flex>
      <Footer />
    </>
  );
};
