import { createContext, useContext } from "react";
import { iProviderProps } from "../@types";
import { MenuItem } from "@chakra-ui/react";

export interface iAuthProviderData {
  MenuHamburguer: ({ children }: iProviderProps) => JSX.Element;
}

const AuthContext = createContext<iAuthProviderData>({} as iAuthProviderData);

export const AuthProvider = ({ children }: iProviderProps) => {
  const MenuHamburguer = ({ children }: iProviderProps) => (
    <MenuItem
      justifyContent={"center"}
      color={"gray.200"}
      border={"1px solid"}
      // onClick={
      //   children === "Sair" ? () => logout("") : () => onGetClient("Client")
      // }
      _hover={{
        color: "gray.800",
        transition: "0.2s",
      }}
      transition="0.2s"
    >
      {children}
    </MenuItem>
  );

  return (
    <AuthContext.Provider
      value={{
        MenuHamburguer,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
