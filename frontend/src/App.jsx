import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { PrivateRoute } from "./components/PrivateRoute.jsx";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile.jsx";
import Register from "./pages/Register.jsx";
import EditProfile from "./pages/EditProfile.jsx";
import Book from "./pages/Livro.jsx";
import Autor from "./pages/Autor.jsx";
import Create from "./pages/Create.jsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* apenas para users autenticados */}
          <Route element={<PrivateRoute />}>
          </Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/book/:id" element={<Book />} />
          <Route path="/autor/:id" element={<Autor />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<Create />} />
          <Route path="*" element={<p>Página não encontrada...</p>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
