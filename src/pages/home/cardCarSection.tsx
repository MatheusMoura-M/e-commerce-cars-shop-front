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
    filterOptionsMenu,
    filterCarList,
    isInputFilter,
    inputCarsFiltered,
    modelSelected,
    brandSelected,
    yearSelected,
    colorSelected,
    fuelSelected
  } = useContext(contextHomeProvider);

  useEffect(() => {
    filterOptionsMenu();
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

  if (
    (filteredCars.length == 0 && isFilter && !isLoading && !isInputFilter) ||
    (inputCarsFiltered.length == 0 && isInputFilter)
  ) {
    return (
      <UlCardCars>
        <Box mt="50px">
          <Text as="h2" fontSize="1.3rem">
            Nenhum carro encontrado &#128533;
          </Text>
        </Box>
      </UlCardCars>
    );
  }else if (carAd.length == 0 && !isFilter && !isInputFilter) {
    return (
      <UlCardCars>
        <Box mt="50px">
          <Text as="h2" fontSize="1.3rem">
            Nenhum carro cadastrado &#128533;
          </Text>
        </Box>
      </UlCardCars>
    );
  }else{

    return (
      <UlCardCars>
        {pageCard.map((card: iCar, i: number) => {
          return (
            <CarCard
              description={card.description}
              image={card.cover_image}
              km={card.km}
              price={card.price}
              model={card.model}
              brandCar={card.brand}
              year={card.year}
              key={card.id}
              id={card.id}
              userName="usuário"
              buttonStatus={true}
              isGoodPrice
            />
          );
        })}
      </UlCardCars>
    );
  }

};

export default CardCardList;
