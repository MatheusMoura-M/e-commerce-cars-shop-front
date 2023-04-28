import * as yup from "yup";

const formSchemaUpdateAddress = yup.object().shape({
  state: yup.string().required("Campo obrigatório"),
  city: yup.string().required("Campo obrigatório"),
  street: yup.string().required("Campo obrigatório"),
  number: yup.string().required("Campo obrigatório"),
  zipcode: yup.string().required("Campo obrigatório"),
  complement: yup.string().required("Campo obrigatório"),
});

export default formSchemaUpdateAddress;
