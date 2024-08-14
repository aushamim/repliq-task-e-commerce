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
      <div className="xl:w-1/3 px-7 xl:px-0 mx-auto mt-16">
        <div>
          <h1 className="text-5xl font-bold text-center">Login</h1>
          <span className="w-20 h-1 bg-orange-300 block mx-auto mt-2"></span>
        </div>

        <div className="mt-10">
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
                    Login
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
