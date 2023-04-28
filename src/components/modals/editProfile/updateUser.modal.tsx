import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { contextRegexInputs } from "../../../context/regexInputs.context";
import { useForm } from "react-hook-form";
import { iUpdateUser } from "../../../interface/user.interface";
import { Input } from "../../form/input";
import schemaUpdateUser from "../../../schemas/updateUser";
import { useAuth } from "../../../context/webContext";

interface iStatusModalUpdateUser {
  isOpen: boolean;
  onClose: () => void;
}

const ModalEditUser = ({ isOpen, onClose }: iStatusModalUpdateUser) => {
  const [isSeller, setIsSeller] = useState<boolean>(false);
  const { onUpdateUser } = useAuth();

  const {
    formattedBirthdate,
    formattedCpf,
    formattedMobileNumber,
    birthdate,
    cpf,
    cellphoneNumber,
  } = useContext(contextRegexInputs);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUpdateUser>({
    resolver: yupResolver(schemaUpdateUser),
  });

  const onSubmitUpdateUser = (data: iUpdateUser) => {
    const objUser = {
      name: data.name,
      email: data.email,
      telephone: data.telephone,
      password: data.password,
      cpf: data.cpf,
      image_url: data.image_url || "https://encurtador.com.br/dmwCE",
      birthdate: data.birthdate,
      isSeller: isSeller,
    };

    onUpdateUser(objUser);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={"16px"} color={"grey.1"}>
            Editar perfil
          </ModalHeader>
          <Flex flexDirection={"column"}>
            <ModalHeader
              fontFamily={"inter"}
              fontSize={"14px"}
              color={"grey.1"}
              pl={{ base: "8px", xs3: "35px" }}
            >
              Informações pessoais
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody p={0} w={"100%"}>
              <Flex
                as={"form"}
                onSubmit={handleSubmit(onSubmitUpdateUser)}
                bg={"grey.10"}
                borderRadius={"4x"}
                w={{ base: "95%", xs3: 420 }}
                maxW={380}
                m={"0px auto"}
                maxH={550}
                flexDirection={"column"}
                gap={"18px"}
                p={"0 0 10px 0"}
              >
                <Flex
                  w="100%"
                  margin="0 auto"
                  as="section"
                  overflowY={"scroll"}
                  flexDirection={"column"}
                >
                  <Input
                    id="name"
                    placeholder="Ex: Samuel Leão"
                    color="grey.3"
                    fontWeight="400"
                    fontSize="0.875rem"
                    register={register}
                    label="Nome"
                    type="text"
                    marginTopForm="20px"
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
                    register={register}
                    label="Email"
                    marginTopForm="20px"
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
                    register={register}
                    value={cpf}
                    onChange={(event) => {
                      formattedCpf(event.target.value);
                    }}
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
                    register={register}
                    value={cellphoneNumber}
                    onChange={(event) => {
                      formattedMobileNumber(event.target.value);
                    }}
                    label="Telefone"
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
                    register={register}
                    label="Data de nascimento"
                    type="text"
                    value={birthdate}
                    onChange={(event) => formattedBirthdate(event.target.value)}
                    marginTopForm="20px"
                  />

                  <Text as="span" fontSize="0.7rem" color="alert.1">
                    {errors.birthdate?.message}
                  </Text>

                  <Input
                    placeholder="https://image.com"
                    label="Imagem do Perfil"
                    type="text"
                    id="image_url"
                    register={register}
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

                  <Box pt={"15px"} pb={"8px"} as="div">
                    <Heading
                      as="h3"
                      fontSize="14px"
                      fontWeight="600"
                      fontFamily={"inter"}
                    >
                      Tipo de conta
                    </Heading>
                  </Box>
                  <Box display="flex" justifyContent="space-between" as="div">
                    <Button
                      color={isSeller ? "grey.0" : "grey.10"}
                      border="2px"
                      borderColor={isSeller ? "grey.4" : "brand.1"}
                      bg={isSeller ? "grey.10" : "brand.1"}
                      width="48%"
                      fontSize="0.875rem"
                      _focus={{ backgroundColor: "brand.1" }}
                      onClick={() => setIsSeller(false)}
                    >
                      Comprador
                    </Button>
                    <Button
                      color={!isSeller ? "grey.0" : "grey.10"}
                      border="2px"
                      borderColor={!isSeller ? "grey.4" : "brand.1"}
                      bg={!isSeller ? "grey.10" : "brand.1"}
                      width="48%"
                      fontSize="0.875rem"
                      _focus={{ backgroundColor: "brand.1" }}
                      onClick={() => setIsSeller(true)}
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
                    label="Senha"
                    register={register}
                    type="password"
                    showPass
                    marginTopForm="20px"
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
                    label="Confirmar Senha"
                    register={register}
                    type="password"
                    showPass
                    marginTopForm="20px"
                  />

                  <Text as="span" fontSize="0.7rem" color="alert.1">
                    {errors.confir_password?.message}
                  </Text>
                </Flex>
                <ModalFooter
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"42px"}
                  p={0}
                >
                  <Flex
                    w={"100%"}
                    gap={"10px"}
                    flexWrap={"wrap"}
                    justifyContent={{ base: "center", xs3: "unset" }}
                  >
                    <Button
                      onClick={onClose}
                      variant={"grey1"}
                      color={"grey.2"}
                      fontSize={"14px"}
                      fontFamily={"inter"}
                      borderRadius={"4px"}
                      w={"150px"}
                      maxW={{ base: 120, xs1: 150, xs3: "100px" }}
                    >
                      Cancelar
                    </Button>
                    <Button
                      variant="alert1"
                      fontSize={"14px"}
                      w={"150px"}
                      maxW={{ base: 120, xs1: 150, xs3: "110px" }}
                    >
                      Excluir Perfil
                    </Button>
                    <Button
                      variant="brand6"
                      w={"193px"}
                      fontFamily={"inter"}
                      fontSize={"14px"}
                      borderRadius={"4px"}
                      type="submit"
                      maxW={{ base: 200, xs3: 150 }}
                    >
                      Salvar alterações
                    </Button>
                  </Flex>
                </ModalFooter>
              </Flex>
            </ModalBody>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalEditUser;
