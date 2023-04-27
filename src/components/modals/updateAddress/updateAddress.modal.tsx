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

interface iStatusModalAddress {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalUpdateAddress = ({
  isOpen,
  onClose,
}: iStatusModalAddress) => {
  const {} = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUpdateAddress>({
    resolver: yupResolver(formSchemaUpdateAddress),
  });

  const formSubmitAddress = (data: iUpdateAddress) => {
    console.log(data);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={"16px"} color={"grey.1"}>
            Editar endereço
          </ModalHeader>
          <Flex flexDirection={"column"} pl={"15px"}>
            <ModalHeader
              fontFamily={"inter"}
              fontSize={"14px"}
              color={"grey.1"}
            >
              Informações do endereço
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex as={"form"} onSubmit={handleSubmit(formSubmitAddress)}>
                <Flex display={"flex"} gap={"24px"} flexDirection={"column"}>
                  <Input
                    errorMessage={errors.zipcode?.message}
                    placeholder="98855.254"
                    label="CEP"
                    type="text"
                    id="zipcode"
                    variant="outline"
                    register={register}
                  />
                  <Flex gap={"14px"}>
                    <Input
                      errorMessage={errors.state?.message}
                      placeholder="Paraná"
                      label="Estado"
                      type="text"
                      id="state"
                      variant="outline"
                      register={register}
                    />
                    <Input
                      errorMessage={errors.city?.message}
                      placeholder="Curitiba"
                      label="Cidade"
                      type="text"
                      id="city"
                      variant="outline"
                      register={register}
                    />
                  </Flex>
                  <Input
                    errorMessage={errors.street?.message}
                    placeholder="Rua do paraná"
                    label="Rua"
                    type="text"
                    id="street"
                    variant="outline"
                    register={register}
                  />
                  <Flex gap={"14px"}>
                    <Input
                      errorMessage={errors.number?.message}
                      placeholder="1029"
                      label="Número"
                      type="text"
                      id="number"
                      variant="outline"
                      register={register}
                    />
                    <Input
                      errorMessage={errors.complement?.message}
                      placeholder="Apart 12"
                      label="Complemento"
                      type="text"
                      id="complement"
                      variant="outline"
                      register={register}
                    />
                  </Flex>
                  <ModalFooter
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"42px"}
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
              </Flex>
            </ModalBody>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};
