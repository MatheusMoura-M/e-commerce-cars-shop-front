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
  navigate: NavigateFunction;
  onCreateComment: (data: iCommentRequest, id: string) => Promise<void>;
  onListComment: (id: string) => Promise<void>;
  comments: iCommentsListResponse[];
}

export const AuthContext = createContext<iAuthProviderData>(
  {} as iAuthProviderData
);

console.log("teste");
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
  const [comments, setComments] = useState<iCommentsListResponse[]>([]);

  const returnHome = () => {
    navigate("/");
  };

  const onRegisterSubmit = async (dataRegister: iRegister) => {
    console.log(dataRegister);

    try {
      const r = await instance.post("/user", dataRegister);

      console.log(r);

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

      window.localStorage.setItem("@token", data.token);
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

  const onUpdateAddress = async (data: iUpdateAddress) => {
    try {
      instance.defaults.headers.authorization =
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pbGZvbnRzMkBnbWFpbC5jb20iLCJpZCI6IjE3YzE3MGM0LTEwZTEtNDJkMS05ZGRmLWFmN2U1Nzc3MzE5NSIsImlhdCI6MTY4MjcwNDU5NCwiZXhwIjoxNjgyNzkwOTk0LCJzdWIiOiIxN2MxNzBjNC0xMGUxLTQyZDEtOWRkZi1hZjdlNTc3NzMxOTUifQ.ch3Z2pkxrsfehNgVM1uNVDMiZsgasPO2m7oMMtHffBk";

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

  const onUpdateUser = async (data: iUpdateUser) => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pbGZvbnRzMkBnbWFpbC5jb20iLCJpZCI6IjE3YzE3MGM0LTEwZTEtNDJkMS05ZGRmLWFmN2U1Nzc3MzE5NSIsImlhdCI6MTY4MjcwNDU5NCwiZXhwIjoxNjgyNzkwOTk0LCJzdWIiOiIxN2MxNzBjNC0xMGUxLTQyZDEtOWRkZi1hZjdlNTc3NzMxOTUifQ.ch3Z2pkxrsfehNgVM1uNVDMiZsgasPO2m7oMMtHffBk";

      const response = await instance.patch("/user", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
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

  const onDeleteUser = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdGhldXNAbWFpbC5jb20iLCJpZCI6Ijc2ZDI2YWI3LTBjMDAtNGEyYy1hZDM4LWVjODExZmQxOTNhMCIsImlhdCI6MTY4MjcwNDYzMywiZXhwIjoxNjgyNzkxMDMzLCJzdWIiOiI3NmQyNmFiNy0wYzAwLTRhMmMtYWQzOC1lYzgxMWZkMTkzYTAifQ.ovbssAu2hwVIwN1trEE7b_UK-pLM9eTggVn8oLUTs50";

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
            : undefined
        }
      >
        {children}
      </MenuItem>
    );

  const GetCarSpecific = async (id: string) => {
    try {
      instance.defaults.headers.authorization =
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdGhldXNAZ21haWwuY29tIiwiaWQiOiIzNjZiNDA2NS1mMjVkLTQ1M2QtYmZjZS1kNzNmMDQ2MjYzM2MiLCJpYXQiOjE2ODMwNTM3MjAsImV4cCI6MTY4MzE0MDEyMCwic3ViIjoiMzY2YjQwNjUtZjI1ZC00NTNkLWJmY2UtZDczZjA0NjI2MzNjIn0.j56CadovJ-cqUZCqag2eLxSaRyQhH7S5R18SE8OcbjQ";
      const data = await getCarSpecificResponse(id);
      console.log("oi");
      GetUserSpecific(data.user.id);
      setCarAdSelected(data);
      GetUserProfile();
      onListComment(data.id);
    } catch (error) {
      console.log(error);
    }
  };

  const GetUserSpecific = async (id: string) => {
    try {
      instance.defaults.headers.authorization =
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdGhldXNAZ21haWwuY29tIiwiaWQiOiIzNjZiNDA2NS1mMjVkLTQ1M2QtYmZjZS1kNzNmMDQ2MjYzM2MiLCJpYXQiOjE2ODMwNTM3MjAsImV4cCI6MTY4MzE0MDEyMCwic3ViIjoiMzY2YjQwNjUtZjI1ZC00NTNkLWJmY2UtZDczZjA0NjI2MzNjIn0.j56CadovJ-cqUZCqag2eLxSaRyQhH7S5R18SE8OcbjQ";
      const data = await getUserSpecificReponse(id);

      setOwnerOfAdSelected(data);
    } catch (error) {
      console.log(error);
    }
  };

  const GetUserProfile = async () => {
    try {
      instance.defaults.headers.authorization =
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdGhldXNAZ21haWwuY29tIiwiaWQiOiIzNjZiNDA2NS1mMjVkLTQ1M2QtYmZjZS1kNzNmMDQ2MjYzM2MiLCJpYXQiOjE2ODMxMjM0MDgsImV4cCI6MTY4MzIwOTgwOCwic3ViIjoiMzY2YjQwNjUtZjI1ZC00NTNkLWJmY2UtZDczZjA0NjI2MzNjIn0.dPp2qzfoViZCT8bjMhLznT6qY1PKRVHI--kHU75iaBk";
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

  const onListComment = async (id: string) => {
    try {
      const commentsCar = await instance.get(`/comments/${id}`);
      setComments(commentsCar.data);
    } catch (error) {
      console.log(error);
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
