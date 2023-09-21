import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface initialValues {
  email: "";
  password: "";
}

const Login = () => {
  const [info, setInfo] = useState<initialValues>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  return (
    <>
      <Formik
        initialValues={info}
        validationSchema={Yup.object({
          emailAddress: Yup.string()
            .email("Invalid Email Address")
            .required("Please fill in your Email Address"),
          password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .matches(
              /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).*$/,
              "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
            )
            .required("Please fill in your desired Password"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const areAnyValuesEmpty = Object.values(values).some(
            (value) => value === ""
          );
          if (areAnyValuesEmpty) {
            setSubmitting(false);
          } else {
            setInfo({ ...info, ...values });
          }
        }}
      >
        <Form>
          <Field
            as={TextField}
            label="Email"
            name="email"
            placeholder="john123@email.com"
            helpertext={ErrorMessage}
          />
          <Field
            as={TextField}
            label="Password"
            type="password"
            name="password"
            helpertext={ErrorMessage}
          />
          <Button variant="contained" type="submit">
            Login
          </Button>
        </Form>
      </Formik>
      <Button variant="outlined" onClick={() => navigate("/register")}>
        Register
      </Button>
    </>
  );
};

export default Login;
