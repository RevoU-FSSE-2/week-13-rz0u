import * as Yup from "yup";

export const initialValues = {
  name: "",
  email: "",
  password: "",
};

export const validationSchema = Yup.object({
  name: Yup.string().required("Please fill in your Full Name"),
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Please fill in your Email Address"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).*$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
    )
    .required("Please fill in your desired Password"),
});
