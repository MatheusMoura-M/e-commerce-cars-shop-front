import * as yup from "yup";

const formSchemaCarAd = yup.object().shape({
  brand: yup.string().required("Campo obrigatário"),
  model: yup.string().required("Campo obrigatário"),
  year: yup.string().notRequired(),
  fuel: yup.string().notRequired(),
  km: yup.string().required("Campo obrigatário"),
  color: yup.string().required("Campo obrigatário"),
  price: yup.string().required("Campo obrigatário"),
  fipe: yup.number().notRequired(),
  description: yup.string().required("Campo obrigatário"),
  is_good_price: yup.boolean().notRequired(),
  published: yup.boolean().notRequired(),
  cover_image: yup.string().required("Campo obrigatário"),
  images_1: yup.string().notRequired(),
  images_2: yup.string().notRequired(),
  images_3: yup.string().notRequired(),
  images_4: yup.string().notRequired(),
  images_5: yup.string().notRequired(),
  images_6: yup.string().notRequired(),
});

export default formSchemaCarAd;
