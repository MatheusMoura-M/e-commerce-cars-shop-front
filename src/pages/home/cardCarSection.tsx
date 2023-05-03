import { useContext, useEffect } from "react";
import { contextHomeProvider } from "../../context/homePage.context";
import { UlCardCars } from "./style";
import CardSkeleton from "../../utils/skeletons/cardCar.skeleton";
import { iCar } from "../../interface/car.interface";
import CarCard from "../../components/cards/car/car";
import { Box, Text } from "@chakra-ui/react";

const CardCardList = ({ pageCard }: any) => {
  const arraySkelotons = new Array(12).fill("cards");

  const {
    carAd,
    isLoading,
    filteredCars,
    isFilter,
    filterFieldsSelected,
    filterCarList,
  } = useContext(contextHomeProvider);

  useEffect(() => {
    filterFieldsSelected();
    filterCarList();
  }, []);

  if (isLoading) {
    return (
      <UlCardCars>
        {arraySkelotons.map((card: any, i: number) => {
          return <CardSkeleton key={i} />;
        })}
      </UlCardCars>
    );
  }

  if (filteredCars.length != 0 && !isLoading) {
    return (
      <UlCardCars>
        {pageCard.map((card: iCar, i: number) => {
          return (
            <CarCard
              description={card.description}
              image={card.cover_image}
              km={card.km}
              price={card.price}
              nameCar={card.model}
              brandCar={card.brand}
              year={card.year}
              key={card.id}
              id={card.id}
              userName="usuário"
            />
          );
        })}
      </UlCardCars>
    );
  }

  if (!isLoading && !isFilter && carAd.length != 0) {
    return (
      <UlCardCars>
        {pageCard.map((card: iCar, i: number) => {
          return (
            <CarCard
              description={card.description}
              image={card.cover_image}
              km={card.km}
              price={card.price}
              nameCar={card.model}
              brandCar={card.brand}
              year={card.year}
              key={card.id}
              userName="usuário"
              id={card.id}
            />
          );
        })}
      </UlCardCars>
    );
  }

  if (filteredCars.length == 0 && isFilter === true && !isLoading) {
    return (
      <UlCardCars>
        <Box mt="50px">
          <Text as="h2" fontSize="1.3rem">
            Nenhum carro encontrado &#128533;
          </Text>
        </Box>
      </UlCardCars>
    );
  }

  return (
    <UlCardCars>
      <Box mt="50px">
        <Text as="h2" fontSize="1.3rem">
          Nenhum carro cadastrado &#128533;
        </Text>
      </Box>
    </UlCardCars>
  );
};

export default CardCardList;
