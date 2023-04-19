import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
});

export default formSchema;
