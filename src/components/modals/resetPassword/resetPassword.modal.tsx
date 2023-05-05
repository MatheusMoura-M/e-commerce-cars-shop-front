import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Input } from "../../form/input";
import { toast } from "react-toastify";
import { instance } from "../../../services/api";

const ResetPassword = ({ isOpen, onClose }: any) => {
  const [email, setEmail] = useState<string>("");

  interface IresetProps {
    email: string;
  }
  interface IresetPropsResponse {
    message: string;
  }

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

  const ResetPassRequest = async (email: IresetProps): Promise<void> => {
    try {
      const { data } = await instance.post<IresetPropsResponse>(
        "user/reset-password",
        email
      );

      toast.success(data.message, {
        autoClose: 1000,
      });
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado", {
        autoClose: 1000,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent alignSelf="center" padding="1rem">
        <ModalHeader>Esqueci minha senha</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box
            as="form"
            backgroundColor="var(--grey-10)"
            display="flex"
            flexDirection="column"
            gap="2rem"
            alignItems="center"
            onSubmit={handleresetpass(ResetPassRequest)}
          >
            <h1>Reset Password</h1>
            <Input
              id="email"
              type="email"
              placeholder="Digite seu email"
              variant="outline"
              _hover={{
                bg: "grey.8",
              }}
              p="1rem"
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
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ResetPassword;
