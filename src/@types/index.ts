import { ReactNode } from "react";
import {
  FieldError,
  FieldErrors,
  Path,
  UseFormRegister,
} from "react-hook-form";
import { InputProps as ChakraInputProps } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { iCreateCarAd } from "../interface/car.interface";

export interface iProviderProps {
  children: ReactNode;
}

export interface IHeaderProps {
  isLogin?: boolean;
}

export interface iShowPass {
  showPass: boolean | undefined;
  showConfirmPass: boolean | undefined;
}

export interface InputProps extends ChakraInputProps {
  id: Path<any>;
  register: UseFormRegister<any>;
  errorMessage?: string;
  label?: string;
  icon?: IconType;
  variant?: string;
  height?: string;
  formWidth?: string;
  type?: string;
  showPass?: boolean;
  showConfirmPass?: boolean;
  marginTopForm?: string;
  value?: string | number;
  // error?: FieldErrors<iCommentRequest> | null;
}
