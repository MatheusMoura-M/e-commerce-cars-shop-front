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
          bg={"gray.50"}
          variant={"outline"}
          _hover={{
            bgColor: "gray.100",
          }}
          _placeholder={{ color: "gray.300" }}
          size={"lg"}
          h={"60px"}
          {...rest}
        ></ChakraInput>

        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </InputGroup>
    </FormControl>
  );
};
