import { createContext, useContext } from "react";
import { iProviderProps } from "../@types";

export interface iAuthProviderData {}

const AuthContext = createContext<iAuthProviderData>({} as iAuthProviderData);

export const AuthProvider = ({ children }: iProviderProps) => {
  return <AuthContext.Provider value={{}}></AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
