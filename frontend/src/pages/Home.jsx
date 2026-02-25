import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#f0f4f8" }}>
      <Navbar />

      <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <h1>Dobrodošao na AIEdu platformu!</h1>
        <p>
          Ovdje će kasnije biti tvoji kursevi, AI lekcije, progres, kvizovi...
        </p>

        <div style={{ marginTop: "2rem" }}>
          <h3>Brze akcije</h3>
          <ul>
            <li>→ Započni novi kurs</li>
            <li>→ Pogledaj preporuke</li>
            <li>→ Nastavi gdje si stao</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;