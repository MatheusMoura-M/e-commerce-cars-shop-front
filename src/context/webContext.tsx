import { createContext, useContext, useEffect } from "react";
import { iProviderProps } from "../@types";
import { MenuItem, useDisclosure } from "@chakra-ui/react";
import { useState, Dispatch, SetStateAction } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import {
  iCarsUser,
  iLoginProps,
  iRegister,
  iRegisterReq,
  iSellerData,
  iUpdateAddress,
  iUpdateUser,
  iUser,
  iUserLogin,
} from "../interface/user.interface";
import { instance, instanceKenzieCars } from "../services/api";
import {
  iCar,
  iCarResponse,
  iCreateCarAd,
  iUpdateCarAd,
} from "../interface/car.interface";
import { getCarSpecificResponse } from "../services/getCarSpecificResponse";
import { getUserSpecificReponse } from "../services/getUserSpecificResponse";
import {
  iCommentRequest,
  iCommentsListResponse,
} from "../interface/comment.interface";
import { createCommentResponse } from "../services/createCommentResponse";

export interface iAuthProviderData {
  MenuHamburguer: ({ children }: iProviderProps) => JSX.Element;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  showConfirm: boolean;
  setShowConfirm: Dispatch<SetStateAction<boolean>>;
  passType: string;
  setPassType: Dispatch<SetStateAction<string>>;
  confirmPassType: string;
  setConfirmPassType: Dispatch<SetStateAction<string>>;
  Login: (user: iLoginProps) => void;
  getCarsBrands: () => Promise<void>;
  getCarModels: () => Promise<void>;
  onCreateCarAd: (data: iCreateCarAd) => Promise<void>;
  onUpdateCarAd: (data: iUpdateCarAd, id: string) => Promise<void>;
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
  isOpenUpdateComment: boolean;
  onOpenUpdateComment: () => void;
  onCloseUpdateComment: () => void;
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
  userCarsProfile: iCar[];
  selectedCar: iCar;
  setSelectedCar: (car: iCar) => void;
  comments: iCommentsListResponse[];
  onListComment: (id: string) => Promise<void>;
  onGetCarsUserProfile: () => Promise<void>;
  goToAnnouncerProfile: (id: string) => void;
  onGetCarsUser: (id: string) => Promise<void>;
  setCarsUser: Dispatch<SetStateAction<iCarsUser>>;
  carsUser: iCarsUser;
  onDeleteComment: (idComment: string) => Promise<void>;
  onEditComment: (idComment: string, form: iCommentRequest) => Promise<void>;
  selectedCommentId: string;
  setSelectedCommentId: Dispatch<SetStateAction<string>>;
  isBool: boolean;
  setIsBool: Dispatch<SetStateAction<boolean>>;
  getCarModels2: (selectedCar: iCar) => Promise<void>;
  onGetSellerCars(idSeller: string): void
  carsSeller: iCar[]
  sellerData: iSellerData
  isOpenDeleteAd: boolean
  onOpenDeleteAd(): void
  onCloseDeleteAd(): void

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

  const {
    isOpen: isOpenUpdateComment,
    onOpen: onOpenUpdateComment,
    onClose: onCloseUpdateComment,
  } = useDisclosure();

  const {
    isOpen: isOpenDeleteAd,
    onOpen: onOpenDeleteAd,
    onClose: onCloseDeleteAd,
  } = useDisclosure();

  const [isLogged, setIsLogged] = useState(false);
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [passType, setPassType] = useState("password");
  const [confirmPassType, setConfirmPassType] = useState("password");
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

  const [carsUser, setCarsUser] = useState<iCarsUser>({} as iCarsUser);

  const [userCarsProfile, setUserCarsProfile] = useState<iCar[]>([] as iCar[]);
  const [selectedCar, setSelectedCar] = useState({} as iCar);
  const [comments, setComments] = useState<iCommentsListResponse[]>([]);
  const [selectedCommentId, setSelectedCommentId] = useState<string>("");
  const [isBool, setIsBool] = useState(false);

  const [carsSeller, setCarsSeller] = useState<iCar[]>([])
  const [sellerData, setSellerData] = useState({} as iSellerData)

  const goToProfile = () => {
    navigate("/profile");
  };

  const GetUserProfile = async () => {
    try {
      const resp = await instance.get("/user/profile", {
        headers: { Authorization: `Bearer ${localStorage.getItem("@token")}` },
      });

      // navigate("/login", {replace: true})
      setUserLogged(resp.data);
      setIsLogged(true);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        error.response?.data.error && localStorage.removeItem("@token");
        toast.error(error.response?.data.error, {
          autoClose: 1000,
        });
      }
      console.log(error);
    }
  };

  const goToAnnouncerProfile = (id: string) => {
    navigate(`/announcer-profile/${id}`);
  };

  const onRegisterSubmit = async (dataRegister: iRegisterReq) => {
    try {
      await instance.post("/user", dataRegister);

      toast.success("Usuário registrado com sucesso", {
        autoClose: 1000,
      });

      navigate("/login", { replace: true });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data, {
          autoClose: 1000,
        });
      }
    }
  };

  const onGetSellerCars = async (idSeller: string) => {

    try {
      
      const res = await instance.get(`/car/seller/${idSeller}`)
      
      const carsArr = res.data.cars
      const sellerData: iSellerData = {
        id: res.data.id!, 
        name: res.data.name,
        description: res.data.description,
        image_url: res.data.image_url 
      }

      setCarsSeller(carsArr)
      setSellerData(sellerData)

    } catch (error) {

      console.log(error)
      
    }

  }

  const onGetCarsUser = async (id: string) => {
    try {
      const resp = await instance.get(`user/${id}`);

      setCarsUser(resp.data);

    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
      }
    }
  };

  const onGetCarsUserProfile = async () => {
    try {
      const resp = await instance.get("user/cars", {
        headers: { Authorization: `Bearer ${localStorage.getItem("@token")}` },
      });

      setUserCarsProfile(resp.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
      }
    }
  };

  const Login = async (user: iLoginProps): Promise<void> => {
    try {
      const { data } = await instance.post<iUserLogin>("login", user);
      window.localStorage.setItem("@token", data.token);

      GetUserProfile();
      onGetCarsUserProfile();
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

  const getCarModels2 = async (selectedCar: iCar) => {
    // try {
    //   console.log("AAAAAA", selectedCar);
    //   const response = await instanceKenzieCars.get(
    //     `/cars?brand=${selectedCar.brand}`
    //   );
    //   console.log("brand", response.data);
    //   setCurrentBrand(response.data);
    // } catch (error) {
    //   console.log(error);
    // }
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

  const onUpdateCarAd = async (data: iUpdateCarAd, id: string) => {
    try {
      await instance.patch(`/car/${id}`, data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("@token")}` },
      });

      toast.success("Carro editado com sucesso", {
        autoClose: 1000,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        // toast.error(error.response?.data.error.errors[0], {
        //   autoClose: 1000,
        // });
      }
    } finally {
      onGetCarsUserProfile();
    }
  };

  const onDeleteCarAd = async (id: string) => {
    try {
      await instance.delete(`/car/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("@token")}` },
      });

      toast.success("Carro deletado com sucesso", {
        autoClose: 1000,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        toast.error(error.response?.data.error.errors[0], {
          autoClose: 1000,
        });
      }
    } finally {
      onGetCarsUserProfile();
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
      if (axios.isAxiosError(error)) {
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
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.error.errors[0], {
          autoClose: 1000,
        });
      }
    }
  };

  const onDeleteUser = async () => {
    try {
      await instance.delete("/user", {
        headers: { Authorization: `Bearer ${localStorage.getItem("@token")}` },
      });

      toast.success("Usuário deletado com sucesso", {
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
          setUserLogged({} as iUser)
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
            : goToProfile
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

      if(localStorage.getItem("@token")){
        GetUserProfile();
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        error.response?.data.error === "Car not found!" && navigate("/");
      }
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
      const data = await createCommentResponse(formData, id);

      onListComment(data.cars.id);
    } catch (error) {
      console.log(error);
    }
  };

  const onEditComment = async (idComment: string, form: iCommentRequest) => {
    try {
      const resp = await instance.patch(`/comments/${idComment}`, form, {
        headers: { Authorization: `Bearer ${localStorage.getItem("@token")}` },
      });

      onListComment(resp.data.cars.id);
    } catch (error) {
      console.log(error);
    }
  };

  const onDeleteComment = async (idComment: string) => {
    try {
      await instance.delete(`/comments/${idComment}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("@token")}` },
      });

      onListComment(carAdSelected.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userCarsProfile,
        MenuHamburguer,
        passType,
        setPassType,
        show,
        setShow,
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
        isOpenUpdateComment,
        onOpenUpdateComment,
        onCloseUpdateComment,
        isOpenAddress,
        onOpenAddress,
        onCloseAddress,
        isOpenUpdateUser,
        onOpenUpdateUser,
        onCloseUpdateUser,
        isLogged,
        setIsLogged,
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
        comments,
        onListComment,
        onGetCarsUserProfile,
        onGetCarsUser,
        goToAnnouncerProfile,
        setCarsUser,
        carsUser,
        showConfirm,
        setShowConfirm,
        confirmPassType,
        setConfirmPassType,
        onDeleteComment,
        onEditComment,
        selectedCommentId,
        setSelectedCommentId,
        isBool,
        setIsBool,
        getCarModels2,
        onGetSellerCars,
        carsSeller,
        sellerData,
        isOpenDeleteAd,
        onOpenDeleteAd,
        onCloseDeleteAd
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
