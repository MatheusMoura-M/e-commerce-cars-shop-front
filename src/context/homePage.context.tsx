import { Dispatch, SetStateAction, createContext, useState } from "react";
import { instance } from "../services/api";
import { iCar, iCarResponse, iOptionFilterSelected } from "../interface";
import { iProviderProps } from "../@types";

interface iHomeContext {
  carAd: iCarResponse[];
  setCarAd: Dispatch<SetStateAction<iCarResponse[]>>;
  filteredCars: iCar[];
  brands: string[];
  colors: string[];
  years: string[];
  models: string[];
  fuels: string[];
  brandSelected: string;
  setBrandSelected: Dispatch<SetStateAction<string>>;
  colorSelected: string;
  setColorSelected: Dispatch<SetStateAction<string>>;
  yearSelected: string;
  setYearSelected: Dispatch<SetStateAction<string>>;
  modelSelected: string;
  setModelSelected: Dispatch<SetStateAction<string>>;
  fuelSelected: string;
  setFuelSelected: Dispatch<SetStateAction<string>>;
  GetCardsAd(): void;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setColors: Dispatch<SetStateAction<string[]>>;
  setYears: Dispatch<SetStateAction<string[]>>;
  setModels: Dispatch<SetStateAction<string[]>>;
  setFuels: Dispatch<SetStateAction<string[]>>;
  filterCarList(): void;
  isFilter: boolean;
  setIsFilter: Dispatch<SetStateAction<boolean>>;
  setBrands: Dispatch<SetStateAction<string[]>>;
  filterOptionsMenu(): void;
  minKm: string;
  setMinKm: Dispatch<SetStateAction<string>>;
  maxKm: string;
  setMaxKm: Dispatch<SetStateAction<string>>;
  minPrice: string;
  setMinPrice: Dispatch<SetStateAction<string>>;
  maxPrice: string;
  setMaxPrice: Dispatch<SetStateAction<string>>;
  FilterInputs(): void;
  setFilteredCars: Dispatch<SetStateAction<iCar[]>>;
  selectedCar: iCarResponse;
  setSelectedCar(car: iCarResponse): void;
  clearFilter(): void;
  inputCarsFiltered: iCar[];
  setInputCarsFiltered: Dispatch<SetStateAction<iCar[]>>;
  isInputFilter: boolean;
  setIsInputFilter: Dispatch<SetStateAction<boolean>>;
  isOnlyInputsFilter: boolean;
  setOnlyInputFilter: Dispatch<SetStateAction<boolean>>;
  inputStatus(value: string, inputField: string): void;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPageFilter: number;
  setCurrentPageFilter: Dispatch<SetStateAction<number>>;
  optionFilterSelected: iOptionFilterSelected;
  setOptionFilterSelected: Dispatch<SetStateAction<iOptionFilterSelected>>;
}

export const contextHomeProvider = createContext({} as iHomeContext);

const HomePageContext = ({ children }: iProviderProps) => {
  const [carAd, setCarAd] = useState<iCarResponse[]>([]);
  const [selectedCar, setSelectedCar] = useState<iCarResponse>(
    {} as iCarResponse
  );
  const [filteredCars, setFilteredCars] = useState<iCar[]>([]);
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

  const [optionFilterSelected, setOptionFilterSelected] =
    useState<iOptionFilterSelected>({} as iOptionFilterSelected);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [minKm, setMinKm] = useState<string>("");
  const [maxKm, setMaxKm] = useState<string>("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  const [currentPage, setCurrentPage] = useState(0);
  const [currentPageFilter, setCurrentPageFilter] = useState(0);

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
    if (optionFilterSelected) {
      const lengthOptions = Object.keys(optionFilterSelected).length;

      console.log(optionFilterSelected);
      const filtered = carAd.filter((car) => {
        if (lengthOptions == 1) {
          return optionFilterSelected.brand
            ? optionFilterSelected.brand == car.brand
            : optionFilterSelected.model
            ? optionFilterSelected.model == car.model
            : optionFilterSelected.color
            ? optionFilterSelected.color == car.color
            : optionFilterSelected.year
            ? optionFilterSelected.year == car.year
            : optionFilterSelected.fuel == car.fuel;
        } else if (lengthOptions == 2) {
          return optionFilterSelected.brand && optionFilterSelected.model
            ? optionFilterSelected.brand == car.brand &&
                optionFilterSelected.model == car.model
            : optionFilterSelected.brand && optionFilterSelected.color
            ? optionFilterSelected.brand == car.brand &&
              optionFilterSelected.color == car.color
            : optionFilterSelected.brand && optionFilterSelected.year
            ? optionFilterSelected.brand == car.brand &&
              optionFilterSelected.year == car.year
            : optionFilterSelected.brand && optionFilterSelected.fuel
            ? optionFilterSelected.brand == car.brand &&
              optionFilterSelected.fuel == car.fuel
            : optionFilterSelected.model && optionFilterSelected.color
            ? optionFilterSelected.model == car.model &&
              optionFilterSelected.color == car.color
            : optionFilterSelected.model && optionFilterSelected.year
            ? optionFilterSelected.model == car.model &&
              optionFilterSelected.year == car.year
            : optionFilterSelected.model && optionFilterSelected.fuel
            ? optionFilterSelected.model == car.model &&
              optionFilterSelected.fuel == car.fuel
            : optionFilterSelected.color && optionFilterSelected.year
            ? optionFilterSelected.color == car.color &&
              optionFilterSelected.year == car.year
            : optionFilterSelected.color == car.color &&
              optionFilterSelected.fuel == car.fuel;
        } else if (lengthOptions == 3) {
          return optionFilterSelected.brand &&
            optionFilterSelected.model &&
            optionFilterSelected.color
            ? optionFilterSelected.brand == car.brand &&
                optionFilterSelected.model == car.model &&
                optionFilterSelected.color == car.color
            : optionFilterSelected.brand &&
              optionFilterSelected.year &&
              optionFilterSelected.fuel
            ? optionFilterSelected.brand == car.brand &&
              optionFilterSelected.year == car.year &&
              optionFilterSelected.fuel == car.fuel
            : optionFilterSelected.brand &&
              optionFilterSelected.year &&
              optionFilterSelected.model
            ? optionFilterSelected.brand == car.brand &&
              optionFilterSelected.year == car.year &&
              optionFilterSelected.model == car.model
            : optionFilterSelected.fuel &&
              optionFilterSelected.model &&
              optionFilterSelected.color
            ? optionFilterSelected.fuel == car.fuel &&
              optionFilterSelected.model == car.model &&
              optionFilterSelected.color == car.color
            : optionFilterSelected.year &&
              optionFilterSelected.model &&
              optionFilterSelected.fuel
            ? optionFilterSelected.year == car.year &&
              optionFilterSelected.model == car.model &&
              optionFilterSelected.fuel == car.fuel
            : optionFilterSelected.year == car.year &&
              optionFilterSelected.fuel == car.fuel &&
              optionFilterSelected.color == car.color;
        } else if (lengthOptions == 3) {
          return optionFilterSelected.brand &&
            optionFilterSelected.model &&
            optionFilterSelected.color &&
            optionFilterSelected.fuel
            ? optionFilterSelected.brand == car.brand &&
                optionFilterSelected.model == car.model &&
                optionFilterSelected.color == car.color &&
                optionFilterSelected.fuel == car.fuel
            : optionFilterSelected.brand &&
              optionFilterSelected.model &&
              optionFilterSelected.color &&
              optionFilterSelected.year
            ? optionFilterSelected.brand == car.brand &&
              optionFilterSelected.model == car.model &&
              optionFilterSelected.color == car.color &&
              optionFilterSelected.year == car.year
            : optionFilterSelected.year == car.year &&
              optionFilterSelected.model == car.model &&
              optionFilterSelected.color == car.color &&
              optionFilterSelected.fuel == car.fuel;
        }
      });
      setFilteredCars(filtered);
    }
  };
  // const filterCarList = () => {
  //   if (brandSelected) {
  //     const filtered = carAd.filter((car) => car.brand == brandSelected);

  //     setFilteredCars(filtered);
  //   } else if (modelSelected) {
  //     const filtered = carAd.filter((car) => car.model == modelSelected);

  //     setFilteredCars(filtered);
  //   } else if (colorSelected) {
  //     const filtered = carAd.filter((car) => car.color == colorSelected);
  //     setFilteredCars(filtered);
  //   } else if (yearSelected) {
  //     const filtered = carAd.filter((car) => car.year == yearSelected);

  //     setFilteredCars(filtered);
  //   } else if (fuelSelected) {
  //     const filtered = carAd.filter((car) => car.fuel == fuelSelected);

  //     setFilteredCars(filtered);
  //   }

  //   //------------------------------------------ TWO FILTERS SCOPE ---------------------------------------------------//

  //   if (brandSelected && modelSelected) {
  //     const filtered = carAd.filter(
  //       (car) => car.brand == brandSelected && car.model == modelSelected
  //     );
  //     setFilteredCars(filtered);
  //   } else if (brandSelected && colorSelected) {
  //     const filtered = carAd.filter(
  //       (car) => car.brand == brandSelected && car.color == colorSelected
  //     );
  //     setFilteredCars(filtered);
  //   } else if (brandSelected && yearSelected) {
  //     const filtered = carAd.filter(
  //       (car) => car.brand == brandSelected && car.year == yearSelected
  //     );
  //     setFilteredCars(filtered);
  //   } else if (brandSelected && fuelSelected) {
  //     const filtered = carAd.filter(
  //       (car) => car.brand == brandSelected && car.fuel == fuelSelected
  //     );
  //     setFilteredCars(filtered);
  //   } else if (modelSelected && colorSelected) {
  //     const filtered = carAd.filter(
  //       (car) => car.model == modelSelected && car.color == colorSelected
  //     );
  //     setFilteredCars(filtered);
  //   } else if (modelSelected && yearSelected) {
  //     const filtered = carAd.filter(
  //       (car) => car.model == modelSelected && car.year == yearSelected
  //     );
  //     setFilteredCars(filtered);
  //   } else if (modelSelected && fuelSelected) {
  //     const filtered = carAd.filter(
  //       (car) => car.model == modelSelected && car.fuel == fuelSelected
  //     );
  //     setFilteredCars(filtered);
  //   } else if (colorSelected && yearSelected) {
  //     const filtered = carAd.filter(
  //       (car) => car.color == colorSelected && car.year == yearSelected
  //     );
  //     setFilteredCars(filtered);
  //   } else if (colorSelected && fuelSelected) {
  //     const filtered = carAd.filter(
  //       (car) => car.color == colorSelected && car.fuel == fuelSelected
  //     );
  //     setFilteredCars(filtered);
  //   }

  //   //------------------------------------------ THREE FILTERS SCOPE ---------------------------------------------------//
  //   else if (brandSelected && modelSelected && colorSelected) {
  //     const filtered = carAd.filter(
  //       (car) =>
  //         car.brand == brandSelected &&
  //         car.model == modelSelected &&
  //         car.color == colorSelected
  //     );
  //     setFilteredCars(filtered);
  //   } else if (modelSelected && colorSelected && fuelSelected) {
  //     const filtered = carAd.filter(
  //       (car) =>
  //         car.model == modelSelected &&
  //         car.color == colorSelected &&
  //         car.fuel == fuelSelected
  //     );
  //     setFilteredCars(filtered);
  //   } else if (modelSelected && yearSelected && fuelSelected) {
  //     const filtered = carAd.filter(
  //       (car) =>
  //         car.model == modelSelected &&
  //         car.year == yearSelected &&
  //         car.fuel == fuelSelected
  //     );
  //     setFilteredCars(filtered);
  //   } else if (colorSelected && fuelSelected && yearSelected) {
  //     const filtered = carAd.filter(
  //       (car) =>
  //         car.color == colorSelected &&
  //         car.fuel == fuelSelected &&
  //         car.year == yearSelected
  //     );
  //     setFilteredCars(filtered);
  //   } else if (fuelSelected && yearSelected && brandSelected) {
  //     const filtered = carAd.filter(
  //       (car) =>
  //         car.fuel == fuelSelected &&
  //         car.year == yearSelected &&
  //         car.brand == brandSelected
  //     );

  //     setFilteredCars(filtered);
  //   }

  //   //------------------------------------------ FOUR FILTERS SCOPE ---------------------------------------------------//
  //   else if (brandSelected && modelSelected && colorSelected && fuelSelected) {
  //     const filtered = carAd.filter(
  //       (car) =>
  //         car.brand == brandSelected &&
  //         car.model == modelSelected &&
  //         car.color == colorSelected &&
  //         car.fuel == fuelSelected
  //     );
  //     setFilteredCars(filtered);
  //   } else if (
  //     brandSelected &&
  //     modelSelected &&
  //     colorSelected &&
  //     yearSelected
  //   ) {
  //     const filtered = carAd.filter(
  //       (car) =>
  //         car.brand == brandSelected &&
  //         car.model == modelSelected &&
  //         car.color == colorSelected &&
  //         car.year == yearSelected
  //     );
  //     setFilteredCars(filtered);
  //   } else if (modelSelected && colorSelected && yearSelected && fuelSelected) {
  //     const filtered = carAd.filter(
  //       (car) =>
  //         car.model == modelSelected &&
  //         car.color == colorSelected &&
  //         car.year == yearSelected &&
  //         car.fuel == fuelSelected
  //     );
  //     setFilteredCars(filtered);
  //   }
  // };

  //-------------------------------------------------------------------------------------------------------------------//

  const filterOptionsMenu = () => {
    const colorArr: string[] = [];
    const modelArr: string[] = [];
    let yearsArr: string[] = [];
    const fuelArr: string[] = [];
    const brandArr: string[] = [];

    // console.log("AA", filteredCars);
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

        if (!yearsArr.includes(car.year)) {
          yearsArr.push(car.year);
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

        if (!yearsArr.includes(car.year)) {
          yearsArr.push(car.year);
        }

        if (!fuelArr.includes(car.fuel)) {
          fuelArr.push(car.fuel);
        }
      });
    }

    const yearsArrOrdered = yearsArr.sort((a, b) => +b - +a);
    yearsArr = yearsArrOrdered;

    setBrands(brandArr);
    setColors(colorArr);
    setFuels(fuelArr);
    setModels(modelArr);
    setYears(yearsArr);
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
    setFilteredCars([]);
    setBrandSelected("");
    setModelSelected("");
    setYearSelected("");
    setColorSelected("");
    setFuelSelected("");
    setMaxKm("");
    setMinKm("");
    setMinPrice("");
    setMaxPrice("");
    setOptionFilterSelected({});
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
        setFilteredCars,
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
        currentPage,
        currentPageFilter,
        setCurrentPage,
        setCurrentPageFilter,
        optionFilterSelected,
        setOptionFilterSelected,
      }}
    >
      {children}
    </contextHomeProvider.Provider>
  );
};

export default HomePageContext;
