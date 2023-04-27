import { createContext, useContext } from "react";
import { iProviderProps } from "../@types";
import { MenuItem, useDisclosure } from "@chakra-ui/react";
import { useState, Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { iRegister } from "../interface/user.interface";
import { instance, instanceKenzieCars } from "../services/api";
import { iCreateCarAd } from "../interface/car.interface";

export interface iAuthProviderData {
  returnHome: () => void;
  MenuHamburguer: ({ children }: iProviderProps) => JSX.Element;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  passType: string;
  setPassType: Dispatch<SetStateAction<string>>;
  Login: (user: iLoginProps) => void;
  getCarsBrands: () => Promise<void>;
  getCarModels: () => Promise<void>;
  onCreateCarAd: (data: iCreateCarAd) => Promise<void>;
  brands: string[];
  brandsAndModels: [];
  brandSelect: string;
  setBrandSelect: Dispatch<SetStateAction<string>>;
  currentBrand: [];
  setCurrentBrand: Dispatch<SetStateAction<[]>>;
  modelSelect: string;
  setModelSelect: Dispatch<SetStateAction<string>>;
  isOpenAddress: boolean;
  onOpenAddress: () => void;
  onCloseAddress: () => void;
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
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
  const {
    isOpen: isOpenAddress,
    onOpen: onOpenAddress,
    onClose: onCloseAddress,
  } = useDisclosure();

  const [isLogged, setIsLogged] = useState(false);
  const [show, setShow] = useState(false);
  const [passType, setPassType] = useState("password");

  const onRegisterSubmit = (dataRegister: iRegister) => {
    try {
      instance.post("/user", dataRegister);

      toast.success("Usuário registrado com sucesso", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  const [brandsAndModels, setBrandsAndModels] = useState<[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [brandSelect, setBrandSelect] = useState<string>("");
  const [currentBrand, setCurrentBrand] = useState<[]>([]);
  const [modelSelect, setModelSelect] = useState<string>("");

  const returnHome = () => {
    Navigate("/");
  };

  const Login = async (user: iLoginProps): Promise<void> => {
    try {
      const { data } = await instance.post<iUser>("login", user);

      window.localStorage.setItem("@token", data.token);
      toast.success("Logado com sucesso");
      Navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado");
    }
  };

  const getCarModels = async () => {
    if (brandSelect) {
      try {
        const response = await instanceKenzieCars.get(
          `/cars?brand=${brandSelect}`
        );
        setCurrentBrand(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getCarsBrands = async () => {
    try {
      const response = await instanceKenzieCars.get("/cars");
      setBrandsAndModels(response.data);
      const brandsCars = Object.keys(response.data);
      setBrands(brandsCars);
    } catch (error) {
      console.log(error);
    }
  };

  const onCreateCarAd = async (data: iCreateCarAd) => {
    try {
      instance.defaults.headers.authorization =
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5ldG9AbWFpbC5jb20iLCJpZCI6ImU5NGNhMzY2LTg3ZDgtNDY3Yi04NTdiLTM3ZDMxNTE4MTRmNiIsImlhdCI6MTY4MjAxOTE2OCwiZXhwIjoxNjgyMTA1NTY4LCJzdWIiOiJlOTRjYTM2Ni04N2Q4LTQ2N2ItODU3Yi0zN2QzMTUxODE0ZjYifQ.2U1BtwlC6B88EeJ6QrubkyHngLaqY0hqdPu03ooSLGg";
      const response = await instance.post("/car", data);
      console.log(response.data);
      toast.success("Carro registrado com sucesso", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        console.log(error);
        toast.error(error.response?.data.error.errors[0], {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
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
        onClick={children === "Editar Endereço" ? onOpenAddress : undefined}
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
        getCarsBrands,
        brands,
        brandsAndModels,
        brandSelect,
        setBrandSelect,
        currentBrand,
        setCurrentBrand,
        modelSelect,
        setModelSelect,
        getCarModels,
        onCreateCarAd,
        isOpenAddress,
        onOpenAddress,
        onCloseAddress,
        isLogged,
        setIsLogged,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
