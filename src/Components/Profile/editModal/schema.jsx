import * as yup from "yup";
export const schema = yup
  .object({
    avatar: yup.string().url("must be an Url or nothing"),
  })
  .required();
