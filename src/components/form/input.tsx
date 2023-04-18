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
  error = null,
  icon: Icon,
  label,
  variant,
  height,
  register,
  id,
  type,
  showPass,
  ...rest
}: InputProps) => {
  const { passType, setPassType, show, setShow } = useAuth();

  const [value, setValue] = useState("");

  const { onChange, onBlur, name, ref } = register(id);

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
    <FormControl>
      {!!label && <FormLabel>{label}</FormLabel>}

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
          paddingBottom={{ base: "80px", xsm2: "25px" }}
          border={"1px solid"}
          borderColor={{ base: "grey.7", xsm2: "transparent" }}
          variant={variant}
          _hover={{
            bg: "grey.8",
            borderColor: "transparent",
          }}
          _placeholder={{ color: "grey.3" }}
          size={"lg"}
          h={height}
          maxH={{ base: 128, xsm2: 75 }}
          _focus={{ borderColor: { base: "brand.2", xsm2: "transparent" } }}
          _focusVisible={{
            borderColor: { base: "brand.2", xsm2: "transparent" },
          }}
          {...rest}
        ></ChakraInput>
        {showPass === true && (
          <InputRightElement>{showPassword({ showPass })}</InputRightElement>
        )}
        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </InputGroup>
    </FormControl>
  );
};
