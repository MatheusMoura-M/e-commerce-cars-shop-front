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
        borderTop={"2px solid"}
        borderTopColor={"grey.6"}
        _hover={{
          bg: "grey.8",
        }}
        transition="0.2s"
      >
        {children}
      </MenuItem>
    ) : children === "Register" ? (
      <MenuItem bg={"#FDFDFD"} mb={".5rem"}>
        <Button variant={"grey5"} w={"100%"} py={"1rem"}>
          {children}
        </Button>
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
