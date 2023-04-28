import { createContext, useState } from "react";
import { iCar, iCreateCarAd } from "../interface/car.interface";
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
  GetBrandsCars(): void
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  setColors: React.Dispatch<React.SetStateAction<string[]>>
  setYears: React.Dispatch<React.SetStateAction<string[]>>
  setModels: React.Dispatch<React.SetStateAction<string[]>>
  setFuels: React.Dispatch<React.SetStateAction<string[]>>
  filterCarList(): void
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

  const filterCarList = () => {

    if(brandSelected){

      const filtered = carAd.filter(car => car.brand === brandSelected)
      setFilterCar(filtered)

    }else if(modelSelected){

      const filtered = carAd.filter(car => car.brand === brandSelected)
      setFilterCar(filtered)

    }else if(colorSelected){

      const filtered = carAd.filter(car => car.color === colorSelected)
      setFilterCar(filtered)

    }else if(yearSelected){

      const filtered = carAd.filter(car => car.year === yearSelected)
      setFilterCar(filtered)

    }else if(fuelSelected){

      const filtered = carAd.filter(car => car.fuel === fuelSelected)
      setFilterCar(filtered)

    }

//------------------------------------------ TWO FILTERS SCOPE ---------------------------------------------------//

    else if(brandSelected && modelSelected){

      const filtered = carAd.filter(car => car.brand === brandSelected && car.model === modelSelected)
      setFilterCar(filtered)

    }else if(brandSelected && colorSelected){

      const filtered = carAd.filter(car => car.brand === brandSelected && car.color === colorSelected)
      setFilterCar(filtered)

    }else if(brandSelected && yearSelected){

      const filtered = carAd.filter(car => car.brand === brandSelected && car.year === yearSelected)
      setFilterCar(filtered)

    }else if(brandSelected && fuelSelected){

      const filtered = carAd.filter(car => car.brand === brandSelected && car.fuel === fuelSelected)
      setFilterCar(filtered)

    }

    else if(modelSelected && colorSelected){

      const filtered = carAd.filter(car => car.model === modelSelected && car.color === colorSelected)
      setFilterCar(filtered)

    }else if(modelSelected && yearSelected){

      const filtered = carAd.filter(car => car.model === modelSelected && car.year === yearSelected)
      setFilterCar(filtered)

    }else if(modelSelected && fuelSelected){

      const filtered = carAd.filter(car => car.model === modelSelected && car.fuel === fuelSelected)
      setFilterCar(filtered)

    }

    else if(colorSelected && yearSelected){

      const filtered = carAd.filter(car => car.color === colorSelected && car.year === yearSelected)
      setFilterCar(filtered)

    }else if(colorSelected && fuelSelected){

      const filtered = carAd.filter(car => car.color === colorSelected && car.fuel === fuelSelected)
      setFilterCar(filtered)

    }

//------------------------------------------ THREE FILTERS SCOPE ---------------------------------------------------//

    else if(brandSelected && modelSelected && colorSelected){

      const filtered = carAd.filter(
        car => car.brand === brandSelected && car.model === modelSelected && car.color === colorSelected
      )
      setFilterCar(filtered)

    }else if(modelSelected && colorSelected && fuelSelected){

      const filtered = carAd.filter(
        car => car.model === modelSelected && car.color === colorSelected && car.fuel === fuelSelected
      )
      setFilterCar(filtered)

    }else if(modelSelected && yearSelected && fuelSelected){

      const filtered = carAd.filter(
        car => car.model === modelSelected && car.year === yearSelected && car.fuel === fuelSelected
      )
      setFilterCar(filtered)

    }else if(colorSelected && fuelSelected && yearSelected){

      const filtered = carAd.filter(
        car => car.color === colorSelected && car.fuel === fuelSelected && car.year === yearSelected
      )
      setFilterCar(filtered)

    }else if(fuelSelected && yearSelected && brandSelected){

      const filtered = carAd.filter(
        car => car.fuel === fuelSelected && car.year === yearSelected && car.brand === brandSelected
      )

      setFilterCar(filtered)

    }

//------------------------------------------ FOUR FILTERS SCOPE ---------------------------------------------------//

    else if(brandSelected && modelSelected && colorSelected && fuelSelected){

      const filtered = carAd.filter(
        car => car.brand === brandSelected && car.model === modelSelected && car.color === colorSelected && car.fuel === fuelSelected
      )
      setFilterCar(filtered)

    }else if(brandSelected && modelSelected && colorSelected && yearSelected){

      const filtered = carAd.filter(
        car => car.brand === brandSelected && car.model === modelSelected && car.color === colorSelected && car.year === yearSelected
      )
      setFilterCar(filtered)

    }else if(modelSelected && colorSelected && yearSelected && fuelSelected){

      const filtered = carAd.filter(
        car => car.model === modelSelected && car.color === colorSelected && car.year === yearSelected && car.fuel === fuelSelected
      )
      setFilterCar(filtered)

    }

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
        GetBrandsCars,
        setIsLoading,
        isLoading,
        setColors,
        setYears,
        setModels,
        setFuels,
        filterCarList
      }}
    >
      {children}
    </contextHomeProvider.Provider>
  );
};

export default HomePageContext;

