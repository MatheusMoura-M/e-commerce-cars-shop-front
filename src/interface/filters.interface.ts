import { Dispatch, SetStateAction } from "react";
import { iCar } from "./car.interface";

interface iButtonFilterMobile {
  isFilter: boolean;
  isOpen: boolean;
  isInputFilter?: boolean;
  onClose: () => void;
  clearFilter: () => void;
  filteredCars?: iCar[];
}

interface iFilters {
  filterOptionsMenu: () => void;
  setIsFilter: Dispatch<SetStateAction<boolean>>;
  brands?: string[];
  models?: string[];
  colors?: string[];
  years?: string[];
  fuels?: string[];
  setOptionFilterSelected?: Dispatch<SetStateAction<iOptionFilterSelected>>;
  optionFilterSelected?: iOptionFilterSelected;
}

interface iOptionFilterSelected {
  brand?: string;
  color?: string;
  year?: string;
  model?: string;
  fuel?: string;
}

export type { iButtonFilterMobile, iFilters, iOptionFilterSelected };
