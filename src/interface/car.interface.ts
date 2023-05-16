import { iOwner } from "./comment.interface";

export interface iCar {
  user: any;
  id: string;
  brand: string;
  model: string;
  year: string;
  fuel: string;
  km: string;
  color: string;
  price: string;
  fipe: string;
  description: string;
  is_good_price: boolean;
  published: boolean;
  cover_image: string;
}

export interface iCreateCarAd extends Omit<iCar, "id"> {
  images_1?: string;
  images_2?: string;
  images_3?: string;
  images_4?: string;
  images_5?: string;
  images_6?: string;
}

export interface iImagesInCarResponse {
  id: string;
  image_url: string;
}

export interface iCarResponse extends iCar {
  user: iOwner;
  images: iImagesInCarResponse[];
}

export interface iStatusModalCar {
  isOpen: boolean;
  onClose(): void;
}

export interface iStatusDeleteModalCar {
  isOpen: boolean;
  onClose(): void;
  onEditClose(): void;
}

export interface iCarSelected extends iCar {
  images: iImagesInCarResponse[];
}

export interface iCarUpdate {
  id?: string;
  brand?: string;
  model?: string;
  year?: string;
  fuel?: string;
  km?: string;
  color?: string;
  price?: string;
  fipe?: string;
  description?: string;
  is_good_price?: boolean;
  published?: boolean;
  cover_image?: string;
}

export interface iUpdateCarAd extends Omit<iCarUpdate, "id"> {
  images_1?: string;
  images_2?: string;
  images_3?: string;
  images_4?: string;
  images_5?: string;
  images_6?: string;
}

export interface iImageCar {
  image_url: string | boolean;
}
