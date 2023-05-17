import { iCar } from "./car.interface";

interface iRegister {
  name: string;
  email: string;
  telephone: string;
  password: string;
  confir_password?: string;
  cpf: string;
  birthdate: string;
  isSeller: boolean;
  street: string;
  zipcode: string;
  state: string;
  city: string;
  number: string;
  description: string;
  complement: string;
}

interface iRegisterReq {
  name: string;
  email: string;
  telephone: string;
  password: string;
  cpf: string;
  birthdate: string;
  isSeller: boolean;
  street: string;
  zipcode: string;
  state: string;
  city: string;
  number: string;
  description: string;
  complement: string;
}

interface iAddressUpdateResponse {
  id: string;
  street: string;
  zipcode: string;
  state: string;
  city: string;
  number: string;
  complement: string;
}

interface iUser {
  id: string;
  name: string;
  email: string;
  cpf: string;
  telephone: string;
  birthdate: string;
  description: string;
  image_url: string;
  isSeller: boolean;
  address: iAddressUpdateResponse;
}

interface iCarsUser {
  id: string;
  name: string;
  email: string;
  cpf: string;
  telephone: string;
  birthdate: string;
  description: string;
  image_url: string;
  isSeller: boolean;
  cars: iCar[];
}

interface iUpdateAddress {
  street?: string;
  zipcode?: string;
  state?: string;
  city?: string;
  number?: string;
  complement?: string;
}

interface iUpdateUser {
  name?: string;
  email?: string;
  telephone?: string;
  password?: string;
  confir_password?: string;
  cpf?: string;
  image_url?: string;
  birthdate?: string;
  isSeller?: boolean;
  description?: string;
}

interface iLoginProps {
  email: string;
  password: string;
}

interface iUserLogin {
  token: string;
}

interface iSellerData {
  id: string;
  name: string;
  description: string;
  image_url: string;
}

export type {
  iAddressUpdateResponse,
  iCarsUser,
  iLoginProps,
  iRegister,
  iUserLogin,
  iSellerData,
  iUser,
  iUpdateUser,
  iRegisterReq,
  iUpdateAddress,
};
