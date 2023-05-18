import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useAuth } from "../../../context/webContext";
import { iStatusDeleteModalCar } from "../../../interface";

export const ModalVerifyDelete = ({
  isOpen,
  onClose,
  onEditClose,
}: iStatusDeleteModalCar) => {
  const { selectedCar, onDeleteCarAd } = useAuth();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize={"16px"} color={"grey.1"}>
          Excluir Anuncio
        </ModalHeader>
        <Flex flexDir={"column"} pl={"15px"}>
          <ModalHeader fontFamily={"inter"} fontSize={"14px"} color={"grey.1"}>
            Tem certeza que deseja remover este anúncio?
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text
              as={"p"}
              fontSize={"16px"}
              fontWeight={400}
              lineHeight={"28px"}
              color={"grey.2"}
              fontFamily={"inter"}
            >
              Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
              conta e removerá seus dados de nossos servidores.
            </Text>
            <ModalFooter gap={"10px"} px={0}>
              <Button
                mr={0}
                onClick={onClose}
                variant={"grey1"}
                color={"grey.2"}
                fontSize={"16px"}
                fontFamily={"inter"}
                borderRadius={"4px"}
              >
                Cancelar
              </Button>
              <Button
                variant={"alert1"}
                w={"193px"}
                fontFamily={"inter"}
                fontSize={"16px"}
                borderRadius={"4px"}
                onClick={() => {
                  onDeleteCarAd(selectedCar.id);
                  onEditClose();
                  onClose();
                }}
              >
                Sim, excluir anúncio
              </Button>
            </ModalFooter>
          </ModalBody>
        </Flex>
      </ModalContent>
    </Modal>
  );
};
