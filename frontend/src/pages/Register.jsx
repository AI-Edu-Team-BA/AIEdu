import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Neispravan email format")
    .required("Obavezno polje"),
  username: Yup.string()
    .min(3, "Korisničko ime mora imati najmanje 3 znaka")
    .required("Obavezno polje"),
  password: Yup.string()
    .min(6, "Lozinka mora imati najmanje 6 znakova")
    .required("Obavezno polje"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Lozinke se ne podudaraju")
    .required("Obavezno polje"),
});

const initialValues = {
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // šaljemo samo potrebna polja (bez confirmPassword)
      const res = await axios.post("http://localhost:5000/auth/register", {
        email: values.email,
        username: values.username,
        password: values.password,
      });

      alert("Registracija uspješna! Možeš se prijaviti.");
      resetForm();
      navigate("/login");
    } catch (err) {
      const errorMsg = err.response?.data?.error || "Greška pri registraciji";
      alert("Registracija nije uspjela: " + errorMsg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="register-container">
      <h2>Registracija</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormInput label="Email" name="email" type="email" />
            <FormInput label="Korisničko ime" name="username" type="text" />
            <FormInput label="Lozinka" name="password" type="password" />
            <FormInput label="Ponovite lozinku" name="confirmPassword" type="password" />
            <button type="submit" disabled={isSubmitting}>
              Registruj se
            </button>
          </Form>
        )}
      </Formik>

      <p>
        Već imaš račun? <Link to="/login">Prijavi se</Link>
      </p>
    </div>
  );
};

export default Register;