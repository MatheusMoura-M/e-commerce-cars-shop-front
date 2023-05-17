import { Footer } from "../../components/footer";
import Header from "../../components/navBar";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Input } from "../../components/form/input";
import { Button } from "@chakra-ui/react";
import {
  ContainerFormResetPass,
  ContainerResetPassPage,
  FormResetPass,
} from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { instance } from "../../services/api";
import { useState } from "react";
import axios from "axios";
import { IresetPropsRequest, IresetPropsResponse } from "../../interface";

const ResetPasswordPage = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const formSchema = yup.object().shape({
    password: yup.string().required("Senha obrigatória"),
    confirm_password: yup.string().required("Confirmar senha obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IresetPropsRequest>({
    resolver: yupResolver(formSchema),
  });

  const ResetPass = async (password: IresetPropsRequest): Promise<void> => {
    try {
      if (password.password !== password.confirm_password) {
        throw new Error("As senhas não coincidem");
      }

      const { data } = await instance.patch<IresetPropsResponse>(
        `user/reset-password/${token}`,
        password
      );

      toast.success(data.message, {
        autoClose: 1000,
      });
      navigate("/login");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        toast.error(error.response?.data.error.errors[0], {
          autoClose: 1000,
        });
      }
    }
  };

  return (
    <ContainerResetPassPage>
      <Header />
      <ContainerFormResetPass>
        <h1>Reset Password</h1>
        <FormResetPass onSubmit={handleSubmit(ResetPass)}>
          <label htmlFor="password-">Senha</label>
          <Input
            id="password"
            register={register}
            type="password"
            placeholder="Digitar Senha"
            variant="outline"
            _hover={{
              bg: "grey.8",
            }}
            p="1rem"
            showPass
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {errors.password && <span>{errors.password.message}</span>}

          <label htmlFor="confirm_password-">Confirmar Senha</label>
          <Input
            id="confirm_password"
            register={register}
            type="password"
            placeholder="Digite sua Senha novamente"
            variant="outline"
            _hover={{
              bg: "grey.8",
            }}
            p="1rem"
            showPass
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          {errors.confirm_password && (
            <span>{errors.confirm_password.message}</span>
          )}
          <Button
            variant={"brand1"}
            type="submit"
            fontSize={"1rem"}
            fontWeight={"600"}
            p={"1rem"}
            mt={"3rem"}
            w={"100%"}
          >
            Reset Password
          </Button>
        </FormResetPass>
      </ContainerFormResetPass>
      <Footer />
    </ContainerResetPassPage>
  );
};

export default ResetPasswordPage;
