import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";

import { InputProps } from "../../@types";

export const Input = ({
  name,
  error = null,
  icon: Icon,
  label,
  variant,
  height,
  ...rest
}: InputProps) => {
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
          name={name}
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

        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </InputGroup>
    </FormControl>
  );
};
