import { Footer } from "../../components/footer";
import Header from "../../components/navBar";
import { ContainerFormLogin, ContainerLoginage, Form } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext, iLoginProps } from "../../context/webContext";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Input } from "../../components/form/input";
import { Button } from "@chakra-ui/react";

export const LoginPage = () => {
  const { Login } = useContext(AuthContext);

  const formSchema = yup.object().shape({
    username: yup.string().required("Usuario obrigatório"),
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
          <label htmlFor="username">Usuario</label>
          <Input
            id="username"
            register={register}
            type="text"
            placeholder="Digitar Usuario"
            variant="outline"
            _hover={{
              bg: "grey.8",
            }}
            p="1rem"
          />
          {errors.username && <span>{errors.username.message}</span>}
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
          />
          {errors.password && <span>{errors.password.message}</span>}
          <p>Esqueci minha senha</p>
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
          >
            Cadastrar
          </Button>
        </Form>
      </ContainerFormLogin>

      <Footer />
    </ContainerLoginage>
  );
};
