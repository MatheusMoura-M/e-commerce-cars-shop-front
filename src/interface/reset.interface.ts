interface IresetProps {
  email: string;
}

interface IresetPropsResponse {
  message: string;
}

interface IresetPropsRequest {
  password: string;
  confirm_password: string;
}

export type { IresetProps, IresetPropsRequest, IresetPropsResponse };
