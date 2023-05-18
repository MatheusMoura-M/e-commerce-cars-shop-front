import { iUser } from "../interface";
import { instance } from "./api";

export const getUserSpecificReponse = async (id: string): Promise<iUser> => {
  const resp = await instance.get<iUser>(`/user/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("@token")}` },
  });
  return resp.data;
};
