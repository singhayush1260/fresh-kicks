import * as Yup from "yup";

const emailRegex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const loginSchema = Yup.object({
  Email:Yup.string().matches(emailRegex,'Enter a valid email').required('Field cannot be empty'),
  Password: Yup.string().required("Field cannot be empty"),
});