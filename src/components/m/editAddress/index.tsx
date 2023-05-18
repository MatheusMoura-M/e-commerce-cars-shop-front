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
import FormEditAddress from "../../Forms/FormEditAddressModal";

export const ModalUpdateAddress = ({ isOpen, onClose }: iStatusModal) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW={520} h={"auto"} pb={"1rem"}>
        <ModalHeader fontSize={"16px"} color={"grey.1"}>
          Editar endereço
        </ModalHeader>
        <Flex flexDir={"column"} px={"1.5rem"} gap={"1rem"} minH={496}>
          <ModalHeader
            fontFamily={"inter"}
            fontSize={"14px"}
            color={"grey.1"}
            px={0}
          >
            Informações do endereço
          </ModalHeader>
          <ModalCloseButton color={"grey.4"} />
          <ModalBody p={0}>
            <FormEditAddress onClose={onClose} />
          </ModalBody>
        </Flex>
      </ModalContent>
    </Modal>
  );
};
