import { Button, Flex, ModalFooter } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { iStatusModalOptional, iUpdateAddress } from "../../../interface";
import { useAuth } from "../../../context/webContext";
import { useRegex } from "../../../context/regexInputs.context";
import formSchemaUpdateAddress from "../../../schemas/updateAddress";

const FormEditAddress = ({ onClose }: iStatusModalOptional) => {
  const { formattedZipcode, cep } = useRegex();
  const { onUpdateAddress, addressData, onGetAddress } = useAuth();

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

  useEffect(() => {
    onGetAddress();
  }, []);

  return (
    <Flex
      as={"form"}
      alignItems={"center"}
      flexDir={"column"}
      gap={"24px"}
      h={"100%"}
      onSubmit={handleSubmit(formSubmitAddress)}
    >
      <Input
        id="zipcode"
        errorMessage={errors.zipcode?.message}
        placeholder={addressData.zipcode}
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
          placeholder={addressData.state}
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
          placeholder={addressData.city}
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
        placeholder={addressData.street}
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
          placeholder={addressData.number}
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
          placeholder={addressData.complement}
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
        flexDir={"column"}
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
            onClick={onClose}
          >
            Salvar alterações
          </Button>
        </Flex>
      </ModalFooter>
    </Flex>
  );
};

export default FormEditAddress;
