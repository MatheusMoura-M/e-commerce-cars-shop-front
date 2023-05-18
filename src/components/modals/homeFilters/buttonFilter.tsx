import { Button, Flex } from "@chakra-ui/react";
import { iButtonFilterMobile } from "../../../interface";

const ButtonFilterMobile = ({
  isFilter,
  clearFilter,
  onClose,
  isOpen,
  filteredAlready,
  setFilteredAlready,
}: iButtonFilterMobile) => {
  if (isFilter && isOpen && filteredAlready) {
    return (
      <Flex justifyContent="center" mt="70px" mb="40px" w="100%">
        <Button
          bg={"brand.1"}
          color={"grey.10"}
          w="250px"
          borderRadius="5px"
          fontWeight="600"
          _hover={{ background: "brand.2" }}
          p="25px 0px 22px 0px"
          onClick={() => {
            clearFilter();
            setFilteredAlready(false);
          }}
        >
          Limpar Filtros
        </Button>
      </Flex>
    );
  } else {
    return (
      <Flex justifyContent="center" mt="70px" mb="40px" w="100%">
        <Button
          bg={"brand.1"}
          color={"grey.10"}
          w="250px"
          borderRadius="5px"
          fontWeight="600"
          _hover={{ background: "brand.2" }}
          p="25px 0px 22px 0px"
          onClick={() => {
            onClose();

            if (isFilter) {
              setFilteredAlready(true);
            }
          }}
        >
          Ver Anúncios
        </Button>
      </Flex>
    );
  }
};

export const ButtonFilter = ({ isFilter, isInputFilter, clearFilter }: any) => {
  if (isFilter && !isInputFilter) {
    return (
      <Flex justifyContent="center" mt="70px" mb="40px" w="100%">
        <Button
          bg={"brand.1"}
          color={"grey.10"}
          w="250px"
          borderRadius="5px"
          fontWeight="600"
          _hover={{ background: "brand.2" }}
          p="25px 0px 22px 0px"
          onClick={() => {
            clearFilter();
          }}
        >
          Limpar Filtros
        </Button>
      </Flex>
    );
  } else {
    return null;
  }
};

export default ButtonFilterMobile;
