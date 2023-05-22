import * as yup from "yup";

export const schema = yup
  .object({
    name: yup.string().required("Please enter venue name"),
    media: yup.array().of(yup.string().url("please enter a valid URL")),
    description: yup.string().required("Must have a description"),
    price: yup
      .number(0)
      .required()
      .positive("It must be a positive number")
      .default(0, "must be a number")
      .typeError("Price must be a number"),

    maxGuests: yup
      .number(0)
      .required()
      .positive("It must be a positive number")
      .typeError("Price must be a number"),
    meta: yup.object().shape({
      wifi: yup.boolean(),
      parking: yup.boolean(),
      breakfast: yup.boolean(),
      pets: yup.boolean(),
    }),
  })
  .required();
