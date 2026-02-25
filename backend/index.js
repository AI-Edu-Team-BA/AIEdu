app.post("/auth/register", (req, res) => {
  res.json({ message: "Registration successful" });
});

app.post("/auth/login", (req, res) => {
  const token = "demo-token-" + Date.now();
  res.json({ message: "Login successful", token });
});