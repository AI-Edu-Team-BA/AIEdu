// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";


const Home = () => {
  return (
    <div className="home-page">
      <Navbar />

      <main className="home-content">
        <div className="hero-section">
          <h1>Dobrodošla na AIEdu platformu!</h1>
          <p className="hero-subtitle">
            Uči pametno uz pomoć vještačke inteligencije – personalizovane lekcije, kvizovi i napredak u realnom vremenu.
          </p>

          <div className="quick-actions">
            <h3>Brze akcije</h3>
            <div className="action-cards">
              <div className="action-card">
                <span className="icon">🚀</span>
                <h4>Započni novi kurs</h4>
                <p>Pronađi kurs koji te zanima i kreni odmah</p>
              </div>

              <div className="action-card">
                <span className="icon">⭐</span>
                <h4>Pogledaj preporuke</h4>
                <p>AI ti predlaže šta bi trebalo sljedeće učiti</p>
              </div>

              <div className="action-card">
                <span className="icon">↪️</span>
                <h4>Nastavi gdje si stao</h4>
                <p>Vrati se na lekciju na kojoj si prekinuo/la</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;