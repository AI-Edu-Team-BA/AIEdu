const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Privremena "baza" u memoriji (samo za test)
const users = [];

// Register
app.post("/auth/register", (req, res) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    return res.status(400).json({ error: "Sva polja su obavezna" });
  }

  if (users.find(u => u.email === email)) {
    return res.status(409).json({ error: "Email već postoji" });
  }

  users.push({ email, username, password }); // u stvarnosti → hashuj password!
  console.log("Novi korisnik:", username);

  res.status(201).json({ message: "Registracija uspješna" });
});

// Login
app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ error: "Pogrešan email ili lozinka" });
  }

  const token = "demo-token-" + Date.now() + "-" + user.username;
  console.log("Uspješan login:", user.username);

  res.json({ message: "Login successful", token });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});  