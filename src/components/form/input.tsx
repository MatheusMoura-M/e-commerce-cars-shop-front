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
import showPassword from "../../utils/input";

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
  const { value, setValue, show, setShow, passType, setPassType } = useAuth();

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
          border={"1px solid"}
          borderColor={"grey.7"}
          variant={variant}
          _hover={{
            bg: "grey.8",
            borderColor: "transparent",
          }}
          _placeholder={{ color: "grey.3" }}
          size={"lg"}
          h={height}
          focusBorderColor={"brand.2"}
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
