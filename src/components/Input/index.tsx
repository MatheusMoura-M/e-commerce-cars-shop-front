import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputLeftElement,
  InputGroup,
  InputRightElement,
  Box,
  Text,
} from "@chakra-ui/react";
import { InputProps, iShowPass } from "../../@types";
import { useAuth } from "../../context/webContext";
import { ReactNode, useEffect, useState } from "react";
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
  showConfirmPass,
  value,
  ...rest
}: InputProps) => {
  const {
    passType,
    setPassType,
    confirmPassType,
    setConfirmPassType,
    show,
    setShow,
    showConfirm,
    setShowConfirm,
    isError,
    setIsError,
  } = useAuth();

  const { onBlur, name, ref } = register!(id);
  // Validations
  const inputType = showPass ? passType : type;
  const inputTypeConfirmPass = showConfirmPass ? confirmPassType : type;
  const [isActiveError, setIsActiveError] = useState(false);

  const showPassword = ({
    showPass,
    showConfirmPass,
  }: iShowPass): ReactNode => {
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

    if (value !== "" && showConfirmPass) {
      const whichEye =
        showConfirm === false ? (
          <AiFillEyeInvisible size={22} color="#030303" />
        ) : (
          <AiFillEye size={22} color="#030303" />
        );

      const confirmPassType = showConfirm === false ? "text" : "password";

      return (
        <Box
          className="showPass"
          onClick={() => {
            setShowConfirm(!showConfirm);
            setConfirmPassType(confirmPassType);
          }}
          role="button"
        >
          {whichEye}
        </Box>
      );
    }
  };

  useEffect(() => {
    value !== "" && setIsActiveError(true);
    if (isActiveError) {
      value === "" ? setIsError(true) : setIsError(false);
    }
  }, [value]);

  return (
    <FormControl mt={marginTopForm} width={formWidth} isInvalid={isError}>
      {!!label && <FormLabel fontSize="0.875rem">{label}</FormLabel>}

      <InputGroup flexDir={"column"}>
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
          type={showPass ? inputType : inputTypeConfirmPass}
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
            bg: "grey.10",
          }}
          {...rest}
        />
        {showPass === true || showConfirmPass === true ? (
          <InputRightElement h="100%">
            {showPassword({ showPass, showConfirmPass })}
          </InputRightElement>
        ) : null}
        {isError ||
          (errorMessage && (
            <Text
              color={"alert.1"}
              mt={"5px"}
              fontSize={"12px"}
              ml={
                errorMessage === "Comentário obrigatório"
                  ? { base: "unset", xsm2: "10px" }
                  : "unset"
              }
            >
              {errorMessage}
            </Text>
          ))}
      </InputGroup>
    </FormControl>
  );
};
