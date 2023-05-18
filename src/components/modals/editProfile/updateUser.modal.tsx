import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { iStatusModal } from "../../../interface";
import FormEditUser from "../../Forms/FormEditUserModal";

const ModalEditUser = ({ isOpen, onClose }: iStatusModal) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize={"16px"} color={"grey.1"}>
          Editar perfil
        </ModalHeader>
        <Flex flexDir={"column"}>
          <ModalHeader
            fontFamily={"inter"}
            fontSize={"14px"}
            color={"grey.1"}
            pl={{ base: "8px", xs3: "35px" }}
          >
            Informações pessoais
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody p={0} w={"100%"}>
            <FormEditUser onClose={onClose} />
          </ModalBody>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalEditUser;
