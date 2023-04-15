import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputLeftElement,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { InputProps } from "../../@types";
import { useAuth } from "../../context/webContext";

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
  const { value, setValue, passType, showPassword } = useAuth();

  const { onChange, onBlur, name, ref } = register(id);

  // Validations
  const inputType = showPass ? passType : type;

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
