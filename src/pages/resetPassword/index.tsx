import { Footer } from "../../components/Footer";
import Header from "../../components/NavBar";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { IresetPropsRequest } from "../../interface";
import { useAuth } from "../../context/webContext";

const ResetPasswordPage = () => {
  const { ResetPass } = useAuth();
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

  return (
    <Flex
      justifyContent={"space-between"}
      flexDir={"column"}
      maxW={1450}
      margin={"0 auto"}
      h={"100vh"}
    >
      <Header />
      <Flex
        justifyContent={"space-between"}
        flexDir={"column"}
        gap={"1rem"}
        bg={"grey.10"}
        p={{ base: "2rem 1rem", sm2: "2rem 2rem" }}
        m={"0 auto"}
        h={{ md: "65%" }}
        w={{ base: "90%", sm2: 600 }}
        borderRadius={"4px"}
      >
        <Text as={"h1"} fontSize={"1.5rem"} fontWeight={500} color={"grey.0"}>
          Reset Password
        </Text>
        <Flex
          as="form"
          flexDir={"column"}
          gap={"1rem"}
          position={"relative"}
          onSubmit={handleSubmit(ResetPass)}
        >
          <Input
            id="password"
            register={register}
            label={"Senha"}
            errorMessage={errors.password?.message}
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
          <Input
            id="confirm_password"
            register={register}
            label={"Confirmar Senha"}
            errorMessage={errors.confirm_password?.message}
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
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default ResetPasswordPage;
