import * as yup from "yup";

const commentSchema = yup.object().shape({
  comment: yup.string().required("Comentário obrigatório"),
});

export default commentSchema;
