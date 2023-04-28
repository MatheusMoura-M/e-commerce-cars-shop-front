import * as yup from "yup";

const formSchemaCarAd = yup.object().shape({
  brand: yup.string().required("Campo obrigatório"),
  model: yup.string().required("Campo obrigatório"),
  year: yup.string().required("Campo obrigatório"),
  fuel: yup.string().required("Campo obrigatório"),
  km: yup.number().required("Campo obrigatório"),
  color: yup.string().required("Campo obrigatório"),
  price: yup.string().required("Campo obrigatório"),
  fipe: yup.number().required("Campo obrigatório"),
  description: yup.string().required("Campo obrigatório"),
  is_good_price: yup.boolean().required("Campo obrigatório"),
  published: yup.boolean().required("Campo obrigatório"),
  cover_image: yup.string().required("Campo obrigatório"),
  images_1: yup.string().notRequired(),
  images_2: yup.string().notRequired(),
  images_3: yup.string().notRequired(),
  images_4: yup.string().notRequired(),
  images_5: yup.string().notRequired(),
  images_6: yup.string().notRequired(),
});

export default formSchemaCarAd;
