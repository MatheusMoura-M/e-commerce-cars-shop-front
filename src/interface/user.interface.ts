export interface iRegister {
  name: string;
  email: string;
  telephone: string;
  password: string;
  confir_password: string;
  cpf: string;
  image_url: string;
  birthdate: string;
  isSeller: boolean;
  street: string;
  zipcode: string;
  state: string;
  city: string;
  number: string;
  complement: string;
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
}
