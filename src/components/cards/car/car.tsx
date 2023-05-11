import { LiCar } from "./style";
import { MdAttachMoney } from "react-icons/md";
import {
  Box,
  Image,
  Text,
  Heading,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { AuthContext, useAuth } from "../../../context/webContext";
import { ModalEditCarAd } from "../../modals/advertiserProfile/editCarsAd.modal";
import { iCar } from "../../../interface/car.interface";

interface iCardProps {
  model: string;
  brandCar: string;
  description: string;
  price: string;
  image: string;
  year: string;
  km: string;
  id: string;
  buttonStatus?: boolean;
  isPublished?: boolean;
  isGoodPrice?: boolean;
  sellerName?: string;
  imageUrl: string;
  buttonsSection?: boolean;
  ownerAdCard?: string;
  cardObj?: iCar;
}

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
    ownerOfAdSelected,
    GetCarSpecific,
    navigate,
    setSelectedCar,
    setIsBool,
    isBool,
  } = useAuth();
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();

  return (
    <LiCar id={id}>
      <Box className="container-image" display="flex" justifyContent="center">
        <Image src={image} alt="Imagem do carro" h="190px" width="100%" />

        {buttonStatus && (
          <Button
            position={"absolute"}
            top="9px"
            left="15px"
            backgroundColor={isPublished == true ? "brand.1" : "grey.4"}
            color="grey.10"
            fontSize="14px"
            fontWeight="500"
            paddingTop="2px"
            borderRadius="0px"
            _hover={
              isPublished ? { bgColor: "brand.2" } : { bgColor: "brand.2" }
            }
            height="32px"
            width="70px"
            fontFamily={"'Inter', sans-serif"}
          >
            {isPublished ? "Ativo" : "Inativo"}
          </Button>
        )}

        {isGoodPrice && (
          <Text as="span">
            <MdAttachMoney className="money-icon" />
          </Text>
        )}
      </Box>
      <Box as="section" className="container-information">
        <Text
          as="h3"
          onClick={() => {
            GetCarSpecific(id);
            navigate(`detail-card/${id}`);
          }}
          cursor={"pointer"}
          _hover={{ color: "grey.2" }}
          fontSize={"1rem"}
          fontWeight={"600"}
          mt="5px"
        >
          {`${model} - ${brandCar}`}
        </Text>

        <Text as="p" fontSize={"0.875rem"}>
          {description}
        </Text>
      </Box>
      <Box as="section" className="container-plusInfromation">
        <Box as="div" className="plusInformation-containerUser">
          {!buttonsSection && (
            <Box as="div">
              <Box as="div" className="user-container">
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
              </Box>
            </Box>
          )}
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Box as="div" className="aboutKmYear-container">
            <Text as="span" marginRight="5px">
              {km} KM
            </Text>
            <Text as="span">{year}</Text>
          </Box>
          <Text
            as="span"
            className="priceCar"
            fontWeight="600"
            color="grey.2"
            marginRight="10px"
            marginTop={"15px"}
          >
            R$ {price}
          </Text>
        </Box>
        {buttonsSection && (
          <Box
            as="div"
            bgColor={"grey.10"}
            paddingTop="20px"
            paddingBottom="15px"
          >
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
              marginLeft="10px"
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
    </LiCar>
  );
};

export default CarCard;
