import { Button, Flex } from "@chakra-ui/react";
import { iButtonFilterMobile } from "../../../interface";

export const ButtonFilterMobile = ({
  isFilter,
  clearFilter,
  onClose,
  isOpen,
}: iButtonFilterMobile) => {
  return (
    <>
      {isOpen && (
        <Flex justifyContent="center" mt="60px" mb="40px" w="100%" gap={"1rem"}>
          <Button
            bg={"brand.1"}
            color={"grey.10"}
            w="250px"
            borderRadius="5px"
            fontWeight="600"
            _hover={{ bg: "brand.2" }}
            p="25px 0px 22px 0px"
            onClick={() => {
              onClose();
            }}
          >
            Ver Anúncios
          </Button>
          {isFilter && (
            <Button
              bg={"brand.1"}
              color={"grey.10"}
              w="250px"
              borderRadius="5px"
              fontWeight="600"
              _hover={{ bg: "brand.2" }}
              p="25px 0px 22px 0px"
              onClick={() => {
                clearFilter();
              }}
            >
              Limpar Filtros
            </Button>
          )}
        </Flex>
      )}
    </>
  );
};

export const ButtonFilter = ({ isFilter, isInputFilter, clearFilter }: any) => {
  return (
    <Flex justifyContent="center" mt="70px" mb="40px" w="100%">
      {isFilter && (
        <Button
          bg={"brand.1"}
          color={"grey.10"}
          w="250px"
          borderRadius="5px"
          fontWeight="600"
          _hover={{ bg: "brand.2" }}
          p="25px 0px 22px 0px"
          onClick={() => {
            clearFilter();
          }}
        >
          Limpar Filtros
        </Button>
      )}
    </Flex>
  );
};
