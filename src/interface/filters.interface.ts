import { Dispatch, SetStateAction } from "react";
import { iCar } from "./car.interface";

interface iButtonFilterMobile {
  isFilter: boolean;
  isOpen: boolean;
  filteredAlready: boolean;
  setFilteredAlready: Dispatch<SetStateAction<boolean>>;
  isInputFilter?: boolean;
  onClose: () => void;
  clearFilter: () => void;
  filteredCars?: iCar[];
}

interface iFilters {
  filterOptionsMenu: () => void;
  setIsFilter: Dispatch<SetStateAction<boolean>>;
  setBrandSelected?: Dispatch<SetStateAction<string>>;
  brands?: string[];
  setModelSelected?: Dispatch<SetStateAction<string>>;
  models?: string[];
  setColorSelected?: Dispatch<SetStateAction<string>>;
  colors?: string[];
  setYearSelected?: Dispatch<SetStateAction<string>>;
  years?: string[];
  setFuelSelected?: Dispatch<SetStateAction<string>>;
  fuels?: string[];
}

export type { iButtonFilterMobile, iFilters };
