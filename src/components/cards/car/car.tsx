import LiCar from "./style";
import { MdAttachMoney } from "react-icons/md";
import {Box, Image, Text, Heading} from "@chakra-ui/react"

const CarCard = ({}) => {
  return (
    <LiCar>
      <Box className="container-image">
        <img src="src\assets\imgCardCar\carImg.svg" alt="Imagem do carro" />

        <Text as="span">Ativo</Text>

        <Text as="span">
          <MdAttachMoney className="money-icon" />
        </Text>
      </Box>

      <Box as="section" className="container-information">
        <h3>Product title stays here - max 1 line</h3>

        <Text as="p">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque itaque
          consequuntur sint libero molestiae in voluptates velit explicabo. Vel
          consequatur est exercitationem tempora deserunt possimus voluptatibus
          quidem! Illo, voluptas debitis.
        </Text>
      </Box>
      <Box as="section" className="container-plusInfromation">
        <Box as="div" className="plusInformation-containerUser">
          <Box as="div">
            <Box as="div" className="user-container">
              <img
                src="src\assets\imgCardCar\user.svg"
                alt="imagem do usuário"
              />
              <Text as="span" color="grey.1" fontWeight="500">Usuário</Text>
            </Box>
            <Box as="div" className="aboutKmYear-container">
              <Text as="span">0 KM</Text>
              <Text as="span">2019</Text>
            </Box>
          </Box>
        </Box>

        <Text as="span" className="priceCar" fontWeight="600" color="grey.2">R$ 00.000,00</Text>

      </Box>

    </LiCar>

  )

};

export default CarCard;