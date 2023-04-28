import * as yup from "yup";

const schemaUpdateUser = yup.object({
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  telephone: yup.string().min(15, "Número de telefone inválido").notRequired(),
  password: yup.string().notRequired(),
  confir_password: yup
    .string()
    .oneOf([yup.ref("password")], "Senha precisa ser igual à senha anterior ")
    .notRequired(),
  cpf: yup.string().min(14, "CPF inválido").notRequired(),
  image_url: yup.string().notRequired(),
  birthdate: yup.string().min(10, "Data de aniversário inválido").notRequired(),
});

export default schemaUpdateUser;
