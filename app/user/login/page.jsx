"use client";
import CustomInput from "@/app/Components/CustomInputFields/CustomInput";
import { loginSchema } from "@/app/Schemas/inputValidation";
import { Form, Formik } from "formik";
import Link from "next/link";
import React from "react";

const submitForm = async (values, actions) => {
  console.log(values);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  actions.resetForm();
};

const Login = () => {
  return (
    <div className="min-h-[90vh]">
      <div className="w-1/3 mx-auto mt-10">
        <h1 className="text-2xl font-semibold text-center">Login</h1>

        <div className="mt-5">
          <Formik
            initialValues={{
              phone: "",
              password: "",
            }}
            validationSchema={loginSchema}
            onSubmit={submitForm}
          >
            {(props) => (
              <Form>
                <CustomInput
                  phone={true}
                  label="Phone"
                  name="phone"
                  type="text"
                  placeholder="Enter your phone no."
                />
                <CustomInput
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                />
                <div className="mt-5">
                  <button
                    type="submit"
                    className="btn w-full"
                    disabled={props.isSubmitting}
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <p className="mt-5 text-center">
          Don&apos;t have an account?{" "}
          <Link
            href="/user/register"
            className="hover:text-orange-500 duration-300"
          >
            Register here.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
