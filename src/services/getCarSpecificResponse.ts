import { iCarResponse } from "../interface/car.interface";
import { instance } from "./api";

export const getCarSpecificResponse = async (
  id: string
): Promise<iCarResponse> => {
  const resp = await instance.get<iCarResponse>(`/car/${id}`);
  return resp.data;
};
