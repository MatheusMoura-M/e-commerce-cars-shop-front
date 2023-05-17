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
  Textarea,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { contextRegexInputs } from "../../../context/regexInputs.context";
import { useForm } from "react-hook-form";
import { Input } from "../../form/input";
import schemaUpdateUser from "../../../schemas/updateUser";
import { useAuth } from "../../../context/webContext";
import { iStatusModal, iUpdateUser } from "../../../interface";

const ModalEditUser = ({ isOpen, onClose }: iStatusModal) => {
  const { onUpdateUser, onDeleteUser, userLogged, setIsSeller, isSeller } =
    useAuth();

  const [name, setName] = useState<string>("");
  const [nameBool, setNameBool] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [emailBool, setEmailBool] = useState<boolean>(false);
  const [cpfBool, setCpfBool] = useState<boolean>(false);
  const [telephoneBool, setTelephoneBool] = useState<boolean>(false);
  const [birthdateBool, setBirthdateBool] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  const [descriptionBool, setDescriptionBool] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [imageUrlBool, setImageUrlBool] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

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
      description: data.description,
      cpf: data.cpf,
      image_url: data.image_url || "https://encurtador.com.br/dmwCE",
      birthdate: data.birthdate,
      isSeller: isSeller,
    };

    onUpdateUser(objUser);
  };

  return (
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
                m="0 auto"
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
                  onChange={(e) => {
                    setName(e.target.value);
                    setNameBool(true);
                  }}
                  value={nameBool ? name : userLogged.name}
                />

                <Input
                  id="email"
                  placeholder="Ex: samuel@kenzie.com.br"
                  color="grey.3"
                  fontWeight="400"
                  fontSize="0.875rem"
                  register={register}
                  label="Email"
                  marginTopForm="20px"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailBool(true);
                  }}
                  value={emailBool ? email : userLogged.email}
                />

                <Input
                  id="cpf"
                  placeholder="000.000.000-00"
                  color="grey.3"
                  fontWeight="400"
                  fontSize="0.875rem"
                  register={register}
                  onChange={(event) => {
                    formattedCpf(event.target.value);
                    setCpfBool(true);
                  }}
                  value={cpfBool ? cpf : userLogged.cpf}
                  label="CPF"
                  marginTopForm="20px"
                />

                <Input
                  id="telephone"
                  placeholder="(DDD) 90000-0000"
                  color="grey.3"
                  fontWeight="400"
                  fontSize="0.875rem"
                  register={register}
                  onChange={(event) => {
                    formattedMobileNumber(event.target.value);
                    setTelephoneBool(true);
                  }}
                  value={telephoneBool ? cellphoneNumber : userLogged.telephone}
                  label="Telefone"
                  marginTopForm="20px"
                />

                <Input
                  id="birthdate"
                  placeholder="00/00/00"
                  color="grey.3"
                  fontWeight="400"
                  fontSize="0.875rem"
                  register={register}
                  label="Data de nascimento"
                  type="text"
                  onChange={(event) => {
                    formattedBirthdate(event.target.value);
                    setBirthdateBool(true);
                  }}
                  value={birthdateBool ? birthdate : userLogged.birthdate}
                  marginTopForm="20px"
                />

                <Input
                  placeholder="https://image.com"
                  label="Imagem do Perfil"
                  type="text"
                  id="image_url"
                  register={register}
                  marginTopForm="20px"
                  onChange={(e) => {
                    setImageUrl(e.target.value);
                    setImageUrlBool(true);
                  }}
                  value={imageUrlBool ? imageUrl : userLogged.image_url}
                />

                <FormControl mt={5}>
                  <FormLabel fontSize="0.875rem">Descrição</FormLabel>
                  <Textarea
                    placeholder="Digitar descrição"
                    id="description"
                    {...register("description")}
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
                    onChange={(e) => {
                      setDescription(e.target.value);
                      setDescriptionBool(true);
                    }}
                    value={
                      descriptionBool ? description : userLogged.description
                    }
                  />
                </FormControl>

                <Box pt={"15px"} pb={"8px"}>
                  <Heading
                    as="h3"
                    fontSize="14px"
                    fontWeight="600"
                    fontFamily={"inter"}
                  >
                    Tipo de conta
                  </Heading>
                </Box>
                <Flex justifyContent="space-between">
                  <Button
                    color={isSeller ? "grey.0" : "grey.10"}
                    border="2px"
                    borderColor={isSeller ? "grey.4" : "brand.1"}
                    bg={isSeller ? "grey.10" : "brand.1"}
                    w="48%"
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
                    w="48%"
                    fontSize="0.875rem"
                    _focus={{ backgroundColor: "brand.1" }}
                    onClick={() => setIsSeller(true)}
                  >
                    Anuciante
                  </Button>
                </Flex>

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
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />

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
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                />
              </Flex>

              <ModalFooter flexDirection={"column"} gap={"42px"} p={0}>
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
                    onClick={() => onDeleteUser()}
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
                    onClick={onClose}
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
  );
};

export default ModalEditUser;
