import { Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { iCommentRequest } from "../../../interface";
import { useAuth } from "../../../context/webContext";
import commentSchema from "../../../schemas/comments";
import { useParams } from "react-router-dom";

const FormCreateComment = () => {
  const { id } = useParams();
  const { isLogged, onCreateComment, navigate } = useAuth();
  const [commentInput, setCommentInput] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iCommentRequest>({
    resolver: yupResolver(commentSchema),
  });

  const onFormSubmit = (formData: iCommentRequest) => {
    const newData =
      formData.comment === commentInput ? formData : { comment: commentInput };

    onCreateComment(newData, id!);
    setCommentInput("");
  };

  return (
    <Flex
      as="form"
      onSubmit={handleSubmit(onFormSubmit)}
      border={"1px solid"}
      borderColor={{ base: "transparent", xsm2: "grey.7" }}
      borderRadius={"4px"}
      flexDir={"column"}
      h={
        errors.comment?.message
          ? { base: 200, xsm2: 150 }
          : { base: 200, xsm2: 128 }
      }
      gap={{ base: "unset", xsm2: "5px" }}
      _hover={{
        bg: { base: "transparent", xsm2: "grey.8" },
        borderColor: { base: "transparent", xsm2: "grey.7" },
      }}
      _focusWithin={{
        borderColor: { base: "transparent", xsm2: "brand.2" },
        backgroundColor: "grey.10",
      }}
    >
      <Input
        id="comment"
        value={commentInput}
        register={register}
        errorMessage={errors.comment?.message}
        placeholder="Digitar comentário"
        h="128px"
        variant="outline"
        _hover={{
          bg: "grey.8",
        }}
        mt={"0 !important"}
        pb={{ base: "80px", xsm2: "25px" }}
        borderColor={{ base: "grey.7", xsm2: "transparent" }}
        _focusVisible={{
          borderColor: { base: "brand.2", xsm2: "transparent" },
        }}
        onChange={(e) => {
          setCommentInput(e.target.value);
        }}
      />
      <Flex
        justifyContent={{ base: "flex-start", xsm2: "flex-end" }}
        alignItems={"center"}
        p={{ base: "unset", xsm2: "0 11px 8px 0" }}
        mt={{ base: "20px", xsm2: "0px" }}
        h={45}
      >
        {isLogged ? (
          <Button
            variant={"brand1"}
            type="submit"
            w={108}
            h={38}
            fontSize={"14px"}
            fontFamily={"inter"}
          >
            Comentar
          </Button>
        ) : (
          <Button
            variant={"grey2"}
            w={108}
            h={38}
            fontSize={"14px"}
            fontFamily={"inter"}
            onClick={() => navigate("/login")}
          >
            Comentar
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default FormCreateComment;
