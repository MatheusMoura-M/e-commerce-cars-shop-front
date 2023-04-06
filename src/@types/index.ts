import { ReactNode } from "react";

export interface iProviderProps {
  children: ReactNode;
}

export interface IHeaderProps {
  isLogin?: boolean;
  isLogged?: boolean;
}
