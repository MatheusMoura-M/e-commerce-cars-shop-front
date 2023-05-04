export interface iOwner {
  id: string;
}

export interface iCommentRequest {
  comment: string;
}

export interface iCommentResponse extends iCommentRequest {
  id: string;
  users: iOwner;
  cars: iOwner;
}
