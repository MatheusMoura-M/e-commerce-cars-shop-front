import { createContext, useEffect, useState } from "react";
import { iCar, iCarResponse, iCreateCarAd } from "../interface/car.interface";
import { instance } from "../services/api";

interface iChildren {
  children: React.ReactNode;
}

interface iHomeContext {
  carAd: iCarResponse[];
  setCarAd: React.Dispatch<React.SetStateAction<iCarResponse[]>>;
  filteredCars: iCar[];
  brands: string[];
  colors: string[];
  years: string[];
  models: string[];
  fuels: string[];
  brandSelected: string;
  setBrandSelected: React.Dispatch<React.SetStateAction<string>>;
  colorSelected: string;
  setColorSelected: React.Dispatch<React.SetStateAction<string>>;
  yearSelected: string;
  setYearSelected: React.Dispatch<React.SetStateAction<string>>;
  modelSelected: string;
  setModelSelected: React.Dispatch<React.SetStateAction<string>>;
  fuelSelected: string;
  setFuelSelected: React.Dispatch<React.SetStateAction<string>>;
  GetCardsAd(): void;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setColors: React.Dispatch<React.SetStateAction<string[]>>;
  setYears: React.Dispatch<React.SetStateAction<string[]>>;
  setModels: React.Dispatch<React.SetStateAction<string[]>>;
  setFuels: React.Dispatch<React.SetStateAction<string[]>>;
  filterCarList(): void;
  isFilter: boolean;
  setIsFilter: React.Dispatch<React.SetStateAction<boolean>>;
  setBrands: React.Dispatch<React.SetStateAction<string[]>>;
  filterOptionsMenu(): void;
  minKm: string;
  setMinKm: React.Dispatch<React.SetStateAction<string>>;
  maxKm: string;
  setMaxKm: React.Dispatch<React.SetStateAction<string>>;
  minPrice: string;
  setMinPrice: React.Dispatch<React.SetStateAction<string>>;
  maxPrice: string;
  setMaxPrice: React.Dispatch<React.SetStateAction<string>>;
  FilterInputs(): void;
  setFilteredCar: React.Dispatch<React.SetStateAction<iCar[]>>;
  selectedCar: iCarResponse;
  setSelectedCar(car: iCarResponse): void;
  clearFilter(): void;
  inputCarsFiltered: iCar[];
  setInputCarsFiltered: React.Dispatch<React.SetStateAction<iCar[]>>;
  isInputFilter: boolean;
  setIsInputFilter: React.Dispatch<React.SetStateAction<boolean>>;
  isOnlyInputsFilter: boolean;
  setOnlyInputFilter: React.Dispatch<React.SetStateAction<boolean>>;
  inputStatus(value: string, inputField: string): void;
  filteredAlready: boolean;
  setFilteredAlready: React.Dispatch<React.SetStateAction<boolean>>;
}

export const contextHomeProvider = createContext({} as iHomeContext);

const HomePageContext = ({ children }: iChildren) => {
  const [carAd, setCarAd] = useState<iCarResponse[]>([]);
  const [selectedCar, setSelectedCar] = useState<iCarResponse>(
    {} as iCarResponse
  );
  const [filteredCars, setFilteredCar] = useState<iCar[]>([]);
  const [inputCarsFiltered, setInputCarsFiltered] = useState<iCar[]>([]);

  const [isFilter, setIsFilter] = useState<boolean>(false);
  const [isInputFilter, setIsInputFilter] = useState<boolean>(false);
  const [isOnlyInputsFilter, setOnlyInputFilter] = useState<boolean>(false);

  const [brands, setBrands] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [years, setYears] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [fuels, setFuels] = useState<string[]>([]);

  const [brandSelected, setBrandSelected] = useState<string>("");
  const [colorSelected, setColorSelected] = useState<string>("");
  const [yearSelected, setYearSelected] = useState<string>("");
  const [modelSelected, setModelSelected] = useState<string>("");
  const [fuelSelected, setFuelSelected] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [minKm, setMinKm] = useState<string>("");
  const [maxKm, setMaxKm] = useState<string>("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  const [filteredAlready, setFilteredAlready] = useState<boolean>(false);

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

  const filterCarList = () => {
    if (brandSelected) {
      const filtered = carAd.filter((car) => car.brand == brandSelected);

      setFilteredCar(filtered);
    } else if (modelSelected) {
      const filtered = carAd.filter((car) => car.model == modelSelected);

      setFilteredCar(filtered);
    } else if (colorSelected) {
      const filtered = carAd.filter((car) => car.color == colorSelected);
      setFilteredCar(filtered);
    } else if (yearSelected) {
      const filtered = carAd.filter((car) => car.year == yearSelected);

      setFilteredCar(filtered);
    } else if (fuelSelected) {
      const filtered = carAd.filter((car) => car.fuel == fuelSelected);

      setFilteredCar(filtered);
    }

    //------------------------------------------ TWO FILTERS SCOPE ---------------------------------------------------//

    if (brandSelected && modelSelected) {
      const filtered = carAd.filter(
        (car) => car.brand == brandSelected && car.model == modelSelected
      );
      setFilteredCar(filtered);
    } else if (brandSelected && colorSelected) {
      const filtered = carAd.filter(
        (car) => car.brand == brandSelected && car.color == colorSelected
      );
      setFilteredCar(filtered);
    } else if (brandSelected && yearSelected) {
      const filtered = carAd.filter(
        (car) => car.brand == brandSelected && car.year == yearSelected
      );
      setFilteredCar(filtered);
    } else if (brandSelected && fuelSelected) {
      const filtered = carAd.filter(
        (car) => car.brand == brandSelected && car.fuel == fuelSelected
      );
      setFilteredCar(filtered);
    } else if (modelSelected && colorSelected) {
      const filtered = carAd.filter(
        (car) => car.model == modelSelected && car.color == colorSelected
      );
      setFilteredCar(filtered);
    } else if (modelSelected && yearSelected) {
      const filtered = carAd.filter(
        (car) => car.model == modelSelected && car.year == yearSelected
      );
      setFilteredCar(filtered);
    } else if (modelSelected && fuelSelected) {
      const filtered = carAd.filter(
        (car) => car.model == modelSelected && car.fuel == fuelSelected
      );
      setFilteredCar(filtered);
    } else if (colorSelected && yearSelected) {
      const filtered = carAd.filter(
        (car) => car.color == colorSelected && car.year == yearSelected
      );
      setFilteredCar(filtered);
    } else if (colorSelected && fuelSelected) {
      const filtered = carAd.filter(
        (car) => car.color == colorSelected && car.fuel == fuelSelected
      );
      setFilteredCar(filtered);
    }

    //------------------------------------------ THREE FILTERS SCOPE ---------------------------------------------------//
    else if (brandSelected && modelSelected && colorSelected) {
      const filtered = carAd.filter(
        (car) =>
          car.brand == brandSelected &&
          car.model == modelSelected &&
          car.color == colorSelected
      );
      setFilteredCar(filtered);
    } else if (modelSelected && colorSelected && fuelSelected) {
      const filtered = carAd.filter(
        (car) =>
          car.model == modelSelected &&
          car.color == colorSelected &&
          car.fuel == fuelSelected
      );
      setFilteredCar(filtered);
    } else if (modelSelected && yearSelected && fuelSelected) {
      const filtered = carAd.filter(
        (car) =>
          car.model == modelSelected &&
          car.year == yearSelected &&
          car.fuel == fuelSelected
      );
      setFilteredCar(filtered);
    } else if (colorSelected && fuelSelected && yearSelected) {
      const filtered = carAd.filter(
        (car) =>
          car.color == colorSelected &&
          car.fuel == fuelSelected &&
          car.year == yearSelected
      );
      setFilteredCar(filtered);
    } else if (fuelSelected && yearSelected && brandSelected) {
      const filtered = carAd.filter(
        (car) =>
          car.fuel == fuelSelected &&
          car.year == yearSelected &&
          car.brand == brandSelected
      );

      setFilteredCar(filtered);
    }

    //------------------------------------------ FOUR FILTERS SCOPE ---------------------------------------------------//
    else if (brandSelected && modelSelected && colorSelected && fuelSelected) {
      const filtered = carAd.filter(
        (car) =>
          car.brand == brandSelected &&
          car.model == modelSelected &&
          car.color == colorSelected &&
          car.fuel == fuelSelected
      );
      setFilteredCar(filtered);
    } else if (
      brandSelected &&
      modelSelected &&
      colorSelected &&
      yearSelected
    ) {
      const filtered = carAd.filter(
        (car) =>
          car.brand == brandSelected &&
          car.model == modelSelected &&
          car.color == colorSelected &&
          car.year == yearSelected
      );
      setFilteredCar(filtered);
    } else if (modelSelected && colorSelected && yearSelected && fuelSelected) {
      const filtered = carAd.filter(
        (car) =>
          car.model == modelSelected &&
          car.color == colorSelected &&
          car.year == yearSelected &&
          car.fuel == fuelSelected
      );
      setFilteredCar(filtered);
    }
  };

  //-------------------------------------------------------------------------------------------------------------------//

  const filterOptionsMenu = () => {
    const colorArr: string[] = [];
    const modelArr: string[] = [];
    let yaersArr: string[] = [];
    const fuelArr: string[] = [];
    const brandArr: string[] = [];

    if (filteredCars.length != 0 && isFilter) {
      filteredCars.forEach((car) => {
        if (!brandArr.includes(car.brand)) {
          brandArr.push(car.brand);
        }

        if (!colorArr.includes(car.color)) {
          colorArr.push(car.color);
        }

        if (!modelArr.includes(car.model)) {
          modelArr.push(car.model);
        }

        if (!yaersArr.includes(car.year)) {
          yaersArr.push(car.year);
        }

        if (!fuelArr.includes(car.fuel)) {
          fuelArr.push(car.fuel);
        }
      });
    } else {
      carAd.forEach((car) => {
        if (!brandArr.includes(car.brand)) {
          brandArr.push(car.brand);
        }

        if (!colorArr.includes(car.color)) {
          colorArr.push(car.color);
        }

        if (!modelArr.includes(car.model)) {
          modelArr.push(car.model);
        }

        if (!yaersArr.includes(car.year)) {
          yaersArr.push(car.year);
        }

        if (!fuelArr.includes(car.fuel)) {
          fuelArr.push(car.fuel);
        }
      });
    }

    const arrOrdered = yaersArr.sort((a, b) => +b - +a);
    yaersArr = arrOrdered;

    setBrands(brandArr);
    setColors(colorArr);
    setFuels(fuelArr);
    setModels(modelArr);
    setYears(yaersArr);
  };

  const inputStatus = (value: string, inputField: string) => {
    if (inputField == minKm) {
      if (value && !isInputFilter) {
        setIsInputFilter(true);
      } else if (!maxKm && !minPrice && !maxPrice && !value) {
        setIsInputFilter(false);
      }
    }

    if (inputField == maxKm) {
      if (value && !isInputFilter) {
        setIsInputFilter(true);
      } else if (!minKm && !minPrice && !maxPrice && !value) {
        setIsInputFilter(false);
      }
    }

    if (inputField == minPrice) {
      if (value && !isInputFilter) {
        setIsInputFilter(true);
      } else if (!minKm && !maxKm && !maxPrice && !value) {
        setIsInputFilter(false);
      }
    }

    if (inputField == maxPrice) {
      if (value && !isInputFilter) {
        setIsInputFilter(true);
      } else if (!minKm && !maxKm && !minPrice && !value) {
        setIsInputFilter(false);
      }
    }
  };

  const FilterInputs = () => {
    //------------------------------------------------ KM INPUTS FILTER ------------------------------------------------//

    if (minKm && !maxKm && !minPrice && !maxPrice && !isFilter) {
      const filter = carAd.filter((car) => +car.km >= +minKm);

      setInputCarsFiltered(filter);
    } else if (minKm && !maxKm && !minPrice && !maxPrice && isFilter) {
      const filter = filteredCars.filter((car) => +car.km >= +minKm);

      setInputCarsFiltered(filter);
    }

    if (maxKm && !minKm && !minPrice && !maxPrice && isFilter) {
      const filter = filteredCars.filter((car) => +car.km <= +maxKm);

      setInputCarsFiltered(filter);
    } else if (maxKm && !minKm && !minPrice && !maxPrice && !isFilter) {
      const filter = carAd.filter((car) => +car.km <= +maxKm);

      setInputCarsFiltered(filter);
    } else if (maxKm && minKm && !minPrice && !maxPrice && !isFilter) {
      const filter = carAd.filter(
        (car) => +car.km >= +minKm && +car.km <= +maxKm
      );

      setInputCarsFiltered(filter);
    } else if (maxKm && minKm && !minPrice && !maxPrice && isFilter) {
      const filter = filteredCars.filter(
        (car) => +car.km >= +minKm && +car.km <= +maxKm
      );

      setInputCarsFiltered(filter);
    }

    //----------------------------------------------- PRICE INPUTS FILTER ---------------------------------------------//

    if (minPrice && !maxPrice && !minKm && !maxKm && !isFilter) {
      const filter = carAd.filter((car) => +car.price >= +minPrice);

      setInputCarsFiltered(filter);
    } else if (minPrice && !maxPrice && !minKm && !maxKm && isFilter) {
      const filter = filteredCars.filter((car) => +car.price >= +minPrice);
      setInputCarsFiltered(filter);
    } else if (maxPrice && !minPrice && !minKm && !maxKm && !isFilter) {
      const filter = carAd.filter((car) => +car.price <= +maxPrice);

      setInputCarsFiltered(filter);
    } else if (maxPrice && !minPrice && !minKm && !maxKm && isFilter) {
      const filter = filteredCars.filter((car) => +car.price <= +maxPrice);

      setInputCarsFiltered(filter);
    } else if (maxPrice && minPrice && !minKm && !maxKm && !isFilter) {
      const filter = carAd.filter(
        (car) => +car.price >= +minPrice && +car.price <= +maxPrice
      );

      setInputCarsFiltered(filter);
    } else if (maxPrice && minPrice && !minKm && !maxKm && isFilter) {
      const filter = filteredCars.filter(
        (car) => +car.price >= +minPrice && +car.price <= +maxPrice
      );

      setInputCarsFiltered(filter);
    }

    //------------------------------------------- PRICE AND KM INPUTS FILTER -----------------------------------------//

    if (minPrice && minKm && !maxPrice && !maxKm && !isFilter) {
      const filter = carAd.filter(
        (car) => +car.price >= +minPrice && +car.km >= +minKm
      );

      setInputCarsFiltered(filter);
    } else if (minPrice && minKm && !maxPrice && !maxKm && isFilter) {
      const filter = filteredCars.filter(
        (car) => +car.price >= +minPrice && +car.km >= +minKm
      );

      setInputCarsFiltered(filter);
    } else if (maxPrice && maxKm && !minKm && !minPrice && !isFilter) {
      const filter = carAd.filter(
        (car) => +car.price <= +maxPrice && +car.km <= +maxKm
      );

      setInputCarsFiltered(filter);
    } else if (maxPrice && maxKm && !minPrice && !minKm && isFilter) {
      const filter = filteredCars.filter(
        (car) => +car.price <= +maxPrice && +car.km <= +maxKm
      );

      setInputCarsFiltered(filter);
    } else if (minPrice && maxKm && !maxPrice && !minKm && !isFilter) {
      const filter = carAd.filter(
        (car) => +car.km <= +maxKm && +car.price >= +minPrice
      );

      setInputCarsFiltered(filter);
    } else if (minPrice && maxKm && !maxPrice && !minKm && isFilter) {
      const filter = filteredCars.filter(
        (car) => +car.km <= +maxKm && +car.price >= +minPrice
      );

      setInputCarsFiltered(filter);
    } else if (maxPrice && minKm && !minPrice && !maxKm && !isFilter) {
      const filter = carAd.filter(
        (car) => +car.km >= +minKm && +car.price <= +maxPrice
      );

      setInputCarsFiltered(filter);
    } else if (maxPrice && minKm && !minPrice && !maxKm && isFilter) {
      const filter = filteredCars.filter(
        (car) => +car.km >= +minKm && +car.price <= +maxPrice
      );

      setInputCarsFiltered(filter);
    } else if (maxPrice && minKm && maxKm && !minPrice && !isFilter) {
      const filter = carAd.filter(
        (car) =>
          +car.km <= +maxKm && +car.km >= +minKm && +car.price <= +maxPrice
      );

      setInputCarsFiltered(filter);
    } else if (maxPrice && minKm && maxKm && !minPrice && isFilter) {
      const filter = filteredCars.filter(
        (car) =>
          +car.km <= +maxKm && +car.km >= +minKm && +car.price <= +maxPrice
      );

      setInputCarsFiltered(filter);
    } else if (minPrice && minKm && maxKm && !maxPrice && !isFilter) {
      const filter = carAd.filter(
        (car) =>
          +car.price >= +minPrice && +car.km <= +maxKm && +car.km >= +minKm
      );

      setInputCarsFiltered(filter);
    } else if (minPrice && minKm && maxKm && !maxPrice && isFilter) {
      const filter = filteredCars.filter(
        (car) =>
          +car.price >= +minPrice && +car.km <= +maxKm && +car.km >= +minKm
      );

      setInputCarsFiltered(filter);
    } else if (minPrice && maxPrice && minKm && maxKm && !isFilter) {
      const filter = carAd.filter(
        (car) =>
          +car.price >= +minPrice &&
          +car.price <= +maxPrice &&
          +car.km <= +maxKm &&
          +car.km >= +minKm
      );

      setInputCarsFiltered(filter);
    } else if (minPrice && maxPrice && minKm && maxKm && isFilter) {
      const filter = filteredCars.filter(
        (car) =>
          +car.price >= +minPrice &&
          +car.price <= +maxPrice &&
          +car.km <= +maxKm &&
          +car.km >= +minKm
      );

      setInputCarsFiltered(filter);
    }
  };

  const clearFilter = () => {
    setIsFilter(false);
    setIsInputFilter(false);
    setFilteredCar([]);
    setBrandSelected("");
    setModelSelected("");
    setYearSelected("");
    setColorSelected("");
    setFuelSelected("");
    setMaxKm("");
    setMinKm("");
    setMinPrice("");
    setMaxPrice("");
    GetCardsAd();
  };

  return (
    <contextHomeProvider.Provider
      value={{
        carAd,
        setCarAd,
        filteredCars,
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
        setIsLoading,
        isLoading,
        setColors,
        setYears,
        setModels,
        setFuels,
        filterCarList,
        isFilter,
        setIsFilter,
        setBrands,
        filterOptionsMenu,
        minKm,
        setMinKm,
        maxKm,
        setMaxKm,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        FilterInputs,
        setFilteredCar,
        selectedCar,
        setSelectedCar,
        clearFilter,
        inputCarsFiltered,
        setInputCarsFiltered,
        isInputFilter,
        setIsInputFilter,
        isOnlyInputsFilter,
        setOnlyInputFilter,
        inputStatus,
        filteredAlready,
        setFilteredAlready,
      }}
    >
      {children}
    </contextHomeProvider.Provider>
  );
};

export default HomePageContext;
