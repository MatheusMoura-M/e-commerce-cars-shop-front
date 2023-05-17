import { iOwner } from "./comment.interface";

interface iCar {
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

interface iCreateCarAd extends Omit<iCar, "id"> {
  images_1?: string;
  images_2?: string;
  images_3?: string;
  images_4?: string;
  images_5?: string;
  images_6?: string;
}

interface iImagesInCarResponse {
  id: string;
  image_url: string;
}

interface iCarResponse extends iCar {
  user: iOwner;
  images: iImagesInCarResponse[];
}

interface iStatusDeleteModalCar {
  isOpen: boolean;
  onClose(): void;
  onEditClose(): void;
}

interface iCarSelected extends iCar {
  images: iImagesInCarResponse[];
}

interface iCarUpdate {
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

interface iUpdateCarAd extends Omit<iCarUpdate, "id"> {
  images_1?: string;
  images_2?: string;
  images_3?: string;
  images_4?: string;
  images_5?: string;
  images_6?: string;
}

interface iImageCar {
  image_url: string | boolean;
}

export type {
  iCar,
  iCarResponse,
  iCarSelected,
  iCarUpdate,
  iCreateCarAd,
  iImageCar,
  iImagesInCarResponse,
  iStatusDeleteModalCar,
  iUpdateCarAd,
};
