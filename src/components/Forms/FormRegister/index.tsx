import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { contextRegexInputs } from "../../../context/regexInputs.context";
import schemaRegister from "../../../schemas/register.schema";
import { useForm } from "react-hook-form";
import { Input } from "../../Input";
import { useAuth } from "../../../context/webContext";
import { iRegister } from "../../../interface";

const FormRegisterUser = () => {
  const { onRegisterSubmit } = useAuth();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [complement, setComplement] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isSeller, setIsSeller] = useState<boolean>(false);

  const {
    formattedBirthdate,
    formattedCpf,
    formattedMobileNumber,
    formattedZipcode,
    birthdate,
    cpf,
    cellphoneNumber,
    cep,
  } = useContext(contextRegexInputs);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegister>({
    resolver: yupResolver(schemaRegister),
  });

  const onSubmitRegister = (data: iRegister) => {
    const objUser = {
      name: data.name,
      email: data.email,
      telephone: data.telephone,
      password: data.password,
      cpf: data.cpf,
      birthdate: data.birthdate,
      street: data.street,
      zipcode: data.zipcode,
      state: data.state,
      city: data.city,
      number: data.number,
      complement: data.complement,
      description: data.description,
      isSeller: isSeller,
    };

    onRegisterSubmit(objUser);
  };

  return (
    <Box
      as="form"
      bg={"grey.10"}
      borderRadius={"4px"}
      w={{ base: "95%", xs3: 420 }}
      my={"40px"}
      mx={"auto"}
      onSubmit={handleSubmit(onSubmitRegister)}
    >
      <Box w="80%" m="0 auto" as="section">
        <Box pt="45px">
          <Heading as="h2" fontSize="1.6rem" fontWeight="500">
            Cadastro
          </Heading>
        </Box>
        <Box pt="25px" mb="25px">
          <Heading as="h3" fontSize="1rem" fontWeight="500">
            Infomações pessoais
          </Heading>
        </Box>
        <Box w="100%%" m="0 auto">
          <Input
            errorMessage={errors.name?.message}
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
            type="text"
            marginTopForm="20px"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Input
            errorMessage={errors.email?.message}
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
            marginTopForm="20px"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            errorMessage={errors.cpf?.message}
            id="cpf"
            placeholder="000.000.000-00"
            color="grey.3"
            fontWeight="400"
            fontSize="0.875rem"
            border="1px"
            borderColor="grey.6"
            borderRadius="4px"
            register={register}
            onChange={(event) => {
              formattedCpf(event.target.value);
            }}
            value={cpf}
            pt="15px"
            pb="15px"
            label="CPF"
            marginTopForm="20px"
          />
          <Input
            errorMessage={errors.telephone?.message}
            id="telephone"
            placeholder="(DDD) 90000-0000"
            color="grey.3"
            fontWeight="400"
            fontSize="0.875rem"
            border="1px"
            borderColor="grey.6"
            borderRadius="4px"
            register={register}
            onChange={(event) => {
              formattedMobileNumber(event.target.value);
            }}
            value={cellphoneNumber}
            pt="15px"
            pb="15px"
            label="Celular"
            marginTopForm="20px"
          />
          <Input
            errorMessage={errors.birthdate?.message}
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
            type="text"
            onChange={(event) => formattedBirthdate(event.target.value)}
            value={birthdate}
            marginTopForm="20px"
          />
          <FormControl mt={5}>
            <FormLabel fontSize="0.875rem">Descrição</FormLabel>
            <Textarea
              id="description"
              {...register("description")}
              placeholder="Digitar descrição"
              color="grey.3"
              fontWeight="400"
              fontSize="0.875rem"
              borderColor="grey.6"
              borderRadius="4px"
              onChange={(event) => setDescription(event.target.value)}
              value={description}
              pt="15px"
              pb="15px"
              resize="none"
              _hover={{ bg: "grey.8", borderColor: "grey.8" }}
              _focus={{
                bg: "grey.10",
                border: "2px",
                borderColor: "brand.2",
              }}
              _focusVisible={{ boxShadow: "none" }}
            />

            <Text as="span" fontSize="0.7rem" color="alert.1">
              {errors.description?.message}
            </Text>
          </FormControl>
          <Box pt="30px" pb="10px">
            <Heading as="h3" fontSize="1rem" fontWeight="500">
              Infomações de endereço
            </Heading>
          </Box>
          <Input
            errorMessage={errors.zipcode?.message}
            id="zipcode"
            placeholder="00000.000"
            color="grey.3"
            fontWeight="400"
            fontSize="0.875rem"
            border="1px"
            borderColor="grey.6"
            borderRadius="4px"
            register={register}
            onChange={(event) => formattedZipcode(event.target.value)}
            value={cep}
            pt="15px"
            pb="15px"
            label="CEP"
            marginTopForm="20px"
          />
          <Flex justifyContent="space-between">
            <Input
              errorMessage={errors.state?.message}
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
              w="90%"
              label="Estado"
              marginTopForm="20px"
              onChange={(e) => setState(e.target.value)}
              value={state}
            />
            <Input
              errorMessage={errors.city?.message}
              id="city"
              placeholder="Digitar cidade"
              color="grey.3"
              fontWeight="400"
              fontSize="0.875rem"
              border="1px"
              borderColor="grey.6"
              borderRadius="4px"
              w="100%"
              register={register}
              pt="15px"
              pb="15px"
              label="Cidade"
              marginTopForm="20px"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
          </Flex>
          <Input
            errorMessage={errors.street?.message}
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
            marginTopForm="20px"
            onChange={(e) => setStreet(e.target.value)}
            value={street}
          />
          <Flex justifyContent="space-between">
            <Input
              errorMessage={errors.number?.message}
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
              w="90%"
              label="Número"
              marginTopForm="20px"
              onChange={(e) => setNumber(e.target.value)}
              value={number}
            />
            <Input
              errorMessage={errors.complement?.message}
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
              w="100%"
              label="Complemento"
              marginTopForm="20px"
              onChange={(e) => setComplement(e.target.value)}
              value={complement}
            />
          </Flex>
          <Box pt="35px" pb="20px">
            <Heading as="h3" fontSize="1rem" fontWeight="500">
              Tipo de conta
            </Heading>
          </Box>
          <Flex justifyContent="space-between" mt={4}>
            <Button
              color={isSeller ? "grey.0" : "grey.10"}
              border="2px"
              borderColor={isSeller ? "grey.4" : "brand.1"}
              bg={isSeller ? "grey.10" : "brand.1"}
              w="48%"
              borderRadius="4px"
              fontSize="0.875rem"
              _focus={{ bg: "brand.1" }}
              onClick={() => setIsSeller(false)}
            >
              Comprador
            </Button>
            <Button
              color={!isSeller ? "grey.0" : "grey.10"}
              border="2px"
              borderColor={!isSeller ? "grey.4" : "brand.1"}
              bg={!isSeller ? "grey.10" : "brand.1"}
              w="48%"
              borderRadius="4px"
              fontSize="0.875rem"
              _focus={{ bg: "brand.1" }}
              onClick={() => setIsSeller(true)}
            >
              Anuciante
            </Button>
          </Flex>
          <Input
            errorMessage={errors.password?.message}
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
            type="password"
            showPass
            marginTopForm="20px"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Input
            id="confir_password"
            type="password"
            placeholder="Digitar senha"
            label="Confirmar Senha"
            register={register}
            errorMessage={errors.confir_password?.message}
            color="grey.3"
            fontWeight="400"
            fontSize="0.875rem"
            borderColor="grey.6"
            borderRadius="4px"
            pt="15px"
            pb="15px"
            showConfirmPass
            marginTopForm="20px"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          <Box w="100%" mt={7} pb="50px">
            <Button
              type="submit"
              w="100%"
              pt="23px"
              pb="23px"
              bg="brand.1"
              borderRadius="4px"
              color="grey.10"
              fontSize="0.9rem"
              _hover={{ bg: "brand.2" }}
            >
              Finalizar cadastro
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FormRegisterUser;
