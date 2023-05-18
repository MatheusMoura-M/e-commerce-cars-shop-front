import { iCardProps } from "./card.interface";
import {
  iAddressUpdateResponse,
  iCarsUser,
  iLoginProps,
  iRegister,
  iUserLogin,
  iSellerData,
  iUser,
  iUpdateUser,
  iRegisterReq,
  iUpdateAddress,
} from "./user.interface";
import {
  iCar,
  iCarResponse,
  iCarSelected,
  iCarUpdate,
  iCreateCarAd,
  iImageCar,
  iImagesInCarResponse,
  iStatusDeleteModalCar,
  iUpdateCarAd,
} from "./car.interface";
import {
  iCommentRequest,
  iCommentResponse,
  iCommentsListResponse,
  iOwner,
} from "./comment.interface";
import {
  IresetProps,
  IresetPropsRequest,
  IresetPropsResponse,
} from "./reset.interface";
import { iButtonFilterMobile, iFilters } from "./filters.interface";

interface iStatusModal {
  isOpen: boolean;
  onClose: () => void;
}

interface iStatusModalOptional {
  isOpen?: boolean;
  onClose?: () => void;
  onDeleteOpen?: () => void;
}

export type {
  iCardProps,
  iCommentRequest,
  iCommentResponse,
  iCommentsListResponse,
  iOwner,
  iCar,
  iCarResponse,
  iCarSelected,
  iCarUpdate,
  iCreateCarAd,
  iImageCar,
  iImagesInCarResponse,
  iStatusDeleteModalCar,
  iUpdateCarAd,
  iAddressUpdateResponse,
  iCarsUser,
  iLoginProps,
  iRegister,
  iUserLogin,
  iSellerData,
  iUser,
  iUpdateUser,
  iRegisterReq,
  iUpdateAddress,
  iStatusModal,
  iStatusModalOptional,
  IresetProps,
  IresetPropsRequest,
  IresetPropsResponse,
  iButtonFilterMobile,
  iFilters,
};
