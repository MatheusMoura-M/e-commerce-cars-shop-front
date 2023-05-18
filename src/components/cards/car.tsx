import "./style.css";
import { MdAttachMoney } from "react-icons/md";
import {
  Box,
  Image,
  Text,
  Button,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import { useAuth } from "../../context/webContext";
import { ModalEditCarAd } from "../Modals/advertiserProfile/editCarsAd.modal";
import { iCardProps } from "../../interface";

const CarCard = ({
  buttonStatus,
  model,
  brandCar,
  description,
  price,
  image,
  year,
  km,
  isPublished,
  isGoodPrice,
  id,
  sellerName,
  imageUrl,
  buttonsSection,
  ownerAdCard,
  cardObj,
}: iCardProps) => {
  const {
    goToAnnouncerProfile,
    GetCarSpecific,
    navigate,
    setSelectedCar,
    setIsBool,
  } = useAuth();
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();

  return (
    <Box
      id={id}
      as="li"
      bg={"grey.10"}
      minW={300}
      maxW={300}
      h={{ base: "auto" }}
      minH={{ lg2m: 370 }}
      mb={{ lg2m: "10px" }}
      m={{ base: "0px 10px 0px 10px", lg2m: "0px 30px 20px 0px" }}
    >
      <Flex
        position={"relative"}
        bg={"grey.7"}
        justifyContent="center"
        borderTopRadius={"10px"}
      >
        <Image
          src={image}
          alt="Imagem do carro"
          h="190px"
          w="100%"
          borderTopRadius={"10px"}
        />

        {buttonStatus && (
          <Button
            position={"absolute"}
            top="9px"
            left="15px"
            backgroundColor={isPublished == true ? "brand.1" : "grey.4"}
            color="grey.10"
            fontSize="14px"
            fontWeight="500"
            pt="2px"
            borderRadius="0px"
            _hover={
              isPublished ? { bgColor: "brand.2" } : { bgColor: "brand.2" }
            }
            h="32px"
            w="70px"
            fontFamily={"'Inter', sans-serif"}
          >
            {isPublished ? "Ativo" : "Inativo"}
          </Button>
        )}

        {isGoodPrice && (
          <Text
            as="span"
            display={"flex"}
            position={"absolute"}
            top={0}
            right={0}
            alignItems={"center"}
            justifyContent={"center"}
            bg={"var(--random-7)"}
            w={"17px"}
            h={"27px"}
            borderTopRightRadius={"10px"}
            borderBottomLeftRadius={"3px"}
          >
            <MdAttachMoney size={17} color={"#FFFFFF"} />
          </Text>
        )}
      </Flex>
      <Box as="section" minW={0}>
        <Text
          as="h3"
          w={"97%"}
          overflow={"hidden"}
          textOverflow={"ellipsis"}
          whiteSpace={"nowrap"}
          mt={"25px"}
          cursor={"pointer"}
          fontSize={"1rem"}
          fontWeight={600}
          _hover={{ color: "grey.2" }}
          onClick={() => {
            GetCarSpecific(id);
            navigate(`detail-card/${id}`);
          }}
        >
          {`${model} - ${brandCar}`}
        </Text>

        <Text
          as="p"
          display={"-webkit-box"}
          w={260}
          minH={"48px"}
          maxH={"48px"}
          color={"grey.2"}
          mt={"1rem"}
          fontSize={"14px"}
          lineHeight={"24px"}
          fontWeight={400}
          overflow={"hidden"}
          noOfLines={2}
        >
          {description}
        </Text>
      </Box>
      <Box as="section">
        {!buttonsSection && (
          <Flex alignItems={"center"} pt={"16px"}>
            <Image
              src={imageUrl}
              borderRadius={"full"}
              onClick={() => {
                goToAnnouncerProfile(ownerAdCard!);
              }}
              cursor={"pointer"}
              h={"30px"}
              w={"30px"}
              objectFit={"cover"}
            />
            <Text
              as="p"
              fontSize="0.9rem"
              ml={"10px"}
              color="grey.1"
              fontWeight="500"
              textOverflow={"ellipsis"}
              whiteSpace={"nowrap"}
              overflow={"hidden"}
              w={"100px"}
              cursor={"pointer"}
              _hover={{ color: "brand.1" }}
              onClick={() => {
                goToAnnouncerProfile(ownerAdCard!);
              }}
            >
              {sellerName}
            </Text>
          </Flex>
        )}
        <Flex justifyContent="space-between" alignItems={"center"}>
          <Box className="aboutKmYear-container" mt={"19px"}>
            <Text as="span" mr="5px">
              {km} KM
            </Text>
            <Text as="span" ml={"10px"}>
              {year}
            </Text>
          </Box>
          <Text
            as="span"
            className="priceCar"
            fontWeight="600"
            color="grey.2"
            mr="10px"
            mt={"15px"}
          >
            R$ {price}
          </Text>
        </Flex>
        {buttonsSection && (
          <Box bgColor={"grey.10"} pt="20px" pb="15px">
            <Button
              fontSize={"0.875rem"}
              borderRadius={"3px"}
              fontWeight={"600"}
              border={"2px"}
              borderColor={"grey.1"}
              bgColor={"transparent"}
              h={"35px"}
              _hover={{ bgColor: "grey.1", color: "grey.10" }}
              onClick={() => {
                setSelectedCar(cardObj!);
                onEditOpen();
                setIsBool(true);
              }}
            >
              Editar
            </Button>
            <Button
              ml="10px"
              fontSize={"0.875rem"}
              borderRadius={"3px"}
              fontWeight={"600"}
              border={"2px"}
              borderColor={"grey.1"}
              bgColor={"transparent"}
              h={"35px"}
              transition="0.4s"
              _hover={{
                bgColor: "grey.1",
                color: "grey.10",
                transition: "0.4s",
              }}
              onClick={() => {
                GetCarSpecific(id);
                navigate(`detail-card/${id}`);
              }}
            >
              Ver detalhes
            </Button>
          </Box>
        )}
      </Box>
      <ModalEditCarAd isOpen={isEditOpen} onClose={onEditClose} />
    </Box>
  );
};

export default CarCard;
