import { createContext, useContext } from "react";
import { iProviderProps } from "../@types";
import { MenuItem, useDisclosure } from "@chakra-ui/react";
import { useState, Dispatch, SetStateAction } from "react";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { instance, instanceKenzieCars } from "../services/api";
import { getCarSpecificResponse } from "../services/getCarSpecificResponse";
import { getUserSpecificReponse } from "../services/getUserSpecificResponse";
import { createCommentResponse } from "../services/createCommentResponse";
import {
  IresetProps,
  IresetPropsRequest,
  IresetPropsResponse,
  iAddressUpdateResponse,
  iCar,
  iCarResponse,
  iCarsUser,
  iCommentRequest,
  iCommentsListResponse,
  iCreateCarAd,
  iImageCar,
  iLoginProps,
  iRegisterReq,
  iSellerData,
  iUpdateAddress,
  iUpdateCarAd,
  iUpdateUser,
  iUser,
  iUserLogin,
} from "../interface";

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
  onGetSellerCars(idSeller: string): void;
  carsSeller: iCar[];
  sellerData: iSellerData;
  isOpenDeleteAd: boolean;
  onOpenDeleteAd(): void;
  onCloseDeleteAd(): void;
  onGetAddress: () => Promise<void>;
  addressData: iAddressUpdateResponse;
  isSeller: boolean;
  setIsSeller: Dispatch<SetStateAction<boolean>>;
  onCreateImageCar: (formData: iImageCar, id: string) => Promise<void>;
  ResetPassRequest: (email: IresetProps) => Promise<void>;
  yearCreate: string;
  setYearCreate: Dispatch<SetStateAction<string>>;
  fuelCreate: string;
  setFuelCreate: Dispatch<SetStateAction<string>>;
  fipeCreate: string;
  setFipeCreate: Dispatch<SetStateAction<string>>;
  yearEdit: string;
  setYearEdit: Dispatch<SetStateAction<string>>;
  fuelEdit: string;
  setFuelEdit: Dispatch<SetStateAction<string>>;
  fipeEdit: string;
  setFipeEdit: Dispatch<SetStateAction<string>>;
  ResetPass: (password: IresetPropsRequest) => Promise<void>;
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

  const [carsSeller, setCarsSeller] = useState<iCar[]>([]);
  const [sellerData, setSellerData] = useState({} as iSellerData);
  const [addressData, setAddressData] = useState({} as iAddressUpdateResponse);
  const [isSeller, setIsSeller] = useState<boolean>(false);
  const [yearCreate, setYearCreate] = useState<string>("");
  const [fuelCreate, setFuelCreate] = useState<string>("");
  const [fipeCreate, setFipeCreate] = useState<string>("");
  const [yearEdit, setYearEdit] = useState<string>("");
  const [fuelEdit, setFuelEdit] = useState<string>("");
  const [fipeEdit, setFipeEdit] = useState<string>("");

  const goToAnnouncerProfile = (id: string) => {
    navigate(`/announcer-profile/${id}`);
  };

  const GetUserProfile = async () => {
    try {
      const resp = await instance.get("/user/profile", {
        headers: { Authorization: `Bearer ${localStorage.getItem("@token")}` },
      });

      setUserLogged(resp.data);
      setIsSeller(resp.data.isSeller);
      setIsLogged(true);
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        error.response?.data.error && localStorage.removeItem("@token");
        toast.error(error.response?.data.error, {
          autoClose: 1000,
        });
      }
    }
  };

  const onRegisterSubmit = async (dataRegister: iRegisterReq) => {
    try {
      await instance.post("/user", dataRegister);

      toast.success("Usuário registrado com sucesso", {
        autoClose: 1000,
      });
      navigate("/login", { replace: true });
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.error, {
          autoClose: 1000,
        });
      }
    }
  };

  const onGetSellerCars = async (idSeller: string) => {
    try {
      const res = await instance.get(`/car/seller/${idSeller}`);

      const carsArr = res.data.cars;
      const sellerData: iSellerData = {
        id: res.data.id!,
        name: res.data.name,
        description: res.data.description,
        image_url: res.data.image_url,
      };

      setCarsSeller(carsArr);
      setSellerData(sellerData);
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.error, {
          autoClose: 1000,
        });
      }
    }
  };

  const onGetCarsUser = async (id: string) => {
    try {
      const resp = await instance.get(`user/${id}`);

      setCarsUser(resp.data);
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.error, {
          autoClose: 1000,
        });
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
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.error, {
          autoClose: 1000,
        });
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
      toast.success("Usuário logado com sucesso", {
        autoClose: 1000,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.error, {
          autoClose: 1000,
        });
      }
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
        if (axios.isAxiosError(error)) {
          toast.error(error.response?.data.error, {
            autoClose: 1000,
          });
        }
      }
    }
  };

  const getCarsBrands = async () => {
    try {
      const response = await instanceKenzieCars.get("/cars");

      const brandsCars = Object.keys(response.data);
      setBrands(brandsCars);
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.error, {
          autoClose: 1000,
        });
      }
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
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.error.errors[0], {
          autoClose: 1000,
        });
      }
    } finally {
      onGetSellerCars(sellerData.id);
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
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.error, {
          autoClose: 1000,
        });
      }
    } finally {
      onGetCarsUserProfile();
      onGetSellerCars(sellerData.id);
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
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.error.errors[0], {
          autoClose: 1000,
        });
      }
    } finally {
      onGetCarsUserProfile();
      onGetSellerCars(sellerData.id);
    }
  };

  const onGetAddress = async () => {
    if (localStorage.getItem("@token")) {
      try {
        const response = await instance.get("/address/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@token")}`,
          },
        });

        setAddressData(response.data);
      } catch (error) {
        console.log(error);
        if (axios.isAxiosError(error)) {
          toast.error(error.response?.data.error, {
            autoClose: 1000,
          });
        }
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

      toast.success("Usuário deletado com sucesso", {
        autoClose: 1000,
      });

      onCloseUpdateUser();
      localStorage.removeItem("@token");
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
          setUserLogged({} as iUser);
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
            : () => {
                goToAnnouncerProfile(userLogged.id!);
                onGetSellerCars(userLogged.id);
              }
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

      if (localStorage.getItem("@token")) {
        GetUserProfile();
      }
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.error, {
          autoClose: 1000,
        });
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
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.error, {
          autoClose: 1000,
        });
      }
    }
  };

  const onListComment = async (id: string) => {
    try {
      const commentsCar = await instance.get(`/comments/${id}`);
      setComments(commentsCar.data);
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.error, {
          autoClose: 1000,
        });
      }
    }
  };

  const onCreateComment = async (formData: iCommentRequest, id: string) => {
    try {
      const data = await createCommentResponse(formData, id);

      onListComment(data.cars.id);
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.error, {
          autoClose: 1000,
        });
      }
    }
  };

  const onEditComment = async (idComment: string, form: iCommentRequest) => {
    try {
      const resp = await instance.patch(`/comments/${idComment}`, form, {
        headers: { Authorization: `Bearer ${localStorage.getItem("@token")}` },
      });

      onListComment(resp.data.cars.id);
      toast.success("Comentário atualizado com sucesso", {
        autoClose: 1000,
      });
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.error, {
          autoClose: 1000,
        });
      }
    }
  };

  const onDeleteComment = async (idComment: string) => {
    try {
      await instance.delete(`/comments/${idComment}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("@token")}` },
      });

      onListComment(carAdSelected.id);
      toast.success("Comentário deletado com sucesso", {
        autoClose: 1000,
      });
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.error, {
          autoClose: 1000,
        });
      }
    }
  };

  const onCreateImageCar = async (formData: iImageCar, id: string) => {
    try {
      await instance.post(`/car/image/${id}`, formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("@token")}` },
      });
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.error, {
          autoClose: 1000,
        });
      }
    }
  };

  const ResetPassRequest = async (email: IresetProps): Promise<void> => {
    try {
      const { data } = await instance.post<IresetPropsResponse>(
        "user/reset-password",
        email
      );

      toast.success(data.message, {
        autoClose: 1000,
      });
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.error, {
          autoClose: 1000,
        });
      }
    }
  };

  const ResetPass = async (password: IresetPropsRequest): Promise<void> => {
    const { token } = useParams();
    try {
      if (password.password !== password.confirm_password) {
        throw new Error("As senhas não coincidem");
      }

      const { data } = await instance.patch<IresetPropsResponse>(
        `user/reset-password/${token}`,
        password
      );

      toast.success(data.message, {
        autoClose: 1000,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.error.errors[0], {
          autoClose: 1000,
        });
      }
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
        onGetSellerCars,
        carsSeller,
        sellerData,
        isOpenDeleteAd,
        onOpenDeleteAd,
        onCloseDeleteAd,
        onGetAddress,
        addressData,
        isSeller,
        setIsSeller,
        onCreateImageCar,
        ResetPassRequest,
        fuelCreate,
        fipeCreate,
        yearCreate,
        setFipeCreate,
        setFuelCreate,
        setYearCreate,
        fuelEdit,
        fipeEdit,
        yearEdit,
        setFipeEdit,
        setFuelEdit,
        setYearEdit,
        ResetPass,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
