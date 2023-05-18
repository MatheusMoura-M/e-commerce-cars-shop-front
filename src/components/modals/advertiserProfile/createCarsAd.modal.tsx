import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
} from "@chakra-ui/react";
import { iStatusModal } from "../../../interface";
import FormCreateCarsAd from "../../Forms/FormCreateCarsAdModal";

export const ModalCreateCarAd = ({ isOpen, onClose }: iStatusModal) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize={"16px"} color={"grey.1"}>
          Criar Anúncio
        </ModalHeader>
        <Flex flexDir={"column"} pl={"15px"}>
          <ModalHeader fontFamily={"inter"} fontSize={"14px"} color={"grey.1"}>
            Informações do veículo
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormCreateCarsAd onClose={onClose} />
          </ModalBody>
        </Flex>
      </ModalContent>
    </Modal>
  );
};
