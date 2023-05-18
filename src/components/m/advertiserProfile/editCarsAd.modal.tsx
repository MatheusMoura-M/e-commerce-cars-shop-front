import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { useAuth } from "../../../context/webContext";
import { iCar, iStatusModal } from "../../../interface";
import { ModalVerifyDelete } from "./verifyDelete.modal";
import FormEditCarsAd from "../../Forms/FormEditCarsAdModal";

export const ModalEditCarAd = ({ isOpen, onClose }: iStatusModal) => {
  const { setSelectedCar } = useAuth();

  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
        setSelectedCar({} as iCar);
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize={"16px"} color={"grey.1"}>
          Editar Anúncio
        </ModalHeader>
        <Flex flexDir={"column"} pl={"15px"}>
          <ModalHeader fontFamily={"inter"} fontSize={"14px"} color={"grey.1"}>
            Informações do veículo
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormEditCarsAd
              onClose={onClose}
              isOpen={isOpen}
              onDeleteOpen={onDeleteOpen}
            />
          </ModalBody>
        </Flex>
      </ModalContent>
      <ModalVerifyDelete
        isOpen={isDeleteOpen}
        onClose={onDeleteClose}
        onEditClose={onClose}
      />
    </Modal>
  );
};
