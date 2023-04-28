import * as yup from "yup";

const schemaUpdateUser = yup.object({
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  telephone: yup.string().notRequired(),
  password: yup.string().notRequired(),
  confir_password: yup
    .string()
    .oneOf([yup.ref("password")], "Senha precisa ser igual à senha anterior ")
    .notRequired(),
  cpf: yup.string().notRequired(),
  image_url: yup.string().notRequired(),
  birthdate: yup.string().notRequired(),
  description: yup.string().notRequired(),
  isSeller: yup.boolean().notRequired(),
});

export default schemaUpdateUser;
