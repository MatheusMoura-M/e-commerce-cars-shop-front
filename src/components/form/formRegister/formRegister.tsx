import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FormRegister } from "./style";
import { useState, useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { contextRegexInputs } from "../../../context/regexInputs.context";
import schemaRegister from "../../../schemas/register.schema";
import { useForm } from "react-hook-form";
import { error } from "console";
import { iRegister } from "../../../interface/user.interface";
import { Input } from "../input";

const FormRegisterUser = () => {
  const [isSaler, setIsSaler] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [complement, setComplement] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [isSeller, setIsSeller] = useState<boolean>(false)
  
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
      image_url: "https://encurtador.com.br/dmwCE",
      birthdate: data.birthdate,
      street: data.street,
      zipcode: data.zipcode,
      state: data.state,
      city: data.city,
      number: data.number,
      complement: data.complement,
      description: data.description,
      isSaler: isSaler
    };

    console.log(objUser);
  };

  return (
    <FormRegister onSubmit={handleSubmit(onSubmitRegister)}>
      <Box w="80%" margin="0 auto" as="section">
        <Box paddingTop="45px" as="div">
          <Heading as="h2" fontSize="1.6rem" fontWeight="500">
            Cadastro
          </Heading>
        </Box>
        <Box paddingTop="25px" mb="25px" as="div">
          <Heading as="h3" fontSize="1rem" fontWeight="500">
            Infomações pessoais
          </Heading>
        </Box>
        <Box width="100%%" margin="0 auto" as="div">
          <Input
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

          <Text as="span" fontSize="0.7rem" color="alert.1">
            {errors.name?.message}
          </Text>

          <Input
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

          <Text as="span" fontSize="0.7rem" color="alert.1">
            {errors.email?.message}
          </Text>

          <Input
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

          <Text as="span" fontSize="0.7rem" color="alert.1">
            {errors.cpf?.message}
          </Text>

          <Input
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
            label="CPF"
            marginTopForm="20px"
          />

          <Text as="span" fontSize="0.7rem" color="alert.1">
            {errors.telephone?.message}
          </Text>

          <Input
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

          <Text as="span" fontSize="0.7rem" color="alert.1">
            {errors.birthdate?.message}
          </Text>

          <FormControl mt={5}>
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

          <Box paddingTop="30px" paddingBottom="10px" as="div">
            <Heading as="h3" fontSize="1rem" fontWeight="500">
              Infomações de endereço
            </Heading>
          </Box>   
          
          <Input
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

          <Text as="span" fontSize="0.7rem" color="alert.1">
            {errors.zipcode?.message}
          </Text>

          <Box display="flex" justifyContent="space-between" as="div">
            <Box width="48%">
              <Input
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
                marginTopForm="20px"
                onChange={(e) => setState(e.target.value)}
                value={state}
              />

              <Text as="span" fontSize="0.7rem" color="alert.1">
                {errors.state?.message}
              </Text>
              
            </Box>
            <Box width="48%">
              <Input
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
                marginTopForm="20px"
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />

              <Text as="span" fontSize="0.7rem" color="alert.1">
                {errors.city?.message}
              </Text>
            </Box>
          </Box>

          <Input
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

          <Text as="span" fontSize="0.7rem" color="alert.1">
            {errors.street?.message}
          </Text>

          <Box display="flex" justifyContent="space-between" as="div">
            <Box width="48%">
              <Input
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
                marginTopForm="20px"
                onChange={(e) => setNumber(e.target.value)}
                value={number}
              />

              <Text as="span" fontSize="0.7rem" color="alert.1">
                {errors.number?.message}
              </Text>
            </Box>
            <Box width="48%">
              <Input
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
                marginTopForm="20px"
                onChange={(e) => setComplement(e.target.value)}
                value={complement}
              />

              <Text as="span" fontSize="0.7rem" color="alert.1">
                {errors.complement?.message}
              </Text>
            </Box>
          </Box>
          <Box paddingTop="35px" paddingBottom="20px" as="div">
            <Heading as="h3" fontSize="1rem" fontWeight="500">
              Tipo de conta
            </Heading>
          </Box>
          <Box display="flex" justifyContent="space-between" mt={4} as="div">
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

          <Text as="span" fontSize="0.7rem" color="alert.1">
            {errors.password?.message}
          </Text>

          <Input
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
            type="password"
            showPass
            marginTopForm="20px"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />

          <Text as="span" fontSize="0.7rem" color="alert.1">
            {errors.confir_password?.message}
          </Text>

          <Box width="100%" mt={7} paddingBottom="50px" as="div">
            <Button
              width="100%"
              borderRadius="4px"
              bg="brand.1"
              color="grey.10"
              _hover={{ backgroundColor: "brand.2" }}
              pt="23px"
              pb="23px"
              fontSize="0.9rem"
              type="submit"
            >
              Finalizar cadastro
            </Button>
          </Box>
        </Box>
      </Box>
    </FormRegister>
  );
};

export default FormRegisterUser;
