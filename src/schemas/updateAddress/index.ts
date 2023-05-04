import * as yup from "yup";

const formSchemaUpdateAddress = yup.object().shape({
  state: yup.string().notRequired(),
  city: yup.string().notRequired(),
  street: yup.string().notRequired(),
  number: yup.string().notRequired(),
  zipcode: yup.string().notRequired(),
  complement: yup.string().notRequired(),
});

export default formSchemaUpdateAddress;
