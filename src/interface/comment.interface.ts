interface iOwner {
  id: string;
  name: string;
  image_url: string;
}

interface iCommentRequest {
  comment: string;
}

interface iCommentResponse extends iCommentRequest {
  id: string;
  users: iOwner;
  cars: iOwner;
}

interface iCommentsListResponse {
  id: string;
  comment: string;
  createdAt: Date;
  users: {
    id: string;
    birthdate: string;
    isSeller: boolean;
    image_url: string;
    description: string;
    cpf: string;
    telephone: string;
    email: string;
    name: string;
    isActive: boolean;
    reset_token: null | string;
  };
}

export type {
  iCommentRequest,
  iCommentResponse,
  iCommentsListResponse,
  iOwner,
};
