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
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Input } from "../../form/input";
import { toast } from "react-toastify";
import { instance } from "../../../services/api";

const ResetPassword = ({ isOpen, onClose }: any) => {
  interface IresetProps {
    email: string;
  }
  interface IresetPropsResponse {
    message: string;
  }

  const formSchema = yup.object().shape({
    password: yup.string().required("Senha obrigatória"),
    confirm_password: yup.string().required("Confirmar senha obrigatória"),
  });
  const {
    register,
    handleSubmit,
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

      toast.success(data.message);
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado");
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
            onSubmit={handleSubmit(ResetPassRequest)}
          >
            <h1>Reset Password</h1>
            <Input
              id="email"
              register={register}
              type="email"
              placeholder="Digite seu email"
            />
            <Button
              variant={"brand1"}
              fontSize={"1rem"}
              fontWeight={"600"}
              p={"1rem"}
              w={"70%"}
              type="submit"
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
