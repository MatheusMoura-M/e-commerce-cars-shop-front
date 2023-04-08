import { ReactNode } from "react";
import { FieldError } from "react-hook-form";
import { InputProps as ChakraInputProps } from "@chakra-ui/react";
import { IconType } from "react-icons";

export interface iProviderProps {
  children: ReactNode;
}

export interface IHeaderProps {
  isLogin?: boolean;
  isLogged?: boolean;
}

export interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError | null;
  icon?: IconType;
}
