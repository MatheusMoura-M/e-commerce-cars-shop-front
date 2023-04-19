import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Form } from "./style";
import { useState } from "react";
import { Input } from "../input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import formSchema from "../../../schemas/comments";
import { iComment } from "../../../@types";

const FormRegisterUser = () => {
  const [isSaler, setIsSaler] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iComment>({
    resolver: yupResolver(formSchema),
  });

  return (
    <Form>
      <Box w="80%" margin="0 auto">
        <Box paddingTop="45px">
          <Heading as="h2" fontSize="1.6rem" fontWeight="500">
            Cadastro
          </Heading>
        </Box>
        <Box paddingTop="25px" mb="25px">
          <Heading as="h3" fontSize="1rem" fontWeight="500">
            Infomações pessoais
          </Heading>
        </Box>
        <Box width="100%%" margin="0 auto">
          <Input
            marginTopForm={"5px"}
            id="name"
            placeholder="Ex: Samuel Leão"
            color="grey.3"
            fontWeight="400"
            fontSize="0.875rem"
            border="1px"
            borderColor="grey.6"
            borderRadius="4px"
            register={register}
            pt="15px"
            pb="15px"
            label="Nome"
          />

          <Input
            marginTopForm={"5px"}
            id="email"
            placeholder="Ex: samuel@kenzie.com.br"
            color="grey.3"
            fontWeight="400"
            fontSize="0.875rem"
            border="1px"
            borderColor="grey.6"
            borderRadius="4px"
            register={register}
            pt="15px"
            pb="15px"
            label="Email"
          />

          <Input
            marginTopForm={"5px"}
            id="cpf"
            placeholder="000.000.000-00"
            color="grey.3"
            fontWeight="400"
            fontSize="0.875rem"
            border="1px"
            borderColor="grey.6"
            borderRadius="4px"
            register={register}
            pt="15px"
            pb="15px"
            label="CPF"
          />

          <Input
            marginTopForm={"5px"}
            id="telephone"
            placeholder="(DDD) 90000-0000"
            color="grey.3"
            fontWeight="400"
            fontSize="0.875rem"
            border="1px"
            borderColor="grey.6"
            borderRadius="4px"
            register={register}
            pt="15px"
            pb="15px"
            label="Celular"
          />

          <Input
            marginTopForm={"5px"}
            id="birthdate"
            placeholder="00/00/00"
            color="grey.3"
            fontWeight="400"
            fontSize="0.875rem"
            border="1px"
            borderColor="grey.6"
            borderRadius="4px"
            register={register}
            pt="15px"
            pb="15px"
            label="Data de nascimento"
          />

          <FormControl mt={4}>
            <FormLabel fontSize="0.875rem">Descrição</FormLabel>
            <Textarea
              placeholder="Digitar descrição"
              color="grey.3"
              fontWeight="400"
              fontSize="0.875rem"
              borderColor="grey.6"
              borderRadius="4px"
              pt="15px"
              pb="15px"
              resize="none"
              _hover={{ background: "grey.8", borderColor: "grey.8" }}
              _focus={{
                background: "grey.10",
                border: "2px",
                borderColor: "brand.2",
              }}
              _focusVisible={{ boxShadow: "none" }}
            />
          </FormControl>

          <Box paddingTop="30px" paddingBottom="10px">
            <Heading as="h3" fontSize="1rem" fontWeight="500">
              Infomações de endereço
            </Heading>
          </Box>

          <Input
            marginTopForm={"5px"}
            id="zipcode"
            placeholder="00000.000"
            color="grey.3"
            fontWeight="400"
            fontSize="0.875rem"
            border="1px"
            borderColor="grey.6"
            borderRadius="4px"
            register={register}
            pt="15px"
            pb="15px"
            label="CEP"
          />

          <Box display="flex" justifyContent="space-between">
            <Input
              marginTopForm={"5px"}
              id="state"
              placeholder="Digitar Estado"
              color="grey.3"
              fontWeight="400"
              fontSize="0.875rem"
              border="1px"
              borderColor="grey.6"
              borderRadius="4px"
              register={register}
              pt="15px"
              pb="15px"
              label="Estado"
              formWidth="48%"
            />

            <Input
              marginTopForm={"5px"}
              id="city"
              placeholder="Digitar cidade"
              color="grey.3"
              fontWeight="400"
              fontSize="0.875rem"
              border="1px"
              borderColor="grey.6"
              borderRadius="4px"
              register={register}
              pt="15px"
              pb="15px"
              label="Cidade"
              formWidth="48%"
            />
          </Box>

          <Input
            marginTopForm={"5px"}
            id="street"
            placeholder="Digitar o nome da rua"
            color="grey.3"
            fontWeight="400"
            fontSize="0.875rem"
            border="1px"
            borderColor="grey.6"
            borderRadius="4px"
            register={register}
            pt="15px"
            pb="15px"
            label="Rua"
          />

          <Box display="flex" justifyContent="space-between">
            <Input
              marginTopForm={"5px"}
              id="number"
              placeholder="Digitar número"
              color="grey.3"
              fontWeight="400"
              fontSize="0.875rem"
              border="1px"
              borderColor="grey.6"
              borderRadius="4px"
              register={register}
              pt="15px"
              pb="15px"
              label="Número"
            />

            <Input
              marginTopForm={"5px"}
              border="1px"
              register={register}
              id="complement"
              placeholder="Ex: apart 307"
              color="grey.3"
              fontWeight="400"
              fontSize="0.875rem"
              borderColor="grey.6"
              borderRadius="4px"
              pt="15px"
              pb="15px"
              label="Complemento"
            />
          </Box>
          <Box paddingTop="35px" paddingBottom="20px">
            <Heading as="h3" fontSize="1rem" fontWeight="500">
              Tipo de conta
            </Heading>
          </Box>
          <Box display="flex" justifyContent="space-between" mt={4}>
            <Button
              color={isSaler ? "grey.0" : "grey.10"}
              border="2px"
              borderColor={isSaler ? "grey.4" : "brand.1"}
              bg={isSaler ? "grey.10" : "brand.1"}
              width="48%"
              borderRadius="4px"
              fontSize="0.875rem"
              _focus={{ backgroundColor: "brand.1" }}
              onClick={() => setIsSaler(false)}
            >
              Comprador
            </Button>
            <Button
              color={!isSaler ? "grey.0" : "grey.10"}
              border="2px"
              borderColor={!isSaler ? "grey.4" : "brand.1"}
              bg={!isSaler ? "grey.10" : "brand.1"}
              width="48%"
              borderRadius="4px"
              fontSize="0.875rem"
              _focus={{ backgroundColor: "brand.1" }}
              onClick={() => setIsSaler(true)}
            >
              Anuciante
            </Button>
          </Box>

          <Input
            marginTopForm={"5px"}
            id="password"
            placeholder="Digitar senha"
            color="grey.3"
            fontWeight="400"
            fontSize="0.875rem"
            borderColor="grey.6"
            borderRadius="4px"
            pt="15px"
            pb="15px"
            label="Senha"
            register={register}
          />

          <Input
            marginTopForm={"5px"}
            id="confir_password"
            placeholder="Digitar senha"
            color="grey.3"
            fontWeight="400"
            fontSize="0.875rem"
            borderColor="grey.6"
            borderRadius="4px"
            pt="15px"
            pb="15px"
            label="Confirmar Senha"
            register={register}
          />

          <Box width="100%" mt={7} paddingBottom="50px">
            <Button
              width="100%"
              borderRadius="4px"
              bg="brand.1"
              color="grey.10"
              _hover={{ backgroundColor: "brand.2" }}
              pt="23px"
              pb="23px"
              fontSize="0.9rem"
            >
              Finalizar cadastro
            </Button>
          </Box>
        </Box>
      </Box>
    </Form>
  );
};

export default FormRegisterUser;
