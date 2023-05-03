import LiCar from "./style";
import { MdAttachMoney } from "react-icons/md";
import { Box, Image, Text, Heading } from "@chakra-ui/react";
import { useAuth } from "../../../context/webContext";

interface iCardProps {
  nameCar: string;
  brandCar: string;
  description: string;
  price: string;
  image: string;
  userName: string;
  year: string;
  km: string;
  id: string;
}

const CarCard = ({
  nameCar,
  brandCar,
  description,
  price,
  image,
  userName,
  year,
  km,
  id,
}: iCardProps) => {
  const { GetCarSpecific, navigate } = useAuth();

  return (
    <LiCar
      id={id}
      onClick={() => {
        GetCarSpecific(id);
        navigate("detail-card");
      }}
    >
      <Box className="container-image">
        <img src={image} alt="Imagem do carro" />

        <Text as="span">Ativo</Text>

        <Text as="span">
          <MdAttachMoney className="money-icon" />
        </Text>
      </Box>

      <Box as="section" className="container-information">
        <h3>{`${nameCar} - ${brandCar}`}</h3>

        <Text as="p">{description}</Text>
      </Box>
      <Box as="section" className="container-plusInfromation">
        <Box as="div" className="plusInformation-containerUser">
          <Box as="div">
            <Box as="div" className="user-container">
              <img
                src="src\assets\imgCardCar\user.svg"
                alt="imagem do usuário"
              />
              <Text as="span" color="grey.1" fontWeight="500">
                {userName}
              </Text>
            </Box>
            <Box as="div" className="aboutKmYear-container">
              <Text as="span">{km} KM</Text>
              <Text as="span">{year}</Text>
            </Box>
          </Box>
        </Box>

        <Text as="span" className="priceCar" fontWeight="600" color="grey.2">
          R$ {price}
        </Text>
      </Box>
    </LiCar>
  );
};

export default CarCard;
