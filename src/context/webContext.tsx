import { createContext, useContext } from "react";
import { iProviderProps } from "../@types";
import { MenuItem, useDisclosure } from "@chakra-ui/react";
import { useState, Dispatch, SetStateAction } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
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
import { iCar, iCarResponse, iCreateCarAd } from "../interface/car.interface";
import { getCarSpecificResponse } from "../services/getCarSpecificResponse";
import { getUserSpecificReponse } from "../services/getUserSpecificResponse";
import { iCommentRequest } from "../interface/comment.interface";
import { createCommentResponse } from "../services/createCommentResponse";

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
  onUpdateCarAd: (data: iCreateCarAd, id: string) => Promise<void>;
  onDeleteCarAd: (id: string) => Promise<void>;
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
  navigate: NavigateFunction;
  onCreateComment: (data: iCommentRequest, id: string) => Promise<void>;
  onRegisterSubmit: (dataRegister: iRegisterReq) => void;
  userCars: iCar[];
  selectedCar: iCar;
  setSelectedCar: (car: iCar) => void;
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
  const [userCars, setUserCars] = useState<iCar[]>([] as iCar[]);
  const [selectedCar, setSelectedCar] = useState({} as iCar);

  const returnHome = () => {
    navigate("/");
  };

  const goToProfile = () => {
    navigate("/user-profile");
    console.log(userCars);
  };

  const onRegisterSubmit = async (dataRegister: iRegisterReq) => {
    try {
      const r = await instance.post("/user", dataRegister);

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

      navigate("/login", { replace: true });
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

  const Login = async (user: iLoginProps): Promise<void> => {
    try {
      const { data } = await instance.post<iUserLogin>("login", user);
      instance.defaults.headers.authorization = `Bearer ${data.token}`;

      const { data: userData } = await instance.get("user/profile");
      const { data: carsData } = await instance.get("user/cars");

      window.localStorage.setItem("@token", data.token);
      setUserLogged(userData);
      setUserCars(carsData);
      setIsLogged(true);
      toast.success("Logado com sucesso");
      navigate("/");
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
      const response = await instance.post("/car", data);

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

  const onUpdateCarAd = async (data: iCreateCarAd, id: string) => {
    try {
      const response = await instance.patch(`/car/${id}`, data);
      const { data: carsData } = await instance.get("user/cars");
      setUserCars(carsData);

      toast.success("Carro editado com sucesso", {
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

  const onDeleteCarAd = async (id: string) => {
    try {
      const response = await instance.delete(`/car/${id}`);
      const { data: carsData } = await instance.get("user/cars");
      setUserCars(carsData);

      toast.success("Carro deletado com sucesso", {
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

  const onUpdateAddress = async (data: iUpdateAddress) => {
    try {
      const response = await instance.patch("/address", data);

      toast.success("Address atualizado com sucesso", {
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

  const onUpdateUser = async (data: iUpdateUser) => {
    try {
      const response = await instance.patch("/user", data);

      toast.success("Usuário atualizado com sucesso", {
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

  const onDeleteUser = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pbGZvbnRzMkBnbWFpbC5jb20iLCJpZCI6IjY2MThhN2FmLTU0YzYtNGM4OS1iOWM1LTgzMzA3Yzg4ZTE3YSIsImlhdCI6MTY4MjY5ODk0NCwiZXhwIjoxNjgyNzg1MzQ0LCJzdWIiOiI2NjE4YTdhZi01NGM2LTRjODktYjljNS04MzMwN2M4OGUxN2EifQ.7MHGh3iV4RTsiry5W3eehyKKHlO_nDLpSEJ9ruZnkZU";

      const response = await instance.delete("/user", {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success("Usuário deletado com sucesso", {
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
        onClick={
          children === "Editar Endereço"
            ? onOpenAddress
            : children === "Editar Perfil"
            ? onOpenUpdateUser
            : children === "Meus Anuncios"
            ? goToProfile
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

      GetUserSpecific(data.user.id);
      setCarAdSelected(data);
      GetUserProfile();
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

  const GetUserProfile = async () => {
    try {
      const resp = await instance.get("/user/profile");

      setUserLogged(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onCreateComment = async (formData: iCommentRequest, id: string) => {
    try {
      const data = await createCommentResponse(formData, id);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userCars,
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
        onUpdateCarAd,
        onDeleteCarAd,
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
        onRegisterSubmit,
        selectedCar,
        setSelectedCar,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
