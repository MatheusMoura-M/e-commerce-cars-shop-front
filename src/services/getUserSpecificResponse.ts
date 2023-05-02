import { iUser } from "../interface/user.interface";
import { instance } from "./api";

export const getUserSpecificReponse = async (id: string): Promise<iUser> => {
  const resp = await instance.get<iUser>(`/user/${id}`);
  return resp.data;
};
