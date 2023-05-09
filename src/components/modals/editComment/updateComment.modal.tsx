import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Input } from "../../form/input";
import { useAuth } from "../../../context/webContext";
import { iCommentRequest } from "../../../interface/comment.interface";
import commentSchema from "../../../schemas/comments";

interface iStatusModalUpdateUser {
  isOpen: boolean;
  onClose: () => void;
}

const ModalEditComment = ({ isOpen, onClose }: iStatusModalUpdateUser) => {
  const {} = useAuth();
  const [commentInput, setCommentInput] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iCommentRequest>({
    resolver: yupResolver(commentSchema),
  });

  const onFormSubmit = (formData: iCommentRequest) => {
    console.log(formData);
    setCommentInput("");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent h={300} minW={500} alignSelf={"center"}>
        <ModalHeader fontSize={"16px"} fontFamily={"inter"} color={"grey.1"}>
          Editar Comentário
        </ModalHeader>
        <Flex flexDirection={"column"}>
          <ModalCloseButton />
          <ModalBody p={0} w={"100%"}>
            <Flex
              as={"form"}
              onSubmit={handleSubmit(onFormSubmit)}
              bg={"grey.10"}
              borderRadius={"4x"}
              w={{ base: "95%", xs3: 470 }}
              maxW={520}
              m={"0px auto"}
              minH={200}
              maxH={300}
              flexDirection={"column"}
              gap={"25px"}
              p={"0 0 10px 0"}
            >
              <Flex
                flexDirection={"column"}
                justifyContent={"center"}
                w="100%"
                minH={150}
                margin="0 auto"
                as="section"
              >
                <Input
                  id="comment"
                  register={register}
                  errorMessage={errors.comment?.message}
                  placeholder="Digitar comentário"
                  minH="100px"
                  variant="outline"
                  _hover={{
                    bg: "grey.8",
                  }}
                  mt={"0 !important"}
                  borderColor={{ base: "grey.7", xsm2: "transparent" }}
                  onChange={(e) => {
                    setCommentInput(e.target.value);
                  }}
                  value={commentInput}
                />
              </Flex>
              <ModalFooter
                display={"flex"}
                flexDirection={"column"}
                gap={"42px"}
                p={0}
              >
                <Flex
                  w={{ base: "100%", xs3: "85%" }}
                  flexWrap={"wrap"}
                  justifyContent={{ base: "center", xs3: "unset" }}
                  gap={"15px"}
                >
                  <Button
                    variant={"grey1"}
                    color={"grey.2"}
                    fontSize={"14px"}
                    fontFamily={"inter"}
                    borderRadius={"4px"}
                    w={"150px"}
                    maxW={{ base: 120, xs1: 150, xs3: "100px" }}
                    onClick={onClose}
                  >
                    Cancelar
                  </Button>
                  <Button
                    variant="alert1"
                    fontSize={"14px"}
                    w={"150px"}
                    maxW={{ base: 120, xs1: 150, xs3: "110px" }}
                    // onClick={() => onDeleteUser()}
                  >
                    Excluir Perfil
                  </Button>
                  <Button
                    variant="brand6"
                    w={"193px"}
                    fontFamily={"inter"}
                    fontSize={"14px"}
                    borderRadius={"4px"}
                    type="submit"
                    maxW={{ base: 200, xs3: 150 }}
                    onClick={onClose}
                  >
                    Salvar alterações
                  </Button>
                </Flex>
              </ModalFooter>
            </Flex>
          </ModalBody>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalEditComment;
