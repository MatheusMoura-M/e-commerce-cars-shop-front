import { ReactNode, createContext, useContext } from "react";
import { iProviderProps } from "../@types";
import { MenuItem } from "@chakra-ui/react";
import { useState, Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";

export interface iAuthProviderData {
  returnHome: () => void;
  MenuHamburguer: ({ children }: iProviderProps) => JSX.Element;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  passType: string;
  setPassType: Dispatch<SetStateAction<string>>;
  Login: (user: iLoginProps) => void;
}

export interface iLoginProps {
  email: string;
  password: string;
}

interface iUser {
  token: string;
}

export const AuthContext = createContext<iAuthProviderData>(
  {} as iAuthProviderData
);

export const AuthProvider = ({ children }: iProviderProps) => {
  const Navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [passType, setPassType] = useState("password");

  const returnHome = () => {
    Navigate("/");
  };

  const Login = async (user: iLoginProps): Promise<void> => {
    try {
      const { data } = await api.post<iUser>("login", user);

      window.localStorage.setItem("@token", data.token);
      toast.success("Logado com sucesso");
      Navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado");
    }
  };

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
        passType,
        setPassType,
        show,
        setShow,
        returnHome,
        Login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
