import * as yup from "yup";

const formSchema = yup.object().shape({
  comment: yup.string().required("Campo obrigatório"),
});

export default formSchema;
