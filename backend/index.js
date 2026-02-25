const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// DEMO MOD: uvijek uspješno – bez baze, bez provjere
app.post("/auth/register", (req, res) => {
  const { email, username, password } = req.body;

  console.log("Registracija pokušaj (demo):", { email, username });

  // Uvijek uspješno
  res.status(201).json({ message: "Registracija uspješna" });
});

app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;

  console.log("Login pokušaj (demo):", { email });

  // Uvijek uspješno – generiši token
  const token = "demo-token-" + Date.now();
  res.json({ message: "Login successful", token });
});

// Možeš dodati root rutu da vidiš da backend radi
app.get("/", (req, res) => {
  res.send("Backend radi! (demo mod)");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});