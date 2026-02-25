// src/components/FormInput.jsx
import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import { FiEye, FiEyeOff } from "react-icons/fi"; // ili bilo koja druga ikonica

const FormInput = ({ label, name, type = "text" }) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = type === "password";

  return (
    <div className="form-group" style={{ position: "relative" }}>
      <label htmlFor={name}>{label}</label>

      <div style={{ position: "relative" }}>
        <Field
          id={name}
          name={name}
          type={isPasswordField && showPassword ? "text" : type}
          autoComplete={
            isPasswordField
              ? name.includes("confirm") ? "new-password" : "current-password"
              : name === "email" ? "email" : "username"
          }
          style={{ width: "100%", paddingRight: isPasswordField ? "40px" : "12px" }}
        />

        {isPasswordField && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "1.1rem",
              color: "#666",
            }}
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