import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../../context/webContext";
import formSchemaUpdateAddress from "../../../schemas/updateAddress";
import { iUpdateAddress } from "../../../interface/user.interface";
import { Input } from "../../form/input";
import { useState, useContext } from "react";
import { contextRegexInputs } from "../../../context/regexInputs.context";

interface iStatusModalAddress {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalUpdateAddress = ({
  isOpen,
  onClose,
}: iStatusModalAddress) => {
  const { formattedZipcode, cep } = useContext(contextRegexInputs);
  const { onUpdateAddress } = useAuth();

  const [state, setState] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [complement, setComplement] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUpdateAddress>({
    resolver: yupResolver(formSchemaUpdateAddress),
  });

  const formSubmitAddress = (data: iUpdateAddress) => {
    onUpdateAddress(data);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={520} h={605}>
          <ModalHeader fontSize={"16px"} color={"grey.1"}>
            Editar endereço
          </ModalHeader>
          <Flex flexDirection={"column"} px={"1.5rem"} gap={"1rem"} minH={496}>
            <ModalHeader
              fontFamily={"inter"}
              fontSize={"14px"}
              color={"grey.1"}
              px={0}
            >
              Informações do endereço
            </ModalHeader>
            <ModalCloseButton color={"grey.4"} />
            <ModalBody p={0}>
              <Flex
                as={"form"}
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
                gap={"24px"}
                h={"100%"}
                onSubmit={handleSubmit(formSubmitAddress)}
              >
                <Input
                  id="zipcode"
                  errorMessage={errors.zipcode?.message}
                  placeholder="98855.254"
                  label="CEP"
                  type="text"
                  h={"48px"}
                  variant="outline"
                  register={register}
                  onChange={(e) => formattedZipcode(e.target.value)}
                  value={cep}
                />
                <Flex gap={"14px"}>
                  <Input
                    id="state"
                    errorMessage={errors.state?.message}
                    placeholder="Paraná"
                    label="Estado"
                    type="text"
                    h={"48px"}
                    variant="outline"
                    register={register}
                    onChange={(e) => setState(e.target.value)}
                    value={state}
                  />
                  <Input
                    id="city"
                    errorMessage={errors.city?.message}
                    placeholder="Curitiba"
                    label="Cidade"
                    type="text"
                    h={"48px"}
                    variant="outline"
                    register={register}
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                  />
                </Flex>
                <Input
                  id="street"
                  errorMessage={errors.street?.message}
                  placeholder="Rua do paraná"
                  label="Rua"
                  type="text"
                  h={"48px"}
                  variant="outline"
                  register={register}
                  onChange={(e) => setStreet(e.target.value)}
                  value={street}
                />
                <Flex gap={"14px"}>
                  <Input
                    id="number"
                    errorMessage={errors.number?.message}
                    placeholder="1029"
                    label="Número"
                    type="text"
                    h={"48px"}
                    variant="outline"
                    register={register}
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
                  />
                  <Input
                    id="complement"
                    errorMessage={errors.complement?.message}
                    placeholder="Apart 12"
                    label="Complemento"
                    type="text"
                    h={"48px"}
                    variant="outline"
                    register={register}
                    onChange={(e) => setComplement(e.target.value)}
                    value={complement}
                  />
                </Flex>
                <ModalFooter
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"42px"}
                  w={"100%"}
                  p={0}
                  pt={"12px !important"}
                >
                  <Flex w={"100%"} justifyContent={"flex-end"}>
                    <Button
                      mr={3}
                      onClick={onClose}
                      variant={"grey1"}
                      color={"grey.2"}
                      fontSize={"16px"}
                      fontFamily={"inter"}
                      borderRadius={"4px"}
                    >
                      Cancelar
                    </Button>
                    <Button
                      variant="brand6"
                      w={"193px"}
                      fontFamily={"inter"}
                      fontSize={"16px"}
                      borderRadius={"4px"}
                      type="submit"
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
