import * as yup from "yup"

const schemaRegister = yup.object({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email().required("Campo obrigatório"),
    telephone: yup.string().min(15, "Número de telefone inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
    confir_password: yup.string()
    .oneOf(
      [yup.ref("password")],
      "Senha precisa ser igual à senha anterior "
    ).required("Campo obrigatório"),
    cpf: yup.string().min(14, "CPF inválido").required("Campo obrigatório"),
    image_url: yup.string(),
    birthdate: yup.string().min(10, "Data de aniversário inválido").required("Campo obrigatório"),
    street: yup.string().required("Campo obrigatório"),
    zipcode: yup.string().min(9 ,"CEP inválido").required("Campo obrigatório"),
    state: yup.string().required("Campo obrigatório"),
    city: yup.string().required("Campo obrigatório"),
    number: yup.string().required("Campo obrigatório"),
    complement: yup.string().required(),
    description: yup.string().required("Campo obrigatório")
}).required();

export default schemaRegister