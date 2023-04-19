import { ReactNode } from "react";
import {
  FieldError,
  Path,
  UseFormRegister,
  UseFormGetValues,
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
  label?: string;
  error?: FieldError | null;
  icon?: IconType;
  variant?: string;
  height?: string;
  type: string;
  id: Path<any>;
  register: UseFormRegister<any>;
  showPass?: boolean;
  // getValues: UseFormGetValues<any>;
}
