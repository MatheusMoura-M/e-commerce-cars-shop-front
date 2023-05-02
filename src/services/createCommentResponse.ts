import {
  iCommentRequest,
  iCommentResponse,
} from "../interface/comment.interface";
import { instance } from "./api";

export const createCommentResponse = async (
  data: iCommentRequest,
  id: string
): Promise<iCommentResponse> => {
  instance.defaults.headers.authorization =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdGhldXNAZ21haWwuY29tIiwiaWQiOiIzNjZiNDA2NS1mMjVkLTQ1M2QtYmZjZS1kNzNmMDQ2MjYzM2MiLCJpYXQiOjE2ODMwNTIyNDUsImV4cCI6MTY4MzEzODY0NSwic3ViIjoiMzY2YjQwNjUtZjI1ZC00NTNkLWJmY2UtZDczZjA0NjI2MzNjIn0.AAN8IJ1H2Q3ljQiP3oVw5lSrhlxoH7lNdczhqwdMHb0";

  const resp = await instance.post<iCommentResponse>(`/comments/${id}`, data);

  return resp.data;
};
