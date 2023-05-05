import {
  iCommentRequest,
  iCommentResponse,
} from "../interface/comment.interface";
import { instance } from "./api";

export const createCommentResponse = async (
  data: iCommentRequest,
  id: string
): Promise<iCommentResponse> => {
  const resp = await instance.post<iCommentResponse>(`/comments/${id}`, data, {
    headers: { Authorization: `Bearer ${localStorage.getItem("@token")}` },
  });

  return resp.data;
};
