import React from "react";
import { Formik, Form } from "formik";
import InputField from "./InputField";
import * as Yup from "yup";

const SignUp = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(10, "Must be 10 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string()
      .email("Email is invalid")
      .required("Email is Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is  Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm Password is Required"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values, { resetForm }) => {
        alert(JSON.stringify(values));
        resetForm({ values: "" });
      }}
    >
      {(formik) => (
        <div>
          <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>

          <Form>
            <InputField
              label="First Name"
              name="firstName"
              type="text"
            />
            <InputField
              label="Last Name"
              name="lastName"
              type="text"
            />
            <InputField label="Email" name="email" type="email" />
            <InputField
              label="Password"
              name="password"
              type="password"
            />
            <InputField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <button className="btn btn-dark mt-3" type="submit">
              Submit
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default SignUp;
