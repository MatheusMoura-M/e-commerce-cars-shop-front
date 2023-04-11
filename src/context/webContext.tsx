import { createContext, useContext } from "react";
import { iProviderProps } from "../@types";
import { Button, MenuItem } from "@chakra-ui/react";

export interface iAuthProviderData {
  MenuHamburguer: ({ children }: iProviderProps) => JSX.Element;
}

const AuthContext = createContext<iAuthProviderData>({} as iAuthProviderData);

export const AuthProvider = ({ children }: iProviderProps) => {
  const MenuHamburguer = ({ children }: iProviderProps) =>
    children === "Login" ? (
      <MenuItem
        bg={"#FDFDFD"}
        justifyContent={"flex-start"}
        color={"grey.2"}
        mb={"1.2rem"}
        pt={"1.2rem"}
        pb={"1rem"}
        _hover={{
          bg: "grey.8",
        }}
        transition="0.2s"
      >
        {children}
      </MenuItem>
    ) : children === "Register" ? (
      <MenuItem
        alignSelf={"center"}
        justifyContent={"center"}
        bg={"transparent"}
        color={"#0B0D0D"}
        border={"2px solid"}
        borderColor={"#ADB5BD"}
        borderRadius={".3rem"}
        mb={".5rem"}
        py={"1rem"}
        w={"90%"}
        h={"48px"}
        _hover={{
          bg: "#212529",
          color: "#FDFDFD",
          transition: "0.8s",
        }}
        transition={"0.8s"}
      >
        {children}
      </MenuItem>
    ) : (
      <MenuItem
        bg={"#FDFDFD"}
        justifyContent={"flex-start"}
        color={"grey.2"}
        py={"1rem"}
        _hover={{
          bg: "grey.8",
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
