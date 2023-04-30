import { createContext, useState } from "react";
import { iCar } from "../interface/car.interface";
import { instance } from "../services/api";

interface iChildren {
  children: React.ReactNode;
}

interface iHomeContext {
  carAd: iCar[];
  setCarAd: React.Dispatch<React.SetStateAction<iCar[]>>;
  GetCardsAd(): void;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const contextHomeProvider = createContext({} as iHomeContext);

const HomePageContext = ({ children }: iChildren) => {
  const [carAd, setCarAd] = useState<iCar[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const GetCardsAd = async () => {
    try {
      setIsLoading(true);
      const response = await instance.get("/car");
      setCarAd(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <contextHomeProvider.Provider
      value={{
        carAd,
        setCarAd,
        GetCardsAd,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </contextHomeProvider.Provider>
  );
};

export default HomePageContext;
