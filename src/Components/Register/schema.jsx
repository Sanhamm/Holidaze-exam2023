import * as yup from "yup";
const emailRegex = /^[a-zA-Z0-9._%+-]+@(?:stud\.)?noroff\.no$/;
const nameRegex = /^[a-zA-Z0-9_]*$/;
export const schema = yup
  .object({
    name: yup
      .string()
      .min(3, "Minimum 3 characters")
      .matches(
        nameRegex,
        "Can not contain any punctuation symbols apart from _"
      )
      .required("Please enter your name"),
    email: yup
      .string()
      .matches(emailRegex, "Must be a stud.noroff.no email")
      .required("Please fill in your email"),
    avatar: yup.string().url("must be an Url or nothing"),
    password: yup
      .string()
      .min(8, "Minimum 8 characters")
      .required("Need to be atleast 8 digits"),
    venueManager: yup.boolean(),
  })
  .required();
