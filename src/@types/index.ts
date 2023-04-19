import { ReactNode } from "react";
import {
  FieldError,
  FieldErrors,
  Path,
  UseFormRegister,
} from "react-hook-form";
import { InputProps as ChakraInputProps } from "@chakra-ui/react";
import { IconType } from "react-icons";

export interface iProviderProps {
  children: ReactNode;
}

export interface IHeaderProps {
  isLogin?: boolean;
  isLogged?: boolean;
}

export interface iComment {
  comment: string;
}

export interface iShowPass {
  showPass: boolean;
}

export interface InputProps extends ChakraInputProps {
  id: Path<any>;
  register: UseFormRegister<any>;
  errorMessage: string | undefined;
  label?: string;
  icon?: IconType;
  variant?: string;
  height?: string;
  type?: string;
  showPass?: boolean;
  // error?: FieldErrors<iComment> | null;
}
