import * as yup from "yup";
import { Button, Flex, Text } from "@chakra-ui/react";
import { Input } from "../../Input";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/webContext";
import { iLoginProps } from "../../../interface";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const FormLogin = ({ onOpen }: any) => {
  const { Login, navigate } = useContext(AuthContext);
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
    <Flex
      as="form"
      flexDir={"column"}
      gap={"1rem"}
      position={"relative"}
      onSubmit={handleSubmit(Login)}
    >
      <Input
        id="email"
        register={register}
        label={"Email"}
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
      <Input
        id="password"
        register={register}
        label={"Senha"}
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
      <Text
        fontSize={"0.875rem"}
        fontWeight={500}
        color={"grey.2"}
        position={"absolute"}
        right={"2px"}
        bottom={210}
        cursor={"pointer"}
        onClick={onOpen}
      >
        Esqueci minha senha
      </Text>
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
      <Text as={"h5"} w={"max-content"} m={"0 auto"} p={"1rem 0"}>
        Ainda não possui conta?
      </Text>
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
    </Flex>
  );
};

export default FormLogin;
