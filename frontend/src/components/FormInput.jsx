// src/components/FormInput.jsx
import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import { FiEye, FiEyeOff } from "react-icons/fi";

const FormInput = ({ label, name, type = "text" }) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = type === "password";

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>

      <div className="input-wrapper">
        <Field
          id={name}
          name={name}
          type={isPasswordField && showPassword ? "text" : type}
          autoComplete={
            isPasswordField
              ? name.includes("confirm") || name === "confirmPassword"
                ? "new-password"
                : "current-password"
              : name === "email"
              ? "email"
              : name === "username"
              ? "username"
              : "on"
          }
          className="form-input"
        />

        {isPasswordField && (
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
            title={showPassword ? "Sakrij lozinku" : "Prikaži lozinku"}
            aria-label={showPassword ? "Sakrij lozinku" : "Prikaži lozinku"}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        )}
      </div>

      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
};

export default FormInput;