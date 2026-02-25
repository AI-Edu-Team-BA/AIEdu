import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>                           {/* ← Router MORA biti najviše */}
      <Routes>
        {/* Javne rute */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Zaštićene rute – sve što je unutra zahtijeva token */}
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          {/* Dodaj ovdje još zaštićenih ruta kasnije */}
          {/* npr. <Route path="/profile" element={<Profile />} /> */}
        </Route>

        {/* Catch-all – ako ništa ne matcha */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;