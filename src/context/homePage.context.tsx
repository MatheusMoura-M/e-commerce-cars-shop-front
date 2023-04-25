import { createContext, useState } from "react";
import { iCar } from "../interface/car.interface";
import { instance } from "../services/api";

interface iChildren {
  children: React.ReactNode;
}

interface iHomeContext {
  carAd: iCar[];
  setCarAd: React.Dispatch<React.SetStateAction<iCar[]>>;
  filterCar: iCar[]
  brands: iBrand[]
  colors: string[]
  years: string[]
  models: string[]
  fuels: string[]
  brandSelected: string
  setBrandSelected: React.Dispatch<React.SetStateAction<string>>
  colorSelected: string
  setColorSelected: React.Dispatch<React.SetStateAction<string>>
  yearSelected: string
  setYearSelected: React.Dispatch<React.SetStateAction<string>>
  modelSelected: string
  setModelSelected: React.Dispatch<React.SetStateAction<string>>
  fuelSelected: string
  setFuelSelected: React.Dispatch<React.SetStateAction<string>>
  GetCardsAd(): void;
  GetCarDetail(): void;
  GetBrandsCars(): void
}

interface iBrand{
  id: string
  name: string
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const contextHomeProvider = createContext({} as iHomeContext);

const HomePageContext = ({ children }: iChildren) => {

  const [carAd, setCarAd] = useState<iCar[]>([]);
  const [filterCar, setFilterCar] = useState<iCar[]>([])

  const [brands, setBrands] = useState<iBrand[]>([])
  const [colors, setColors] = useState<string[]>([])
  const [years, setYears] = useState<string[]>([])
  const [models, setModels] = useState<string[]>([])
  const [fuels, setFuels] = useState<string[]>([])

  const [brandSelected, setBrandSelected] = useState<string>("")
  const [colorSelected, setColorSelected] = useState<string>("")
  const [yearSelected, setYearSelected] = useState<string>("")
  const [modelSelected, setModelSelected] = useState<string>("")
  const [fuelSelected, setFuelSelected] = useState<string>("")
  
    const [isLoading, setIsLoading] = useState<boolean>(false)

  const GetCardsAd = async () => {
    try {
      setIsLoading(true)
      const response = await instance.get("/car");
      setCarAd(response.data);
    } catch (error) {
      console.log(error);
    }finally{
      setIsLoading(false)
    }
  };

  const GetBrandsCars = async () => {
    try {
      const response = await instance.get("/car/brands");
      setBrands(response.data);
    } catch (error) {
      console.log(error)
    }
  }

  const GetCarDetail = async () => {

    carAd.forEach(car => {

      if(!colors.includes(car.color)){
        setColors([...colors, car.color])
      }

      if(!years.includes(car.year)){
        setYears([...years, car.year])
      }

      if(!models.includes(car.model)){
        setModels([...models, car.model])
      }

      if(!fuels.includes(car.fuel)){
        setFuels([...fuels, car.fuel])
      }

    })

  }

  return (
    <contextHomeProvider.Provider
      value={{
        carAd,
        setCarAd,
        filterCar,
        brands,
        colors,
        years,
        models,
        fuels,
        brandSelected,
        setBrandSelected,
        colorSelected,
        setColorSelected,
        yearSelected,
        setYearSelected,
        modelSelected,
        setModelSelected,
        fuelSelected,
        setFuelSelected,
        GetCardsAd,
        GetCarDetail,
        GetBrandsCars
        isLoading,
        setIsLoading
      }}
    >
      {children}
    </contextHomeProvider.Provider>
  );
};

export default HomePageContext;

