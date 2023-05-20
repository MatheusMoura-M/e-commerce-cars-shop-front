import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Input } from "../../Input";
import { IresetProps } from "../../../interface";
import { useAuth } from "../../../context/webContext";

const ResetPassword = ({ isOpen, onClose }: any) => {
  const [email, setEmail] = useState<string>("");
  const { ResetPassRequest } = useAuth();
  const formSchema = yup.object().shape({
    email: yup.string().email().required("Email Obrigatório"),
  });

  const {
    register,
    handleSubmit: handleresetpass,
    formState: { errors },
  } = useForm<IresetProps>({
    resolver: yupResolver(formSchema),
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent alignSelf={"center"} p={"1rem"}>
        <ModalHeader>Esqueci minha senha</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex
            as={"form"}
            bg={"grey.10"}
            flexDir={"column"}
            gap={"2rem"}
            alignItems={"center"}
            onSubmit={handleresetpass(ResetPassRequest)}
          >
            <Text as={"h1"}>Reset Password</Text>
            <Input
              id={"email"}
              errorMessage={errors.email?.message}
              type={"email"}
              placeholder={"Digite seu email"}
              variant={"outline"}
              _hover={{
                bg: "grey.8",
              }}
              p={"1rem"}
              register={register}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Button
              variant={"brand1"}
              type="submit"
              fontSize={"1rem"}
              fontWeight={"600"}
              p={"1rem"}
              w={"70%"}
            >
              Send Reset
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ResetPassword;
