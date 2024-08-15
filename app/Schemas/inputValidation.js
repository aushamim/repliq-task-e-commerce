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

export const registerSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  address: yup.string().required("Address is required"),
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

export const orderSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  address: yup.string().required("Address is required"),
  phone: yup
    .string()
    .matches(/^\d+$/, "Enter a valid phone number")
    .matches(/^[1-9]\d*$/, "Please remove 0 from the beginning of the number")
    .length(10, "Enter a valid phone number")
    .required("Phone no. is required"),
  notes: yup.string(),
});
