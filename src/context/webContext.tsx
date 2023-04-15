import { ReactNode, createContext, useContext } from "react";
import { iProviderProps, iShowPass } from "../@types";
import { Box, MenuItem } from "@chakra-ui/react";
import { useState, Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export interface iAuthProviderData {
  returnHome: () => void;
  MenuHamburguer: ({ children }: iProviderProps) => JSX.Element;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  passType: string;
  setPassType: Dispatch<SetStateAction<string>>;
  showPassword: ({ showPass }: iShowPass) => ReactNode;
}

const AuthContext = createContext<iAuthProviderData>({} as iAuthProviderData);

export const AuthProvider = ({ children }: iProviderProps): ReactNode => {
  const Navigate = useNavigate();
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const [passType, setPassType] = useState("password");

  const returnHome = () => {
    Navigate("/");
  };

  const showPassword = ({ showPass }: iShowPass): ReactNode => {
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
        value,
        setValue,
        passType,
        setPassType,
        show,
        setShow,
        returnHome,
        showPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
