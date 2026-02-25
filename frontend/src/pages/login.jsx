import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
//import App from "../App.css";

const validationSchema = Yup.object({
  email: Yup.string().email("Neispravan email").required("Obavezno polje"),
  password: Yup.string()
    .min(6, "Lozinka mora imati najmanje 6 znakova")
    .required("Obavezno polje"),
});

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
  try {
    console.log("Šaljem login zahtjev...");
    const res = await axios.post("http://localhost:5000/auth/login", values);
    
    console.log("Odgovor od servera:", res.data);
    
    localStorage.setItem("token", res.data.token);
    alert("Login successful!");
    resetForm();
    
    console.log("Navigiram na /home...");
    navigate("/home", { replace: true });
  } catch (err) {
    console.error("Greška pri logovanju:", err);
    alert("Login failed: " + (err.response?.data?.message || "Nepoznata greška"));
  } finally {
    setSubmitting(false);
  }
};

  return (
    <div className="login-container">
      <h2>Prijava</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormInput label="Email" name="email" type="email" />
            <FormInput label="Lozinka" name="password" type="password" />
            <button type="submit" disabled={isSubmitting}>
              Prijavi se
            </button>
          </Form>
        )}
      </Formik>

      <p>
        Još nemaš račun? <Link to="/register">Registruj se</Link>
      </p>
    </div>
  );
};

export default Login;