import { iCar } from "./car.interface";

export interface iRegister {
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

export interface iRegisterReq {
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

export interface iAddressUpdateResponse {
  id: string;
  street: string;
  zipcode: string;
  state: string;
  city: string;
  number: string;
  complement: string;
}

export interface iUser {
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

export interface iCarsUser {
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

export interface iUpdateAddress {
  street?: string;
  zipcode?: string;
  state?: string;
  city?: string;
  number?: string;
  complement?: string;
}

export interface iUpdateUser {
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

export interface iLoginProps {
  email: string;
  password: string;
}

export interface iUserLogin {
  token: string;
}

export interface iSellerData {
  id: string;
  name: string;
  description: string
  image_url: string
}
