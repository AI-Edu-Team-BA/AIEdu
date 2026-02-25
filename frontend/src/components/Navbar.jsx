import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav
      style={{
        background: "#6c63ff",
        color: "white",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link to="/home" style={{ color: "white", fontSize: "1.4rem", fontWeight: "bold", textDecoration: "none" }}>
        AIEdu
      </Link>

      <div>
        {token ? (
          <>
            <Link to="/home" style={{ color: "white", marginRight: "1.5rem", textDecoration: "none" }}>
              Početna
            </Link>
            <button
              onClick={handleLogout}
              style={{
                background: "none",
                border: "1px solid white",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Odjavi se
            </button>
          </>
        ) : (
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
            Prijava
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;