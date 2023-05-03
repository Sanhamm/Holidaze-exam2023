import * as yup from "yup";

const emailRegex = "stud.noroff.no";

export const schema = yup
  .object({
    email: yup
      .string()
      .matches(emailRegex, "Must be a stud.noroff.no email")
      .required("Please fill in subject"),
    password: yup
      .string()
      .min(8, "Minimum 8 characters")
      .required("Password is atleast 8 digits"),
  })
  .required();
