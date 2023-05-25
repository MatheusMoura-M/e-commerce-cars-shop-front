import { Button, Flex, ModalFooter } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { iCommentRequest, iStatusModalOptional } from "../../../interface";
import { useAuth } from "../../../context/webContext";
import commentSchema from "../../../schemas/comments";

const FormEditComment = ({ onClose }: iStatusModalOptional) => {
  const { selectedCommentId, onEditComment, onDeleteComment } = useAuth();
  const [commentInput, setCommentInput] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iCommentRequest>({
    resolver: yupResolver(commentSchema),
  });

  const onFormSubmit = (formData: iCommentRequest) => {
    onEditComment(selectedCommentId, formData);
    setCommentInput("");
  };

  return (
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
      flexDir={"column"}
      gap={"25px"}
      p={"0 0 10px 0"}
    >
      <Flex
        flexDir={"column"}
        justifyContent={"center"}
        w="100%"
        minH={150}
        m="0 auto"
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
      <ModalFooter flexDir={"column"} gap={"42px"} p={0}>
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
            onClick={() => {
              onDeleteComment(selectedCommentId);
              onClose!();
            }}
          >
            Excluir
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
  );
};

export default FormEditComment;
