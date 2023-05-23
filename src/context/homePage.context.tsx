import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { instance } from "../services/api";
import {
  iCar,
  iCarResponse,
  iFilterFunction,
  iOptionFilterSelected,
} from "../interface";
import { iProviderProps } from "../@types";

interface iHomeContext {
  carAd: iCarResponse[] | iCar[];
  setCarAd: Dispatch<SetStateAction<iCarResponse[] | iCar[]>>;
  filteredCars: iCar[];
  brands: string[];
  colors: string[];
  years: string[];
  models: string[];
  fuels: string[];
  GetCardsAd: () => void;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setColors: Dispatch<SetStateAction<string[]>>;
  setYears: Dispatch<SetStateAction<string[]>>;
  setModels: Dispatch<SetStateAction<string[]>>;
  setFuels: Dispatch<SetStateAction<string[]>>;
  filterCarList: () => void;
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
  filterInputs: () => void;
  setFilteredCars: Dispatch<SetStateAction<iCar[]>>;
  selectedCar: iCarResponse;
  setSelectedCar(car: iCarResponse): void;
  clearFilter: () => void;
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
  formatPrice: (arrayCars: iCar[]) => void;
}

export const contextHomeProvider = createContext({} as iHomeContext);

export const HomePageContext = ({ children }: iProviderProps) => {
  const [carAd, setCarAd] = useState<iCarResponse[] | iCar[]>([]);
  const [selectedCar, setSelectedCar] = useState<iCarResponse>(
    {} as iCarResponse
  );
  const [filteredCars, setFilteredCars] = useState<iCar[]>([]);
  const [inputCarsFiltered, setInputCarsFiltered] = useState<iCar[]>([]);
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const [isInputFilter, setIsInputFilter] = useState<boolean>(false);
  const [isOnlyInputsFilter, setOnlyInputFilter] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [optionFilterSelected, setOptionFilterSelected] =
    useState<iOptionFilterSelected>({} as iOptionFilterSelected);

  const [brands, setBrands] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [years, setYears] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [fuels, setFuels] = useState<string[]>([]);

  const [minKm, setMinKm] = useState<string>("");
  const [maxKm, setMaxKm] = useState<string>("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  const [currentPage, setCurrentPage] = useState(0);
  const [currentPageFilter, setCurrentPageFilter] = useState(0);

  const formatPrice = (arrayCars: iCar[], data?: string) => {
    const arrayAtt = arrayCars.map((car) => {
      if (data === "OnlyReplace") {
        car.price = parseFloat(car.price.replaceAll(".", "")).toString();
      } else {
        car.price = parseFloat(car.price.replaceAll(".", "")).toString();
        car.price = Intl.NumberFormat("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(+car.price);
      }
      return car;
    });

    return arrayAtt;
  };

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

  const filterInputs = () => {
    const filterArr = isFilter ? filteredCars : carAd;
    formatPrice(filterArr, "OnlyReplace");

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

  const filterOptionsMenu = () => {
    const colorArr: string[] = [];
    const modelArr: string[] = [];
    let yearsArr: string[] = [];
    const fuelArr: string[] = [];
    const brandArr: string[] = [];

    if (isInputFilter) {
      inputCarsFiltered.forEach((car) => {
        !brandArr.includes(car.brand) && brandArr.push(car.brand);
        !colorArr.includes(car.color) && colorArr.push(car.color);
        !modelArr.includes(car.model) && modelArr.push(car.model);
        !yearsArr.includes(car.year) && yearsArr.push(car.year);
        !fuelArr.includes(car.fuel) && fuelArr.push(car.fuel);
      });
    } else if (filteredCars.length != 0 && isFilter) {
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

  const clearFilter = () => {
    setIsFilter(false);
    setIsInputFilter(false);
    setFilteredCars([]);
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
        filterInputs,
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
        formatPrice,
      }}
    >
      {children}
    </contextHomeProvider.Provider>
  );
};

export const useAuthHome = () => useContext(contextHomeProvider);
