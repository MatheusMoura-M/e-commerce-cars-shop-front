import { createContext, useContext } from "react";
import { iProviderProps } from "../@types";
import { MenuItem, useDisclosure } from "@chakra-ui/react";
import { useState, Dispatch, SetStateAction } from "react";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import {
  iLoginProps,
  iRegister,
  iRegisterReq,
  iUpdateAddress,
  iUpdateUser,
  iUser,
  iUserLogin,
} from "../interface/user.interface";
import { instance, instanceKenzieCars } from "../services/api";
import { iCarResponse, iCreateCarAd } from "../interface/car.interface";
import { getCarSpecificResponse } from "../services/getCarSpecificResponse";
import { getUserSpecificReponse } from "../services/getUserSpecificResponse";
import {
  iCommentRequest,
  iCommentsListResponse,
} from "../interface/comment.interface";
import { createCommentResponse } from "../services/createCommentResponse";
import { useEffect } from "react";
import { iAddressUpdateResponse } from "../interface/user.interface";

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
  isOpenUpdateUser: boolean;
  onOpenUpdateUser: () => void;
  onCloseUpdateUser: () => void;
  onUpdateAddress: (data: iUpdateAddress) => Promise<void>;
  onUpdateUser: (data: iUpdateUser) => Promise<void>;
  onDeleteUser: () => Promise<void>;
  GetCarSpecific: (id: string) => Promise<void>;
  GetUserSpecific: (id: string) => Promise<void>;
  GetUserProfile: () => Promise<void>;
  carAdSelected: iCarResponse;
  setCarAdSelected: Dispatch<SetStateAction<iCarResponse>>;
  ownerOfAdSelected: iUser;
  setOwnerOfAdSelected: Dispatch<SetStateAction<iUser>>;
  userLogged: iUser;
  setUserLogged: Dispatch<SetStateAction<iUser>>;
  addressLogged: iAddressUpdateResponse;
  setAddressLogged: Dispatch<SetStateAction<iAddressUpdateResponse>>;
  navigate: NavigateFunction;
  onCreateComment: (data: iCommentRequest, id: string) => Promise<void>;
  onListComment: (id: string) => Promise<void>;
  comments: iCommentsListResponse[];
  onRegisterSubmit(dataRegister: iRegister): void;
  getAddressLogged: () => Promise<void>;
}

export const AuthContext = createContext<iAuthProviderData>(
  {} as iAuthProviderData
);

export const AuthProvider = ({ children }: iProviderProps) => {
  const navigate = useNavigate();
  const {
    isOpen: isOpenAddress,
    onOpen: onOpenAddress,
    onClose: onCloseAddress,
  } = useDisclosure();

  const {
    isOpen: isOpenUpdateUser,
    onOpen: onOpenUpdateUser,
    onClose: onCloseUpdateUser,
  } = useDisclosure();

  const [isLogged, setIsLogged] = useState(false);
  const [show, setShow] = useState(false);
  const [passType, setPassType] = useState("password");
  const [brandsAndModels, setBrandsAndModels] = useState<[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [brandSelect, setBrandSelect] = useState<string>("");
  const [currentBrand, setCurrentBrand] = useState<[]>([]);
  const [modelSelect, setModelSelect] = useState<string>("");
  const [carAdSelected, setCarAdSelected] = useState<iCarResponse>(
    {} as iCarResponse
  );
  const [ownerOfAdSelected, setOwnerOfAdSelected] = useState<iUser>(
    {} as iUser
  );
  const [userLogged, setUserLogged] = useState<iUser>({} as iUser);
  const [addressLogged, setAddressLogged] = useState<iAddressUpdateResponse>(
    {} as iAddressUpdateResponse
  );
  const [comments, setComments] = useState<iCommentsListResponse[]>([]);

  const returnHome = () => {
    navigate("/");
  };

  const GetUserProfile = async () => {
    try {
      const resp = await instance.get("/user/profile", {
        headers: { Authorization: `Bearer ${localStorage.getItem("@token")}` },
      });

      setUserLogged(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onRegisterSubmit = async (dataRegister: iRegister) => {
    console.log("AA", dataRegister);
    try {
      await instance.post("/user", dataRegister);

      toast.success("Usuário registrado com sucesso", {
        autoClose: 1000,
      });

      navigate("/login", { replace: true });
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data, {
          autoClose: 1000,
        });
      }
    }
  };

  const Login = async (user: iLoginProps): Promise<void> => {
    try {
      const { data } = await instance.post<iUserLogin>("login", user);
      window.localStorage.setItem("@token", data.token);

      const { data: userData } = await instance.get("user/profile", {
        headers: { Authorization: `Bearer ${localStorage.getItem("@token")}` },
      });

      setUserLogged(userData);
      setIsLogged(true);
      toast.success("Logado com sucesso", {
        autoClose: 1000,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado", {
        autoClose: 1000,
      });
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("@token");

    token ? setIsLogged(true) : setIsLogged(false);
  }, []);

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
      await instance.post("/car", data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("@token")}` },
      });

      toast.success("Carro registrado com sucesso", {
        autoClose: 1000,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        toast.error(error.response?.data.error.errors[0], {
          autoClose: 1000,
        });
      }
    }
  };

  const onUpdateAddress = async (data: iUpdateAddress) => {
    try {
      await instance.patch("/address", data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("@token")}` },
      });
      toast.success("Address atualizado com sucesso", {
        autoClose: 1000,
      });
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        console.log(error);
        toast.error(error.response?.data.error.errors[0], {
          autoClose: 1000,
        });
      }
    }
  };

  const onUpdateUser = async (data: iUpdateUser) => {
    try {
      await instance.patch("/user", data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("@token")}` },
      });

      toast.success("Usuário atualizado com sucesso", {
        autoClose: 1000,
      });
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        console.log(error);
        toast.error(error.response?.data.error.errors[0], {
          autoClose: 1000,
        });
      }
    } finally {
      GetUserProfile();
    }
  };

  const onDeleteUser = async () => {
    try {
      await instance.delete("/user", {
        headers: { Authorization: `Bearer ${localStorage.getItem("@token")}` },
      });

      toast.success("Usuário deletado com sucesso");
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        console.log(error);
        toast.error(error.response?.data.error.errors[0], {
          autoClose: 1000,
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
    ) : children === "Sair" ? (
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
        onClick={() => {
          localStorage.removeItem("@token");
          setIsLogged(false);
          navigate("/");
        }}
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
        onClick={
          children === "Editar Endereço"
            ? onOpenAddress
            : children === "Editar Perfil"
            ? onOpenUpdateUser
            : children === "Sair"
            ? returnHome
            : undefined
        }
      >
        {children}
      </MenuItem>
    );

  const GetCarSpecific = async (id: string) => {
    try {
      const data = await getCarSpecificResponse(id);

      const token = localStorage.getItem("@token");

      if (token) {
        GetUserProfile();
      }

      GetUserSpecific(data.user.id);
      setCarAdSelected(data);
    } catch (error) {
      console.log(error);
    }
  };

  const GetUserSpecific = async (id: string) => {
    try {
      const data = await getUserSpecificReponse(id);

      setOwnerOfAdSelected(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAddressLogged = async () => {
    try {
      const resp = await instance.get("/address/profile", {
        headers: { Authorization: `Bearer ${localStorage.getItem("@token")}` },
      });

      setAddressLogged(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onListComment = async (id: string) => {
    try {
      const commentsCar = await instance.get(`/comments/${id}`);
      setComments(commentsCar.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onCreateComment = async (formData: iCommentRequest, id: string) => {
    try {
      await createCommentResponse(formData, id);
    } catch (error) {
      console.log(error);
    } finally {
      onListComment(id);
    }
  };

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
        isOpenUpdateUser,
        onOpenUpdateUser,
        onCloseUpdateUser,
        onUpdateAddress,
        onUpdateUser,
        onDeleteUser,
        carAdSelected,
        setCarAdSelected,
        GetCarSpecific,
        GetUserSpecific,
        ownerOfAdSelected,
        setOwnerOfAdSelected,
        navigate,
        onCreateComment,
        GetUserProfile,
        userLogged,
        setUserLogged,
        onListComment,
        comments,
        onRegisterSubmit,
        addressLogged,
        setAddressLogged,
        getAddressLogged,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
