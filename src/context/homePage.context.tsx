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
      const qntdFilters = Object.keys(optionFilterSelected).length;
      const filtered = carAd.filter((car) => {
        if (qntdFilters == 1) {
          return optionFilterSelected.brand
            ? optionFilterSelected.brand == car.brand
            : optionFilterSelected.model
            ? optionFilterSelected.model == car.model
            : optionFilterSelected.color
            ? optionFilterSelected.color == car.color
            : optionFilterSelected.year
            ? optionFilterSelected.year == car.year
            : optionFilterSelected.fuel == car.fuel;
        } else if (qntdFilters == 2) {
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
            : optionFilterSelected.color && optionFilterSelected.fuel
            ? optionFilterSelected.color == car.color &&
              optionFilterSelected.fuel == car.fuel
            : optionFilterSelected.fuel == car.fuel &&
              optionFilterSelected.year == car.year;
        } else if (qntdFilters == 3) {
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
            : optionFilterSelected.year &&
              optionFilterSelected.fuel &&
              optionFilterSelected.color
            ? optionFilterSelected.year == car.year &&
              optionFilterSelected.fuel == car.fuel &&
              optionFilterSelected.color == car.color
            : optionFilterSelected.brand &&
              optionFilterSelected.model &&
              optionFilterSelected.fuel
            ? optionFilterSelected.brand == car.brand &&
              optionFilterSelected.model == car.model &&
              optionFilterSelected.fuel == car.fuel
            : optionFilterSelected.brand &&
              optionFilterSelected.color &&
              optionFilterSelected.year
            ? optionFilterSelected.brand == car.brand &&
              optionFilterSelected.color == car.color &&
              optionFilterSelected.year == car.year
            : optionFilterSelected.model &&
              optionFilterSelected.color &&
              optionFilterSelected.year
            ? optionFilterSelected.model == car.model &&
              optionFilterSelected.color == car.color &&
              optionFilterSelected.year == car.year
            : optionFilterSelected.brand == car.brand &&
              optionFilterSelected.color == car.color &&
              optionFilterSelected.fuel == car.fuel;
        } else if (qntdFilters == 4) {
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
            : optionFilterSelected.fuel &&
              optionFilterSelected.model &&
              optionFilterSelected.color &&
              optionFilterSelected.year
            ? optionFilterSelected.year == car.year &&
              optionFilterSelected.model == car.model &&
              optionFilterSelected.color == car.color &&
              optionFilterSelected.fuel == car.fuel
            : optionFilterSelected.year &&
              optionFilterSelected.color &&
              optionFilterSelected.brand &&
              optionFilterSelected.fuel
            ? optionFilterSelected.year == car.year &&
              optionFilterSelected.color == car.color &&
              optionFilterSelected.brand == car.brand &&
              optionFilterSelected.fuel == car.fuel
            : optionFilterSelected.year == car.year &&
              optionFilterSelected.model == car.model &&
              optionFilterSelected.brand == car.brand &&
              optionFilterSelected.fuel == car.fuel;
        } else if (qntdFilters == 5) {
          return (
            optionFilterSelected.brand &&
            optionFilterSelected.model &&
            optionFilterSelected.color &&
            optionFilterSelected.fuel &&
            optionFilterSelected.year &&
            optionFilterSelected.brand == car.brand &&
            optionFilterSelected.model == car.model &&
            optionFilterSelected.color == car.color &&
            optionFilterSelected.fuel == car.fuel &&
            optionFilterSelected.year == car.year
          );
        }
      });
      setFilteredCars(filtered);
    }
  };

  const filterOptionsMenu = () => {
    const colorArr: string[] = [];
    const modelArr: string[] = [];
    let yearsArr: string[] = [];
    const fuelArr: string[] = [];
    const brandArr: string[] = [];

    if (filteredCars.length != 0 && isFilter) {
      filteredCars.forEach((car) => {
        !brandArr.includes(car.brand) && brandArr.push(car.brand);
        !colorArr.includes(car.color) && colorArr.push(car.color);
        !modelArr.includes(car.model) && modelArr.push(car.model);
        !yearsArr.includes(car.year) && yearsArr.push(car.year);
        !fuelArr.includes(car.fuel) && fuelArr.push(car.fuel);
      });
    } else {
      carAd.forEach((car) => {
        !brandArr.includes(car.brand) && brandArr.push(car.brand);
        !colorArr.includes(car.color) && colorArr.push(car.color);
        !modelArr.includes(car.model) && modelArr.push(car.model);
        !yearsArr.includes(car.year) && yearsArr.push(car.year);
        !fuelArr.includes(car.fuel) && fuelArr.push(car.fuel);
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
      value && !isInputFilter && setIsInputFilter(true);
      !maxKm && !minPrice && !maxPrice && !value && setIsInputFilter(false);
    }

    if (inputField == maxKm) {
      value && !isInputFilter && setIsInputFilter(true);
      !minKm && !minPrice && !maxPrice && !value && setIsInputFilter(false);
    }

    if (inputField == minPrice) {
      value && !isInputFilter && setIsInputFilter(true);
      !minKm && !maxKm && !maxPrice && !value && setIsInputFilter(false);
    }

    if (inputField == maxPrice) {
      value && !isInputFilter && setIsInputFilter(true);
      !minKm && !maxKm && !minPrice && !value && setIsInputFilter(false);
    }
  };

  const FilterInputs = () => {
    const filterArr = isFilter ? filteredCars : carAd;
    //------------------------------------------------ KM INPUTS FILTER ------------------------------------------------//
    if (!minPrice && !maxPrice && minKm && !maxKm) {
      const filter = filterArr.filter((car) => +car.km >= +minKm);

      setInputCarsFiltered(filter);
    } else if (!minPrice && !maxPrice && !minKm && maxKm) {
      const filter = filterArr.filter((car) => +car.km <= +maxKm);

      setInputCarsFiltered(filter);
    } else if (!minPrice && !maxPrice && minKm && maxKm) {
      const filter = filterArr.filter(
        (car) => +car.km >= +minKm && +car.km <= +maxKm
      );

      setInputCarsFiltered(filter);
    }
    //----------------------------------------------- PRICE INPUTS FILTER ---------------------------------------------//
    if (minPrice && !maxPrice && !minKm && !maxKm) {
      const filter = filterArr.filter((car) => +car.price >= +minPrice);

      setInputCarsFiltered(filter);
    } else if (!minPrice && maxPrice && !minKm && !maxKm) {
      const filter = filterArr.filter((car) => +car.price <= +maxPrice);

      setInputCarsFiltered(filter);
    } else if (minPrice && maxPrice && !minKm && !maxKm) {
      const filter = filterArr.filter(
        (car) => +car.price >= +minPrice && +car.price <= +maxPrice
      );

      setInputCarsFiltered(filter);
    }
    //------------------------------------------- PRICE AND KM INPUTS FILTER -----------------------------------------//
    if (minPrice && !maxPrice && minKm && !maxKm) {
      const filter = filterArr.filter(
        (car) => +car.price >= +minPrice && +car.km >= +minKm
      );

      setInputCarsFiltered(filter);
    } else if (!minPrice && maxPrice && !minKm && maxKm) {
      const filter = filterArr.filter(
        (car) => +car.price <= +maxPrice && +car.km <= +maxKm
      );

      setInputCarsFiltered(filter);
    } else if (minPrice && !maxPrice && !minKm && maxKm) {
      const filter = filterArr.filter(
        (car) => +car.km <= +maxKm && +car.price >= +minPrice
      );

      setInputCarsFiltered(filter);
    } else if (!minPrice && maxPrice && minKm && !maxKm) {
      const filter = filterArr.filter(
        (car) => +car.km >= +minKm && +car.price <= +maxPrice
      );

      setInputCarsFiltered(filter);
    } else if (!minPrice && maxPrice && minKm && maxKm) {
      const filter = filterArr.filter(
        (car) =>
          +car.km <= +maxKm && +car.km >= +minKm && +car.price <= +maxPrice
      );

      setInputCarsFiltered(filter);
    } else if (minPrice && !maxPrice && minKm && maxKm) {
      const filter = filterArr.filter(
        (car) =>
          +car.price >= +minPrice && +car.km <= +maxKm && +car.km >= +minKm
      );

      setInputCarsFiltered(filter);
    } else if (minPrice && maxPrice && minKm && maxKm) {
      const filter = filterArr.filter(
        (car) =>
          +car.price >= +minPrice &&
          +car.price <= +maxPrice &&
          +car.km <= +maxKm &&
          +car.km >= +minKm
      );

      setInputCarsFiltered(filter);
    } else if (minPrice && maxPrice && !minKm && maxKm) {
      const filter = filterArr.filter(
        (car) =>
          +car.price >= +minPrice &&
          +car.price <= +maxPrice &&
          +car.km <= +maxKm
      );
      setInputCarsFiltered(filter);
    } else if (minPrice && maxPrice && minKm && !maxKm) {
      const filter = filterArr.filter(
        (car) =>
          +car.price >= +minPrice &&
          +car.price <= +maxPrice &&
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
