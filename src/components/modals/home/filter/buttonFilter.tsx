import { Box, Button } from "@chakra-ui/react";

export const ButtonFilterMobile = ({
  isFilter,
  clearFilter,
  onClose,
  isOpen,
  filteredAlready,
  setFilteredAlready,
  filteredCars,
  isInputFilter
}: any) => {

  

  if (isFilter && isOpen && filteredAlready ) {

    return (
      <Box
        display="flex"
        justifyContent="center"
        marginTop="70px"
        marginBottom="40px"
        w="100%"
      >
        <Button
          bg={"brand.1"}
          color={"grey.10"}
          w="250px"
          borderRadius="5px"
          fontWeight="600"
          _hover={{ background: "brand.2" }}
          padding="25px 0px 22px 0px"
          onClick={() => {
            clearFilter();
            setFilteredAlready(false)
          }}
        >
          Limpar Filtros
        </Button>
      </Box>
    );

  }else{

    return (
      <Box
        display="flex"
        justifyContent="center"
        marginTop="70px"
        marginBottom="40px"
        w="100%"
      >
        <Button
          bg={"brand.1"}
          color={"grey.10"}
          w="250px"
          borderRadius="5px"
          fontWeight="600"
          _hover={{ background: "brand.2" }}
          padding="25px 0px 22px 0px"
          onClick={() => {

            onClose()

            if(isFilter){
              setFilteredAlready(true)
            }

          }}
        >
          Ver Anúncios
        </Button>
      </Box>
    );
  }
  
};

export const ButtonFilter = ({ isFilter, isInputFilter, clearFilter }: any) => {
  
  if (isFilter && !isInputFilter) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        marginTop="70px"
        marginBottom="40px"
        w="100%"
      >
        <Button
          bg={"brand.1"}
          color={"grey.10"}
          w="250px"
          borderRadius="5px"
          fontWeight="600"
          _hover={{ background: "brand.2" }}
          padding="25px 0px 22px 0px"
          onClick={() => {
            clearFilter();
          }}
        >
          Limpar Filtros
        </Button>
      </Box>
    );
  } else {
    return null;
  }
};
