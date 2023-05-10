import * as yup from "yup";

const formSchemaCarUpdateAd = yup.object().shape({
  brand: yup.string().notRequired(),
  model: yup.string().notRequired(),
  year: yup.string().notRequired(),
  fuel: yup.string().notRequired(),
  km: yup.string().notRequired(),
  color: yup.string().notRequired(),
  price: yup.string().notRequired(),
  fipe: yup.number().notRequired(),
  description: yup.string().notRequired(),
  is_good_price: yup.boolean().notRequired(),
  published: yup.boolean().notRequired(),
  cover_image: yup.string().notRequired(),
  images_1: yup.string().notRequired(),
  images_2: yup.string().notRequired(),
  images_3: yup.string().notRequired(),
  images_4: yup.string().notRequired(),
  images_5: yup.string().notRequired(),
  images_6: yup.string().notRequired(),
});

export default formSchemaCarUpdateAd;
