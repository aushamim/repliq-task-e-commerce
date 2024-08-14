import { useField } from "formik";
import React from "react";

const CustomInput = ({ phone = false, label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text text-base -ml-1">{label}</span>
      </div>
      {phone ? (
        <div className="flex gap-2">
          <input
            className="input input-bordered w-[4.7rem]"
            defaultValue="+880"
            disabled
          />
          <input
            {...field}
            {...props}
            className={`input input-bordered w-full ${
              meta.touched && meta.error ? "input-error" : ""
            }`}
          />
        </div>
      ) : (
        <input
          {...field}
          {...props}
          className={`input input-bordered w-full ${
            meta.touched && meta.error ? "input-error" : ""
          }`}
        />
      )}
      {meta.touched && meta.error ? (
        <div className="label">
          <span className="label-text-alt -ml-0.5 text-red-500">
            {meta.error}
          </span>
        </div>
      ) : (
        ""
      )}
    </label>
  );
};

export default CustomInput;
