import { useContext, useEffect } from "react";
import { contextHomeProvider } from "../../context/homePage.context";
import CardSkeleton from "../../utils/skeletons/cardCar.skeleton";
import CarCard from "../../components/Cards/car";
import { Box, Text } from "@chakra-ui/react";
import { iCarResponse } from "../../interface";
import { UlCardCars } from "../../components/UlCardCars";

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
  } else if (carAd.length == 0 && !isFilter && !isInputFilter) {
    return (
      <UlCardCars>
        <Box mt="50px">
          <Text as="h2" fontSize="1.3rem">
            Nenhum carro cadastrado &#128533;
          </Text>
        </Box>
      </UlCardCars>
    );
  } else {
    return (
      <UlCardCars>
        {pageCard.map((card: iCarResponse, i: number) => {
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
              imageUrl={card.user.image_url}
              sellerName={card.user.name}
              isGoodPrice={card.is_good_price}
              buttonsSection={false}
              ownerAdCard={card.user.id}
            />
          );
        })}
      </UlCardCars>
    );
  }
};

export default CardCardList;
