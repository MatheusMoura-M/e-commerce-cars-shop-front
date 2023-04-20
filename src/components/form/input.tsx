import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputLeftElement,
  InputGroup,
  InputRightElement,
  Box,
} from "@chakra-ui/react";
import { InputProps, iShowPass } from "../../@types";
import { useAuth } from "../../context/webContext";
import { useState, ReactNode } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export const Input = ({
  errorMessage,
  icon: Icon,
  label,
  variant,
  height,
  register,
  id,
  type,
  formWidth,
  marginTopForm,
  showPass,
  ...rest
}: InputProps) => {
  const { passType, setPassType, show, setShow } = useAuth();

  const [value, setValue] = useState("");

  const { onChange, onBlur, name, ref } = register!(id);

  // Validations
  const inputType = showPass ? passType : type;

  const showPassword = ({ showPass }: iShowPass): ReactNode => {
    if (value !== "" && showPass) {
      const whichEye =
        show === false ? (
          <AiFillEyeInvisible size={22} color="#030303" />
        ) : (
          <AiFillEye size={22} color="#030303" />
        );
      const passType = show === false ? "text" : "password";

      return (
        <Box
          className="showPass"
          onClick={() => {
            setShow(!show);
            setPassType(passType);
          }}
          role="button"
        >
          {whichEye}
        </Box>
      );
    }
  };

  return (
    <FormControl mt={marginTopForm} width={formWidth}>
      {!!label && <FormLabel fontSize="0.875rem">{label}</FormLabel>}

      <InputGroup flexDirection={"column"}>
        {Icon && (
          <InputLeftElement mt={2.5}>
            <Icon />
          </InputLeftElement>
        )}
        <ChakraInput
          id={id}
          onBlur={onBlur}
          name={name}
          ref={ref}
          value={value}
          type={inputType}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e);
          }}
          bg={"transparent"}
          border={"1px solid"}
          borderColor={"grey.7"}
          borderRadius={"4px"}
          variant={variant}
          _hover={{
            bg: "grey.8",
            borderColor: "transparent",
          }}
          _placeholder={{ color: "grey.3" }}
          size={"md"}
          h={height}
          maxH={{ base: 128, xsm2: 75 }}
          _focus={{
            borderColor: "brand.2",
            backgroundColor: "grey.10",
          }}
          {...rest}
        ></ChakraInput>
        {showPass === true && (
          <InputRightElement height="100%">{showPassword({ showPass })}</InputRightElement>
        )}
        {!!errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
      </InputGroup>
    </FormControl>
  );
};
