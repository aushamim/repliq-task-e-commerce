import * as yup from "yup";

export const loginSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(/^\d+$/, "Enter a valid phone number")
    .matches(/^[1-9]\d*$/, "Please remove 0 from the beginning of the number")
    .length(10, "Enter a valid phone number")
    .required("Phone no. is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
});
