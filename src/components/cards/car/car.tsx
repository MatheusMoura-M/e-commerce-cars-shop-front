import { Text } from "@chakra-ui/react";
import LiCar from "./style";
import { MdAttachMoney } from "react-icons/md";

const CarCard = ({}) => {
  return (
    <LiCar>
      <div className="container-image">
        <img src="src\assets\imgCardCar\carImg.svg" alt="Imagem do carro" />

        <Text as={"span"}>Ativo</Text>

        <span>
          <MdAttachMoney className="money-icon" />
        </span>
      </div>

      <section className="container-information">
        <h3>Product title stays here - max 1 line</h3>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque itaque
          consequuntur sint libero molestiae in voluptates velit explicabo. Vel
          consequatur est exercitationem tempora deserunt possimus voluptatibus
          quidem! Illo, voluptas debitis.
        </p>
      </section>
      <section className="container-plusInfromation">
        <div className="plusInformation-containerUser">
          <div className="user-container">
            <img src="src\assets\imgCardCar\user.svg" alt="imagem do usuário" />
            <span>Usuário</span>
          </div>

          <section className="container-information">
            <h3>Product title stays here - max 1 lineeeeeeeeee</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              itaque consequuntur sint libero molestiae in voluptates velit
              explicabo. Vel consequatur est exercitationem tempora deserunt
              possimus voluptatibus quidem! Illo, voluptas debitis.
            </p>
          </section>

          <section className="container-plusInfromation">
            <div className="plusInformation-containerUser">
              <div>
                <div className="user-container">
                  <img
                    src="src\assets\imgCardCar\user.svg"
                    alt="imagem do usuário"
                  />
                  <span>Usuário</span>
                </div>

                <div className="aboutKmYear-container">
                  <span>0 KM</span>
                  <span>2019</span>
                </div>
              </div>
            </div>

            <span className="priceCar">R$ 00.000,00</span>
          </section>
        </div>
      </section>
    </LiCar>
  );
};

export default CarCard;
