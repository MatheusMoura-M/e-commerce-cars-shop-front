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
import FormEditComment from "../../Forms/FormEditComment";

const ModalEditComment = ({ isOpen, onClose }: iStatusModal) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent h={300} minW={500} alignSelf={"center"}>
        <ModalHeader fontSize={"16px"} fontFamily={"inter"} color={"grey.1"}>
          Editar Comentário
        </ModalHeader>
        <Flex flexDir={"column"}>
          <ModalCloseButton />
          <ModalBody p={0} w={"100%"}>
            <FormEditComment onClose={onClose} />
          </ModalBody>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalEditComment;
