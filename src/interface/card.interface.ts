import { iCar } from "./car.interface";

interface iCardProps {
  model: string;
  brandCar: string;
  description: string;
  price: string;
  image: string;
  year: string;
  km: string;
  id: string;
  buttonStatus?: boolean;
  isPublished?: boolean;
  isGoodPrice?: boolean;
  sellerName?: string;
  imageUrl: string;
  buttonsSection?: boolean;
  ownerAdCard?: string;
  cardObj?: iCar;
}

export type { iCardProps };
