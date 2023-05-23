import { createContext, useContext, useState } from "react";
import { iProviderProps } from "../@types";

interface iRegexContextProvider {
  formattedMobileNumber(number: string): void;
  formattedBirthdate(data: string): void;
  formattedZipcode(zipCode: string): void;
  formattedCpf(cpfUser: string): void;
  formattedPrice(priceCar: string): void;
  cellphoneNumber: string;
  birthdate: string;
  cpf: string;
  cep: string;
  price: string;
}

export const contextRegexInputs = createContext({} as iRegexContextProvider);

export const RegexInputs = ({ children }: iProviderProps) => {
  const [cellphoneNumber, setCellphoneNumber] = useState<string>("");
  const [birthdate, setBirthdate] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [cep, setCep] = useState<string>("");

  const formattedMobileNumber = (number: string) => {
    let phone_number = number.replace(/\D/g, "");

    if (phone_number.length > 10) {
      phone_number = phone_number.replace(
        /^(\d\d)(\d{5})(\d{4}).*/,
        "($1) $2-$3"
      );
    } else if (phone_number.length > 6) {
      phone_number = phone_number.replace(
        /^(\d\d)(\d{4})(\d{0,4}).*/,
        "($1) $2-$3"
      );
    } else if (phone_number.length > 2) {
      phone_number = phone_number.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else if (phone_number.length > 0) {
      phone_number = phone_number.replace(/^(\d*)/, "($1");
    }

    setCellphoneNumber(phone_number);
  };

  const formattedBirthdate = (date: string) => {
    let birthdate = date.replace(/\D/g, "");

    if (birthdate.length > 8) {
      birthdate = birthdate.replace(/^(\d{2})(\d{2})(\d{4}).*/, "$1 / $2 / $3");
    } else if (birthdate.length > 6) {
      birthdate = birthdate.replace(/^(\d{2})(\d{2})(\d{0,4}).*/, "$1/$2/$3");
    } else if (birthdate.length > 4) {
      birthdate = birthdate.replace(/^(\d{2})(\d{0,2})(\d{0,4}).*/, "$1/$2/$3");
    } else if (birthdate.length > 2) {
      birthdate = birthdate.replace(/^(\d{2})(\d{0,2}).*/, "$1/$2");
    }

    birthdate = birthdate.replace(/\s/g, "");

    setBirthdate(birthdate);
  };

  const formattedZipcode = (zipCode: string) => {
    let zip = zipCode.replace(/\D/g, "");

    if (zip.length > 5) {
      zip = zip.replace(/^(\d{5})(\d{0,3}).*/, "$1.$2");
    } else if (zip.length > 1) {
      zip = zip.replace(/^(\d{5}).*/, "$1");
    }
    setCep(zip);
  };

  const formattedPrice = (priceCar: string) => {
    let price = priceCar.replace(/\D/g, "");

    if (price.length > 1 && price.length <= 3) {
      price = price.replace(/^([0-9]\d{0,2})(\d{2})$/, "$1,$2");
    } else if (price.length > 3 && price.length <= 5) {
      if (price[0] == "0") {
        price = price.substring(1);
        price = price.replace(/^([0-9]\d{0,2})(\d{2})$/, "$1,$2");
      }
      price = price.replace(/^([0-9]\d{0,2})(\d{2})$/, "$1,$2");
    } else if (price.length > 5 && price.length <= 8) {
      price = price.replace(/^([1-9]\d{0,2})(\d{3})*(\d{2})$/, "$1.$2,$3");
    } else if (price.length > 8 && price.length <= 11) {
      price = price.replace(
        /^([1-9]\d{0,2})(\d{3})(\d{3})*(\d{2})$/,
        "$1.$2.$3,$4"
      );
    } else if (price.length > 11 && price.length <= 14) {
      price = price.replace(
        /^([1-9]\d{0,2})(\d{3})(\d{3})(\d{3})*(\d{2})$/,
        "$1.$2.$3.$4,$5"
      );
    } else if (price.length > 14) {
      price = price.substring(0, 14);
      price = price.replace(
        /^([1-9]\d{0,2})(\d{3})(\d{3})(\d{3})*(\d{2})$/,
        "$1.$2.$3.$4,$5"
      );
    }

    setPrice(price);
  };

  const formattedCpf = (cpfUser: string) => {
    let cpf = cpfUser.replace(/\D/g, "");

    if (cpf.length > 9) {
      cpf = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{1,2}).*/, "$1.$2.$3-$4");
    } else if (cpf.length > 3 && cpf.length <= 6) {
      cpf = cpf.replace(/^(\d{3})(\d{0,3}).*/, "$1.$2");
    } else if (cpf.length > 6) {
      cpf = cpf.replace(/^(\d{3})(\d{3})(\d{0,3}).*/, "$1.$2.$3");
    }

    setCpf(cpf);
  };

  return (
    <contextRegexInputs.Provider
      value={{
        formattedMobileNumber,
        formattedBirthdate,
        formattedZipcode,
        formattedCpf,
        formattedPrice,
        cellphoneNumber,
        birthdate,
        cpf,
        cep,
        price,
      }}
    >
      {children}
    </contextRegexInputs.Provider>
  );
};

export const useRegex = () => useContext(contextRegexInputs);
