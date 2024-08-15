"use client";
import CustomInput from "@/app/Components/CustomInputFields/CustomInput";
import { useUserStore } from "@/app/Hooks/store";
import { registerSchema } from "@/app/Schemas/inputValidation";
import { Form, Formik } from "formik";
import Link from "next/link";
import React from "react";

const submitForm = async (values, actions) => {
  console.log(values);
  useUserStore.getState().register(values);
  actions.resetForm();
};

const Register = () => {
  return (
    <div className="min-h-[90vh]">
      <div className="xl:w-1/3 px-7 xl:px-0 mx-auto mt-16">
        <div>
          <h1 className="text-5xl font-bold text-center">Register</h1>
          <span className="w-20 h-1 bg-orange-300 block mx-auto mt-2"></span>
        </div>

        <div className="mt-10">
          <Formik
            initialValues={{
              name: "",
              email: "",
              address: "",
              phone: "",
              password: "",
            }}
            validationSchema={registerSchema}
            onSubmit={submitForm}
          >
            {(props) => (
              <Form>
                <CustomInput
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                />
                <CustomInput
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />
                <CustomInput
                  label="Address"
                  name="address"
                  type="text"
                  placeholder="Enter your address"
                />
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
                    Register
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <p className="mt-5 text-center">
          Already have an account?{" "}
          <Link
            href="/user/login"
            className="text-orange-500 hover:text-orange-600 duration-300"
          >
            Login here.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
