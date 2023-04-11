import { 
  Box, 
  Button, 
  useDisclosure,
  Show,
  Hide,
} from "@chakra-ui/react";
import Header from "../../components/header";
import { Footer } from "../../components/footer";
import { ContainerHomePage, HomePanel, NumberPage, UlCardCars } from "./style";
import CarCard from "../../components/cards/car/car";
import ModalFilterMobile from "../../components/modals/home/filterCarsMobile.modal";
import FilterCars from "../../components/modals/home/filterCars.modal";
import { Input } from "../../components/form/input";

export const Home = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <ContainerHomePage>

      <Box display="flex" justifyContent="center" flexDirection="column" bgColor="grey.10" maxWidth="1450px" >

        <Header />

        <HomePanel>
          <div>
            <h2>Motors Shop</h2>
            <p>A melhor plataforma de anúncios de carros do país</p>
          </div>
        </HomePanel>
        <Box display="flex">
          <Show breakpoint="(min-width: 1030px)">
            <FilterCars />
          </Show>
          <UlCardCars>
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
          </UlCardCars>
        </Box>

        <Box 
          w = {"100%"} 
          mt = "60px" 
          mb="30px" 
          display="flex" 
          alignItems="center" 
          justifyContent="center"
        >

        <Hide breakpoint="(min-width: 1030px)">
          <Button 
            bg={"brand.1"} 
            color={"grey.10"} 
            w={{base: "250px", sm: "60%", md: "350px", lg: "400px", xl: "350px"}} 
            borderRadius="5px" 
            fontWeight="500"
            _hover={{background:"brand.2"}}
            onClick={onOpen}
          >
            Filtros
          </Button>
        </Hide>

        </Box>
        <Box>
          <NumberPage>
            <span>1</span>
            <span>de 2</span>
          </NumberPage>
          <Box display="flex" justifyContent="center">
            <Button 
              bg={"grey.10"} 
              color={"brand.2"}
              fontWeight="600"
              fontSize="1.10rem"
              mb="30px"
            >
              Seguinte &gt;
            </Button>
          </Box>
        </Box>

        <ModalFilterMobile isOpen={isOpen} onClose={onClose} />

      </Box>

    </ContainerHomePage>
  );
};
