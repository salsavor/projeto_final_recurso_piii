import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { PrivateRoute } from "./components/PrivateRoute.jsx";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./pages/Profile.jsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* apenas para users autenticados */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<p>Página não encontrada</p>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
