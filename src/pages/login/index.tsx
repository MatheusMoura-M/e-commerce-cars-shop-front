import { Footer } from "../../components/footer";
import Header from "../../components/navBar";
import { ContainerFormLogin, ContainerLoginage, Form } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../context/webContext";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Input } from "../../components/form/input";
import { Button, useDisclosure } from "@chakra-ui/react";
import ResetPassword from "../../components/modals/resetPassword/resetPassword.modal";
import { iLoginProps } from "../../interface";

export const LoginPage = () => {
  const { Login, navigate } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Usuario obrigatório")
      .email("Email obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginProps>({
    resolver: yupResolver(formSchema),
  });
  return (
    <ContainerLoginage>
      <Header />
      <ContainerFormLogin>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit(Login)}>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            register={register}
            type="text"
            placeholder="Digitar Email"
            variant="outline"
            _hover={{
              bg: "grey.8",
            }}
            p="1rem"
            minH="45px"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            errorMessage={errors.email?.message}
          />

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
            minH="45px"
            showPass
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            errorMessage={errors.password?.message}
          />

          <p onClick={onOpen}>Esqueci minha senha</p>
          <Button
            variant={"brand1"}
            type="submit"
            fontSize={"1rem"}
            fontWeight={"600"}
            p={"1rem"}
            mt={"3rem"}
            w={"100%"}
          >
            Entrar
          </Button>
          <h5>Ainda não possui conta?</h5>
          <Button
            variant={"grey4"}
            type="button"
            fontSize={"1rem"}
            fontWeight={"600"}
            p={"1rem"}
            w={"100%"}
            onClick={() => navigate("/register")}
          >
            Cadastrar
          </Button>
        </Form>

        <ResetPassword isOpen={isOpen} onClose={onClose} />
      </ContainerFormLogin>

      <Footer />
    </ContainerLoginage>
  );
};
